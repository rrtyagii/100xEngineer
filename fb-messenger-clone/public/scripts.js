const socket = io();

document.getElementById('send').onclick = function() {
    const input = document.getElementById('m');
    socket.emit('chat message', input.value);
    input.value = '';
};

socket.on('chat message', function(msg){
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = msg;
    messages.appendChild(message);
});

