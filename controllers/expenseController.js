'use strict';
const repository = require('../repositories/expenseRepository');

exports.get = (req, res, next) => {
    repository.getAll().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.send(503).send(err);
    });
};

exports.post = (req, res, next) => {
    repository.create(req).then(data  => {
        res.status(200).send(data);
    }).catch(err => {
        res.send(503).send(err);
    });
};

exports.put = (req, res, next) => {
    repository.update(req).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};

exports.delete = (req, res, next) => {
    repository.remove(req.param.id).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};