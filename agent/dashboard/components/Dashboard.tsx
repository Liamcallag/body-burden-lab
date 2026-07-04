'use client'

import { useState } from 'react'
import { Candidate } from '@/lib/supabase'
import { FunnelSummary } from './FunnelSummary'
import { Filters } from './Filters'
import { TargetsTable } from './TargetsTable'

interface Props {
  candidates: Candidate[]
}

export function Dashboard({ candidates }: Props) {
  const [contactFilter, setContactFilter] = useState('')
  const [outreachFilter, setOutreachFilter] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = candidates.filter(c => {
    if (contactFilter && c.contact_status !== contactFilter) return false
    if (outreachFilter && c.outreach_status !== outreachFilter) return false
    return true
  })

  return (
    <div>

      {/* Search / primary action */}
      <div style={{
        marginBottom: 48,
        padding: '28px 32px',
        background: '#242426',
        border: '1px solid #3A3A3C',
        borderRadius: 10,
      }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8E8E93', marginBottom: 12 }}>
          Find backlink opportunities for:
        </p>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="e.g. bodyburdenlab.com"
            style={{
              flex: 1,
              background: '#1C1C1E',
              border: '1px solid #4A4A4C',
              borderRadius: 6,
              padding: '12px 16px',
              fontSize: 15,
              color: '#E5E5E7',
              outline: 'none',
              fontFamily: 'inherit',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#2D6A7F' }}
            onBlur={e => { e.currentTarget.style.borderColor = '#4A4A4C' }}
          />
          <button
            style={{
              background: '#2D6A7F',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 6,
              padding: '12px 22px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: 'inherit',
              letterSpacing: '0.01em',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#245b6d' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2D6A7F' }}
          >
            Run Agent →
          </button>
        </div>
      </div>

      <FunnelSummary candidates={candidates} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 12, color: '#8E8E93' }}>
          {filtered.length === candidates.length
            ? `${candidates.length} targets`
            : `${filtered.length} of ${candidates.length} targets`}
        </span>
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
