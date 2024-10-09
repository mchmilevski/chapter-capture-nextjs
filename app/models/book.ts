import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  review: string;
  publishedDate?: Date;
}

const bookSchema: Schema = new Schema({
  bookId: String,
  title: String,
  seriesName: String,
  author: String,
  rating: Number,
  spice: Number,
  pages: Number,
  languageRead: String,
  readOn: String,
  review: String,
  cover: String,
  upcomingReview: Boolean,
  started: Number,
  finished: Number,
  published: Number,
  seasonalVibes: String,
  genres: [String],
  quotes: [String],
  topics: [String],
  triggers: [String],
  thoughts: [String],
});

bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Book: Model<IBook> = mongoose.models.Book || mongoose.model<IBook>('Book', bookSchema);
export default Book;