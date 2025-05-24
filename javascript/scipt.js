

// login and profile menu change x
document.addEventListener("DOMContentLoaded", function () {
  const menuList = document.getElementById("menuList");

  // Function to update the menu list dynamically
  function updateMenuList() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.email) {
      const profilePhoto = loggedInUser.profilePhoto || "https://via.placeholder.com/40"; // Default profile photo
      menuList.innerHTML = `
        <li>
          <a href="../small/edit-profile.html">
            <img src="${profilePhoto}" alt="Profile" class="profile-icon" />
          </a>
        </li>
        <li><a href="wishlist.html">Wishlist</a></li>
        <li><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
        <li><a href="#" id="logoutBtn">Logout</a></li>
      `;

      // Add event listener for logout
      document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser"); // Remove user data from localStorage
        updateMenuList(); // Update the menu to show Login/SignUp
      });
    } else {
      menuList.innerHTML = `
        <li><a href="login/login.html">Login/SignUp</a></li>
        <li><a href="wishlist.html">Wishlist</a></li>
        <li><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
      `;
    }
  }

  // Call the function on page load
  updateMenuList();

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.status === "success") {
      // Save user info to localStorage with a default profile photo
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          email,
          profilePhoto: "https://via.placeholder.com/40", // Default profile photo
        })
      );

      // Update the menu list dynamically
      updateMenuList();

      // Redirect to home page or reload
      window.location.href = "../home.html";
    }
  });
}); 



// Dropdown Menu
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px";
        menuList.style.backgroundColor = "white"; // Fixed typo: backgroundcolor -> backgroundColor
    } else {
        menuList.style.maxHeight = "0px";
    }
}





// Offer Bar
document.addEventListener("DOMContentLoaded", function () {
    const offerText = document.querySelector(".offer-text");
    const offers = [
        "🔥 Limited Time Offer: Get 50% Off on All Products! 🚀",
        "🎉 Buy 1 Get 1 Free on Selected Items! 🛍️",
        "🚚 Free Shipping on Orders Over $99! 🌎",
        "💥 Flash Sale: Extra 20% Off - Use Code: FLASH20 💳"
    ];

    let combinedOffers = offers.join("     •     ");
    offerText.innerHTML = combinedOffers + "     •     " + combinedOffers;
    let animationDuration = combinedOffers.length / 5;
    offerText.style.animation = `scroll-left ${animationDuration}s linear infinite`;
});

// Hero Section
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero");
    const backgrounds = [
      
        "url('/images/bg1.jpg')",
        "url('/images/bg2.jpg')",
        "url('/images/bg3.jpg')",
        "url('/images/bg4.jpeg')",
        "url('/images/bg5.jpeg')",
        "url('/images/bg6.jpeg')"
    ];

    let index = 0;
    function changeBackground() {
        heroSection.style.backgroundImage = backgrounds[index];
        index = (index + 1) % backgrounds.length;
    }
    setInterval(changeBackground, 2000);
});

