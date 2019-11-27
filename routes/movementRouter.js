const express = require('express');
const router = express.Router();
const controller = require('../controllers/movementController');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/allprice', controller.getAllPrice);

module.exports = router;
