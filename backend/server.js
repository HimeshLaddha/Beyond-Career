const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const route = require('./routes/contact')

dotenv.config();
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors({
  origin: 'https://beyond-career-one.vercel.app', // include your frontend URLs
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/contact', route);

app.get('/', (req, res) => res.send('Backend is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
