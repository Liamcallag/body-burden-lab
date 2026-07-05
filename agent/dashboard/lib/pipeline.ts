/**
 * pipeline.ts — Phases 1, 2, and 3 ported into the dashboard for use in API routes.
 * Mirrors the logic in agent/src/ without the CLI wrappers or dotenv dependency.
 */

import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@supabase/supabase-js'

// ── Supabase (server-side, uses NEXT_PUBLIC_ vars which are also available server-side) ──
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const BRAVE_KEY = process.env.BRAVE_SEARCH_API_KEY

// ── Types ─────────────────────────────────────────────────────────────────────

interface BraveResult {
  url: string
  title: string
  description: string
}

interface BacklinkCandidate {
  topic: string
  url: string
  page_title: string
  why_relevant: string
  suggested_angle: string
  status: string
  date_found: string
  contact_email: string
  contact_name: string
  contact_source: string
  contact_status: string
  outreach_status: string
  email_draft: string
  notes: string
}

// ── Phase 1: Find targets ─────────────────────────────────────────────────────

async function braveSearch(query: string, count = 10): Promise<BraveResult[]> {
  if (!BRAVE_KEY) throw new Error('BRAVE_SEARCH_API_KEY is not set')
  const params = new URLSearchParams({ q: query, count: count.toString(), search_lang: 'en' })
  const res = await fetch(`https://api.search.brave.com/res/v1/web/search?${params}`, {
    headers: {
      Accept: 'application/json',
      'Accept-Encoding': 'gzip',
      'X-Subscription-Token': BRAVE_KEY,
    },
  })
  if (!res.ok) throw new Error(`Brave Search ${res.status}: ${await res.text()}`)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = await res.json() as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data.web?.results ?? []).map((r: any) => ({
    url: r.url as string,
    title: r.title as string,
    description: (r.description ?? '') as string,
  }))
}

const SYSTEM_PROMPT = `You are an SEO research assistant finding high-quality backlink opportunities for bodyburdenlab.com — a microplastics exposure calculator with a research-backed blog and methodology page.

Your task: for a given topic, search the web and identify pages that are genuinely worth reaching out to for a backlink.

PRIORITY ORDER — focus your searches in this order:

1. RESOURCE/TOOLS PAGES (highest priority — ~60% of your searches)
   These pages already link out to tools and resources. Adding a calculator to an existing list is a low-friction ask for the editor.
   Look for: pages titled "Resources", "Tools", "Useful Links", "Further Reading" on environmental/health sites

2. MID-TIER EDITORIAL SITES (secondary — ~40% of your searches)
   Smaller blogs, independent journalists, educator sites, and advocacy groups that actively publish content.
   Good signs: recently updated, accepts guest posts or tips, run by individuals or small teams

QUALITY BAR — only include pages that meet ALL of:
• Legitimate site with real authors or editorial contact
• Topically relevant to microplastics, plastic pollution, or environmental/consumer health
• Has a genuine reason to link out to a free, research-backed exposure calculator
• Realistic outreach prospect — smaller/mid-size sites are preferred

ACTIVELY REJECT:
• Large institutions with strict editorial policies
• Link farms, web directories, or sites that exist to sell links
• Sites with no named authors or editorial contact
• Direct competitors (other microplastics tools/calculators)
• Social media profiles, Reddit, forums`

