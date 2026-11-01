
import { Link, useParams } from 'react-router-dom'

const categories = {
  flowers: 'Flowers & Bouquets',
  keychains: 'Keychains',
  plushies: 'Plushies',
  lamps: 'Lamps',
  accessories: "Women's Accessories",
  'home-decor': 'Home Decor',
  custom: 'Customizable Items',
}

function CategoryPage() {
  const { categoryId } = useParams()
  const categoryName = categories[categoryId]

  if (!categoryName) {
    return (
      <div>
        <h2>Category not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="category-page">
      <Link to="/" className="back-link">← Back to Home</Link>

      <h1>{categoryName}</h1>

      <p>
        Explore our handmade {categoryName.toLowerCase()},
        crafted with love by DORI.
      </p>

      <div className="empty-products">
        <h2>Our Collection is Coming Soon ♡</h2>
        <p>Beautiful handmade creations will be available here.</p>
      </div>
    </div>
  )
}

export default CategoryPage
