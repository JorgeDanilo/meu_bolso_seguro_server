'use strict';
const repository = require('../repositories/inputRepository');

exports.get = (req, res, next) => {
    repository.getAll().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
}

exports.post = (req, res, next) => {
    repository.create(req).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
}