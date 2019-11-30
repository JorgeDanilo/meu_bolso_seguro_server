'use strict';
const firebase = require("firebase-admin");
const repository = require('../repositories/notificationRepository');
const serviceAccount = require('../config/meu-bolso-seguro.json');

exports.send = (req, res, next) => {
    var userId = req.param.userId;
    repository.findById(userId).then(notification => {
        const firebaseToken = notification.token;
        firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
            databaseURL: 'https://meu-bolso-seguro.firebaseio.com'
        });
        
        const payload = {
            notification: {
                title: 'Notification title',
                body: 'This is an example notification',
            }
        };
        
        const options = {
            priority: 'high',
            timeToLive: 60 * 60 * 24,   
        };
        
        firebase.messaging.sendToDevice(firebaseToken, payload, options);
    })
   
};

exports.register = (req, res, next) => {
   repository.register(req).then(data => {
       res.status(200).send(data);
   }).catch(err => {
       res.status(503).send(err);
   });
};