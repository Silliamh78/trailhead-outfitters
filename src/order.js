import { fetchProducts } from './data.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 2. Load product info for display
    if (productId) {
        const products = await fetchProducts();
        const product = products.find(p => p.id === productId);

        if (product) {
            document.getElementById('product-info').innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}" style="max-width:200px;">
                <p class="price">$${product.price.toFixed(2)}</p>
            `;
        }
    }

    // 3. Handle form submission
    const form = document.getElementById('order-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Reset previous errors
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

        let isValid = true;

        // Validate Name
        const name = document.getElementById('name').value.trim();
        if (!name) {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').v