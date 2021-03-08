const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  negotiation: {
    type: Boolean,
    default: false,
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
    sector: {
      type: String,
      required: true,
    },
    village: {
      type: String,
    },
    longitude: {
      type: String,
    },
    latutide: {
      type: String,
    },
  },
  contactUser: {
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
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

module.exports = Property = mongoose.model('Property', propertySchema);
