
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Fetch all products or products of a specific category
export const getProducts = async (category) => {
  try {
    const url = new URL(`${API_BASE_URL}/products`);

    if (category) {
      url.searchParams.append('category', category);
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Failed to fetch products');
    }

    return data.products;
  } catch (error) {
    console.error('Product API Error:', error.message);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products/${productId}`
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Failed to fetch product');
    }

    return data.product;
  } catch (error) {
    console.error('Product API Error:', error.message);
    throw error;
  }
};
