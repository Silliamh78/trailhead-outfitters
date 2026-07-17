import { loadProducts } from './data.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        document.getElementById('product-detail').innerHTML = 
            '<p>No product selected.</p>';
        return;
    }
    
    // 2. Load products and find the matching one
    const products = await loadProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById('product-detail').innerHTML = 
            '<p>Product not found.</p>';
        return;
    }
    
    // 3. Display the product details
    document.getElementById('product-detail').innerHTML = `
        <article class="product-detail">
            <img src="${product.image}" alt="${product.name}">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button id="order-now-btn">Order Now</button>
        </article>
        
        <section class="order-form-container" style="display:none;">
            <!-- Form content goes here -->
        </section>
    `;
    
    // 4. Set up "Order Now" button to go to order form
    document.getElementById('order-now-btn').addEventListener('click', () => {
        window.location.href = `order.html?id=${productId}`;
    });
});

