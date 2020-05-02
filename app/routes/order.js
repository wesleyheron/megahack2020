const express = require('express');
const router = express.Router();
const api = require('../controllers/order');
const authService = require('../services/auth-service');


router.get('/', authService.authorize, api.get);
router.post('/', authService.authorize, api.post);

module.exports = router;