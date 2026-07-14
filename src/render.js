// src/render.js

export function renderProducts(products, container) {
  container.innerHTML = '';

  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>$${product.price.toFixed(2)}</p>
      <a href="/product.html?id=${product.id}">View Details</a>
    `;
    container.appendChild(card);
  });
}