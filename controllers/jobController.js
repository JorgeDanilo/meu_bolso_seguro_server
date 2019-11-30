'use strict';
const schedule = require('node-schedule');

var job = schedule.scheduleJob('*/1 * * * *', function(fireDate) {
    console.log(`This job was supposed to run at ${fireDate} but actually ran at ${new Date()}`);
});