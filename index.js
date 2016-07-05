var express = require('express');
var home = require('./routes/home.js');

var pub = __dirname + '/public';

var app = express();
app.use(express.static(pub));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', home.index);

app.listen(3000);
