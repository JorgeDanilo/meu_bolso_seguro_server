'use strict';
const db = require('../config/db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

function register(data) {
    return new Promise((resolve, reject) => {
        db.notification.create({
            user_id = data.userId,
            token: data.token
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