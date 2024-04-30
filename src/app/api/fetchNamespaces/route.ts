import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function GET(request: Request, response: Response,) {
  if (request.method === 'GET') {
    try {
      const file = await fs.readFile(process.cwd() + '/src/app/i18n/locales/namespaces.json', 'utf8');
      const NAMESPACES: Array<string> = JSON.parse(file);
      
      if (Array.isArray(NAMESPACES)) {
        return NextResponse.json(NAMESPACES, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
          },
        });
      } else {
        console.error('Invalid NAMESPACES data:', NAMESPACES);
        return NextResponse.error();
      }
    } catch (error) {
      console.error('Error fetching NAMESPACES:', error);
      return NextResponse.error();
    }
  }

  // If the request method is not 'GET', return an error response.
  return NextResponse.error();
}
