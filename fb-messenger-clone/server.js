const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

let users = [];

io.on('connection', (socket) => {
    // ... previous code

    socket.on('user joined', (username) => {
        if(!users.includes(username)) {
            users.push(username);
            io.emit('user list', users);
        }
    });

    socket.on('disconnect', () => {
        users = users.filter(u => u !== socket.username);
        io.emit('user list', users);
        console.log('User disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

