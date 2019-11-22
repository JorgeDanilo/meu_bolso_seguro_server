const express = require('express');
const router = express.Router();
const controller = require('../controllers/expenseController');

router.get('/', controller.get);
router.post('/expense', controller.post);

module.exports = router;