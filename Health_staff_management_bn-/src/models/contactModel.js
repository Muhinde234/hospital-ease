
const { pool } = require('../config/database');

const createContactMessage = async (name, email, subject, messageBody) => {
  const [result] = await pool.execute(
    'INSERT INTO contacts (name, email, subject, message_body) VALUES (?, ?, ?, ?)',
    [name, email, subject, messageBody]
  );
  return result.insertId;
};

module.exports = {
  createContactMessage,
};