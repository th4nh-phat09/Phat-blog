import { newController } from '../app/controllers/newsController.js';
import express from 'express';

const routes = express.Router();

// [GET /news/:slug]
routes.get('/:slug', newController.show);

// [GET /news]
routes.get('/', newController.index);

export default routes;
