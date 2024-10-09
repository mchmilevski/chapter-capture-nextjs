'use client';
import React, { useEffect, useState } from 'react';

import { FiltersInitialState } from '@/app/lib/constants';
import { fetchBooksApi, fetchGenresApi } from '@/app/lib/data';
import { Book, Filters } from '@/app/lib/definitions';
import { Genre } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import BookCard from '@/app/ui/home/book-card';
import FiltersDropdown from '@/app/ui/home/filters-dropdown';
import FiltersList from '@/app/ui/home/filters-list';
import Search from '@/app/ui/home/search';

interface IDataProps {
  data: {
    hasNextPage: boolean;
    totalPages: number;
    books: Book[];
  };
}

export default function BookList({ data }: IDataProps) {
  const { hasNextPage } = data;
  const [books, setBooks] = useState(data.books);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedFilters, setSelectedFilters] =
    useState<Filters>(FiltersInitialState);

  useEffect(() => {
    const fetch = async () => {
      // setLoading(true)
      const response = await fetchBooksApi(search, 1, selectedFilters);

      // setLoading(false)
      setBooks([
        ...response.books.filter((book: Book) => !book.upcomingReview),
      ]);
    };

    fetch();
  }, [search]);

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      // setLoading(true)
      const response = await fetchBooksApi(search, 1, selectedFilters);

      // setLoading(false)
      setBooks([
        ...response.books.filter((book: Book) => !book.upcomingReview),
      ]);
    };

    fetch();
  }, [selectedFilters]);

  const fetchGenres = async () => {
    const genres = await fetchGenresApi();
    console.log(genres, 'genres');
    setGenres(
      genres.sort((a: Genre, b: Genre) => a.name.localeCompare(b.name)),
    );
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);

    const response = await fetchBooksApi(search, page + 1, selectedFilters);
    // setLoading(false)
    setBooks([
      ...books,
      ...response.books.filter((book: Book) => !book.upcomingReview),
    ]);
  };

  return (
    <div>
      <div className="flex w-full">
        <Search search={search} handleSearch={handleSearch} />
        <FiltersDropdown
          genres={genres}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>

      <FiltersList
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[2100px]:grid-cols-4 min-[2600px]:grid-cols-5 gap-5">
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
      {hasNextPage && (
        <div
          className={`${lusitana.className} antialiased flex flex-col justify-center items-center mt-5 text-md cursor-pointer`}
        >
          <button onClick={loadMore} className="font-semibold ">
            Load More...
          </button>
        </div>
      )}
    </div>
  );
}
