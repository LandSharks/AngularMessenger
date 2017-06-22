var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('add-message', (message) => {
        Message.Type = "new-message";
        Message.Text = message.text;
        console.log(Message);
        io.emit('message', Message);
    });
})


http.listen(3000, function() {
    console.log('listening...');
});

var Message = {
  Text: String,
  Type: String
}
