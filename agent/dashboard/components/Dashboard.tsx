'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Candidate } from '@/lib/supabase'
import { FunnelSummary } from './FunnelSummary'
import { Filters } from './Filters'
import { TargetsTable } from './TargetsTable'

interface Props {
  candidates: Candidate[]
}

type RunState = 'idle' | 'running' | 'done' | 'error'

const STATUS_MESSAGES = [
  'Searching for targets...',
  'Evaluating candidates...',
  'Finding contact emails...',
  'Drafting outreach emails...',
  'Saving to database...',
]

const ANGLES = [
  { label: 'Health & Resource Pages', topic: 'microplastics health resources tools useful links site:org OR site:edu' },
  { label: 'Student & Education', topic: 'microplastics plastic pollution student education classroom resources' },
  { label: 'Environmental Advocacy', topic: 'PFAS microplastics awareness campaign environmental advocacy blog' },
  { label: 'Consumer & Lifestyle', topic: 'microplastics consumer guide reduce plastic exposure everyday tips' },
  { label: 'Science Communication', topic: 'microplastics science communication public engagement research explainer' },
]

export function Dashboard({ candidates }: Props) {
  const router = useRouter()
  const [contactFilter, setContactFilter] = useState('')
  const [outreachFilter, setOutreachFilter] = useState('')
  const [selectedAngle, setSelectedAngle] = useState(0)
  const [runState, setRunState] = useState<RunState>('idle')
  const [statusIndex, setStatusIndex] = useState(0)
  const [result, setResult] = useState<{ targetsFound: number; contactsFound: number; drafted: number } | null>(null)
  const [error, setError] = useState('')

  const filtered = candidates.filter(c => {
    if (contactFilter && c.contact_status !== contactFilter) return false
    if (outreachFilter && c.outreach_status !== outreachFilter) return false
    return true
  })

  async function handleRun() {
    if (runState === 'running') return

    setRunState('running')
    setResult(null)
    setError('')
    setStatusIndex(0)

    const interval = setInterval(() => {
      setStatusIndex(i => Math.min(i + 1, STATUS_MESSAGES.length - 1))
    }, 12_000)

    try {
      const res = await fetch('/api/run-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: ANGLES[selectedAngle].topic }),
      })

      clearInterval(interval)

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? `Server error ${res.status}`)
      }

      const data = await res.json()
      setResult(data)
      setRunState('done')
      router.refresh()
    } catch (err) {
      clearInterval(interval)
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setRunState('error')
    }
  }

  const isRunning = runState === 'running'

  return (
    <div>

      {/* Run button */}
      <div style={{ borderBottom: '1px solid #1A1A1A', padding: '40px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#444', marginBottom: 6 }}>
            bodyburdenlab.com
          </p>
          {isRunning && (
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#45B8A8' }}>
              {STATUS_MESSAGES[statusIndex]}
            </p>
          )}
          {runState === 'done' && result && (
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#45B8A8' }}>
              ✓ {result.targetsFound} targets · {result.contactsFound} emails · {result.drafted} drafts ready
            </p>
          )}
          {runState === 'error' && (
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#dc2626' }}>
              ✗ {error}
            </p>
          )}
          {runState === 'idle' && (
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333' }}>
              Find new backlink targets
            </p>
          )}
        </div>

        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedAngle}
              onChange={e => setSelectedAngle(Number(e.target.value))}
              disabled={isRunning}
              style={{
                background: 'transparent',
                border: '1px solid #333',
                borderRight: 'none',
                borderRadius: 0,
                padding: '14px 32px 14px 16px',
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: isRunning ? '#444' : '#888',
                fontFamily: 'inherit',
                outline: 'none',
                cursor: isRunning ? 'not-allowed' : 'pointer',
                appearance: 'none',
              }}
            >
              {ANGLES.map((a, i) => (
                <option key={i} value={i}>{a.label}</option>
              ))}
            </select>
            <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', color: '#444', fontSize: 8, pointerEvents: 'none' }}>▾</span>
          </div>

          <button
            onClick={handleRun}
            disabled={isRunning}
          style={{
            background: isRunning ? '#1A1A1A' : '#45B8A8',
            color: isRunning ? '#45B8A8' : '#000000',
            border: `1px solid ${isRunning ? '#333' : '#45B8A8'}`,
            borderRadius: 0,
            padding: '14px 28px',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: isRunning ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
            transition: 'all 0.15s',
            minWidth: 160,
          }}
          onMouseEnter={e => { if (!isRunning) { e.currentTarget.style.background = '#2D6A7F'; e.currentTarget.style.borderColor = '#2D6A7F' } }}
          onMouseLeave={e => { if (!isRunning) { e.currentTarget.style.background = '#45B8A8'; e.currentTarget.style.borderColor = '#45B8A8' } }}
        >
          {isRunning ? '⬤ Running...' : 'Find New Targets ↗'}
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <FunnelSummary candidates={candidates} />

      {/* Table header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 0 16px',
        borderBottom: '1px solid #1A1A1A',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#444' }}>02</p>
          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFFFF' }}>
            {filtered.length === candidates.length
              ? `All Targets (${candidates.length})`
              : `${filtered.length} of ${candidates.length} targets`}
          </p>
        </div>
        <Filters
          contactFilter={contactFilter}
          outreachFilter={outreachFilter}
          onContactChange={setContactFilter}
          onOutreachChange={setOutreachFilter}
        />
      </div>

      <TargetsTable candidates={filtered} />
    </div>
  )
}
