const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: 'Meu Bolso Seguro',
        version: '0.0.1',
        status: 'on'
    });
});

module.exports = router;