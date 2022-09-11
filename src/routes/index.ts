import { Router } from 'express';

import AuthorRoute from './AuthorRoute';
import BookRoute from './BookRoute';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Book API'
  });
});

routes.use('/authors', AuthorRoute);
routes.use('/books', BookRoute);

export default routes;
