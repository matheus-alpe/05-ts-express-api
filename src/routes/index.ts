import { Router } from 'express';

import AuthorRoute from './AuthorRoute';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Book API'
  });
});

routes.use('/authors', AuthorRoute);

export default routes;
