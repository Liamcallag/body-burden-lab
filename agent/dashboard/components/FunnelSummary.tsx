import { Candidate } from '@/lib/supabase'

interface Props {
  candidates: Candidate[]
}

interface StatProps {
  label: string
  value: number
  active: boolean
}

function Stat({ label, value, active }: StatProps) {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      background: active ? '#45B8A8' : '#242426',
      border: `1px solid ${active ? '#45B8A8' : 'rgba(255,255,255,0.1)'}`,
      borderRadius: 8,
      padding: '20px 12px',
      boxSizing: 'border-box',
    }}>
      <span style={{
        fontSize: 48,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '-0.03em',
        fontVariantNumeric: 'tabular-nums',
        color: active ? '#FFFFFF' : '#888890',
      }}>
        {value}
      </span>
      <span style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        color: active ? 'rgba(255,255,255,0.8)' : '#888890',
      }}>
        {label}
      </span>
    </div>
  )
}

function Arrow() {
  return (
    <span style={{ color: '#3A3A3C', fontSize: 14, userSelect: 'none', flexShrink: 0, alignSelf: 'center' }}>→</span>
  )
}

export function FunnelSummary({ candidates }: Props) {
  const total = candidates.length
  const emailFound = candidates.filter(c => c.contact_status === 'email_found').length
  const drafted = candidates.filter(c => c.outreach_status === 'drafted').length
  const sent = candidates.filter(c => c.outreach_status === 'sent').length
  const replied = candidates.filter(c => c.outreach_status === 'replied').length
  const linked = candidates.filter(c => c.outreach_status === 'linked').length

  return (
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
      gap: 8,
      paddingBottom: 40,
      borderBottom: '1px solid #3A3A3C',
      marginBottom: 32,
    }}>
      <Stat label="Targets found" value={total} active={total > 0} />
      <Arrow />
      <Stat label="Emails found" value={emailFound} active={emailFound > 0} />
      <Arrow />
      <Stat label="Drafts ready" value={drafted} active={drafted > 0} />
      <Arrow />
      <Stat label="Sent" value={sent} active={sent > 0} />
      <Arrow />
      <Stat label="Replied" value={replied} active={replied > 0} />
      <Arrow />
      <Stat label="Linked" value={linked} active={linked > 0} />
    </div>
  )
}
