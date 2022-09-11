import { Router } from 'express';
import AuthorController from '@controllers/AuthorController';

const routes = Router();

routes.post('/', AuthorController.create);
routes.get('/', AuthorController.readAll);
routes.get('/:authorId', AuthorController.read);
routes.put('/:authorId', AuthorController.update);
routes.delete('/:authorId', AuthorController.delete);

export default routes;
