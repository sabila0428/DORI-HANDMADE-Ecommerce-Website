import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      enum: [
        'flowers',
        'keychains',
        'plushies',
        'lamps',
        'accessories',
        'home-decor',
        'custom'
      ]
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    description: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      required: true
    },

    stock: {
      type: Number,
      default: 10,
      min: 0
    },

    customizable: {
      type: Boolean,
      default: false
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;