
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage'

const categories = [
  {
    id: 'flowers',
    name: 'Flowers & Bouquets',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700',
  },
  {
    id: 'keychains',
    name: 'Keychains',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700',
  },
  {
    id: 'plushies',
    name: 'Plushies',
    image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=700',
  },
  {
    id: 'lamps',
    name: 'Lamps',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700',
  },
  {
    id: 'accessories',
    name: "Women's Accessories",
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700',
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700',
  },
  {
    id: 'custom',
    name: 'Customizable Items',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=700',
  },
]

function HomePage() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">DORI<span>.</span></h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#categories">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="cart-btn">Cart (0)</button>
      </nav>

      <section className="hero">
        <p className="tagline">HANDMADE WITH LOVE ♡</p>

        <h2>
          Little Things,<br />
          Made with <span>Love.</span>
        </h2>

        <p className="hero-text">
          Discover beautiful handmade crochet creations,
          crafted with care just for you.
        </p>

        <a href="#categories" className="shop-btn">
          Explore Collection →
        </a>
      </section>

      <section className="categories" id="categories">
        <p className="section-label">MADE JUST FOR YOU</p>
        <h2>Explore Our Collection</h2>

        <p className="category-description">
          Find something special, handmade with love.
        </p>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={`/shop/${category.id}`}
              className="category-card"
              key={category.id}
            >
              <img src={category.image} alt={category.name} />

              <div className="category-overlay">
                <h3>{category.name}</h3>
                <span>Explore Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-label">OUR LITTLE WORLD</p>
        <h2>Every Stitch Tells a Story ♡</h2>

        <p>
          DORI brings you handmade creations made with
          patience, creativity and lots of love.
        </p>
      </section>

      <footer id="contact">
        <h2>DORI.</h2>
        <p>Made with love, just for you. ♡</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop/:categoryId"
          element={<CategoryPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
