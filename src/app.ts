import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { ErrorMiddleware, LoggerMiddleware } from '@middlewares';
import apiRoutes from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(LoggerMiddleware.requestLogger);

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));

app.use(apiRoutes);

app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.errorHandler);

export default app;
