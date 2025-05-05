import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const cookie = request.cookies.get('preview_auth')?.value
  const password = process.env.PREVIEW_PASSWORD

  if (pathname.startsWith('/preview') && cookie !== password) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/preview/:path*'],
}
