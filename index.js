var wss = require('ws').Server;
var server = new wss({ port: 80 });
var clients = new Set();

  server.on('connection', function(socket) {
    clients.add(socket);

    socket.on('message', function(message) {
      for(var client of clients) {
        client.send(message);
      }
    });

    socket.on('close', function() {
      client.delete(socket);
    });
  });
