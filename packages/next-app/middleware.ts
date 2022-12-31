import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {


    console.log("responsee" + request.cookies.has('loggedin'))

  if (request.nextUrl.pathname.startsWith('/fir') && !request.cookies.has('loggedin')) {
    
    return NextResponse.rewrite(new URL('/', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/evidence') && !request.cookies.has('loggedin')) {
    
    return NextResponse.rewrite(new URL('/', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/evidenceCards') && !request.cookies.has('loggedin')) {
    
    return NextResponse.rewrite(new URL('/', request.url))
  }

  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  // }
}