const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Utility function to generate tokens
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '15m' } // Access token valid for 15 minutes
  );
  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' } // Refresh token valid for 7 days
  );
  return { accessToken, refreshToken };
};

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, email, password, phone, address, answer } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    });

    await user.save();

    const tokens = generateTokens(user);
    user.refreshToken = tokens.refreshToken;
    await user.save();

    res.json({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login an existing user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login Request Body:', req.body);

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate tokens
    const tokens = generateTokens(user);
    console.log('Tokens:', tokens);

    // Save refresh token
    user.refreshToken = tokens.refreshToken;
    await user.save();

    res.json({
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).send('Server error');
  }
};

// Refresh tokens
exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) return res.status(403).json({ msg: 'Refresh token required' });

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ msg: 'Invalid refresh token' });
    }

    const tokens = generateTokens(user);
    user.refreshToken = tokens.refreshToken;
    await user.save();

    res.json({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken });
  } catch (err) {
    console.error(err.message);
    res.status(403).json({ msg: 'Invalid token' });
  }
};

// Forgot Password
exports.forgotPasswordController = async (req, res) => {
  const { email, answer, newPassword } = req.body;

  try {
    if (!email || !answer || !newPassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({ success: false, message: "Wrong Email or Answer" });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(user._id, { password: hashed });

    res.status(200).send({ success: true, message: "Password Reset Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Something went wrong" });
  }
};

// Test Route
exports.testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.error(error);
    res.send({ error });
  }
};
