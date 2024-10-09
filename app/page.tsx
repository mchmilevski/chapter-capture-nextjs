import React from 'react';

import { fetchBooksApi } from '@/app/lib/data';
import BookList from '@/app/ui/home/book-list';
import SectionHeadline from '@/app/ui/section-header';
import Bookshelf from '@/public/icons/bookshelf.png';

export default async function Home() {
  const data = await fetchBooksApi();

  return (
    <div>
      <SectionHeadline icon={Bookshelf} headline="Shelf Pick" />
      <BookList data={data} />
    </div>
  );
}
