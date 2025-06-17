// middleware.ts
    import { NextRequest, NextResponse } from 'next/server';

    export function middleware(request: NextRequest) {
      const host = request.headers.get('host');
      console.log('Incoming request host:', host); // Log to Vercel Function Logs

      // Optional: Uncomment the line below to see the host directly in the browser
      // return new NextResponse(`Incoming Host: ${host}`);

      return NextResponse.next(); // Continue to the intended route
    }

    // Configure the matcher to run for all paths
    export const config = {
      matcher: '/:path*',
    };
