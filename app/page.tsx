import React from 'react';

import BookList from '@/app/ui/home/book-list';
import SectionHeadline from '@/app/ui/section-header';
import Bookshelf from '@/public/icons/bookshelf.png';

export default async function Home() {
  return (
    <div>
      <SectionHeadline icon={Bookshelf} headline="Shelf Pick" />
      <BookList />
    </div>
  );
}
