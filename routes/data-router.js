const express = require('express')

const DataCtlr = require('../controllers/data-ctrl')

const router = express.Router()

router.post('/add', DataCtlr.createData)
router.get('/data', DataCtlr.getData)

module.exports = router