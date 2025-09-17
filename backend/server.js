require('dotenv').config({ path: './.env' }); // Load environment variables

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // Postgres client

const app = express();

// Middleware: Allow CORS and parse JSON
app.use(cors());
app.use(express.json());

// Postgres connection pool (uses variables from .env)
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'postgres',  // Connects to Docker Postgres service
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,         // Postgres internal port
});

// Initialize database table (runs once on startup)
async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_forms (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Database init error:', err);
    process.exit(1); // Exit if DB setup fails
  }
}
initDB();

// API route: Handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await pool.query(
      'INSERT INTO contact_forms (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Form submission error:', err);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});