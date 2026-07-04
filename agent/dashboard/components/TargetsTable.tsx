'use client'

import React, { useState } from 'react'
import { Candidate } from '@/lib/supabase'
import { StatusBadge } from './StatusBadge'

interface Props {
  candidates: Candidate[]
}

const th: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  padding: '12px 16px',
  textAlign: 'left',
  borderBottom: '1px solid #35A898',
  background: '#45B8A8',
  whiteSpace: 'nowrap',
}

const td: React.CSSProperties = {
  padding: '12px 16px',
  verticalAlign: 'top',
  borderBottom: '1px solid #3A3A3C',
  fontSize: 13,
  color: '#E5E5E7',
}

export function TargetsTable({ candidates }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [expandedWhyId, setExpandedWhyId] = useState<number | null>(null)

  if (candidates.length === 0) {
    return (
      <p style={{ fontSize: 13, color: '#8E8E93', padding: '40px 0', textAlign: 'center' }}>
        No targets match the current filters.
      </p>
    )
  }

  return (
    <div style={{ border: '1px solid #3A3A3C', borderRadius: 2, overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            <th style={{ ...th, width: '26%' }}>Page</th>
            <th style={{ ...th, width: '26%' }}>Why relevant</th>
            <th style={{ ...th, width: '18%' }}>Contact</th>
            <th style={{ ...th, width: '12%' }}>Contact</th>
            <th style={{ ...th, width: '12%' }}>Outreach</th>
            <th style={{ ...th, width: '6%' }}></th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c, i) => (
            <React.Fragment key={c.id}>
              <tr
                style={{ background: i % 2 === 0 ? '#2A2A2C' : '#242426', borderLeft: '3px solid transparent', transition: 'border-color 0.1s' }}
                onMouseEnter={e => (e.currentTarget.style.borderLeftColor = '#45B8A8')}
                onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
              >

                {/* Page */}
                <td style={td}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#45B8A8', fontWeight: 500, textDecoration: 'none', lineHeight: 1.4, display: 'block' }}
                    onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                    onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                  >
                    {c.page_title}
                  </a>
                  <span style={{ fontSize: 10, color: '#8E8E93', marginTop: 3, display: 'block' }}>
                    {(() => { try { return new URL(c.url).hostname.replace('www.', '') } catch { return c.url } })()}
                  </span>
                </td>

                {/* Why relevant */}
                <td style={{ ...td, color: '#A0A0A8', lineHeight: 1.55 }}>
                  <span style={expandedWhyId === c.id ? {} : {
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  } as React.CSSProperties}>
                    {c.why_relevant}
                  </span>
                  <button
                    onClick={() => setExpandedWhyId(expandedWhyId === c.id ? null : c.id)}
                    style={{ fontSize: 11, color: '#2D6A7F', background: 'none', border: 'none', padding: 0, cursor: 'pointer', marginTop: 4, display: 'block', fontWeight: 600 }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#45B8A8')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#2D6A7F')}
                  >
                    {expandedWhyId === c.id ? 'less ↑' : 'more ↓'}
                  </button>
                </td>

                {/* Contact email */}
                <td style={{ ...td, color: '#A0A0A8', fontSize: 12, wordBreak: 'break-all' }}>
                  {c.contact_email ?? <span style={{ color: '#C8C4BE' }}>—</span>}
                </td>

                {/* Contact status */}
                <td style={td}>
                  <StatusBadge status={c.contact_status} type="contact" />
                </td>

                {/* Outreach status */}
                <td style={td}>
                  <StatusBadge status={c.outreach_status} type="outreach" />
                </td>

                {/* Draft toggle */}
                <td style={{ ...td, textAlign: 'right' }}>
                  {c.email_draft && (
                    <button
                      onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                      style={{ fontSize: 12, color: '#45B8A8', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', padding: 0 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {expandedId === c.id ? 'hide ↑' : 'draft ↓'}
                    </button>
                  )}
                </td>
              </tr>

              {/* Expanded draft */}
              {expandedId === c.id && c.email_draft && (
                <tr key={`${c.id}-draft`} style={{ background: '#111E1D' }}>
                  <td colSpan={6} style={{ padding: '24px 28px', borderBottom: '1px solid #3A3A3C' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#45B8A8', display: 'inline-block', flexShrink: 0 }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#45B8A8' }}>
                          Email Draft
                        </span>
                      </div>
                      {c.contact_email && (
                        <span style={{ fontSize: 11, color: '#8E8E93', background: '#2A2A2C', border: '1px solid #3A3A3C', borderRadius: 4, padding: '3px 10px' }}>
                          To: {c.contact_email}
                        </span>
                      )}
                    </div>
                    <div style={{
                      background: '#1C1C1E',
                      border: '1px solid #2D6A7F',
                      borderRadius: 8,
                      padding: '20px 24px',
                    }}>
                      <pre style={{ fontSize: 13.5, color: '#E5E5E7', whiteSpace: 'pre-wrap', fontFamily: 'inherit', lineHeight: 1.75, margin: 0 }}>
                        {c.email_draft}
                      </pre>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
