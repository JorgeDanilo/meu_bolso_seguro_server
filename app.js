const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const userRouter = require('./routes/userRouter');
const expenseRouter = require('./routes/expenseRouter');
const inputRouter = require('./routes/inputRouter');
const movementRouter = require('./routes/movementRouter');
const notificationRouter = require('./routes/notificationRouter');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//  Create root endpont.
app.use('/', index);
app.use('/users', userRouter);
app.use('/expenses', expenseRouter);
app.use('/inputs', inputRouter);
app.use('/movements', movementRouter);
app.use('/notifications', notificationRouter);


app.listen(3000);
console.log('api loaded success');

module.exports = app;