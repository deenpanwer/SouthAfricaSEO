
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

  // Rewrite /enviropainting paths for the main domain
  if (pathname.startsWith(INTERNAL_ENVIROPAINTING_BASE_PATH)) {
    // This logic is now handled by the file system router in Next.js 13+ App Router
    // We just need to ensure the request is not rewritten for other domains.
    // If you were on Pages Router, you might need a rewrite.
    // With App Router, as long as the files are in app/enviropainting, it works.
    // The main purpose of middleware here is now the subdomain routing.
    return NextResponse.next();
  }

  // Default behavior for traconomics.com and other domains
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
