var express = require('express');

var port = 1337;
var app = express();

var exphbs = require('express-handlebars');
app.engine('.html', exphbs({defaultLayout: 'single', extname: '.html'}));
app.set('view engine', '.html');

app.set('views', __dirname + '/views');

//app.use(express.static(__dirname.replace('/src','') + '/public'));

var myroutes = require('./routes');
app.use('/', myroutes);

app.listen(port, function(){
  console.log('node listening on port '+port);
});

module.exports = app;
