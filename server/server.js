var express = require('express');
var mongoose = require('mongoose');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//socket.io connection
io.on('connection', function (socket) {
  console.log('A user has connected!');

  socket.on('message', function(data) {
    io.emit('message', {username: data.username, friend: data.friend, message: data.message});
  })

  socket.on('disconnect', function() {
    console.log('A user has disconnected...');
  });
});

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/helpme';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Mongodb connection open');
});

// middleware and routing configuration
require('./config/middleware.js')(app, express);
require('./config/route.js')(app, express);

var port = process.env.PORT || 3000;

server.listen(port);
console.log('Server is running on ' + port);

module.exports = app;
