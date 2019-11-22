const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/authenticate', controller.authenticate)
router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
