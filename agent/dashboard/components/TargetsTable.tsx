'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Candidate } from '@/lib/supabase'
import { StatusBadge } from './StatusBadge'

const OUTREACH_STATUSES = ['not_contacted', 'drafted', 'sent', 'replied', 'linked']

const OUTREACH_COLORS: Record<string, string> = {
  not_contacted: '#6B7280',
  drafted:       '#45B8A8',
  sent:          '#2D6A7F',
  replied:       '#a78bfa',
  linked:        '#22c55e',
}

interface Props {
  candidates: Candidate[]
}

export function TargetsTable({ candidates }: Props) {
  const router = useRouter()
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [expandedWhyId, setExpandedWhyId] = useState<number | null>(null)
  const [updatingId, setUpdatingId] = useState<number | null>(null)
  const [localStatuses, setLocalStatuses] = useState<Record<number, string>>({})

  async function handleStatusChange(id: number, status: string) {
    setUpdatingId(id)
    setLocalStatuses(prev => ({ ...prev, [id]: status }))
    await fetch('/api/update-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, outreach_status: status }),
    })
    setUpdatingId(null)
    router.refresh()
  }

  if (candidates.length === 0) {
    return (
      <p style={{
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#333',
        padding: '60px 0',
        textAlign: 'center',
      }}>
        No targets match the current filters.
      </p>
    )
  }

  return (
    <div>
      {/* Column headers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 2.5fr 1.6fr 1fr 1fr 60px',
        padding: '10px 0',
        borderBottom: '1px solid #1A1A1A',
      }}>
        {['Page', 'Why Relevant', 'Contact', 'Status', 'Outreach', ''].map((h, i) => (
          <span key={i} style={{
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#444',
            paddingRight: 16,
          }}>
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {candidates.map((c, i) => {
        const isExpanded = expandedId === c.id
        const isWhyExpanded = expandedWhyId === c.id
        const hasDraft = Boolean(c.email_draft)
        // First row with a draft gets teal highlight treatment
        const isFeatured = hasDraft && i === 0

        return (
          <React.Fragment key={c.id}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 2.5fr 1.6fr 1fr 1fr 60px',
                padding: '20px 0',
                borderBottom: '1px solid #1A1A1A',
                background: isFeatured ? 'rgba(69,184,168,0.06)' : 'transparent',
                borderLeft: isFeatured ? '2px solid #45B8A8' : '2px solid transparent',
                paddingLeft: isFeatured ? 14 : 0,
                transition: 'background 0.1s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                if (!isFeatured) e.currentTarget.style.background = '#080808'
              }}
              onMouseLeave={e => {
                if (!isFeatured) e.currentTarget.style.background = 'transparent'
              }}
            >
              {/* Page */}
              <div style={{ paddingRight: 20 }}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    display: 'block',
                    lineHeight: 1.35,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#45B8A8' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF' }}
                >
                  {c.page_title}
                </a>
                <span style={{
                  fontSize: 9,
                  letterSpacing: '0.08em',
                  color: '#444',
                  marginTop: 4,
                  display: 'block',
                }}>
                  {(() => { try { return new URL(c.url).hostname.replace('www.', '') } catch { return c.url } })()}
                </span>
              </div>

              {/* Why relevant */}
              <div style={{ paddingRight: 20 }}>
                <p style={{
                  fontSize: 12,
                  color: '#777',
                  lineHeight: 1.55,
                  margin: 0,
                  ...(isWhyExpanded ? {} : {
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  } as React.CSSProperties),
                }}>
                  {c.why_relevant}
                </p>
                <button
                  onClick={() => setExpandedWhyId(isWhyExpanded ? null : c.id)}
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#45B8A8',
                    background: 'none',
                    border: 'none',
                    padding: '4px 0 0',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'inherit',
                  }}
                >
                  {isWhyExpanded ? 'Less ↑' : 'More ↓'}
                </button>
              </div>

              {/* Contact email */}
              <div style={{ paddingRight: 20 }}>
                <span style={{ fontSize: 11, color: '#555', wordBreak: 'break-all', lineHeight: 1.4 }}>
                  {c.contact_email ?? <span style={{ color: '#2A2A2A', letterSpacing: '0.1em' }}>—</span>}
                </span>
              </div>

              {/* Contact status */}
              <div>
                <StatusBadge status={c.contact_status} type="contact" />
              </div>

              {/* Outreach status — editable */}
              <div>
                {(() => {
                  const current = localStatuses[c.id] ?? c.outreach_status ?? 'not_contacted'
                  const color = OUTREACH_COLORS[current] ?? '#6B7280'
                  const isUpdating = updatingId === c.id
                  return (
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <select
                        value={current}
                        onChange={e => handleStatusChange(c.id, e.target.value)}
                        disabled={isUpdating}
                        style={{
                          background: 'transparent',
                          border: `1px solid ${color}`,
                          borderRadius: 0,
                          color,
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding: '4px 20px 4px 8px',
                          fontFamily: 'inherit',
                          outline: 'none',
                          cursor: isUpdating ? 'not-allowed' : 'pointer',
                          appearance: 'none',
                          opacity: isUpdating ? 0.5 : 1,
                        }}
                      >
                        {OUTREACH_STATUSES.map(s => (
                          <option key={s} value={s} style={{ background: '#1A1A1A', color: '#fff', textTransform: 'uppercase' }}>
                            {s.replace(/_/g, ' ')}
                          </option>
                        ))}
                      </select>
                      <span style={{ position: 'absolute', right: 5, top: '50%', transform: 'translateY(-50%)', color, fontSize: 7, pointerEvents: 'none' }}>▾</span>
                    </div>
                  )
                })()}
              </div>

              {/* Draft toggle */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                {hasDraft && (
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : c.id)}
                    style={{
                      fontSize: 16,
                      color: '#45B8A8',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      lineHeight: 1,
                      fontFamily: 'inherit',
                      transition: 'opacity 0.1s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.6' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                    title={isExpanded ? 'Hide draft' : 'View draft'}
                  >
                    {isExpanded ? '↑' : '↗'}
                  </button>
                )}
              </div>
            </div>

            {/* Expanded email draft */}
            {isExpanded && c.email_draft && (
              <div style={{
                borderBottom: '1px solid #1A1A1A',
                background: '#050505',
                padding: '0 0 0 2px',
              }}>
                <div style={{ borderLeft: '2px solid #45B8A8', padding: '28px 32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <span style={{
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#45B8A8',
                    }}>
                      Email Draft
                    </span>
                    {c.contact_email && (
                      <span style={{
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#555',
                        border: '1px solid #1A1A1A',
                        padding: '4px 12px',
                      }}>
                        To: {c.contact_email}
                      </span>
                    )}
                  </div>
                  <pre style={{
                    fontSize: 13,
                    color: '#C8C8C8',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'inherit',
                    lineHeight: 1.8,
                    margin: 0,
                  }}>
                    {c.email_draft}
                  </pre>
                </div>
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
