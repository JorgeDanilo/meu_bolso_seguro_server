'use strict';
const repository = require('../repositories/movementRepository');

exports.get = (req, res, next) => {
    repository.getAll().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};

exports.getById = (req, res, next) => {
    var idMovement = req.params.id;
    repository.getById(idMovement).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};

exports.getAllPrice = (req, res, next) => {
    repository.getAllPrice().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(503).send(err);
    });
};

exports.getAllByMother = (req, res, next) => {

};