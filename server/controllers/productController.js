const Product = require('../models/Product');
const axios = require('axios');

// Fetch all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a single product
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    console.log(`Fetching product with ID: ${id}`);

    try {
        const product = await Product.findById(id);
        if (!product) {
            console.log(`Product not found with ID: ${id}`);
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

//create

exports.createProduct = async (req, res) => {
    const { title, price, description, image, category, rating } = req.body;
    const product = new Product({ title, price, description, image, category, rating });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (deletedProduct) {
            res.status(200).json(deletedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch products by category
// Get products by category
exports.fetchProductsByCategory = async (req, res) => {
    const { category } = req.params;
  
    try {
      // Fetch products based on the category from the database
      const products = await Product.find({ category: category.toLowerCase() });
      
      if (!products || products.length === 0) {
        return res.status(404).json({ msg: 'No products found for this category' });
      }
  
      res.json(products);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  };