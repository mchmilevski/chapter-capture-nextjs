import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IBookCard } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import BookGenre from '@/app/ui/home/book-genre';
import StarRating from '@/app/ui/star-rating';

export default function BookCard({ book }: IBookCard) {
  const { title, author, cover, genres, rating, seriesName, bookId } = book;
  return (
    <Link href={`/review/${bookId}`}>
      <div className="bg-white rounded-lg cursor-pointer">
        <div className="p-4 flex">
          <Image
            src={cover}
            width={112}
            height={0}
            alt="Book Cover"
            className="w-28 lg:w-32 h-fit"
          />
          <div className="pl-4">
            <h1
              className={`${lusitana.className} antialiased text-[#707070] font-normal line-clamp-1 text-sm`}
            >
              {seriesName}
            </h1>
            <h1 className={`${lusitana.className} font-semibold line-clamp-2`}>
              {title}
            </h1>
            <span className="text-grey text-sm">{author}</span>
            <div className="mt-3">
              <StarRating rating={rating} size={20} twClass="justify-start" />
            </div>

            <div className="flex mt-2 flex-wrap">
              {genres.map((genre) => (
                <BookGenre genre={genre} key={genre} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
