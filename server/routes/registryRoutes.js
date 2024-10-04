const express = require('express');
const router = express.Router();
const registryController = require('../controllers/registryController');

// Create a new registry
router.post('/', registryController.createRegistry);

// Get all registries
router.get('/', registryController.getAllRegistries);

// Get a registry by ID
router.get('/:id', registryController.getRegistryById);

// Update a registry by ID
router.put('/:id', registryController.updateRegistry);

// Delete a registry by ID
router.delete('/:id', registryController.deleteRegistry);

module.exports = router;
