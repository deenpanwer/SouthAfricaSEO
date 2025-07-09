
import { NextRequest, NextResponse } from 'next/server';

const SAPHIREFANS_HOST = 'saphirefans.traconomics.com';
const INTERNAL_SAPHREFANS_BASE_PATH = '/saphirefans';
const INTERNAL_ENVIROPAINTING_BASE_PATH = '/enviropainting';

export function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;

  // Route for saphirefans.traconomics.com
  if (hostname === SAPHIREFANS_HOST) {
    const newPath = `${INTERNAL_SAPHREFANS_BASE_PATH}${pathname === '/' ? '' : pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.rewrite(url);
  }

  // All other requests for the main domain are passed through.
  // The App Router will handle file-system based routing for /test3, /about, etc.
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     *
     * This ensures the middleware runs on all page routes.
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
