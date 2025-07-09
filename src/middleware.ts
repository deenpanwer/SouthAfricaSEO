
import { NextRequest, NextResponse } from 'next/server';

const SAPHIREFANS_HOST = 'saphirefans.traconomics.com';
const INTERNAL_SAPHREFANS_BASE_PATH = '/saphirefans';

export function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);

  // Add the pathname to the request headers so it can be read in server components
  requestHeaders.set('x-pathname', pathname);

  // Check if the request is for the saphirefans.traconomics.com host
  if (hostname === SAPHIREFANS_HOST) {
    // Construct the new internal path
    // If pathname is '/', newPath becomes '/saphirefans'
    // If pathname is '/shop/product', newPath becomes '/saphirefans/shop/product'
    const newPath = `${INTERNAL_SAPHREFANS_BASE_PATH}${pathname === '/' ? '' : pathname}`;

    // Clone the URL and rewrite the pathname
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    
    return NextResponse.rewrite(url, {
      headers: requestHeaders,
    });
  }

  // For any other host, pass the headers along
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Any other static assets directories like /images/ or /files/ if applicable
     * 
     * The hostname check is performed inside the middleware function.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|files|sitemap.xml|robots.txt).*)',
    // Explicitly include root, sitemap.xml, and robots.txt for the matcher,
    // as the negative lookahead might exclude them if not careful,
    // but the hostname check in the middleware will ensure it only applies to saphirefans.
    '/', 
    '/sitemap.xml',
    '/robots.txt',
  ],
};
