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

      {/* Search — primary action */}
      <div style={{ borderBottom: '1px solid #1A1A1A', padding: '40px 0' }}>
        <p style={{
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#444',
          marginBottom: 16,
        }}>
          Find backlink opportunities for:
        </p>
        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="e.g. bodyburdenlab.com"
            style={{
              flex: 1,
              background: 'transparent',
              border: '1px solid #333',
              borderRight: 'none',
              borderRadius: 0,
              padding: '14px 20px',
              fontSize: 14,
              color: '#FFFFFF',
              outline: 'none',
              fontFamily: 'inherit',
              letterSpacing: '0.02em',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#45B8A8' }}
            onBlur={e => { e.currentTarget.style.borderColor = '#333' }}
          />
          <button
            style={{
              background: '#45B8A8',
              color: '#000000',
              border: '1px solid #45B8A8',
              borderRadius: 0,
              padding: '14px 28px',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2D6A7F'; e.currentTarget.style.borderColor = '#2D6A7F' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#45B8A8'; e.currentTarget.style.borderColor = '#45B8A8' }}
          >
            Run Agent ↗
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <FunnelSummary candidates={candidates} />

      {/* Table header row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 0 16px',
        borderBottom: '1px solid #1A1A1A',
        marginBottom: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#444' }}>
            02
          </p>
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
