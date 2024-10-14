import { useInfiniteQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';

import { URL } from '@/app/lib/constants';
import { BookResponse, Filters } from '@/app/lib/definitions';
import { constructQueryParams } from '@/app/lib/utils';

export const useInfiniteBooks = (
  selectedFilters: Filters,
  search: string = '',
) => {
  const [debouncedSearch] = useDebounce(search, 500);
  const queryString = constructQueryParams(selectedFilters, debouncedSearch);

  return useInfiniteQuery<BookResponse, Error>({
    queryKey: ['books', queryString],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(
        `${URL}/books?${queryString}&page=${pageParam}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage ?? undefined;
    },
    initialPageParam: 1,
    staleTime: 300000,
  });
};
