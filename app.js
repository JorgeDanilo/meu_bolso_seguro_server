const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const userRouter = require('./routes/userRouter');
const expenseRouter = require('./routes/expenseRouter');
// const inputsouter = require('./routes/inputRouter');
const movementRouter = require('./routes/movementRouter');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//  Create root endpont.

app.use('/', index);
app.use('/users', userRouter);
app.use('/expenses', expenseRouter);
// app.use('/inputs', inputsouter);
app.use('/movements', movementRouter);

app.listen(3000);
console.log('api loaded success');

module.exports = app;