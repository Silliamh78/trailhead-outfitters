// src/data.js

export async function fetchProducts() {
  try {
    const response = await fetch('./products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return null;
  }
}
