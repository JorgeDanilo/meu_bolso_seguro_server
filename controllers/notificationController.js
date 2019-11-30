'use strict';
const firebase = require("firebase-admin");
const repository = require('../repositories/notificationRepository');
const serviceAccount = require('../config/meu-bolso-seguro.json');

exports.send = (req, res, next) => {
    var firebaseToken = "dI-bHNCja-8:APA91bEt4MVD4WjyUe7Ce-s4NVDH9j624oR4LKyP8NjIo7WjU3DffHOJL6pcs3UafO0SebWHvfVLYuluOtOjvRSCu2vyDrr96gxPUD6FzaxznB4Bl1U5Nu0wcWO_J1CqA2dPAlxA19YC"
    // var userId = req.param.userId;
    // repository.findById(userId).then(notification => {
    //     const firebaseToken = notification.token;
    //     firebase.initializeApp({
    //         credential: firebase.credential.cert(serviceAccount),
    //         databaseURL: 'https://meu-bolso-seguro.firebaseio.com'
    //     });
        
    //     const payload = {
    //         notification: {
    //             title: 'Notification title',
    //             body: 'This is an example notification',
    //         }
    //     };
        
    //     const options = {
    //         priority: 'high',
    //         timeToLive: 60 * 60 * 24,   
    //     };
        
    //     firebase.messaging.sendToDevice(firebaseToken, payload, options);
    // })



    firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        databaseURL: 'https://meu-bolso-seguro.firebaseio.com'
    });
    
    const payload = {
        notification: {
            title: 'Notification title Via Api',
            body: 'This is an example notification',
        }
    };
    
    const options = {
        priority: 'high',
        timeToLive: 60 * 60 * 24,   
    };
    
    
    firebase.messaging().sendToDevice(firebaseToken, payload, options).then(result => {
        res.status(200).send(res);
    }).catch(err => {
        res.status(503).send(err);
    });
   
};

exports.register = (req, res, next) => {
   repository.register(req).then(data => {
       res.status(200).send(data);
   }).catch(err => {
       res.status(503).send(err);
   });
};