var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('add-message', (message) => {
    io.emit('message', message);
  });
});

http.listen(3000, function () {
  console.log('listening...');
});
