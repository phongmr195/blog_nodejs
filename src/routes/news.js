const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.use('/:news_slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;