import { newController } from '../app/controllers/newsController.js'
import express from "express";

const routes =express.Router();


// [GET /news/:slug]
routes.use('/:slug', newController.show);

// [GET /news]
routes.use('/', newController.index);



export default routes ;


