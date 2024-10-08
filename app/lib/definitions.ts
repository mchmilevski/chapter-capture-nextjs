export type Book = {
  id: string,
  bookId: string,
  title: string,
  seriesName: string,
  author: string,
  rating: number,
  spice: number,
  pages: number,
  languageRead: string,
  readOn: string,
  review: string,
  cover: string,
  genres: Array<string>,
  quotes: Array<string>,
  upcomingReview: boolean,
  topics: Array<string>,
  thoughts: Array<string>,
  started: number,
  finished: number,
  published: number,
  triggers: Array<string>,
  seasonalVibes: string,
}

export interface IBookCard {
  book: {
    bookId: string,
    title: string,
    seriesName: string,
    author: string,
    cover: string,
    genres: Array<string>,
    quotes: Array<string>,
    rating: number,
    review: string,
    upcomingReview: boolean,
    seasonalVibes: string,
  },
}

export type Genre = {
  name: string,
  id: string
}
