const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainController')

router.get('/', mainControllers.index)
router.get('/detalle', mainControllers.detalleMenu)

module.exports= router