// Product Page Logic
// Product Page Logic
document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("productContainer");
    const recentlyViewedContainer = document.getElementById("recentlyViewedContainer");
    const relatedProductsContainer = document.getElementById("relatedProductsContainer");
    const popularProductsContainer = document.getElementById("popularProductsContainer");

    // Product Data (Restored Full Details)
    let products = [
        {
          id: 1,
          name: "Red Apple",
          price: "₹120/kg",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
          category: "Fruit",
          description: "Juicy red apples rich in antioxidants and natural sweetness.",
          nutrients: ["Vitamin C", "Fiber", "Antioxidants"],
          calories: "52 kcal per 100g",
          healthBenefits: "Supports heart health, improves digestion, boosts immunity.",
          tags: ["Diabetic Friendly", "Best for Snack"]
        },
        {
          id: 2,
          name: "Banana",
          price: "₹50/dozen",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
          category: "Fruit",
          description: "Fresh bananas perfect for energy and digestion.",
          nutrients: ["Potassium", "Vitamin B6", "Fiber"],
          calories: "89 kcal per 100g",
          healthBenefits: "Provides energy, regulates blood pressure, aids digestion.",
          tags: ["Energy Booster", "Kid Friendly"]
        },
        {
          id: 3,
          name: "Orange",
          price: "₹80/kg",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
          category: "Fruit",
          description: "Sweet and tangy oranges packed with Vitamin C.",
          nutrients: ["Vitamin C", "Folate", "Fiber"],
          calories: "47 kcal per 100g",
          healthBenefits: "Boosts immunity, promotes skin health, lowers cholesterol.",
          tags: ["Best for Juice", "Immunity Booster"]
        },
        {
          id: 4,
          name: "Grapes",
          price: "₹90/kg",
          image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg",
          category: "Fruit",
          description: "Seedless grapes ideal for snacking and desserts.",
          nutrients: ["Vitamin C", "Vitamin K", "Antioxidants"],
          calories: "67 kcal per 100g",
          healthBenefits: "Supports heart health, reduces inflammation, improves memory.",
          tags: ["Snack Friendly", "Rich in Antioxidants"]
        },
        {
          id: 5,
          name: "Watermelon",
          price: "₹40/piece",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Watermelon_cross_BNC.jpg",
          category: "Fruit",
          description: "Cool and hydrating watermelon, a summer favorite.",
          nutrients: ["Vitamin A", "Vitamin C", "Water"],
          calories: "30 kcal per 100g",
          healthBenefits: "Keeps hydrated, soothes muscle soreness, supports eye health.",
          tags: ["Best for Juice", "Hydrating"]
        },
        {
          id: 6,
          name: "Pineapple",
          price: "₹70/piece",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg",
          category: "Fruit",
          description: "Tropical pineapple with a perfect sweet-tart flavor.",
          nutrients: ["Vitamin C", "Manganese", "Bromelain"],
          calories: "50 kcal per 100g",
          healthBenefits: "Improves digestion, reduces inflammation, strengthens bones.",
          tags: ["Tropical", "Best for Smoothies"]
        },
        {
          id: 7,
          name: "Papaya",
          price: "₹45/kg",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Papaya_cross_section_bnc.jpg",
          category: "Fruit",
          description: "Nutritious papaya great for digestion and skin health.",
          nutrients: ["Vitamin A", "Vitamin C", "Enzymes"],
          calories: "43 kcal per 100g",
          healthBenefits: "Aids digestion, promotes skin health, boosts immunity.",
          tags: ["Skin Care", "Diabetic Friendly"]
        },
        {
          id: 8,
          name: "Mango",
          price: "₹150/kg",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
          category: "Fruit",
          description: "Seasonal Alphonso mangoes with rich, sweet pulp.",
          nutrients: ["Vitamin A", "Vitamin C", "Folate"],
          calories: "60 kcal per 100g",
          healthBenefits: "Improves eye health, supports digestion, rich in antioxidants.",
          tags: ["Best for Desserts", "Seasonal Favorite"]
        },
        {
          id: 9,
          name: "Strawberries",
          price: "₹200/kg",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
          category: "Fruit",
          description: "Red ripe strawberries perfect for desserts and shakes.",
          nutrients: ["Vitamin C", "Manganese", "Antioxidants"],
          calories: "32 kcal per 100g",
          healthBenefits: "Boosts immunity, promotes skin health, improves heart health.",
          tags: ["Best for Shakes", "Kid Friendly"]
        },
        {
          id: 10,
          name: "Kiwi",
          price: "₹30/piece",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg",
          category: "Fruit",
          description: "Tangy kiwi fruits full of Vitamin C and fiber.",
          nutrients: ["Vitamin C", "Vitamin K", "Fiber"],
          calories: "41 kcal per 100g",
          healthBenefits: "Boosts immunity, improves digestion, supports heart health.",
          tags: ["Best for Detox", "Diabetic Friendly"]
        },
    // Continuing from previous fruits...

{
    id: 11,
    name: "Tomato",
    price: "₹30/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
    category: "Vegetable",
    description: "Bright red tomatoes perfect for salads and cooking.",
    nutrients: ["Vitamin C", "Lycopene", "Potassium"],
    calories: "18 kcal per 100g",
    healthBenefits: "Improves heart health, reduces cancer risk, supports skin health.",
    tags: ["Best for Sauce", "Heart Healthy"]
  },
  {
    id: 12,
    name: "Potato",
    price: "₹25/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Raw_potatoes.jpg",
    category: "Vegetable",
    description: "Starchy potatoes suitable for boiling, baking, or frying.",
    nutrients: ["Carbohydrates", "Vitamin B6", "Potassium"],
    calories: "77 kcal per 100g",
    healthBenefits: "Provides energy, supports nervous system, high satiety.",
    tags: ["Comfort Food", "Energy Booster"]
  },
  {
    id: 13,
    name: "Onion",
    price: "₹28/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Onions.jpg",
    category: "Vegetable",
    description: "Flavorful onions that are a base for most dishes.",
    nutrients: ["Vitamin C", "Antioxidants", "Sulfur Compounds"],
    calories: "40 kcal per 100g",
    healthBenefits: "Supports heart health, reduces inflammation, boosts immunity.",
    tags: ["Flavor Base", "Anti-inflammatory"]
  },
  {
    id: 14,
    name: "Carrot",
    price: "₹40/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Carrot.jpg",
    category: "Vegetable",
    description: "Crunchy carrots rich in beta-carotene and fiber.",
    nutrients: ["Beta-Carotene", "Vitamin A", "Fiber"],
    calories: "41 kcal per 100g",
    healthBenefits: "Improves vision, supports skin health, aids digestion.",
    tags: ["Best for Juice", "Eye Health"]
  },
  {
    id: 15,
    name: "Spinach",
    price: "₹20/bunch",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Spinacia_oleracea_Spinazie_bloeiend.jpg",
    category: "Vegetable",
    description: "Leafy green spinach full of iron and nutrients.",
    nutrients: ["Iron", "Vitamin K", "Folate"],
    calories: "23 kcal per 100g",
    healthBenefits: "Boosts iron levels, supports bone health, improves blood health.",
    tags: ["Leafy Green", "Anemia Friendly"]
  },
  {
    id: 16,
    name: "Cauliflower",
    price: "₹35/piece",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Cauliflower.JPG",
    category: "Vegetable",
    description: "Fresh cauliflower used in curries and stir-fry.",
    nutrients: ["Vitamin C", "Fiber", "Choline"],
    calories: "25 kcal per 100g",
    healthBenefits: "Supports brain health, low in carbs, boosts immunity.",
    tags: ["Low Carb", "Versatile"]
  },
  {
    id: 17,
    name: "Cabbage",
    price: "₹30/piece",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Cabbage_and_cross_section_on_white.jpg",
    category: "Vegetable",
    description: "Crunchy cabbage great for salads and wraps.",
    nutrients: ["Vitamin K", "Vitamin C", "Fiber"],
    calories: "25 kcal per 100g",
    healthBenefits: "Aids digestion, supports bone health, anti-inflammatory.",
    tags: ["Best for Salads", "Fermentation Friendly"]
  },
  {
    id: 18,
    name: "Broccoli",
    price: "₹60/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg",
    category: "Vegetable",
    description: "Green broccoli florets perfect for steaming and sautéing.",
    nutrients: ["Vitamin C", "Vitamin K", "Fiber", "Folate"],
    calories: "34 kcal per 100g",
    healthBenefits: "Fights inflammation, supports immune health, rich in fiber.",
    tags: ["Cancer Fighter", "Best for Steam"]
  },
  {
    id: 19,
    name: "Green Peas",
    price: "₹70/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Green_peas_in_pod.jpg",
    category: "Vegetable",
    description: "Tender green peas—sweet and nutritious.",
    nutrients: ["Protein", "Vitamin K", "Manganese"],
    calories: "81 kcal per 100g",
    healthBenefits: "High in protein, supports bone health, boosts metabolism.",
    tags: ["High Protein", "Good for Kids"]
  },
  {
    id: 20,
    name: "Brinjal",
    price: "₹35/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Aubergine.jpg",
    category: "Vegetable",
    description: "Glossy purple brinjal, great for grilling and sabzi.",
    nutrients: ["Fiber", "Manganese", "Antioxidants"],
    calories: "25 kcal per 100g",
    healthBenefits: "Controls blood sugar, supports digestion, rich in antioxidants.",
    tags: ["Diabetic Friendly", "Best for Grill"]
  }
  ];
  

    // Load All Products
    function loadAllProducts() {
        productContainer.innerHTML = "";
        products.forEach(product => {
            const productDiv = createProductElement(product);
            productContainer.appendChild(productDiv);
        });
    }

    // Create Product Element (Reusable Function)
    function createProductElement(product) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
        `;

        const calorieLabel = document.createElement("div");
        calorieLabel.textContent = `Calories: ${product.calories}`;
        calorieLabel.classList.add("calorie-label");
        calorieLabel.style.display = "none";

        productDiv.addEventListener("mouseenter", () => calorieLabel.style.display = "block");
        productDiv.addEventListener("mouseleave", () => calorieLabel.style.display = "none");
        productDiv.appendChild(calorieLabel);

        const viewBtn = document.createElement("button");
        viewBtn.innerText = "View Product";
        viewBtn.className = "view-btn";
        viewBtn.addEventListener("click", () => viewProduct(product.id));
        productDiv.appendChild(viewBtn);

        return productDiv;
    }

    // View Product Handler
    function viewProduct(productId) {
        const selectedProduct = products.find(p => p.id === productId);
        if (!selectedProduct) return;

        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

        let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        recentlyViewed = recentlyViewed.filter(p => p.id !== selectedProduct.id);
        recentlyViewed.unshift(selectedProduct);
        if (recentlyViewed.length > 7) recentlyViewed.pop();
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));

        let viewCounts = JSON.parse(localStorage.getItem("viewCounts")) || {};
        viewCounts[productId] = (viewCounts[productId] || 0) + 1;
        localStorage.setItem("viewCounts", JSON.stringify(viewCounts));

        loadRecentlyViewed();
        loadRelatedProducts(selectedProduct.category);
        loadPopularProducts();
        window.location.href = "product-details.html";
    }

    // Load Recently Viewed
    function loadRecentlyViewed() {
        const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        recentlyViewedContainer.innerHTML = "";
        recentlyViewed.forEach(product => {
            const productDiv = createProductElement(product);
            const removeIcon = document.createElement("span");
            removeIcon.classList.add("remove-icon");
            removeIcon.innerHTML = "✕";
            removeIcon.addEventListener("click", () => removeProduct(product.id));
            productDiv.appendChild(removeIcon);
            recentlyViewedContainer.appendChild(productDiv);
        });
    }

    // Remove Product from Recently Viewed
    function removeProduct(productId) {
        let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        recentlyViewed = recentlyViewed.filter(p => p.id !== productId);
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
        loadRecentlyViewed();
    }

    // Load Popular Products
    function loadPopularProducts() {
        const viewCounts = JSON.parse(localStorage.getItem("viewCounts")) || {};
        const sortedIds = Object.entries(viewCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4)
            .map(entry => parseInt(entry[0]));

        popularProductsContainer.innerHTML = "";
        sortedIds.forEach(id => {
            const product = products.find(p => p.id === id);
            if (product) popularProductsContainer.appendChild(createProductElement(product));
        });
    }

    // Load Related Products
    function loadRelatedProducts(category) {
        relatedProductsContainer.innerHTML = "";
        const relatedProducts = products.filter(p => p.category === category).slice(0, 4);
        relatedProducts.forEach(product => relatedProductsContainer.appendChild(createProductElement(product)));
    }

    // Initial Loads
    loadAllProducts();
    loadRecentlyViewed();
    loadPopularProducts();
});