import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function GET(request: Request, response: Response,) {
  if (request.method === 'GET') {
    try {
      const file = await fs.readFile(process.cwd() + '/src/app/i18n/locales/pages.json', 'utf8');
      const PAGES: Array<string> = JSON.parse(file);
      
      if (Array.isArray(PAGES)) {
        return NextResponse.json(PAGES, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
          },
        });
      } else {
        console.error('Invalid PAGES data:', PAGES);
        return NextResponse.error();
      }
    } catch (error) {
      console.error('Error fetching PAGES:', error);
      return NextResponse.error();
    }
  }

  // If the request method is not 'GET', return an error response.
  return NextResponse.error();
}
