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
    var month = req.query.month;
    var startDate = req.query.startDate;
    var endDate = req.query.endDate;
    if (month) {
        repository.getAllByMoth(req.query.month).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(503).send(err);
        });
    } else if (startDate && endDate) {
        repository.getAllByDate(startDate, endDate).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(503).send(err);
        });
    }
    
};
