var field = document.getElementById('field');
var chat = document.getElementById('chat');

var ws = new WebSocket('ws://192.168.88.236:80');

ws.onmessage = function(message) {
  chat.value = message.data + '\n' + chat.value;
}

ws.onopen = function() {
  field.addEventListener('keydown', function(event) {
    if(event.which == '13') {
      ws.send('Степан: ' + field.value);
      field.value = '';
    }
  })
}
