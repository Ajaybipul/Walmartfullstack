const Cart = require('../models/Cart');
const Product = require('../models/Product');




// Get Cart for a specific user
exports.getCart = async (req, res) => {
  try {
    // Populate product details for each item in the cart
    const cart = await Cart.findOne({ user: req.user }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add item to Cart
exports.addItemToCart = async (req, res) => {
  const { productId, quantity, size } = req.body;

  try {
    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Find or create a new cart for the user
    let cart = await Cart.findOne({ user: req.user });
    if (!cart) {
      cart = new Cart({
        user: req.user,
        items: [{ product: productId, quantity, size }],
        totalPrice: product.price * quantity, // Initial total price
      });
    } else {
      // Find the item in the cart with the same productId and size
      const existingItemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId && item.size === size
      );

      // Update quantity if the item exists, otherwise add a new item
      if (existingItemIndex >= 0) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity, size });
      }

      // Recalculate total price with populated product details
      await cart.populate('items.product'); // Populate product details
      cart.totalPrice = cart.items.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      );
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    console.error('Add to cart error:', error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
};

// Remove item from Cart
exports.removeItemFromCart = async (req, res) => {
  const { productId, size } = req.body;
  try {
    // Find the user's cart
    let cart = await Cart.findOne({ user: req.user }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Filter out the item with the matching productId and size
    cart.items = cart.items.filter(
      (item) => !(item.product._id.toString() === productId && item.size === size)
    );

    // Check if cart is empty and reset the total price
    if (cart.items.length === 0) {
      cart.totalPrice = 0;
    } else {
      // Recalculate total price using populated product prices
      cart.totalPrice = cart.items.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      );
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Remove from cart error:', error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
};

// Clear entire Cart
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
