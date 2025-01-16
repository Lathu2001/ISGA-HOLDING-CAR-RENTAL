const express = require('express');
require('dotenv').config();  // Load environment variables
const connectDB = require('./config/db');  // MongoDB connection function

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Add a simple GET route to test
app.get('/', (req, res) => {
    res.send('API is working!');
});

// Import and use routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);  // Prefix the auth routes with /api/auth

connectDB();  // Connect to MongoDB

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