async function findBacklinkTargets(topic: string, maxSearches = 5): Promise<BacklinkCandidate[]> {
  const messages: Anthropic.MessageParam[] = [
    {
      role: 'user',
      content: `Find high-quality backlink candidates for this topic: "${topic}"

Use up to ${maxSearches} searches. Vary your queries strategically.

When you have enough candidates, return ONLY a JSON code block:

\`\`\`json
[
  {
    "url": "https://example.com/specific-page",
    "page_title": "Actual title of the page",
    "why_relevant": "One sentence: why is this a good backlink target?",
    "suggested_angle": "Brief pitch idea"
  }
]
\`\`\`

Only include sites that pass your quality bar. 5 excellent results beats 20 mediocre ones.`,
    },
  ]

  const tools: Anthropic.Tool[] = [
    {
      name: 'web_search',
      description: 'Search the web for backlink candidates.',
      input_schema: {
        type: 'object' as const,
        properties: { query: { type: 'string', description: 'The search query' } },
        required: ['query'],
      },
    },
  ]

  let searchCount = 0

  while (true) {
    const response = await anthropic.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      tools,
      messages,
    })

    messages.push({ role: 'assistant', content: response.content })

    if (response.stop_reason === 'end_turn') {
      const text = response.content
        .filter((b): b is Anthropic.TextBlock => b.type === 'text')
        .map(b => b.text)
        .join('')
      return parsePhase1Results(text, topic)
    }

    if (response.stop_reason === 'tool_use') {
      const toolResults: Anthropic.ToolResultBlockParam[] = []

      for (const block of response.content) {
        if (block.type !== 'tool_use') continue
        const { query } = block.input as { query: string }

        if (searchCount >= maxSearches) {
          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            content: 'Search limit reached. Finalize results now.',
          })
          continue
        }

        searchCount++
        try {
          const results = await braveSearch(query, 10)
          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            content: JSON.stringify(results, null, 2),
          })
        } catch (err) {
          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            is_error: true,
            content: `Search error: ${err instanceof Error ? err.message : err}`,
          })
        }
      }

      messages.push({ role: 'user', content: toolResults })
    }
  }
}

function parsePhase1Results(text: string, topic: string): BacklinkCandidate[] {
  const codeBlockMatch = text.match(/```json\s*([\s\S]*?)\s*```/)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const raw: any[] = codeBlockMatch
    ? JSON.parse(codeBlockMatch[1])
    : (() => {
        const arrayMatch = text.match(/\[\s*\{[\s\S]*?\}\s*\]/)
        if (!arrayMatch) throw new Error('Could not parse Phase 1 results')
        return JSON.parse(arrayMatch[0])
      })()

  const today = new Date().toISOString().split('T')[0]
  return raw.map(r => ({
    topic,
    url: r.url ?? '',
    page_title: r.page_title ?? '',
    why_relevant: r.why_relevant ?? '',
    suggested_angle: r.suggested_angle ?? '',
    status: 'new',
    date_found: today,
    contact_email: '',
    contact_name: '',
    contact_source: '',
    contact_status: '',
    outreach_status: 'not_contacted',
    email_draft: '',
    notes: '',
  }))
}

// ── Phase 2: Find contacts ────────────────────────────────────────────────────

const CONTACT_SUBPAGES = ['/contact', '/about', '/contact-us', '/write-for-us', '/team']
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
const IGNORED_DOMAINS = new Set(['example.com', 'sentry.io', 'w3.org', 'schema.org', 'google.com', 'googleapis.com', 'cloudflare.com', 'wordpress.com', 'wix.com', 'squarespace.com', 'amazonaws.com', 'jsdelivr.net', 'gstatic.com', 'gravatar.com', 'mailchimp.com', 'sendgrid.net'])
const VALID_TLDS = new Set(['com', 'org', 'net', 'edu', 'gov', 'io', 'co', 'uk', 'us', 'ca', 'au', 'de', 'fr', 'nl', 'se', 'no', 'dk', 'fi', 'ch', 'info', 'me', 'app', 'dev', 'news', 'media', 'health', 'eco', 'earth', 'green', 'foundation', 'network'])

