const mongoose = require('mongoose');

const advertSchema = new mongoose.Schema({
  advertName: {
    type: String,
    required: true,
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

module.exports = Advert = mongoose.model('Advert', advertSchema);
