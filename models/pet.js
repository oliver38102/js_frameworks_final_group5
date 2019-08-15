// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  type: {
    type: String,
    enum: ['CAT', 'DOG', 'INSECT', 'BIRD', 'ACRACNOID', 'AMPHIBIAN', 'REPTILE'],
    default: 'DOG'
  }
}, {
    timestamps: true
  });

// Exporting our Pet model
module.exports = mongoose.model('Pet', PetSchema);