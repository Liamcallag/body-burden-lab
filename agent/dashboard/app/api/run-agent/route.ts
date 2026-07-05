import { NextRequest, NextResponse } from 'next/server'
import { runPipeline } from '@/lib/pipeline'

export async function POST(req: NextRequest) {
  const { topic } = await req.json()

  if (!topic?.trim()) {
    return NextResponse.json({ error: 'Topic is required' }, { status: 400 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY is not set' }, { status: 500 })
  }

  if (!process.env.BRAVE_SEARCH_API_KEY) {
    return NextResponse.json({ error: 'BRAVE_SEARCH_API_KEY is not set' }, { status: 500 })
  }

  const result = await runPipeline(topic.trim())
  return NextResponse.json(result)
}
