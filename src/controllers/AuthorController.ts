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

  public async read(req: Request, res: Response) {
    return res.json({
      message: 'TODO: Implement READ'
    });
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
