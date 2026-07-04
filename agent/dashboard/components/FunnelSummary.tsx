import { Candidate } from '@/lib/supabase'

interface Props {
  candidates: Candidate[]
}

export function FunnelSummary({ candidates }: Props) {
  const total = candidates.length
  const emailFound = candidates.filter(c => c.contact_status === 'email_found').length
  const drafted = candidates.filter(c => c.outreach_status === 'drafted').length
  const sent = candidates.filter(c => c.outreach_status === 'sent').length
  const replied = candidates.filter(c => c.outreach_status === 'replied').length
  const linked = candidates.filter(c => c.outreach_status === 'linked').length

  const stats = [
    { label: 'Targets', value: total },
    { label: 'Emails', value: emailFound },
    { label: 'Drafts', value: drafted },
    { label: 'Sent', value: sent },
    { label: 'Replied', value: replied },
    { label: 'Linked', value: linked },
  ]

  return (
    <div style={{
      display: 'flex',
      borderBottom: '1px solid #1A1A1A',
      marginBottom: 0,
    }}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{
            flex: 1,
            padding: '32px 0',
            textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid #1A1A1A' : 'none',
          }}
        >
          <div style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: s.value > 0 ? '#FFFFFF' : '#222',
            lineHeight: 1,
            marginBottom: 8,
            fontVariantNumeric: 'tabular-nums',
          }}>
            {s.value}
          </div>
          <div style={{
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: s.value > 0 ? '#45B8A8' : '#333',
          }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
