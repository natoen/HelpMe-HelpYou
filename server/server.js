var express = require('express');
var mongoose = require('mongoose');
var messageSchema = require('./messages/messageSchema.js');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//socket.io connection
io.on('connection', function (socket) {
  console.log('A user has connected!');

  socket.on('message', function(data) {
    var newMessage = new messageSchema({username: data.username, friend: data.friend, message: data.message});

    newMessage.save(function(err) {
      if (err) { throw err; }
      io.emit('message', {username: data.username, friend: data.friend, message: data.message});
    });
  });

  socket.on('loadMessages', function(data) {
    messageSchema.find({ $or:
        [{username: data.username, friend: data.friend},
         {username: data.friend, friend: data.username}]
      })
      .limit(20)
      .sort('+createdAt')
      .exec(function(err, data) {
        if (data) {
          for (var i = 0; i < data.length; i++) {
            delete data[i].createdAt;
            delete data[i].__v;
            delete data[i]._id;
            io.emit('loadMessage', data[i]);
          }
        }

        io.emit('msgNotLoaded', false);
      });

  });

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
