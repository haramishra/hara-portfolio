import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('/hello-nextjs')
    }
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}