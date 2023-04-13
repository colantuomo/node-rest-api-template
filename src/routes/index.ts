import express from 'express';

import { middlewares } from '../middlewares';
import { userRoutes } from './users';

const routes = express.Router();

routes.use(middlewares.checkAuthorization);
routes.use('/users', userRoutes);

export { routes };
