import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {

  const userToken = request.cookies.get('isAuthenticated')?.value;
  if(!userToken) {
     return NextResponse.redirect(new URL('/login',request.url))
  }
}

// This Matches home page and jokes directory"
export const config = {
  matcher: ['/', '/jokes/:path*'],
};