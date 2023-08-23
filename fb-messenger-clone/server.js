const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let users = {};

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('user joined', (username) => {
        socket.username = username;
        users[socket.id] = username;
        io.emit('user list', Object.values(users));
    });

    socket.on('chat message', (data) => {
        console.log("Server.js data from socket.on(chat message)", data)
        io.emit('chat message', data);
    });

    socket.on('disconnect', () => {
        delete users[socket.id];
        io.emit('user list', Object.values(users));
        console.log('User disconnected');
    });
});

app.use(express.static('public'));
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
