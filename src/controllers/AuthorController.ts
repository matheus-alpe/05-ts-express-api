import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import AuthorModel, { IAuthor } from '@models/AuthorModel';

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

  public async read(req: Request, res: Response, next: NextFunction) {
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

  public async update(req: Request, res: Response) {
    return res.json({
      message: 'TODO: Implement UPDATE'
    });
  }

  public async delete(req: Request, res: Response) {
    return res.json({
      message: 'TODO: Implement DELETE'
    });
  }
}

export default new AuthorController();
