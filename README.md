🌿 Product Listing Web App

A fully responsive Product Listing Web App built with HTML, CSS, and JavaScript, featuring interactive product filtering, sorting, cart, wishlist, and product detail pages. The app uses Local Storage to persist cart and wishlist data. The design features a warm olive green and light brown theme for an aesthetic, earthy look.

🔹 Features

Responsive Design – Works on desktops, tablets, and mobile devices.

Product Filtering & Sorting – Filter by category, search by name, and sort by price or rating.

Product Detail Page – View detailed product info, description, and larger image.

Cart & Wishlist – Add products to cart or wishlist. Data persists using Local Storage.

Interactive UI – Hover effects, animated buttons, and clean card layouts.

Color Theme – Olive green and light brown, giving a natural, earthy aesthetic.

📂 Project Structure
product-listing/
│── index.html           # Main product listing page
│── product.html         # Product detail page
│── cart.html            # Shopping cart page
│── wishlist.html        # Wishlist page
│── style.css            # Global styles (olive green & light brown theme)
│── script.js            # Main JS for filtering, sorting, and rendering
│── product.js           # JS for product detail page
│── cart.js              # JS for cart page
│── wishlist.js          # JS for wishlist page

💻 How to Run Locally

Clone the repository

git clone https://github.com/your-username/product-listing-webapp.git


Open the project folder in VS Code or any code editor.

Open index.html in a browser to view the app.

⚠️ No server required – the app uses localStorage and pure HTML/CSS/JS.

🛠️ Technologies Used

HTML5 – Semantic structure for pages.

CSS3 – Custom styling, responsive layout, hover effects, earthy theme.

JavaScript – Interactive filtering, sorting, cart, wishlist, and local storage persistence.

🎨 Design Notes

Theme Colors:

Olive Green (#556b2f) → headings, buttons

Light Brown (#faf5ef) → background, cards

Lighter Olive (#aeb77f) → badges and accents

Buttons: Rounded corners with hover scaling effects.

Cards: Soft shadows, border accents, and smooth hover lift.

Typography: Clean sans-serif font for readability.

📌 Features in Detail
1. Product Listing

Filter products by category or search by name.

Sort products by price (low→high, high→low) or rating.

Click product image or name to go to Product Detail Page.

2. Product Detail Page

View large image, full description, category, price, and rating.

Add to Cart or Wishlist.

Back button to return to product listing.

3. Cart Page

View all products in the cart with price and total.

Remove items from cart.

Clear all items.

4. Wishlist Page

View wishlist items.

Remove items or add them to cart.

5. Local Storage

Cart and wishlist persist across page reloads using localStorage.

📈 Future Enhancements

Add checkout page with quantity selection.

Integrate product images from API.

Add animations or micro-interactions for better UX.

Implement user login to persist data across devices.

🔗 Live Demo

