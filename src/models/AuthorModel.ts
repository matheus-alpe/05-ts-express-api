import mongoose, { Document, Schema } from 'mongoose';

export interface IAuthor {
  name: string;
  age: number;
}

export interface IAuthorModel extends IAuthor, Document {}

const AuthorSchema = new Schema<IAuthor>(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

export default mongoose.model<IAuthorModel>('Author', AuthorSchema);
