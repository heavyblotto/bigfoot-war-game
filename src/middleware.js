import { NextResponse } from 'next/server';
import { verifyAuth } from './lib/auth';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  const verifiedToken = token && (await verifyAuth(token).catch((err) => console.log(err)));

  if (request.nextUrl.pathname.startsWith('/api/auth') && !verifiedToken) {
    return;
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/api/auth/:path*'],
};
