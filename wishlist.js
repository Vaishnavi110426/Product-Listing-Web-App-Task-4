// Load wishlist and cart from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const wishlistContainer = document.getElementById("wishlistContainer");

// Sample products (same as script.js)
const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 299, rating: 4.5, img: "https://i.pinimg.com/736x/69/7f/73/697f73c8b365484fc5439b06fbaf7157.jpg" },
  { id: 2, name: "Laptop", category: "electronics", price: 899, rating: 4.7, img: "https://www.cpureport.com/wp-content/uploads/2022/01/laptop-2022-scaled.jpg" },
  { id: 3, name: "T-Shirt", category: "clothes", price: 20, rating: 4.2, img: "https://i.pinimg.com/originals/d2/5a/02/d25a02a67fa95523787703328d6e9b44.jpg" },
  { id: 4, name: "Jeans", category: "clothes", price: 45, rating: 4.0, img: "https://i.etsystatic.com/23964418/r/il/b78d4e/3096825595/il_1140xN.3096825595_900t.jpg" },
  { id: 5, name: "Novel Book", category: "books", price: 15, rating: 4.8, img: "https://i.pinimg.com/originals/63/64/ee/6364ee635790c1224cc43035a814faa7.jpg" },
  { id: 6, name: "Headphones", category: "electronics", price: 120, rating: 4.3, img: "https://i.pinimg.com/originals/59/de/96/59de96aaac7cab5dfc1135e82ca63c6d.jpg" }
];

// Render Wishlist
function renderWishlist() {
  wishlistContainer.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>Your wishlist is empty ❤️</p>";
    return;
  }

  wishlist.forEach((id, index) => {
    const product = products.find(p => p.id === id);
    if (product) {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p>⭐ ${product.rating}</p>
        </div>
        <div class="product-actions">
          <button onclick="removeFromWishlist(${index})">❌ Remove</button>
          <button class="add-cart" onclick="moveToCart(${product.id}, ${index})">🛒 Move to Cart</button>
        </div>
      `;
      wishlistContainer.appendChild(card);
    }
  });
}

// Remove from Wishlist
function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
}

// Move to Cart
function moveToCart(id, index) {
  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  removeFromWishlist(index);
}

// Init
renderWishlist();
