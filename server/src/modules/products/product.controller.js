
import Product from './models/Product.js';

// GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;

    const filter = { isActive: true };

    // Optional category filter
    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter).sort({
      createdAt: -1
    });

    res.status(200).json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message
    });
  }
};

// GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isActive: true
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch product',
      error: error.message
    });
  }
};
