import { Router } from 'express';
import AuthorController from '@controllers/AuthorController';

const routes = Router();

routes.post('/', AuthorController.create);
routes.get('/', AuthorController.read);
routes.put('/', AuthorController.update);
routes.delete('/', AuthorController.delete);

export default routes;
