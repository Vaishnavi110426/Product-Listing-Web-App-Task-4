// Load cart data
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cartContainer");
const cartTotal = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCart");

// Sample products (same as in script.js — ideally, this would be shared)
const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 299, rating: 4.5, img: "https://i.pinimg.com/736x/69/7f/73/697f73c8b365484fc5439b06fbaf7157.jpg" },
  { id: 2, name: "Laptop", category: "electronics", price: 899, rating: 4.7, img: "https://www.cpureport.com/wp-content/uploads/2022/01/laptop-2022-scaled.jpg" },
  { id: 3, name: "T-Shirt", category: "clothes", price: 20, rating: 4.2, img: "https://i.pinimg.com/originals/d2/5a/02/d25a02a67fa95523787703328d6e9b44.jpg" },
  { id: 4, name: "Jeans", category: "clothes", price: 45, rating: 4.0, img: "https://i.etsystatic.com/23964418/r/il/b78d4e/3096825595/il_1140xN.3096825595_900t.jpg" },
  { id: 5, name: "Novel Book", category: "books", price: 15, rating: 4.8, img: "https://i.pinimg.com/originals/63/64/ee/6364ee635790c1224cc43035a814faa7.jpg" },
  { id: 6, name: "Headphones", category: "electronics", price: 120, rating: 4.3, img: "https://i.pinimg.com/originals/59/de/96/59de96aaac7cab5dfc1135e82ca63c6d.jpg" }
];

// Render Cart
function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
    cartTotal.textContent = "0";
    return;
  }

  cart.forEach((id, index) => {
    const product = products.find(p => p.id === id);
    if (product) {
      total += product.price;
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
          <button onclick="removeFromCart(${index})">❌ Remove</button>
        </div>
      `;
      cartContainer.appendChild(card);
    }
  });

  cartTotal.textContent = total.toFixed(2);
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear Cart
clearCartBtn.addEventListener("click", () => {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
});

// Init
renderCart();
