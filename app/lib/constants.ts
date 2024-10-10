export const URL = 'http://localhost:3000/api';
export const PAGE_LIMIT = 10;

export const Filters = {
  genres: 'genres',
  rating: 'rating',
  spice: 'spice',
  language: 'language',
  dateRead: 'dateRead',
  season: 'seasonalVibes',
};

export const Genres = {
  romance: 'romance',
  fiction: 'fiction',
  thriller: 'thriller',
  historicalFiction: 'historical fiction',
  fantasy: 'fantasy',
  mystery: 'mystery',
  classics: 'classics',
  literaryFiction: 'literary fiction',
  sf: 'sf',
  humor: 'humor',
  paranormal: 'paranormal',
  suspense: 'suspense',
  youngAdult: 'young adult',
  romcom: 'rom-com',
  darkRomance: 'dark romance',
  darkAcademia: 'dark academia',
  gothic: 'gothic',
  magicalRealism: 'magical realism',
  cozyFantasy: 'cozy fantasy',
};

export const SeasonalVibes = {
  fallVibes: 'fall vibes',
  winterVibes: 'winter vibes',
  springVibes: 'spring vibes',
  summerVibes: 'summer vibes',
};

export const FiltersInitialState = {
  genres: [],
  rating: undefined,
  spice: undefined,
  dateRead: undefined,
  language: undefined,
  seasonalVibes: undefined,
};
