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
    genres: genres.length > 0 ? genres.join(',') : '',
    rating: rating !== undefined ? String(rating) : '',
    spice: spice !== undefined ? String(spice) : '',
    dateRead: dateRead ? dateRead.toString() : '',
    language: language || '',
    seasonalVibes: seasonalVibes || '',
  });

  const response = await fetch(`${URL}/books?${query}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return response.json();
}

export async function fetchBookByIdApi(id: string) {
  const response = await fetch(`${URL}/books/${id}`);
  if (!response.ok) {
    throw new Error('Book not found');
  }

  return response.json();
}

export async function fetchGenresApi() {
  const response = await fetch(`${URL}/genres`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return response.json();
}
