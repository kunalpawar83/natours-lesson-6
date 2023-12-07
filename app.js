const express= require('express');
const morgan = require('morgan');
const tourrouter =require('./routes/tours.js')
const userroute = require('./routes/user.js');

const app =express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/user',userroute);
app.use('/api/v1/tours',tourrouter);


module.exports=app;