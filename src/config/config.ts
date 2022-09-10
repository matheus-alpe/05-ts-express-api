import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/bd';
const SERVER_PORT = Number(process.env.PORT) || 1337;

export const config = {
  mongo: {
    uri: MONGO_URI
  },
  server: {
    port: SERVER_PORT
  }
};
