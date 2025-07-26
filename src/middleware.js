// middleware.js

import { NextResponse } from 'next/server'

export default function middleware(request) {
  const dummyUserData = {
    role: "user",
    email: "test@gmail.com"
  }

  const isContactPage = request.nextUrl.pathname.startsWith('/contact')
  const isAdmin = dummyUserData.role === "admin"

  // console.log({ isContactPage, isAdmin }, "🔥 Middleware check")
  console.log(request)

  if (isContactPage && !isAdmin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/about', '/about/:path*', '/contact', '/contact/:path*'],
}
