import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';

const app = express();

mongoose
  .connect(config.mongo.uri)
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  });
