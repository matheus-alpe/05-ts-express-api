import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import AuthorModel from '@models/AuthorModel';

class AuthorController {
  public async create(req: Request, res: Response): Promise<Response> {
    return res.json({
      message: 'TODO: Implement CREATE'
    });
  }

  public async read(req: Request, res: Response): Promise<Response> {
    return res.json({
      message: 'TODO: Implement READ'
    });
  }

  public async update(req: Request, res: Response): Promise<Response> {
    return res.json({
      message: 'TODO: Implement UPDATE'
    });
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    return res.json({
      message: 'TODO: Implement DELETE'
    });
  }
}

export default new AuthorController();
