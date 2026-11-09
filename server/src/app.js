
import express from 'express';
import cors from 'cors';
import productRoutes from './modules/products/product.routes.js';

const app = express();

// Allow frontend to communicate with backend
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Read JSON data from incoming requests
app.use(express.json());
app.use('/api/products', productRoutes);

// Health check API
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'DORI API is running!'
  });
});

export default app;
