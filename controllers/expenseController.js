'use strict';
const repository = require('../repositories/expenseRepository');

exports.get = (req, res, next) => {
    repository.getAll().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.send(503).send(err);
    });
};