import { NextFunction, Request, Response } from 'express';
import AuthorModel, { IAuthor } from '@models/AuthorModel';

interface IAuthorId {
  authorId: string;
}

class AuthorController {
  public async create(
    req: Request<{}, {}, IAuthor>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name } = req.body;
      const author = await new AuthorModel({ name }).save();

      return res.status(201).json({
        author
      });
    } catch (error) {
      next(error);
    }
  }

  public async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const authors = await AuthorModel.find();

      return res.status(200).json({
        authors
      });
    } catch (error) {
      next(error);
    }
  }

  public async read(
    req: Request<IAuthorId>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { authorId } = req.params;

      const author = await AuthorModel.findById(authorId);

      if (!author) {
        return res.status(404).json({
          message: `🔍 - No Author with ID: ${authorId}`
        });
      }

      return res.status(200).json({
        author
      });
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request<IAuthorId, {}, IAuthor>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { authorId } = req.params;

      const { name } = req.body;

      if (!name) {
        return res.status(422).json({
          message: '❌ - Invalid body'
        });
      }

      const author = await AuthorModel.findByIdAndUpdate(
        authorId,
        { name },
        { new: true }
      );

      if (!author) {
        return res.status(404).json({
          message: `🔍 - No Author with ID: ${authorId}`
        });
      }

      return res.status(200).json({
        author
      });
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: Request<IAuthorId>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { authorId } = req.params;

      await AuthorModel.findByIdAndDelete(authorId);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthorController();
