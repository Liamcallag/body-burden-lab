import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const VALID_OUTREACH = ['not_contacted', 'drafted', 'sent', 'replied', 'linked']

export async function POST(req: NextRequest) {
  const { id, outreach_status } = await req.json()

  if (!id || !outreach_status) {
    return NextResponse.json({ error: 'id and outreach_status required' }, { status: 400 })
  }

  if (!VALID_OUTREACH.includes(outreach_status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const { error } = await supabase
    .from('backlink_candidates')
    .update({ outreach_status })
    .eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
