var express = require('express');
var path = require('path');
var home = require('./routes/home.js');
var customers = require('./routes/customer.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
var port = 5000;

app.get('/', home.index);
app.get('/customers/:id', customers.index);
app.get('/customers/contact', customers.contact);

app.listen(port);
