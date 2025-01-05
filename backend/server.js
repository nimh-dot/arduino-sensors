require('dotenv').config();
const { API_PORT } = require('./config/env');
const express = require('express');
const bodyParser = require('body-parser');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();
const PORT = API_PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/sensors', sensorRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

