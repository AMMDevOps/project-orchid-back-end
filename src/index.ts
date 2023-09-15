import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import pool from './db'; // Az adatbázis kapcsolat

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Express kezelő útvonalak itt


app.get('/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (error) {
      console.error('Hiba a lekérdezés során:', error);
      res.status(500).json({ error: 'Valami hiba történt' });
    }
  });
  
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
