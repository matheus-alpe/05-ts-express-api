import mongoose, { Document, Schema } from 'mongoose';

export interface IBook {
  title: string;
  author: Schema.Types.ObjectId;
}

export interface IBookModel extends IBook, Document {}

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Author'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<IBookModel>('Book', BookSchema);
