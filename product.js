// Sample product data (same as script.js)
const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 299, rating: 4.5, description: "High-end smartphone with AMOLED display.", img: "https://i.pinimg.com/736x/69/7f/73/697f73c8b365484fc5439b06fbaf7157.jpg" },
  { id: 2, name: "Laptop", category: "electronics", price: 899, rating: 4.7, description: "Powerful laptop for work and gaming.", img: "https://www.cpureport.com/wp-content/uploads/2022/01/laptop-2022-scaled.jpg" },
  { id: 3, name: "T-Shirt", category: "clothes", price: 20, rating: 4.2, description: "Comfortable cotton T-shirt in multiple colors.", img: "https://i.pinimg.com/originals/d2/5a/02/d25a02a67fa95523787703328d6e9b44.jpg" },
  { id: 4, name: "Jeans", category: "clothes", price: 45, rating: 4.0, description: "Stylish denim jeans, durable fabric.", img: "https://i.etsystatic.com/23964418/r/il/b78d4e/3096825595/il_1140xN.3096825595_900t.jpg" },
  { id: 5, name: "Novel Book", category: "books", price: 15, rating: 4.8, description: "Bestselling novel, gripping story.", img: "https://i.pinimg.com/originals/63/64/ee/6364ee635790c1224cc43035a814faa7.jpg" },
  { id: 6, name: "Headphones", category: "electronics", price: 120, rating: 4.3, description: "Noise-cancelling headphones, deep bass.", img: "https://i.pinimg.com/originals/59/de/96/59de96aaac7cab5dfc1135e82ca63c6d.jpg" }
];

// Retrieve product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id")) || 1;

const product = products.find(p => p.id === productId);
const productDetail = document.getElementById("productDetail");

// Load wishlist & cart from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render product detail
function renderDetail() {
  if (!product) {
    productDetail.innerHTML = "<p>Product not found ❌</p>";
    return;
  }

  const inWishlist = wishlist.includes(product.id);

  productDetail.innerHTML = `
    <div class="product-card" style="max-width:600px;margin:auto;">
      <img src="${product.img}" alt="${product.name}">
      <div class="product-info">
        <h2>${product.name}</h2>
        <p><b>Category:</b> ${product.category}</p>
        <p><b>Price:</b> $${product.price}</p>
        <p>⭐ ${product.rating}</p>
        <p>${product.description}</p>
        <div class="product-actions" style="justify-content:center;">
          <button class="add-cart" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
          <button class="wishlist ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">❤️ Wishlist</button>
        </div>
      </div>
    </div>
  `;
}

// Cart functions
function addToCart(id) {
  if (!cart.includes(id)) cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Added to cart!");
}

// Wishlist functions
function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderDetail();
}

// Initialize
renderDetail();
