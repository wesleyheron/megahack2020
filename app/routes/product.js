const express = require('express');
const router = express.Router();
const api = require('../controllers/product');
const authService = require('../services/auth-service');



router.get('/', api.get);
router.get('/:slug', api.getBySlug);
router.get('/tags:tag', api.getByTag);
router.get('/admin/:id', authService.authorize, api.getByCompany);

router.post('/', authService.authorize, api.post);

router.put('/:id', authService.isAdmin, api.put);
router.delete('/', authService.isAdmin, api.delete);

//router.post('/authenticate', api.authenticate);
//router.post('/refresh-token', authService.authorize, api.refreshToken);

module.exports = router;
