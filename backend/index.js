const express = require('express');
const { connectDB } = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
require('dotenv').config();
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: ['https://frontend-chi-brown-61.vercel.app', 'http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json());

app.get('/', async (req, res) => res.send('Welcome to Abstract Help Center!'))

// Routes
app.get('/ping', (req, res) => res.send('Help Center is open for help!'));
app.use(cardRoutes);

// Connect to the database
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Help Center is helping on port ${PORT}`);
  });
});
