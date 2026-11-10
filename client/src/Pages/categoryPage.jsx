
import { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import { getProducts } from '../services/productService';

const categoryNames = {
  flowers: 'Flowers & Flower Bouquets',
  keychains: 'Keychains',
  plushies: 'Plushies',
  lamps: 'Lamps',
  accessories: "Women's Accessories",
  'home-decor': 'Home Decor',
  custom: 'Customizable Items'
};

function CategoryPage() {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const data = await getProducts(categoryId);
        setProducts(data);
      } catch (err) {
        setError('Unable to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const categoryName = categoryNames[categoryId];

  if (!categoryName) {
    return <h2>Category not found.</h2>;
  }

  return (
    <main className="category-page">
      <div className="category-header">
        <h1>{categoryName}</h1>
        <p>Handmade with love, exclusively for you ♡</p>
      </div>

      {loading && <p>Loading products... ♡</p>}

      {error && <p>{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>No products available in this category yet.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="product-grid">
          {products.map((product) => (
             <Link
    to={`/product/${product._id}`}
    className="product-card-link"
    key={product._id}
  >
            <article className="product-card" key={product._id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price">₹{product.price}</p>

                {product.customizable && (
                  <span className="customizable-label">
                    Customizable ♡
                  </span>
                )}
              </div>
            </article>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default CategoryPage;
