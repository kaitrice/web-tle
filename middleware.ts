import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const cookie = request.cookies.get('preview_auth')?.value
  const password = process.env.PREVIEW_PASSWORD

  const PUBLIC_PATHS = ['/', '/favicon.ico', '/_next', '/api']

  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/preview') && cookie !== password) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
