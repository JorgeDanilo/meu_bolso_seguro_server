const express = require('express');
const router = express.Router();
const controller = require('../controllers/movementController');

router.get('/', controller.get);
router.get('/prices', controller.getPrice);
router.get('/filter', controller.getAllByMoth);

module.exports = router;
