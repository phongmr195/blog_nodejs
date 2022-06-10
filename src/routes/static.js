const express = require('express');
const router = express.Router();
const pageController = require('../app/controllers/PageController');

router.use('/', pageController.index);

module.exports = router;