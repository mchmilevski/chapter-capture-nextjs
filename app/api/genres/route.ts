import { NextResponse } from 'next/server';

import connectToDatabase from '@/app/lib/mongoose';
import Genre from '@/app/models/genre';

export async function GET() {
  try {
    await connectToDatabase();
    const genres = await Genre.find().sort();
    return NextResponse.json(genres);
  } catch (error) {
    console.error('Error fetching genres:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