async function fetchPage(url: string) {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)
    const response = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,*/*;q=0.8' },
      signal: controller.signal,
      redirect: 'follow',
    })
    clearTimeout(timeout)
    if (!response.ok) return { ok: false, html: '', error: `HTTP ${response.status}` }
    const html = await response.text()
    return { ok: true, html }
  } catch (err) {
    return { ok: false, html: '', error: err instanceof Error ? err.message : String(err) }
  }
}

function extractEmails(html: string): string[] {
  const found = new Set<string>()
  const mailtoRegex = /href=["']mailto:([^"'?\s]+)/gi
  let match
  while ((match = mailtoRegex.exec(html)) !== null) {
    const email = match[1].toLowerCase().trim()
    if (isValidEmail(email)) found.add(email)
  }
  return Array.from(found)
}

function isValidEmail(email: string): boolean {
  if (!email.includes('@') || !email.includes('.')) return false
  const [localPart, domain] = email.split('@')
  if (!domain || !localPart) return false
  if (IGNORED_DOMAINS.has(domain)) return false
  if (email.includes('.png') || email.includes('.jpg') || email.includes('.svg')) return false
  const tld = domain.split('.').pop() ?? ''
  if (!VALID_TLDS.has(tld)) return false
  if (localPart.length < 2) return false
  if (/[{}[\]():<>]/.test(localPart)) return false
  return true
}

function subpageUrl(baseUrl: string, path: string): string {
  try {
    const { origin } = new URL(baseUrl)
    return `${origin}${path}`
  } catch { return baseUrl }
}

async function findContact(candidate: BacklinkCandidate) {
  const mainPage = await fetchPage(candidate.url)
  if (!mainPage.ok) return { contact_email: '', contact_name: '', contact_source: '', contact_status: 'could_not_access' }

  const mainEmails = extractEmails(mainPage.html)
  if (mainEmails.length > 0) return { contact_email: mainEmails[0], contact_name: '', contact_source: 'main page', contact_status: 'email_found' }

  for (const path of CONTACT_SUBPAGES) {
    const sub = await fetchPage(subpageUrl(candidate.url, path))
    if (!sub.ok) continue
    const emails = extractEmails(sub.html)
    if (emails.length > 0) return { contact_email: emails[0], contact_name: '', contact_source: path, contact_status: 'email_found' }
  }

  // Layer 3: ask Claude
  const htmlSnippet = mainPage.html.slice(0, 8_000)
  const response = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 256,
    messages: [{
      role: 'user',
      content: `Find the contact email on this page: ${candidate.url}\n\nHTML:\n${htmlSnippet}\n\nReturn JSON only: {"email":"","name":"","source":"","status":"email_found"|"contact_form_only"|"not_found"}`,
    }],
  })

  const text = response.content.filter((b): b is Anthropic.TextBlock => b.type === 'text').map(b => b.text).join('')
  try {
    const parsed = JSON.parse(text.replace(/```json\s*/g, '').replace(/```/g, '').trim())
    return { contact_email: parsed.email ?? '', contact_name: parsed.name ?? '', contact_source: parsed.source ? `claude: ${parsed.source}` : 'claude', contact_status: parsed.status ?? 'not_found' }
  } catch {
    return { contact_email: '', contact_name: '', contact_source: '', contact_status: 'not_found' }
  }
}

// ── Phase 3: Draft emails ─────────────────────────────────────────────────────

async function draftEmail(candidate: BacklinkCandidate): Promise<string> {
  let siteName = 'team'
  try {
    const host = new URL(candidate.url).hostname.replace('www.', '')
    siteName = host.split('.')[0]
    siteName = siteName.charAt(0).toUpperCase() + siteName.slice(1)
  } catch { /* keep default */ }

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 512,
    messages: [{
      role: 'user',
      content: `You are writing a backlink outreach email on behalf of Liam Murphy at bodyburdenlab.com.

ABOUT BODY BURDEN LAB:
A free calculator that helps everyday people estimate their personal microplastics exposure from food, water, and air — grounded in peer-reviewed research.

TARGET PAGE:
- Site name: ${siteName}
- URL: ${candidate.url}
- Page title: ${candidate.page_title}
- Why it's a good target: ${candidate.why_relevant}
- Suggested angle: ${candidate.suggested_angle}

STRUCTURE — 4 short paragraphs:
1. Opening: reference the specific page title
2. What Body Burden Lab is: "Body Burden Lab (bodyburdenlab.com) is a free calculator that helps everyday people estimate their personal microplastics exposure from food, water, and air — grounded in peer-reviewed research and built for public understanding rather than academic use."
3. Why it fits: one specific sentence connecting their page to the tool
4. The ask: "Would you be open to adding it?"

RULES:
- First word must be "Hi" — greeting format: "Hi ${siteName} team,"
- Never use "project" — use "tool" or "resource"
- Max 4 sentences in body
- No filler phrases
- No subject line

Sign off as:
Liam Murphy
bodyburdenlab.com

Return ONLY the email body and sign-off.`,
    }],
  })

  return response.content.filter((b): b is Anthropic.TextBlock => b.type === 'text').map(b => b.text).join('').trim()
}

// ── Supabase helpers ──────────────────────────────────────────────────────────

async function insertCandidate(c: BacklinkCandidate): Promise<boolean> {
  const { data } = await supabase.from('backlink_candidates').select('id').eq('topic', c.topic).eq('url', c.url).maybeSingle()
  if (data) return false // already exists

  const { error } = await supabase.from('backlink_candidates').insert({
    topic: c.topic, url: c.url, page_title: c.page_title, why_relevant: c.why_relevant,
    suggested_angle: c.suggested_angle, status: c.status, date_found: c.date_found,
    contact_email: c.contact_email || null, contact_name: c.contact_name || null,
    contact_source: c.contact_source || null, contact_status: c.contact_status || null,
    outreach_status: c.outreach_status || 'not_contacted', email_draft: c.email_draft || null,
    notes: c.notes || null,
  })
  if (error) throw new Error(`Insert error: ${error.message}`)
  return true
}

async function updateContactInDb(url: string, contact: { contact_email: string; contact_name: string; contact_source: string; contact_status: string }) {
  const { error } = await supabase.from('backlink_candidates').update(contact).eq('url', url)
  if (error) throw new Error(`Update contact error: ${error.message}`)
}

async function updateDraftInDb(url: string, email_draft: string) {
  const { error } = await supabase.from('backlink_candidates').update({ email_draft, outreach_status: 'drafted' }).eq('url', url)
  if (error) throw new Error(`Update draft error: ${error.message}`)
}

// ── Public: run all phases ────────────────────────────────────────────────────

export interface PipelineResult {
  targetsFound: number
  targetsAdded: number
  contactsFound: number
  drafted: number
}

export async function runPipeline(topic: string): Promise<PipelineResult> {
  // Phase 1
  const candidates = await findBacklinkTargets(topic, 5)
  let targetsAdded = 0
  for (const c of candidates) {
    const inserted = await insertCandidate(c)
    if (inserted) targetsAdded++
  }

  // Phase 2 — find contacts for newly inserted candidates
  const newCandidates = candidates.slice(0, targetsAdded || candidates.length)
  let contactsFound = 0
  for (const c of newCandidates) {
    const contact = await findContact(c)
    await updateContactInDb(c.url, contact)
    if (contact.contact_status === 'email_found') contactsFound++
    await new Promise(r => setTimeout(r, 1000)) // polite delay
  }

  // Phase 3 — draft emails for candidates with email found
  const eligible = newCandidates.filter((_, i) => {
    // We update contact info in-place, need to check what we just found
    return true // we'll filter inside the loop
  })

  let drafted = 0
  for (const c of newCandidates) {
    const { data } = await supabase.from('backlink_candidates').select('contact_status, email_draft').eq('url', c.url).maybeSingle()
    if (data?.contact_status !== 'email_found') continue
    if (data?.email_draft) continue // already drafted

    const draft = await draftEmail(c)
    await updateDraftInDb(c.url, draft)
    drafted++
    await new Promise(r => setTimeout(r, 500))
  }

  return { targetsFound: candidates.length, targetsAdded, contactsFound, drafted }
}
