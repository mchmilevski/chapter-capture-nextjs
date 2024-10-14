import { NextRequest, NextResponse } from 'next/server';

import connectToDatabase from '@/app/lib/mongoose';
import Book, { IBook } from '@/app/models/book';

export async function GET(request: NextRequest) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const search = searchParams.get('search') || '';
    const spice = searchParams.get('spice');
    const rating = searchParams.get('rating');
    const seasonalVibes = searchParams.get('seasonalVibes');
    const language = searchParams.get('language');
    const dateRead = searchParams.get('dateRead');
    const sortOrder = dateRead === 'ascending' ? 1 : -1;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const skip = (page - 1) * limit;
    const genres = searchParams.get('genres')
      ? searchParams.get('genres')!.split(',')
      : [];

    const query: any = {};

    const addToQuery = (key: string, value: any) => {
      query[key] = value;
    };

    if (search) {
      addToQuery('$or', [
        { title: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } },
        { seriesName: { $regex: search, $options: 'i' } },
      ]);
    }

    if (rating) {
      const ratingPrefix = parseFloat(rating);
      const nextRatingPrefix = ratingPrefix + 1;
      addToQuery('rating', {
        $gte: ratingPrefix,
        $lt: nextRatingPrefix,
      });
    }

    if (seasonalVibes) {
      addToQuery('seasonalVibes', seasonalVibes);
    }

    if (spice) {
      addToQuery('spice', spice);
    }

    if (language) {
      addToQuery('languageRead', language);
    }

    if (genres.length > 0) {
      addToQuery('genres', {
        $all: genres,
      });
    }

    await connectToDatabase(); // Connect to MongoDB

    const totalItems = await Book.countDocuments(query);
    const nextPage = page * limit < totalItems ? page + 1 : undefined;

    const books: IBook[] = await Book.find(query)
      .sort({ finished: sortOrder })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      nextPage,
      hasNextPage: nextPage !== undefined,
      totalItems: totalItems,
      books: books,
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
