const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authcontroller');

// Route to handle user registration by calling registerUser controller
router.post('/register', registerUser);

// Route to handle user login by calling loginUser controller
router.post('/login', loginUser);

module.exports = router;
