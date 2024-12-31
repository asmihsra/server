// routes/index.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/hey', userController.getHey);
router.get('/hello', userController.getHello);
router.get('/hi', userController.getHi);
router.get('/hai', userController.getHai);

router.post('/verify', userController.verifyData);
router.post('/authenticate', userController.authenticate);

module.exports = router;
