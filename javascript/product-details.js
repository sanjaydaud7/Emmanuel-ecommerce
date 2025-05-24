document.addEventListener("DOMContentLoaded", function () {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-description").innerText = product.description;
    document.getElementById("product-price").innerText = `${product.price}`;
    document.getElementById("nutrient").innerText = product.nutrients.join(", ");
    document.getElementById("calories").innerText = product.calories;
    document.getElementById("health-benefits").innerText = product.healthBenefits;

    // Handle Add to Wishlist
    const addToWishlistBtn = document.getElementById("add-to-wishlist");
    addToWishlistBtn.addEventListener("click", () => {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      // Check if the product is already in the wishlist
      const existingItem = wishlist.find(item => item.id === product.id);
      if (existingItem) {
        alert(`${product.name} is already in your wishlist!`);
      } else {
        wishlist.push({
          id: product.id,
          name: product.name,
          price: parseFloat(product.price.replace(/[^\d.]/g, '')), // Ensure price is a number
          image: product.image
        });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`${product.name} has been added to your wishlist!`);
      }
    });

    // Handle Add to Cart
    const addToCartBtn = document.getElementById("add-to-cart");
    addToCartBtn.addEventListener("click", () => {
      const quantity = parseInt(document.getElementById("quantity").value, 10);
      if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
      }

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the product is already in the cart
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // Update the quantity
        alert(`Updated quantity of ${product.name} in your cart!`);
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: parseFloat(product.price.replace(/[^\d.]/g, '')), // Ensure price is a number
          image: product.image,
          quantity: quantity // Add the specified quantity
        });
        alert(`${product.name} has been added to your cart!`);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    });

    // Handle Buy Now
    const buyNowBtn = document.getElementById("buy-now");
    buyNowBtn.addEventListener("click", () => {
      const quantity = parseInt(document.getElementById("quantity").value, 10);
      if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
      }

      const order = {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price.replace(/[^\d.]/g, '')),
        image: product.image,
        quantity: quantity
      };

      localStorage.setItem("order", JSON.stringify(order));
      alert(`Proceeding to checkout for ${quantity} ${product.name}(s).`);
      window.location.href = "checkout.html"; // Redirect to checkout page
    });
  }
});