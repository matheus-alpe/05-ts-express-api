import { NextFunction, Request, Response } from 'express';
import Logging from '@library/Logging';

class LoggerMiddleware {
  public requestLogger(req: Request, res: Response, next: NextFunction) {
    const logMessage = `Incoming => Method: [${req.method}] - URL: [${req.url}] - IP [${req.socket.remoteAddress}]`;
    Logging.info(logMessage);

    res.on('finish', () => {
      const logHandler = res.statusCode < 400 ? Logging.log : Logging.error;
      logHandler(logMessage + ` - Status [${res.statusCode}]`);
    });

    next();
  }
}

export default new LoggerMiddleware();
