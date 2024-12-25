import express from 'express';
import { siteController } from '../app/controllers/sitesController.js';
var router = express.Router();

//[GET] /search
router.use('/search', siteController.search);

//[GET] /
router.use('/', siteController.home);

export default router;
