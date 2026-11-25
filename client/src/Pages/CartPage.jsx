
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
    cartCount
  } = useCart();

  const formatPrice = (price) =>
    `₹${Number(price).toLocaleString('en-IN')}`;

  return (
    <main className="cart-page">

      <div className="cart-heading">
        <p className="section-label">MADE WITH LOVE, JUST FOR YOU</p>
        <h1>Your Shopping Bag <span>♡</span></h1>
        <p className="cart-subtitle">
          Handmade happiness is just a few steps away.
        </p>
      </div>

      {cartItems.length === 0 ? (

        <div className="empty-cart">
          <div className="empty-cart-icon">♡</div>
          <h2>Your bag is waiting for something lovely!</h2>
          <p>
            Looks like you haven't added anything to your cart yet.
            Explore our handmade collection.
          </p>
          <Link to="/" className="continue-shopping-btn">
            Explore Collection →
          </Link>
        </div>

      ) : (

        <div className="cart-layout">

          {/* Shopping Bag */}
          <section className="cart-products">

            <div className="cart-section-heading">
              <h2>Shopping Bag</h2>
              <span>{cartCount} items</span>
            </div>

            {cartItems.map((item) => (

              <div className="cart-item" key={item._id}>

                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="cart-item-info">

                  <p className="cart-category">
                    {item.category}
                  </p>

                  <h3>{item.name}</h3>

                  <p className="cart-unit-price">
                    {formatPrice(item.price)}
                  </p>

                  <p className="cart-stock">
                    {item.stock > 0 ? '✓ In Stock' : 'Out of Stock'}
                  </p>

                  <div className="cart-actions">

                    <div className="quantity-controls">
                      <button
                        onClick={() => decreaseQuantity(item._id)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item._id)}
                        disabled={item.quantity >= item.stock}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>

                  </div>
                </div>

                <div className="cart-item-total">
                  {formatPrice(item.price * item.quantity)}
                </div>

              </div>
            ))}

            <Link to="/" className="continue-shopping-link">
              ← Continue Shopping
            </Link>

          </section>

          {/* Order Summary */}
          <aside className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal ({cartCount} items)</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span className="shipping-note">
                Calculated at checkout
              </span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>

            <p className="summary-note">
              Shipping charges will be calculated based on your
              delivery address.
            </p>

            <button className="checkout-btn">
              Proceed to Checkout →
            </button>

            <div className="secure-checkout">
              ♡ Thoughtfully handmade, carefully packed.
            </div>

          </aside>

        </div>
      )}

    </main>
  );
}

export default CartPage;
