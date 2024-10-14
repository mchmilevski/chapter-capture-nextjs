'use client';
import React, { useEffect, useRef, useState } from 'react';

import { useInfiniteBooks } from '@/app/hooks/useInfiniteBooks';
import { FiltersInitialState } from '@/app/lib/constants';
import { fetchGenresApi } from '@/app/lib/data';
import { Filters } from '@/app/lib/definitions';
import { Genre } from '@/app/lib/definitions';
import BookCard from '@/app/ui/home/book-card';
import FiltersDropdown from '@/app/ui/home/filters-dropdown';
import FiltersList from '@/app/ui/home/filters-list';
import Search from '@/app/ui/home/search';

export default function BookList() {
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedFilters, setSelectedFilters] =
    useState<Filters>(FiltersInitialState);

  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteBooks(selectedFilters, search);

  const fetchGenres = async () => {
    const genres = await fetchGenresApi();
    setGenres(
      genres.sort((a: Genre, b: Genre) => a.name.localeCompare(b.name)),
    );
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isLoading) {
          fetchNextPage();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, hasNextPage, isLoading]);

  if (isLoading) return <p>Loading books...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="flex w-full">
        <Search search={search} setSearch={setSearch} />
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
        {data?.pages.map((page) =>
          page.books.map((book) => <BookCard book={book} key={book.id} />),
        )}
      </div>
      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  );
}
