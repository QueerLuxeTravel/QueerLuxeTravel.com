// models/Destination.js
const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model('Destination', DestinationSchema);
