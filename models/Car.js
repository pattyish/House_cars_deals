const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  carDetails: {
    make: {
      type: String,
    },
    model: {
      type: String,
    },
    fuel: {
      type: String,
    },
    transmission: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = Car = mongoose.model('Car', carSchema);
