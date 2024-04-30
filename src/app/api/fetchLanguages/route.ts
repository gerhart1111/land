import { language } from '@/types/theme';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function GET(request: Request, response: Response,) {
  if (request.method === 'GET') {
    try {
      const file = await fs.readFile(process.cwd() + '/src/app/i18n/locales/languages.json', 'utf8');
      const LANGUAGES: language[] = JSON.parse(file);
      
      if (Array.isArray(LANGUAGES)) {
        return NextResponse.json(LANGUAGES, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
          },
        });
      } else {
        console.error('Invalid LANGUAGES data:', LANGUAGES);
        return NextResponse.error();
      }
    } catch (error) {
      console.error('Error fetching languages:', error);
      return NextResponse.error();
    }
  }

  // If the request method is not 'GET', return an error response.
  return NextResponse.error();
}
