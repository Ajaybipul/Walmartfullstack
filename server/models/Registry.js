// models/Registry.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrySchema = new Schema({

  type: { type: String, required: true }, // 'Wedding', 'Baby', 'Any occasion', etc.
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  state: { type: String, required: true },
 
});

const Registry = mongoose.model('Registry', registrySchema);
module.exports = Registry;
