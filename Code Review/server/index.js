var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('add-message', (message) => {
    // store in db
    storeInDb(message).then(() => {
      // emit to all subscriptions
      io.emit('message', message);
    }).catch(() => {
      console.log("Error");
    });



    // Message.Type = "new-message";
    // Message.Text = message.Text;
    // console.log(Message);
    // io.emit('message', Message);
  });
})

function storeInDb(message) {
  return new Promise((resolve, reject) => {
    if (message) {
      db.push().then(() => {
        resolve();
      }).catch(() => {
        reject();
      })
    } else {
      reject();
    }
  });
}


http.listen(3000, function () {
  console.log('listening...');
});

var Message = {
  Text: String,
  Type: String
}