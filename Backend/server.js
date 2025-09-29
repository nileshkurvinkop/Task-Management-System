const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/', authRoutes); // login/register routes

const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);// match frontend URL

// Test endpoint
app.get('/', (req, res) => {
  res.send('Backend running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
