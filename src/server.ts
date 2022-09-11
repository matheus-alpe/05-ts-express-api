import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';

const app = express();

mongoose
  .connect(config.mongo.uri)
  .then(() => {
    Logging.info('Connected to mongoDB');
  })
  .catch((error) => {
    Logging.error('Unable to connect:');
    Logging.error(error);
  });
