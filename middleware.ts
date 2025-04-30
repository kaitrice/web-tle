import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const cookie = request.cookies.get('preview_auth')?.value
  const password = process.env.PREVIEW_PASSWORD

  // ✅ Allow unauthenticated access only to the root (login screen) and static files
  const PUBLIC_PATHS = ['/', '/favicon.ico', '/_next', '/api']

  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next()
  }

  // ✅ Block /preview unless cookie matches password
  if (pathname.startsWith('/preview') && cookie !== password) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // ✅ Block anything else without valid auth
  if (!pathname.startsWith('/preview') && cookie !== password) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
