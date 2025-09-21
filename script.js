// Sample product data
const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 299, rating: 4.5, img: "https://i.pinimg.com/736x/69/7f/73/697f73c8b365484fc5439b06fbaf7157.jpg" },
  { id: 2, name: "Laptop", category: "electronics", price: 899, rating: 4.7, img: "https://www.cpureport.com/wp-content/uploads/2022/01/laptop-2022-scaled.jpg" },
  { id: 3, name: "T-Shirt", category: "clothes", price: 20, rating: 4.2, img: "https://i.pinimg.com/originals/d2/5a/02/d25a02a67fa95523787703328d6e9b44.jpg" },
  { id: 4, name: "Jeans", category: "clothes", price: 45, rating: 4.0, img: "https://i.etsystatic.com/23964418/r/il/b78d4e/3096825595/il_1140xN.3096825595_900t.jpg" },
  { id: 5, name: "Novel Book", category: "books", price: 15, rating: 4.8, img: "https://i.pinimg.com/originals/63/64/ee/6364ee635790c1224cc43035a814faa7.jpg" },
  { id: 6, name: "Headphones", category: "electronics", price: 120, rating: 4.3, img: "https://i.pinimg.com/originals/59/de/96/59de96aaac7cab5dfc1135e82ca63c6d.jpg" }
];

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elements
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortOptions = document.getElementById("sortOptions");
const wishlistCount = document.getElementById("wishlistCount");
const cartCount = document.getElementById("cartCount");

// Render Products
function renderProducts(items) {
  productContainer.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <a href="product.html?id=${product.id}" class="product-link">
        <img src="${product.img}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
          <p>⭐ ${product.rating}</p>
        </div>
      </a>
      <div class="product-actions">
        <button class="wishlist" onclick="toggleWishlist(${product.id})">❤️</button>
        <button class="add-cart" onclick="addToCart(${product.id})">🛒</button>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

// Filter, Search & Sort
function applyFilters() {
  let filtered = [...products];

  // Search
  const searchText = searchInput.value.toLowerCase();
  if (searchText) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchText));
  }

  // Category
  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Sort
  const sortValue = sortOptions.value;
  if (sortValue === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "ratingHigh") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

// Wishlist
function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateCounts();
}

// Cart
function addToCart(id) {
  if (!cart.includes(id)) cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCounts();
}

// Update Counts
function updateCounts() {
  wishlistCount.textContent = wishlist.length;
  cartCount.textContent = cart.length;
}

// Events
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortOptions.addEventListener("change", applyFilters);

// Initial Load
updateCounts();
applyFilters();
