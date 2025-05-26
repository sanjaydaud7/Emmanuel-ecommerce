document.addEventListener("DOMContentLoaded", async function () {
  const menuList = document.getElementById("menuList");
  const productContainer = document.getElementById("productContainer");
  const recentlyViewedContainer = document.getElementById("recentlyViewedContainer");
  const relatedProductsContainer = document.getElementById("relatedProductsContainer");
  const popularProductsContainer = document.getElementById("popularProductsContainer");
  const searchResultsContainer = document.getElementById("searchResultsContainer");
  const searchQuerySpan = document.getElementById("searchQuery");
  const noResults = document.getElementById("noResults");

  // 25 fallback products (minimal example, add more as needed)
const fallbackProducts = [
  {
    id: 1,
    name: "Red Apple",
    price: "₹120/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    category: "Fruit",
    description: "Juicy red apples rich in antioxidants and natural sweetness.",
    nutrients: ["Vitamin C", "Fiber", "Antioxidants"],
    calories: "52 kcal per 100g",
    healthBenefits: "Supports heart health;boosts immunity;improves digestion.",
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
    healthBenefits: "Regulates blood pressure;provides energy;supports digestion.",
    tags: ["Energy Booster", "Kid Friendly"]
  },
  {
    id: 3,
    name: "Carrot",
    price: "₹40/kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww",
    category: "Vegetable",
    description: "Crisp orange carrots packed with beta-carotene and fiber.",
    nutrients: ["Beta-Carotene", "Vitamin A", "Fiber"],
    calories: "41 kcal per 100g",
    healthBenefits: "Improves vision;supports skin health.",
    tags: ["Best for Juice", "Vision Booster"]
  },
  {
    id: 4,
    name: "Broccoli",
    price: "₹90/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg",
    category: "Vegetable",
    description: "Nutrient-rich green broccoli florets.",
    nutrients: ["Vitamin C", "Vitamin K", "Folate"],
    calories: "34 kcal per 100g",
    healthBenefits: "Detoxifies body;strengthens bones.",
    tags: ["Detox", "Bone Health"]
  },
  {
    id: 5,
    name: "Strawberry",
    price: "₹180/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
    category: "Fruit",
    description: "Sweet and juicy strawberries rich in antioxidants.",
    nutrients: ["Vitamin C", "Manganese", "Fiber"],
    calories: "33 kcal per 100g",
    healthBenefits: "Improves skin;reduces inflammation.",
    tags: ["Skin Friendly", "Antioxidant Rich"]
  },
  {
    id: 6,
    name: "Spinach",
    price: "₹30/bundle",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Spinach_leaves.jpg",
    category: "Vegetable",
    description: "Leafy green spinach loaded with iron and vitamins.",
    nutrients: ["Iron", "Vitamin K", "Magnesium"],
    calories: "23 kcal per 100g",
    healthBenefits: "Boosts hemoglobin;strengthens immunity.",
    tags: ["Iron Rich", "Leafy Green"]
  },
  {
    id: 7,
    name: "Orange",
    price: "₹60/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
    category: "Fruit",
    description: "Citrus fruit rich in Vitamin C and flavor.",
    nutrients: ["Vitamin C", "Calcium", "Fiber"],
    calories: "47 kcal per 100g",
    healthBenefits: "Boosts immunity;reduces fatigue.",
    tags: ["Immunity Booster", "Juicy"]
  },
  {
    id: 8,
    name: "Grapes",
    price: "₹100/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg",
    category: "Fruit",
    description: "Sweet grapes loaded with antioxidants.",
    nutrients: ["Resveratrol", "Vitamin C", "Potassium"],
    calories: "69 kcal per 100g",
    healthBenefits: "Improves heart health;fights aging.",
    tags: ["Heart Healthy", "Snack Friendly"]
  },
  {
    id: 9,
    name: "Cucumber",
    price: "₹25/each",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Cucumis_sativus_-_Long_cucumber.jpg",
    category: "Vegetable",
    description: "Cool and refreshing cucumbers.",
    nutrients: ["Water", "Vitamin K", "Potassium"],
    calories: "16 kcal per 100g",
    healthBenefits: "Hydrates body;good for skin.",
    tags: ["Hydrating", "Salad Ready"]
  },
  {
    id: 10,
    name: "Mango",
    price: "₹150/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
    category: "Fruit",
    description: "Delicious tropical mangoes.",
    nutrients: ["Vitamin A", "Vitamin C", "Beta-Carotene"],
    calories: "60 kcal per 100g",
    healthBenefits: "Improves eye health;boosts immunity.",
    tags: ["Seasonal", "Sweet Treat"]
  },
  {
    id: 11,
    name: "Pineapple",
    price: "₹80/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg",
    category: "Fruit",
    description: "Tangy and tropical pineapple.",
    nutrients: ["Vitamin C", "Bromelain", "Manganese"],
    calories: "50 kcal per 100g",
    healthBenefits: "Aids digestion;fights inflammation.",
    tags: ["Digestive Aid", "Tropical"]
  },
  {
    id: 12,
    name: "Tomato",
    price: "₹30/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
    category: "Vegetable",
    description: "Red and juicy tomatoes.",
    nutrients: ["Lycopene", "Vitamin C", "Potassium"],
    calories: "18 kcal per 100g",
    healthBenefits: "Good for skin;fights cancer.",
    tags: ["Salad Favorite", "Lycopene Rich"]
  },
  {
    id: 13,
    name: "Cauliflower",
    price: "₹35/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Cauliflower.JPG",
    category: "Vegetable",
    description: "White cruciferous veggie full of fiber.",
    nutrients: ["Vitamin C", "Choline", "Fiber"],
    calories: "25 kcal per 100g",
    healthBenefits: "Improves digestion;supports brain health.",
    tags: ["Brain Food", "Low Carb"]
  },
  {
    id: 14,
    name: "Lettuce",
    price: "₹25/bundle",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Iceberg_lettuce_in_SB.jpg",
    category: "Vegetable",
    description: "Crisp green lettuce.",
    nutrients: ["Vitamin K", "Folate", "Iron"],
    calories: "15 kcal per 100g",
    healthBenefits: "Promotes bone strength;good for weight loss.",
    tags: ["Salad Base", "Weight Friendly"]
  },
  {
    id: 15,
    name: "Blueberries",
    price: "₹200/250g",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Blueberries.jpg",
    category: "Fruit",
    description: "Antioxidant-rich berries.",
    nutrients: ["Vitamin C", "Vitamin K", "Antioxidants"],
    calories: "57 kcal per 100g",
    healthBenefits: "Improves memory;reduces aging.",
    tags: ["Brain Food", "Antioxidant Rich"]
  },
  {
    id: 16,
    name: "Potato",
    price: "₹20/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Potatoes.jpg",
    category: "Vegetable",
    description: "Starchy root vegetable.",
    nutrients: ["Carbs", "Vitamin C", "Potassium"],
    calories: "77 kcal per 100g",
    healthBenefits: "Provides energy;supports muscle function.",
    tags: ["Staple Food", "Versatile"]
  },
  {
    id: 17,
    name: "Peas",
    price: "₹60/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Green_peas_on_white.jpg",
    category: "Vegetable",
    description: "Fresh green peas.",
    nutrients: ["Protein", "Fiber", "Vitamin K"],
    calories: "81 kcal per 100g",
    healthBenefits: "Supports weight loss;builds muscle.",
    tags: ["Protein Rich", "Snackable"]
  },
  {
    id: 18,
    name: "Pomegranate",
    price: "₹120/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Pomegranate_fruit_-_whole_and_section.jpg",
    category: "Fruit",
    description: "Juicy red pomegranate seeds.",
    nutrients: ["Vitamin C", "Potassium", "Polyphenols"],
    calories: "83 kcal per 100g",
    healthBenefits: "Boosts blood flow;improves skin.",
    tags: ["Heart Healthy", "Skin Booster"]
  },
  {
    id: 19,
    name: "Watermelon",
    price: "₹15/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Watermelon_cross_BNC.jpg",
    category: "Fruit",
    description: "Refreshing summer fruit.",
    nutrients: ["Water", "Lycopene", "Vitamin C"],
    calories: "30 kcal per 100g",
    healthBenefits: "Hydrates body;reduces blood pressure.",
    tags: ["Hydrating", "Best for Summer"]
  },
  {
    id: 20,
    name: "Beetroot",
    price: "₹45/kg",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Beets-Bundle.jpg",
    category: "Vegetable",
    description: "Dark purple root veggie.",
    nutrients: ["Iron", "Nitrates", "Folate"],
    calories: "43 kcal per 100g",
    healthBenefits: "Improves blood flow;boosts stamina.",
    tags: ["Blood Booster", "Juicing"]
  }
];

  let products = [];

  // Fetch Products from API
  async function fetchProducts() {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const fetchedProducts = await response.json();
      // Merge fallback and fetched products
      products = [...fetchedProducts, ...fallbackProducts];
    } catch (error) {
      console.error('Error fetching products:', error);
      // Use fallback products only
      products = [...fallbackProducts];
    }
    loadAllProducts();
    loadRecentlyViewed();
    loadPopularProducts();
    loadSearchResults();
  }

  // Update Menu List
  function updateMenuList() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.email) {
      const profilePhoto = loggedInUser.profilePhoto || "https://via.placeholder.com/40";
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
      document.getElementById("logoutBtn")?.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        updateMenuList();
      });
    } else {
      menuList.innerHTML = `
        <li><a href="login/login.html">Login/SignUp</a></li>
        <li><a href="wishlist.html">Wishlist</a></li>
        <li><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
      `;
    }
  }

  // Toggle Menu
  if (menuList) {
    menuList.style.maxHeight = "0px";
    window.toggleMenu = function () {
      if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px";
        menuList.style.backgroundColor = "white";
      } else {
        menuList.style.maxHeight = "0px";
      }
    };
  }

  // Offer Bar
  const offerText = document.querySelector(".offer-text");
  if (offerText) {
    const offers = [
      "🔥 Limited Time Offer: Get 50% Off on All Products! 🚀",
      "🎉 Buy 1 Get 1 Free on Selected Items! 🛍️",
      "🚚 Free Shipping on Orders Over $99! 🌎",
      "💥 Flash Sale: Extra 20% Off - Use Code: FLASH20 💳"
    ];
    let combinedOffers = offers.join("     •     ");
    offerText.innerHTML = combinedOffers + "     •     " + combinedOffers;
    let animationDuration = combinedOffers.length / 2;
    offerText.style.animation = `scroll-left ${animationDuration}s linear infinite`;
  }

  // Hero Section
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
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
  }

  // Product Functions
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

  function loadAllProducts() {
    if (productContainer) {
      productContainer.innerHTML = "";
      products.forEach(product => {
        const productDiv = createProductElement(product);
        productContainer.appendChild(productDiv);
      });
    }
  }

  function loadRecentlyViewed() {
    if (recentlyViewedContainer) {
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
  }

  function removeProduct(productId) {
    let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    recentlyViewed = recentlyViewed.filter(p => p.id !== productId);
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
    loadRecentlyViewed();
  }

  function loadPopularProducts() {
    if (popularProductsContainer) {
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
  }

  function loadRelatedProducts(category) {
    if (relatedProductsContainer) {
      relatedProductsContainer.innerHTML = "";
      const relatedProducts = products.filter(p => p.category === category).slice(0, 4);
      relatedProducts.forEach(product => relatedProductsContainer.appendChild(createProductElement(product)));
    }
  }

  // Search Functionality
// ...existing code...

// Utility: Simple similarity function (Levenshtein Distance)
function getLevenshteinDistance(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Utility: Check if two words are similar enough
function isSimilar(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1 === str2) return true;
  // Allow up to 2 edits for short words, 3 for longer
  const maxDistance = str1.length > 6 ? 3 : 2;
  return getLevenshteinDistance(str1, str2) <= maxDistance;
}

// Enhanced Search Functionality
function loadSearchResults() {
  if (searchResultsContainer && searchQuerySpan && noResults) {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q")?.trim().toLowerCase() || "";
    searchQuerySpan.textContent = query || "All Products";

    if (!query) {
      searchResultsContainer.innerHTML = "";
      products.forEach(product => {
        const productDiv = createProductElement(product);
        searchResultsContainer.appendChild(productDiv);
      });
      noResults.style.display = "none";
      return;
    }

    // Main filter: direct match or similar
    const filteredProducts = products.filter(product => {
      // Check name, category, description, nutrients, healthBenefits, tags
      const fields = [
        product.name,
        product.category,
        product.description,
        ...(Array.isArray(product.nutrients) ? product.nutrients : (product.nutrients || "").split(";")),
        product.healthBenefits,
        ...(Array.isArray(product.tags) ? product.tags : (product.tags || "").split(";"))
      ];
      return fields.some(field => {
        if (!field) return false;
        // Direct match
        if (field.toLowerCase().includes(query)) return true;
        // Similarity check for each word in field
        return field
          .toLowerCase()
          .split(/[\s,;]+/)
          .some(word => isSimilar(word, query));
      });
    });

    searchResultsContainer.innerHTML = "";
    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        const productDiv = createProductElement(product);
        searchResultsContainer.appendChild(productDiv);
      });
      noResults.style.display = "none";
    } else {
      // Show preview: closest matches (top 3 by similarity)
      // Compute similarity score for each product name
      const scored = products.map(product => {
        const name = product.name.toLowerCase();
        const dist = getLevenshteinDistance(name, query);
        return { product, dist };
      });
      scored.sort((a, b) => a.dist - b.dist);
      const preview = scored.slice(0, 3).map(s => s.product);

      noResults.style.display = "block";
      if (preview.length > 0) {
        const previewDiv = document.createElement("div");
        previewDiv.innerHTML = "<div style='margin:10px 0 5px 0;font-weight:bold;'>Did you mean:</div>";
        preview.forEach(product => {
          const productDiv = createProductElement(product);
          previewDiv.appendChild(productDiv);
        });
        searchResultsContainer.appendChild(previewDiv);
      }
    }
  }
}

// ...existing code...

  // Initialize
  updateMenuList();
  await fetchProducts(); // Fetch products and load all sections
});