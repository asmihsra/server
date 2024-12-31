const express = require('express');
const app = express();
const routes = require('./routes/index');

// Middleware (optional, if you want to parse JSON)
app.use(express.json());

// Use the routes defined in the index file
app.use('/', routes);

// Export the app for Vercel to use as a serverless function
module.exports = app;
