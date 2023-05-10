const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

async function query(sql, params) {
  try {
    const [results] = await pool.query(sql, params);
    return results;
  } catch (error) {
    throw error;
  }
}

module.exports = { query, pool };
