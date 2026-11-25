
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { useCart } from '../context/CartContext';

function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToCart, cartCount } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError('');

        const data = await getProductById(productId);
        setProduct(data);
      } catch (err) {
        setError('Unable to load product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading product... ♡</p>;

  if (error) return <p>{error}</p>;

  if (!product) return <p>Product not found.</p>;

  return (
    <main className="product-details-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-info">
          <p className="product-category">{product.category}</p>

          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <p>{product.description}</p>

          {product.customizable && (
            <span className="customizable-label">
              Customizable ♡
            </span>
          )}

          <p className="stock-info">
            {product.stock > 0 ? 'In Stock ♡' : 'Out of Stock'}
          </p>

         <button
          className="add-to-cart-btn"
          disabled={product.stock <= 0}
          onClick={() => addToCart(product)}
          >
          {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
        <p className="cart-count">
          Cart Items: {cartCount}
        </p>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;
