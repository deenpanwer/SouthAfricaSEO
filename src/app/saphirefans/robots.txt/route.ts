
import { NextRequest, NextResponse } from 'next/server';

const SAPHIREFANS_DOMAIN = 'https://saphirefans.traconomics.com';

export async function GET(request: NextRequest): Promise<Response> {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: ${SAPHIREFANS_DOMAIN}/sitemap.xml
`;

  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
