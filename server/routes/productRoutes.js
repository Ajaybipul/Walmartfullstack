const express = require('express');
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    fetchProductsByCategory
} = require('../controllers/productController');

const router = express.Router();

router.get('/products', getAllProducts); // Get all products
router.get('/products/:id', getProductById); // Get product by ID
router.post('/products', createProduct); // Create a new product
router.put('/products/:id', updateProduct); // Update a product by ID
router.delete('/products/:id', deleteProduct); // Delete a product by ID
router.get('/products/category/:category', fetchProductsByCategory); // Get products by category

module.exports = router;
