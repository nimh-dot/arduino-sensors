require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sensorRoutes = require('./routes/sensorRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/sensors', sensorRoutes);

// Connect to DB and start server
connectDB();
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
