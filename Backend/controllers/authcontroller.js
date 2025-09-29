const { poolPromise, sql } = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Register a new user: hash password and insert into Users table
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const pool = await poolPromise;
    const hash = await bcrypt.hash(password, 10);
    await pool.request()
      .input('Name', sql.NVarChar, name)
      .input('Email', sql.NVarChar, email)
      .input('PasswordHash', sql.NVarChar, hash)
      .query('INSERT INTO Users (Name, Email, PasswordHash, CreatedAt) VALUES (@Name,@Email,@PasswordHash, GETDATE())');
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login user: validate email & password, then return JWT token
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('Email', sql.NVarChar, email)
      .query('SELECT * FROM Users WHERE Email=@Email');

    const user = result.recordset[0];
    if (!user) return res.status(400).json({ message: 'User not found' });

    const validPass = await bcrypt.compare(password, user.PasswordHash);
    if (!validPass) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.UserId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
