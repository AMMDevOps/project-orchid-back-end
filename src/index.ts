import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Express kezelő útvonalak itt

io.on('connection', (socket) => {
    console.log('Felhasználó csatlakozott');

    socket.on('disconnect', () => {
        console.log('Felhasználó lecsatlakozott');
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`A szerver fut a ${PORT} porton`);
});
