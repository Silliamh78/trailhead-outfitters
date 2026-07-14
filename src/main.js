// src/main.js
import './style.css';
import { fetchProducts } from './data.js';
import { renderProducts } from './render.js';

// Initialize the app
async function init() {
  const grid = document.getElementById('product-grid');
  const loading = document.getElementById('loading-message');
  const error = document.getElementById('error-message');
  const orderCounter = document.getElementById('order-counter');
  const menuTrigger = document.getElementById('header-menu-trigger');
  const menuOptions = document.getElementById('header-menu-options');

  // Hamburger menu toggle
  if (menuTrigger && menuOptions) {
    menuTrigger.addEventListener('click', () => {
      const expanded = menuTrigger.getAttribute('aria-expanded') === 'true' || false;
      menuTrigger.setAttribute('aria-expanded', !expanded);
      menuOptions.classList.toggle('is-hidden');
      menuOptions.setAttribute('aria-hidden', expanded);
    });
  }

  // Show/hide loading state
  loading?.classList.remove('is-hidden');
  error?.classList.add('is-hidden');

  // Fetch and render products
  const products = await fetchProducts();
  loading?.classList.add('is-hidden');

  if (!products || products.length === 0) {
    error?.classList.remove('is-hidden');
    return;
  }

  renderProducts(products, grid);
  updateOrderCounter(orderCounter);
}

// Display order count from localStorage
function updateOrderCounter(element) {
  if (!element) return;
  const count = parseInt(localStorage.getItem('orderCount') || '0');
  element.textContent = count > 0 ? `You have placed ${count} order${count === 1 ? '' : 's'}` : '';
}

// Start the app
init();

