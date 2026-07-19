// src/detail.js
import { fetchProducts } from './data.js';

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('product-detail');

    // Show loading state
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
        const products = await fetchProducts();

        // 4. Find the matching product
        const product = products.find(p => p.id === productId);

        // 5. Handle not found
        if (!product) {
            container.innerHTML = `<p>Product not found. <a href="index.html">Back to all products</a></p>`;
            return;
        }

        // 6. Create product detail elements safely (NO innerHTML with templates)
        container.innerHTML = ''; // Clear loading message

        const article = document.createElement('article');
        article.className = 'product-detail';

        // Image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        article.appendChild(img);

        // Name heading
        const nameHeading = document.createElement('h1');
        nameHeading.textContent = product.name;
        article.appendChild(nameHeading);

        // Description
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.className = 'description';
        descriptionParagraph.textContent = product.description;
        article.appendChild(descriptionParagraph);

        // Category
        const categoryParagraph = document.createElement('p');
        categoryParagraph.className = 'category';
        categoryParagraph.textContent = `Category: ${product.category}`;
        article.appendChild(categoryParagraph);

        // Price
        const priceParagraph = document.createElement('p');
        priceParagraph.className = 'price';
        priceParagraph.textContent = `$${product.price.toFixed(2)}`;
        article.appendChild(priceParagraph);

        // Order Now button
        const orderButton = document.createElement('button');
        orderButton.id = 'order-now-btn';
        orderButton.className = 'btn-primary';
        orderButton.textContent = 'Order Now';
        article.appendChild(orderButton);

        container.appendChild(article);

        // 7. Wire up "Order Now" button
        orderButton.addEventListener('click', () => {
            window.location.href = `order.html?id=${productId}`;
        });

    } catch (error) {
        console.error('Error loading product:', error);
        container.innerHTML = '<p>Failed to load product details. <a href="index.html">Try again</a></p>';
    }
});