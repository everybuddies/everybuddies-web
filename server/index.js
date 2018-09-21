var module_path = require('app-module-path');
module_path.addPath(__dirname);
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var config = global.config = require('config.js');
// var port = config.port;
var initRootRouter = require('routes')();


var auth = require('http-auth');
var basic = auth.basic({
    realm: "users",
    file: "server/config/users.htpasswd"
});
app.use(auth.connect(basic));
app.use('/', express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(initRootRouter);
var server = app.listen(9100, function () {
    console.log('App listening on port %s', server.address().port);
});