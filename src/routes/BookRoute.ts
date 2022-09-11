import { Router } from 'express';
import BookController from '@controllers/BookController';

const routes = Router();

routes.post('/', BookController.create);
routes.get('/', BookController.readAll);
routes.get('/:bookId', BookController.read);
routes.put('/:bookId', BookController.update);
routes.delete('/:bookId', BookController.delete);

export default routes;
