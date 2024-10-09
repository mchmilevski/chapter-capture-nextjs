import { URL } from "@/app/lib/constants";

export async function fetchBooks(search = '', page = 1) {
  const query = new URLSearchParams({ search, page: String(page) });
  const res = await fetch(`${URL}/books?${query}`, {
    cache: 'no-store', // Ensure it doesn't cache and always fetches fresh data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }

  return res.json();
}