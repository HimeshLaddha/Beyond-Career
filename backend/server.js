const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const route = require('./routes/contact')

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', route);
app.use('/', (req, res) => res.send("Backend is running"));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
