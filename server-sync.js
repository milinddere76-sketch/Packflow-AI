/* server-sync.js - Simple Express + Socket.IO sync server for PackFlow ERP */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Sync client connected:', socket.id);

  socket.on('sync:update', (payload) => {
    // Broadcast update to all other clients
    socket.broadcast.emit('sync:update', payload);
  });

  socket.on('disconnect', () => {
    console.log('Sync client disconnected:', socket.id);
  });
});

// HTTP endpoint to broadcast a sync from external systems
app.post('/api/sync', (req, res) => {
  const payload = req.body || {};
  io.emit('sync:update', payload);
  res.json({ ok: true });
});

const PORT = process.env.SYNC_PORT || 4000;
httpServer.listen(PORT, () => console.log(`🔁 Sync server listening on http://localhost:${PORT}`));
