const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const personRouter = require('./routes/userRouter');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', index);
app.use('/users', personRouter);
app.listen(3000);
console.log('api success');

module.exports = app;