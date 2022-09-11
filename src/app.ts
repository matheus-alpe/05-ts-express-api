import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import Logging from './library/Logging';
import apiRoutes from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  const logMessage = `Incoming => Method: [${req.method}] - URL: [${req.url}] - IP [${req.socket.remoteAddress}]`;
  Logging.info(logMessage);

  res.on('finish', () => {
    Logging.info(logMessage + ` - Status [${res.statusCode}]`);
  });

  next();
});

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));

app.use(apiRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  Logging.error(error);

  return res.status(404).json({ message: error.message });
});

export default app;
