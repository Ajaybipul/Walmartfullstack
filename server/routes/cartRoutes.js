const express = require('express');
const { getCart, addItemToCart, removeItemFromCart, clearCart } = require('../controllers/cartController');
const { authMiddleware } = require('../middlewares/authMiddleware');  // Import the middleware

const router = express.Router();

// Route to get the current user's cart
router.get('/', authMiddleware, getCart);

// Route to add an item to the cart
router.post('/add', authMiddleware, addItemToCart);

// Route to remove an item from the cart
router.post('/remove', authMiddleware, removeItemFromCart);

// Route to clear the entire cart
router.post('/clear', authMiddleware, clearCart);

module.exports = router;
