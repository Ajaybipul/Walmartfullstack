const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String, // Add phone number field
  },
  address: {
    type: String, // Add address field
  },
  answer: {
    type: String, // Add answer field for password reset
  },
  refreshToken: {
    type: String,
  },
}, { timestamps: true }); // Optional: add timestamps for createdAt and updatedAt

module.exports = mongoose.model('User', userSchema);
