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

exports.update = (req, res, next) => {
    repository.update(req).then(data => {
        res.status(200).send(data);            
    }).catch(err => {
        res.status(503).send(err);
    });
}

exports.delete = (req, res, next) => {
    repository.remove(req.param.id).then(data => {
        res.staus(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
}