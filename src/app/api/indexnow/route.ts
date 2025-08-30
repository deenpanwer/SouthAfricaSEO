import { NextRequest, NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';
import { submitUrlsToIndexNow } from '@/lib/indexnow';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Handle IndexNow URL submission
  // This endpoint can be triggered periodically by a cron job
  if (searchParams.get('submit') === 'true') {
    

    try {
      const sitemapEntries = await sitemap();
      const urls = sitemapEntries.map(entry => entry.url);

      if (urls.length === 0) {
        return NextResponse.json({ message: 'No URLs found in sitemap to submit.' }, { status: 200 });
      }

      const result = await submitUrlsToIndexNow(urls);

      if (!result) {
        return NextResponse.json({ message: 'No URLs provided for IndexNow submission.' }, { status: 200 });
      }

      const { response } = result;
      const body = await response.text();
      const headers = new Headers(response.headers);
      headers.set('Cache-Control', 'no-cache');

      return new NextResponse(body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers,
      });

    } catch (error: any) {
      console.error('Error during IndexNow submission:', error);
      return NextResponse.json({ error: `Failed to submit URLs to IndexNow: ${error.message || 'Unknown error'}` }, { status: 500 });
    }
  }

  // If submission is not requested, return a bad request response
  return NextResponse.json({ error: 'Invalid request. Use ?submit=true to trigger submission.' }, { status: 400 });
}
