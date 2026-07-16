// src/data.js

export async function fetchProducts() {
  try {
    const response = await fetch('../products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return null;
  }
}
export async function loadProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) throw new Error('Failed to load products');
        return await response.json();
    } catch (error) {
        console.error('Error loading data:', error);
        return [];
    }
}export function renderProducts(products) {
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="order-btn" onclick="navigateToDetail('${product.id}')">Order Now</button>
        `;
        container.appendChild(card);
    });
}

export function showLoading() { /* show spinner/message */ }
export function hideLoading() { /* remove loading element */ }
export function showError(message) { /* display error text */ }