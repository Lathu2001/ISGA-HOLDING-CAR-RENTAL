const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');



dotenv.config(); // Load environment variables

const app = express();

// Allow cross-origin requests
app.use(cors({
    origin: 'http://localhost:5173', // The frontend URL (replace if different)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

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
