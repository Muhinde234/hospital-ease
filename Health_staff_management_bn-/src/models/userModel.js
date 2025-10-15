
const { pool } = require('../config/database');

const createUser = async (firstName, lastName, email, hashedPassword, role) => {
  const [result] = await pool.execute(
    'INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)',
    [firstName, lastName, email, hashedPassword, role]
  );
  return result.insertId;
};

const findUserByEmail = async (email) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const findUserById = async (id) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

const updateUserPassword = async (id, newHashedPassword) => {
  await pool.execute('UPDATE users SET password = ?, reset_password_token = NULL, reset_password_expire = NULL WHERE id = ?',
    [newHashedPassword, id]
  );
};

const setResetToken = async (email, token, expire) => {
  await pool.execute('UPDATE users SET reset_password_token = ?, reset_password_expire = ? WHERE email = ?',
    [token, expire, email]
  );
};

const findUserByResetToken = async (token) => {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE reset_password_token = ? AND reset_password_expire > NOW()',
    [token]
  );
  return rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  updateUserPassword,
  setResetToken,
  findUserByResetToken,
};