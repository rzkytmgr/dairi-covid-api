const express = require('express');
const router = express.Router();

const middleware = require('../middleware');
const { DataController, DataKecamatanController, CustomIdData, ListKecamatanController } = require('../controller');

router.get('/', middleware, DataController);
router.get('/kecamatan', middleware, DataKecamatanController);
router.get('/kecamatan/list', middleware, ListKecamatanController);
router.get('/kecamatan/:identifier', middleware, DataKecamatanController);
router.get('/:identifier', middleware, CustomIdData);
router.get('/:identifier/:kecamatan', middleware, CustomIdData);

module.exports = router;
