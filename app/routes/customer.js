const express = require('express');
const router = express.Router();
const api = require('../controllers/customer');
const authService = require('../services/auth-service');


router.get('/', api.get);
router.get('/:email', api.getByEmail);
router.post('/', api.post);
router.post('/authenticate', api.authenticate);
router.post('/refresh-token', authService.authorize, api.refreshToken);

module.exports = router;
