'use client'

interface Props {
  contactFilter: string
  outreachFilter: string
  onContactChange: (val: string) => void
  onOutreachChange: (val: string) => void
}

const CONTACT_OPTIONS = [
  { value: '', label: 'All contact statuses' },
  { value: 'email_found', label: 'Email found' },
  { value: 'not_found', label: 'Not found' },
  { value: 'contact_form_only', label: 'Form only' },
  { value: 'could_not_access', label: 'Could not access' },
]

const OUTREACH_OPTIONS = [
  { value: '', label: 'All outreach statuses' },
  { value: 'not_contacted', label: 'Not contacted' },
  { value: 'drafted', label: 'Drafted' },
  { value: 'sent', label: 'Sent' },
  { value: 'replied', label: 'Replied' },
  { value: 'linked', label: 'Linked' },
]

const selectStyle: React.CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#666',
  background: 'transparent',
  border: '1px solid #222',
  borderRadius: 0,
  padding: '6px 24px 6px 10px',
  outline: 'none',
  cursor: 'pointer',
  appearance: 'none',
  fontFamily: 'inherit',
}

export function Filters({ contactFilter, outreachFilter, onContactChange, onOutreachChange }: Props) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <div style={{ position: 'relative' }}>
        <select style={selectStyle} value={contactFilter} onChange={e => onContactChange(e.target.value)}>
          {CONTACT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: '#444', fontSize: 8, pointerEvents: 'none' }}>▾</span>
      </div>

      <div style={{ position: 'relative' }}>
        <select style={selectStyle} value={outreachFilter} onChange={e => onOutreachChange(e.target.value)}>
          {OUTREACH_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: '#444', fontSize: 8, pointerEvents: 'none' }}>▾</span>
      </div>
    </div>
  )
}
