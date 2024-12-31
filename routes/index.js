const express = require('express');
const router = express.Router();

// Sample route for the root
router.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Example of another route
router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

module.exports = router;
