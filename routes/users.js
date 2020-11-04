const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');
const userController = require('../controllers/users')

const {
  forwardAuthenticated
} = require('../config/auth');

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));




// Register
router.post('/register', userController.register_user)

// Login
router.post('/login',userController.login_user );

// Logout
router.get('/logout', userController.logout);

module.exports = router;