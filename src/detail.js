import { loadProducts } from './data.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Show loading state
    const container = document.getElementById('product-detail');
    container.innerHTML = '<p>Loading product details...</p>';
    
    try {
        // 1. Get the product ID from URL (?id=tent01)
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        // 2. Handle missing ID
        if (!productId) {
            container.innerHTML = '<p>No product selected. <a href="index.html">Browse products</a></p>';
            return;
        }
        
        // 3. Load all products from JSON
        const products = await loadProducts();
        
        // 4. Find the matching product
        const product = products.find(p => p.id === productId);
        
        // 5. Handle not found
        if (!product) {
            container.innerHTML = `<p>Product not found. <a href="index.html">Back to all products</a></p>`;
            return;
        }
        
        // 6. Display product details
        container.innerHTML = `
            <article class="product-detail">
                <img src="${product.image}" alt="${product.name}">
                <h1>${product.name}</h1>
                <p class="description">${product.description}</p>
                <p class="category">Category: ${product.category}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button id="order-now-btn" class="btn-primary">Order Now</button>
            </article>
        `;
        
        // 7. Wire up "Order Now" button to go to order form
        document.getElementById('order-now-btn').addEventListener('click', () => {
            window.location.href = `order.html?id=${productId}`;
        });
        
    } catch (error) {
        console.error('Error loading product:', error);
        container.innerHTML = '<p>Failed to load product details. <a href="index.html">Try again</a></p>';
    }
});