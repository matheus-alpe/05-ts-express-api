import http from 'http';
import mongoose from 'mongoose';
import app from './app';
import { config } from './config/config';
import Logging from './library/Logging';

function startServer() {
  Logging.info('Connected to mongoDB');

  http.createServer(app).listen(config.server.port, () => {
    Logging.info(`Listening: http://localhost:${config.server.port}`);
  });
}

mongoose
  .connect(config.mongo.uri)
  .then(startServer)
  .catch((error) => {
    Logging.error('Unable to connect:');
    Logging.error(error);
    mongoose.disconnect();
  });
