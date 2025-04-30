import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  if (password === process.env.PREVIEW_PASSWORD) {
    const res = NextResponse.json({ ok: true })
    res.cookies.set('preview_auth', password, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    })
    return res
  }
  return NextResponse.json({ ok: false }, { status: 401 })
}
