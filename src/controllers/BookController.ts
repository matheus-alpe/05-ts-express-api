import { NextFunction, Request, Response } from 'express';
import BookModel, { IBook } from '@models/BookModel';

interface IBookId {
  bookId: string;
}

class BookController {
  public async create(
    req: Request<{}, {}, IBook>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { title, author } = req.body;
      const book = await new BookModel({ title, author }).save();

      return res.status(201).json({
        book
      });
    } catch (error) {
      next(error);
    }
  }

  public async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await BookModel.find().populate('author');

      return res.status(200).json({
        books
      });
    } catch (error) {
      next(error);
    }
  }

  public async read(req: Request<IBookId>, res: Response, next: NextFunction) {
    try {
      const { bookId } = req.params;

      const book = await BookModel.findById(bookId).populate('author');

      if (!book) {
        return res.status(404).json({
          message: `🔍 - No Book with ID: ${bookId}`
        });
      }

      return res.status(200).json({
        book
      });
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request<IBookId, {}, IBook>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { bookId } = req.params;
      const { title, author } = req.body;

      if (!title || !author) {
        return res.status(422).json({
          message: '❌ - Invalid body'
        });
      }

      const book = await BookModel.findByIdAndUpdate(
        bookId,
        { title, author },
        { new: true }
      );

      if (!book) {
        return res.status(404).json({
          message: `🔍 - No Book with ID: ${bookId}`
        });
      }

      return res.status(200).json({
        book
      });
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: Request<IBookId>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { bookId } = req.params;

      await BookModel.findByIdAndDelete(bookId);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

export default new BookController();
