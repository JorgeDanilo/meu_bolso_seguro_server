'use strict';
const repository = require('../repositories/movementRepository');

exports.get = (req, res, next) => {
    repository.getAll().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};

exports.getPrice = (req, res, next) => {
    repository.getPrice().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};

exports.getAllByMoth = (req, res, next) => {
    repository.getAllByMoth(req.query.month).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};
