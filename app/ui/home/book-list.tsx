"use client";

import { Book } from "@/app/lib/definitions";
import BookCard from "@/app/ui/home/book-card";
import {useEffect, useState} from "react";
import {fetchBooks} from "@/app/lib/data";
import Search from "@/app/ui/search";

interface IDataProps {
  data: {
    hasNextPage: boolean;
    totalPages: number;
    books: Book[];
  };
}

export default function BookList({ data }: IDataProps) {
  const { hasNextPage } = data
  const [books, setBooks] = useState(data.books)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      // setLoading(true)
      const response = await fetchBooks(search, 1)

      // setLoading(false)
      setBooks([...response.books.filter((book: Book) => !book.upcomingReview)])
    }

    fetch();
  }, [search])

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const loadMore = async () => {
    setPage(prevPage => prevPage + 1)

    const response = await fetchBooks(search, page + 1)
    // setLoading(false)
    setBooks([...books, ...response.books.filter((book: Book) => !book.upcomingReview)])
  }

console.log(books)
  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />
      <div
        className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[2100px]:grid-cols-4 min-[2600px]:grid-cols-5 gap-5">
        {books.map((book) => <BookCard book={book} key={book.id}/>)}
      </div>
      {hasNextPage && (
        <div className="flex flex-col justify-center items-center">
          <button onClick={loadMore}
                  className="font-semibold mt-3 text-lg cursor-pointer">
            Load More...
          </button>
        </div>
      )}
    </div>
  )
}