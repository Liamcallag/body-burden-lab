import { getCandidates } from '@/lib/supabase'
import { Dashboard } from '@/components/Dashboard'

export const revalidate = 0

export default async function Home() {
  const candidates = await getCandidates()

  return (
    <div style={{ background: '#000000', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* Nav bar */}
      <nav style={{
        borderBottom: '1px solid #1A1A1A',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
      }}>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#45B8A8' }}>
          D
        </span>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#444' }}>
          MENU
        </span>
      </nav>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px 80px' }}>

        {/* Hero section label */}
        <div style={{ paddingTop: 80, paddingBottom: 80, textAlign: 'center', borderBottom: '1px solid #1A1A1A' }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#45B8A8', marginBottom: 16 }}>
            01
          </p>
          <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0, lineHeight: 1 }}>
            BACKLINK AGENT
          </h1>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#444', marginTop: 16 }}>
            bodyburdenlab.com — outreach pipeline
          </p>
        </div>

        <Dashboard candidates={candidates} />

      </main>
    </div>
  )
}
