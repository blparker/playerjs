
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http');

var app = express();

app.configure(function(){
  app.use(express.favicon());
  app.use(app.router);
  app.use('/plugins', express.static(__dirname + '/../plugins'));
  app.use(express.static(__dirname + '/assets'));
});

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


http.createServer(app).listen(3000);
