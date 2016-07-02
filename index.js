var express = require('express');
var home = require('./routes/home.js');
var customers = require('./routes/customer.js');

var app = new express();
var port = 5000;

app.get('/', home.index);
app.get('/customers', customers.index);
app.get('/customers/contact', customers.contact);

app.listen(port);
