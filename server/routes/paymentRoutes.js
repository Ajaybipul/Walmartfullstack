const express = require('express');
const { braintreeTokenController, brainTreePaymentController } = require('../controllers/paymentController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// Generate Braintree Token
router.get('/token', braintreeTokenController);

// Process Payment - Requires Authentication
router.post('/process', authMiddleware, brainTreePaymentController);

module.exports = router;
