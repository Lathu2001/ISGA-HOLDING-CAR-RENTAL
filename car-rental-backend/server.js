const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();

// Middleware for CORS
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this if your frontend is hosted somewhere else
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Parse JSON body
app.use(express.json());

// Connect to the database
connectDB();

// Import routes
const authRoutes = require('./routes/auth');  // Ensure correct path

// Use routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
