const mongoose = require('mongoose');

const RequestProSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },
  advertType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Advert',
    required: true,
  },
  budget: {
    currency: {
      type: String,
      required: true,
    },
    minimun: {
      type: Number,
      required: true,
    },
    maximun: {
      type: Number,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
  },
  timeNeed: {
    type: String,
    required: true,
  },
  propertyDetail: {
    bedroom: {
      type: Number,
    },
    area: {
      type: Number,
    },
    bathroom: {
      type: Number,
    },
    plotSize: {
      type: Number,
    },
    livingRoom: {
      type: Number,
    },
    numberFloors: {
      type: Number,
    },
    parking: {
      type: Boolean,
      default: false,
    },
  },
  propertyLocation: {
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
  },
  contactUser: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiredDate: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = RequestProperty = mongoose.model(
  'RequestProperty',
  RequestProSchema,
);
