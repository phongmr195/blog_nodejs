const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/:news_slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
