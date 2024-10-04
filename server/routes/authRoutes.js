const express = require('express');
const {
  registerUser,
  loginUser,
  refreshToken,
  forgotPasswordController,
  testController,
} = require('../controllers/authController');

const router = express.Router();

// User Registration
router.post('/register', registerUser);

// User Login
router.post('/login', loginUser);

// Token Refresh
router.post('/refresh-token', refreshToken);

// Forgot Password
router.post('/forgot-password', forgotPasswordController);

// Test Route (No authMiddleware)
router.get('/test', testController);

module.exports = router;
