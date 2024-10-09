import { NextResponse } from 'next/server';

import connectToDatabase from '@/app/lib/mongoose';
import Book, { IBook } from '@/app/models/book';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const sortField = searchParams.get('sort') || 'finished';
    const sortOrder = searchParams.get('order') === 'ascending' ? 1 : -1;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const genres = searchParams.get('genres')
      ? searchParams.get('genres')!.split(',')
      : [];
    const skip = (page - 1) * limit;

    let query = {};

    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { author: { $regex: search, $options: 'i' } },
          { seriesName: { $regex: search, $options: 'i' } },
        ],
      };
    }

    if (genres.length > 0) {
      query = {
        ...query,
        $and: genres.map((genre) => ({ genres: genre })),
      };
    }

    await connectToDatabase(); // Connect to MongoDB

    const totalItems = await Book.find({
      upcomingReview: false,
    }).countDocuments();

    const books: IBook[] = await Book.find(query)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(limit + 1);

    const returnedBooks = books.slice(0, limit);

    return NextResponse.json({
      hasNextPage: books.length > returnedBooks.length,
      totalItems: totalItems,
      books: returnedBooks,
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
