import { type NextRequest, NextResponse } from 'next/server';

const corsOptions: {
  allowedMethods: string[];
  allowedOrigins: string[];
  allowedHeaders: string[];
  exposedHeaders: string[];
} = {
  allowedMethods: (process.env?.ALLOWED_METHODS || '').split(','),
  allowedOrigins: (process.env?.ALLOWED_ORIGIN || '').split(','),
  allowedHeaders: (process.env?.ALLOWED_HEADERS || '').split(','),
  exposedHeaders: (process.env?.EXPOSED_HEADERS || '').split(','),
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const origin = request.headers.get('origin') ?? '';
  if (
    corsOptions.allowedOrigins.includes('*') ||
    corsOptions.allowedOrigins.includes(origin)
  ) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set(
    'Access-Control-Allow-Methods',
    corsOptions.allowedMethods.join(','),
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    corsOptions.allowedHeaders.join(','),
  );
  response.headers.set(
    'Access-Control-Expose-Headers',
    corsOptions.exposedHeaders.join(','),
  );

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
