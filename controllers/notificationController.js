'use strict';
const firebase = require("firebase-admin");
const notificationRepository = require('../repositories/notificationRepository');
const serviceAccount = require('../config/meu-bolso-seguro.json');
const firebaseToken = "";

exports.register = (req, res, next) => {
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
    
};