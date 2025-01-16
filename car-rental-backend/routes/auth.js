const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');  // Removed loginUser

router.post('/register', registerUser);  // Removed /login route

module.exports = router;
