const socket = io();
let username = prompt('Enter your name:');

socket.emit('user joined', username);

document.getElementById('send').onclick = function() {
    const input = document.getElementById('m');
    const messageContent = input.value;
    const data = { user: username, content: messageContent };

    appendMessage(data, 'sent');
    socket.emit('chat message', data);
    input.value = '';
};

socket.on('chat message', function(data) {
    if(data.user !== username) {
        appendMessage(data, 'received');
    }
});

function appendMessage(data, type) {
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = type === 'received' ? `${data.user}: ${data.content}` : data.content;
    messages.appendChild(message);
}; 

socket.on('user list', function(userList) {
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = ''; 
    userList.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.textContent = user;
        usersDiv.appendChild(userDiv);
    });
});
