const socket = io();
let username = prompt('Enter your name:');

// Emit user joined event with username
socket.emit('user joined', username);

document.getElementById('send').onclick = function() {
    const input = document.getElementById('m');
    const messageContent = input.value;

    // Append sent message
    appendMessage(messageContent, 'sent');

    socket.emit('chat message', { user: username, content: messageContent });
    input.value = '';
};

socket.on('chat message', function(data) {
    if(data.user !== username) { // If not the current user's message
        appendMessage(data.content, 'received', data.user);
    }
});

function appendMessage(msg, type, user = null) {
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = type === 'received' ? `${user}: ${msg}` : msg;
    messages.appendChild(message);
}

socket.on('user list', function(users) {
    const userList = document.getElementById('users');
    userList.innerHTML = ''; // Clear current list
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.textContent = user;
        userList.appendChild(userDiv);
    });
});
