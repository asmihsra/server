const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/index');  // Make sure this path is correct

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine (optional, if you're using views for rendering)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use the routes defined in routes/index.js
app.use('/', userRoutes);

// Set up the port the server will listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
