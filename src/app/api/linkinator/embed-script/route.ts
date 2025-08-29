// src/app/api/linkinator/embed-script/route.ts
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'linkinator-embed.js');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for a long time
      },
    });
  } catch (error) {
    console.error("Failed to read embed script:", error);
    return NextResponse.json({ error: "Embed script not found." }, { status: 404 });
  }
}
