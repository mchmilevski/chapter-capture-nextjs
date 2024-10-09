import { FiltersInitialState, URL } from '@/app/lib/constants';
import { Filters } from '@/app/lib/definitions';

export async function fetchBooksApi(
  search = '',
  page = 1,
  selectedFilters: Filters = FiltersInitialState,
) {
  const { genres, rating, spice, dateRead, language, seasonalVibes } =
    selectedFilters;
  const query = new URLSearchParams({
    search,
    page: String(page),
    genres: genres ? genres.join(',') : '',
    rating: rating !== undefined ? String(rating) : '',
    spice: spice !== undefined ? String(spice) : '',
    dateRead: dateRead ? dateRead.toString() : '',
    language: language || '',
    seasonalVibes: seasonalVibes || '',
  });

  const books = await fetch(`${URL}/books?${query}`, {
    cache: 'no-store',
  });

  if (!books.ok) {
    throw new Error('Failed to fetch books');
  }

  return books.json();
}

export async function fetchGenresApi() {
  const genres = await fetch(`${URL}/genres`, {
    cache: 'no-store',
  });

  if (!genres.ok) {
    throw new Error('Failed to fetch books');
  }

  return genres.json();
}
