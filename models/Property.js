const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  negotiation: {
    type: Boolean,
    default: false,
  },
  mainImage: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
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
  advertType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Advert',
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
    proCountry: {
      type: String,
      required: true,
    },
    proCity: {
      type: String,
      required: true,
    },
    proDistrict: {
      type: String,
      required: true,
    },
    proSector: {
      type: String,
      required: true,
    },
    proVillage: {
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
      agentCountry: {
        type: String,
        required: true,
      },
      agentCity: {
        type: String,
        required: true,
      },
      agentDistrict: {
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
