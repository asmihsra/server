// server/server.js
const express = require('express');
const app = express();

// Import routes
const routes = require('./routes/index');

// Middleware (if needed)
app.use(express.json());

// Use routes
app.use('/', routes);

// Export the handler for Vercel (this is how Vercel works with serverless functions)
module.exports = app;
