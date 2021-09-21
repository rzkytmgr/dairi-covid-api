const express = require('express');
const router = express.Router();

const middleware = require('../middleware');
const { DataController, DataKecamatanController, CustomIdData, ListKecamatanController } = require('../controller');
router.use(middleware);
router.get('/', DataController);
router.get('/kecamatan', DataKecamatanController);
router.get('/kecamatan/list', ListKecamatanController);
router.get('/kecamatan/:identifier', DataKecamatanController);
router.get('/:identifier', CustomIdData);
router.get('/:identifier/:kecamatan', CustomIdData);

module.exports = router;
