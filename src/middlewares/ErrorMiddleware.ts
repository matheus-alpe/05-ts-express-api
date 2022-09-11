import { NextFunction, Request, Response } from 'express';
import Logging from '@library/Logging';

class ErrorMiddleware {
  public notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
  }

  public errorHandler(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    Logging.error(error.message);
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode);
    res.json({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
    });
  }
}

export default new ErrorMiddleware();
