import moment from 'moment';
import React from 'react';

import { capitalizeFirstLetter } from '@/app/lib/utils';

interface IBookDetails {
  book: {
    pages: number;
    readOn: string;
    languageRead: string;
    genres: Array<string>;
    started: number;
    finished: number;
    published: number;
    spice: number;
    rating: number;
  };
}
export default function BookDetails({ book }: IBookDetails) {
  const {
    pages,
    readOn,
    languageRead,
    genres,
    started,
    finished,
    published,
    spice,
    rating,
  } = book;

  const convertDate = (value: number) =>
    moment.unix(value).format('MMMM D, YYYY');

  const displaySpice = () => (spice ? `${spice}/5` : '0/5');

  return (
    <div className="mt-10">
      <div className="mb-10">
        <p>
          <span className="font-semibold text-m">⭐ Rating</span> - {rating}/5
        </p>
        <p className="mt-3">
          <span className="font-semibold text-m">🌶 Spice</span>:{' '}
          {displaySpice()}
        </p>
        <p className="mt-3">
          <span className="font-semibold text-m">📄 Pages</span>: {pages}
        </p>
      </div>
      <p>
        <span className="font-semibold text-m">🗣 Language</span>:{' '}
        {languageRead}
      </p>
      <p className="mt-3">
        <span className="font-semibold text-m">📖 Read on</span>: {readOn}
      </p>
      <p className="mt-3">
        <span className="font-semibold text-m">📅 Published</span>:{' '}
        {convertDate(published)}
      </p>
      <p className="mt-3">
        <span className="font-semibold text-m">🕒 Started</span>:{' '}
        {convertDate(started)}
      </p>
      <p className="mt-3">
        <span className="font-semibold text-m">🏁 Finished</span>:{' '}
        {convertDate(finished)}
      </p>
      <p className="mt-3">
        <span className="font-semibold">Genres</span>:{' '}
        {genres.map((genre, index) => (
          <span
            className="mr-5 border-solid border-emerald-800 border-b-2"
            key={index}
          >
            {capitalizeFirstLetter(genre)}
          </span>
        ))}
      </p>
    </div>
  );
}
