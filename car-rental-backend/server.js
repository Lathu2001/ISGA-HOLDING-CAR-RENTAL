// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDB();

// Import Routes
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/car');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
