import express from 'express';
import { siteController } from '../app/controllers/sitesController.js';
var router = express.Router();

//[GET] /search
router.get('/search', siteController.search);

//[GET] /
router.get('/', siteController.home);

export default router;
