const braintree = require('braintree');
const Cart = require('../models/Cart');
const dotenv = require('dotenv');

dotenv.config();

// Braintree Gateway Configuration
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

// Generate Braintree Token
const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, (err, response) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.json({ clientToken: response.clientToken });
    });
  } catch (error) {
    console.log("Error generating Braintree token:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Process Braintree Payment
const brainTreePaymentController = async (req, res) => {
  try {
    const { nonce, cartId } = req.body;

    // Fetch the cart using cartId
    const cart = await Cart.findById(cartId).populate('items.product');

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Calculate total amount
    const totalAmount = cart.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    // Create a new transaction in Braintree
    gateway.transaction.sale(
      {
        amount: totalAmount.toString(), // Ensure amount is a string
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true, // Automatically submit for settlement
        },
      },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        if (result.success) {
          // Update cart status to reflect successful payment
          cart.totalPrice = totalAmount;
          await cart.save();

          res.json({ success: true, transaction: result.transaction });
        } else {
          res.status(500).json({ error: result.message });
        }
      }
    );
  } catch (error) {
    console.log("Error processing Braintree payment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  braintreeTokenController,
  brainTreePaymentController,
};
