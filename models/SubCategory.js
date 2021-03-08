const mongoose = require('mongoose');

const subCatSchema = new mongoose.Schema({
  subCatName: {
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

module.exports = SubCategory = mongoose.model('SubCategory', subCatSchema);
