import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IGenre extends Document {
  name: string;
}

const genreSchema: Schema = new mongoose.Schema({
  name: String,
});

genreSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Genre: Model<IGenre> =
  mongoose.models.Genre || mongoose.model<IGenre>('Genre', genreSchema);

export default Genre;
