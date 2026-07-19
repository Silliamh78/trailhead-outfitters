// src/render.js

export function renderProducts(products, container) {
  container.innerHTML = '';

  products.forEach((product) => {
    // Create the card element
    const card = document.createElement('article');
    card.className = 'product-card';

    // Create and configure image
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    card.appendChild(img);

    // Create and configure name heading
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = product.name;
    card.appendChild(nameHeading);

    // Create and configure price paragraph
    const priceParagraph = document.createElement('p');
    priceParagraph.className = 'price';
    priceParagraph.textContent = `$${product.price.toFixed(2)}`;
    card.appendChild(priceParagraph);

    // Create and configure details link
    const link = document.createElement('a');
    link.href = `detail.html?id=${product.id}`;
    link.textContent = 'View Details';
    card.appendChild(link);

    // Append card to container
    container.appendChild(card);
  });
}