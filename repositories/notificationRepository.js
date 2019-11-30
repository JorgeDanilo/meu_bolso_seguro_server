'use strict';
const db = require('../config/db');

function register(data) {
    console.log(data.body.user_id);
    console.log(data.body.token);

    return new Promise((resolve, reject) => {
        db.notification.create({
            user_id: data.body.user_id,
            token: data.body.token
        }).then(newNotification => {
            console.log(`new notification create ${newNotification}`);
            resolve(newNotification);
        }).catch(err => {
            console.log(`erro to create notification ${err}`);
            reject(err);
        });
    });
}

module.exports = {register};