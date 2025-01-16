// routes/auth.js

const express = require('express');
const { registerUser } = require('../controllers/authController');  // Correct the import

const router = express.Router();

// Register route
router.post('/register', registerUser);  // Use the correct function name

module.exports = router;
