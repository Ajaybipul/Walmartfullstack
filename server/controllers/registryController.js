const Registry = require('../models/Registry');

// Create a new registry
exports.createRegistry = async (req, res) => {
  try {
    const { type, firstName, lastName, state } = req.body;
    const newRegistry = new Registry({ type, firstName, lastName, state });
    await newRegistry.save();
    res.status(201).json({ message: 'Registry created successfully', registry: newRegistry });
  } catch (error) {
    res.status(500).json({ message: 'Error creating registry', error: error.message });
  }
};

// Get all registries
exports.getAllRegistries = async (req, res) => {
  try {
    const registries = await Registry.find();
    res.status(200).json(registries);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving registries', error: error.message });
  }
};

// Get a registry by ID
exports.getRegistryById = async (req, res) => {
  try {
    const registry = await Registry.findById(req.params.id);
    if (!registry) {
      return res.status(404).json({ message: 'Registry not found' });
    }
    res.status(200).json(registry);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving registry', error: error.message });
  }
};

// Update a registry by ID
exports.updateRegistry = async (req, res) => {
  try {
    const updatedRegistry = await Registry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRegistry) {
      return res.status(404).json({ message: 'Registry not found' });
    }
    res.status(200).json({ message: 'Registry updated successfully', registry: updatedRegistry });
  } catch (error) {
    res.status(500).json({ message: 'Error updating registry', error: error.message });
  }
};

// Delete a registry by ID
exports.deleteRegistry = async (req, res) => {
  try {
    const deletedRegistry = await Registry.findByIdAndDelete(req.params.id);
    if (!deletedRegistry) {
      return res.status(404).json({ message: 'Registry not found' });
    }
    res.status(200).json({ message: 'Registry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting registry', error: error.message });
  }
};
