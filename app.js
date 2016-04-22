var express = require('express');
var path = require('path');
var http = require('http');
var routes = require('./routes');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var users = require('./routes/users');
var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments 
app.set('port',process.env.PORT || 8888);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password : '123456',
        port : 3306, //port mysql
        database:'db_drugs'
    },'pool') //or single
);

app.get('/', routes.index);
app.get('/users', users.list);
app.get('/users/add', users.add);
app.post('/users/add', users.save);
app.get('/users/delete/:id', users.delete_user);
app.get('/users/edit/:id', users.edit);
app.post('/users/edit/:id',users.save_edit);
app.get('/users/search',users.search);
app.post('/users/search',users.search_run);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
