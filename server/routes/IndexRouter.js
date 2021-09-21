const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const { HomeController, ErrorController } = require('../controller');

router.use(middleware);
router.get('/', HomeController);
router.get('*', ErrorController);

module.exports = router;
