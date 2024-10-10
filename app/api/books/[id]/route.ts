import { NextResponse } from 'next/server';

import connectToDatabase from '@/app/lib/mongoose';
import Book from '@/app/models/book';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    await connectToDatabase();
    const { id } = params;

    const book = await Book.findOne({ bookId: id });

    if (!book) {
      return NextResponse.json({ message: 'Book not found' }, { status: 404 });
    }
    return NextResponse.json(book);
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
