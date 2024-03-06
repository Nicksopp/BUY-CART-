// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 25 },
];

// Function to display products on the page
function displayProducts() {
  const productsContainer = document.getElementById('products');

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(productElement);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  // Implement cart functionality (add product to cart, update totals, etc.)
  alert(`Product ${productId} added to cart!`);
}

// Display products when the page loads
window.onload = displayProducts;
