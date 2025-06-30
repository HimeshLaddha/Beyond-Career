const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/status', (req, res)=> res.send("Backend is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
