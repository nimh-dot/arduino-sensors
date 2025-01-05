const pool = require('../config/db');

// Обработка POST-запроса для получения данных от датчиков
const postSensorData = async (req, res) => {
  const { sensorID, value } = req.body;

  if (!sensorID || value === undefined) {
    return res.status(400).json({ message: 'Invalid data format' });
  }

  try {
    // Подключение к базе данных и вставка данных
    const conn = await pool.getConnection();
    const result = await conn.query('INSERT INTO sensor_data (sensorID, value) VALUES (?, ?)', [sensorID, value]);
    conn.release();
    res.status(201).json({ message: 'Data saved successfully', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Получение исторических данных
const getSensorData = async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query('SELECT * FROM sensor_data ORDER BY timestamp DESC LIMIT 100');
    conn.release();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { postSensorData, getSensorData };
