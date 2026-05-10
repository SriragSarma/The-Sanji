// The Sanji - script.js
// South Indian recipe website

// ---- RECIPE DATA ----
var RECIPES = [
  {
    id: 1,
    name: "Hyderabadi Chicken Biryani",
    category: "Non-Veg",
    time: 90,
    difficulty: "Hard",
    servings: 6,
    trending: true,
    image: "hcb.jpg",
    ingredients: [
      "700g bone-in chicken pieces",
      "2 cups basmati rice, soaked 30 mins",
      "2 large onions, thinly sliced",
      "1 cup yogurt",
      "4 tbsp ghee",
      "2 tsp biryani masala",
      "1 tsp saffron soaked in warm milk",
      "Fresh mint and coriander leaves",
      "4 garlic cloves and 1 inch ginger paste",
      "Whole spices: bay leaf, cardamom, cloves, cinnamon",
      "Salt to taste",
      "Fried onions for topping"
    ],
    steps: [
      "Marinate chicken with yogurt, garlic ginger paste, biryani masala and salt for at least 1 hour.",
      "Fry sliced onions in ghee until golden brown and crispy. Keep aside.",
      "In the same ghee add whole spices, then add the marinated chicken and cook on high heat for 10 minutes.",
      "Boil rice with whole spices and salt until 70 percent cooked. Drain the water.",
      "In a heavy pot layer the chicken at the bottom. Add half the rice on top. Pour saffron milk, add mint, coriander and fried onions. Add the remaining rice and repeat.",
      "Cover the pot tightly with a lid. Cook on high heat for 5 minutes then reduce to very low flame for 25 minutes. This is called dum cooking.",
      "Let it rest for 10 minutes before opening. Mix gently and serve with raita."
    ]
  },
  {
    id: 2,
    name: "Masala Dosa",
    category: "Veg",
    time: 30,
    difficulty: "Medium",
    servings: 3,
    trending: true,
    image: "masala dosa.jpg",
    ingredients: [
      "2 cups dosa batter",
      "3 medium potatoes, boiled",
      "1 onion, sliced",
      "2 green chillies, chopped",
      "1 tsp mustard seeds",
      "1 tsp turmeric",
      "8 to 10 curry leaves",
      "2 tbsp oil",
      "Salt to taste",
      "Coconut chutney and sambar to serve"
    ],
    steps: [
      "Heat oil in a pan. Add mustard seeds and let them splutter.",
      "Add curry leaves, green chillies and sliced onion. Cook until onion is soft.",
      "Add turmeric and mashed potatoes. Mix everything and cook for 3 to 4 minutes. Add salt and keep aside.",
      "Heat a flat tawa on medium flame. Grease it lightly with oil.",
      "Pour one ladle of dosa batter and spread it in a circle to make a thin crepe.",
      "Drizzle oil on the edges and cook until the bottom is golden and crispy.",
      "Place potato filling in the center, fold the dosa and serve hot with chutney and sambar."
    ]
  },
  {
    id: 3,
    name: "Sambar",
    category: "Veg",
    time: 35,
    difficulty: "Easy",
    servings: 4,
    trending: true,
    image: "sambar.jpg",
    ingredients: [
      "1 cup toor dal",
      "1 medium tomato, chopped",
      "1 small onion, chopped",
      "1 drumstick, cut into pieces",
      "1 carrot, chopped",
      "2 tsp sambar powder",
      "1 tsp tamarind paste",
      "1 tsp mustard seeds",
      "5 to 6 curry leaves",
      "2 dried red chillies",
      "1 tbsp oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    steps: [
      "Wash and pressure cook toor dal with turmeric and enough water until soft. Mash it well.",
      "In a pot add the mashed dal, tomato, onion, drumstick and carrot. Add 2 cups of water.",
      "Add sambar powder, tamarind paste and salt. Boil for 10 minutes until vegetables are cooked.",
      "In a small pan heat oil. Add mustard seeds and let them pop. Add curry leaves and red chillies.",
      "Pour the tempering over the sambar and stir.",
      "Garnish with coriander and serve hot with rice, idli or dosa."
    ]
  },
  {
    id: 4,
    name: "Medu Vada",
    category: "Snacks",
    time: 30,
    difficulty: "Medium",
    servings: 4,
    trending: true,
    image: "medu vada.jpg",
    ingredients: [
      "1 cup urad dal, soaked overnight",
      "2 green chillies, finely chopped",
      "1 inch ginger, grated",
      "8 to 10 curry leaves, chopped",
      "1 tsp cumin seeds",
      "Salt to taste",
      "Oil for deep frying",
      "Coconut chutney and sambar to serve"
    ],
    steps: [
      "Drain the soaked urad dal and grind it to a thick smooth batter. Do not add too much water.",
      "Add green chillies, ginger, curry leaves, cumin seeds and salt. Mix well.",
      "Heat oil in a deep pan on medium flame.",
      "Wet your hands, take a ball of batter, flatten it slightly and make a hole in the center with your thumb.",
      "Carefully slide the vada into the hot oil. Fry 3 to 4 at a time.",
      "Fry on medium heat for about 5 to 6 minutes turning once until golden and crispy.",
      "Drain on paper towels and serve hot with coconut chutney and sambar."
    ]
  },
  {
    id: 5,
    name: "Palak Paneer",
    category: "Veg",
    time: 35,
    difficulty: "Easy",
    servings: 4,
    trending: false,
    image: "palak paneer.jpg",
    ingredients: [
      "250g paneer, cut into cubes",
      "300g fresh spinach",
      "1 onion, finely chopped",
      "2 tomatoes, pureed",
      "4 garlic cloves",
      "1 inch ginger",
      "2 green chillies",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "2 tbsp cream",
      "2 tbsp oil",
      "Salt to taste"
    ],
    steps: [
      "Boil spinach in water for 2 minutes. Drain and blend into a smooth paste with ginger, garlic and green chillies.",
      "Heat oil in a pan. Add cumin seeds then add onion. Cook until golden.",
      "Add tomato puree and cook until oil separates. About 5 minutes.",
      "Add the spinach paste and stir well. Cook for 5 more minutes.",
      "Add garam masala, cream and salt. Mix everything.",
      "Add paneer cubes and cook for 3 to 4 minutes on low heat.",
      "Serve hot with roti or rice."
    ]
  },
  {
    id: 6,
    name: "Mango Lassi",
    category: "Drinks",
    time: 5,
    difficulty: "Easy",
    servings: 2,
    trending: false,
    image: "mango lassi.jpg",
    ingredients: [
      "1 cup mango pulp or 1 ripe mango",
      "1 cup chilled yogurt",
      "1/4 cup cold milk",
      "2 tbsp sugar",
      "A pinch of cardamom powder",
      "Ice cubes"
    ],
    steps: [
      "If using fresh mango, peel and chop the mango.",
      "Put mango, yogurt, milk, sugar and cardamom in a blender.",
      "Blend for about 1 minute until smooth.",
      "Taste and add more sugar if needed.",
      "Pour into glasses over ice cubes.",
      "Serve immediately."
    ]
  },
  {
    id: 7,
    name: "Poha",
    category: "Breakfast",
    time: 15,
    difficulty: "Easy",
    servings: 2,
    trending: false,
    image: "poha.jpg",
    ingredients: [
      "1.5 cups thick poha (flattened rice)",
      "1 onion, finely chopped",
      "2 green chillies, slit",
      "1 tsp mustard seeds",
      "8 curry leaves",
      "1 tsp turmeric",
      "1 tbsp oil",
      "1 tsp lemon juice",
      "2 tbsp roasted peanuts",
      "Fresh coriander",
      "Salt and a pinch of sugar"
    ],
    steps: [
      "Rinse poha in water and drain. Let it sit for 3 minutes. Add turmeric, salt and sugar. Mix gently.",
      "Heat oil in a pan. Add mustard seeds and let them pop.",
      "Add curry leaves, green chillies and onion. Cook for 3 minutes.",
      "Add peanuts and roast for 1 minute.",
      "Add the seasoned poha and mix carefully. Cover and cook on low flame for 2 minutes.",
      "Add lemon juice and mix.",
      "Garnish with coriander and serve warm."
    ]
  },
  {
    id: 8,
    name: "Idli",
    category: "Breakfast",
    time: 20,
    difficulty: "Easy",
    servings: 4,
    trending: false,
    image: "idli.jpg",
    ingredients: [
      "2 cups idli batter (fermented)",
      "Oil to grease the idli molds",
      "Coconut chutney to serve",
      "Sambar to serve"
    ],
    steps: [
      "Grease the idli molds with a little oil.",
      "Pour the idli batter into each mold filling about 3/4 full.",
      "Add enough water to the idli cooker and bring to a boil.",
      "Place the molds in the cooker and steam for 10 to 12 minutes on medium flame.",
      "Check with a toothpick. If it comes out clean the idlis are ready.",
      "Wait 2 minutes then remove idlis using a spoon.",
      "Serve hot with coconut chutney and sambar."
    ]
  },
  {
    id: 9,
    name: "Payasam",
    category: "Desserts",
    time: 40,
    difficulty: "Easy",
    servings: 6,
    trending: false,
    image: "payasam.jpg",
    ingredients: [
      "1/2 cup vermicelli",
      "1 litre full fat milk",
      "1/2 cup sugar",
      "2 tbsp ghee",
      "10 cashews",
      "10 raisins",
      "1/4 tsp cardamom powder",
      "A few saffron strands"
    ],
    steps: [
      "Heat ghee in a pan. Fry cashews until golden. Add raisins and fry for 30 seconds. Keep aside.",
      "In the same pan roast vermicelli in remaining ghee until golden brown.",
      "Add milk and bring to a boil on medium heat. Keep stirring.",
      "Cook for 10 minutes until vermicelli is soft and milk reduces slightly.",
      "Add sugar and stir until dissolved. Cook for 5 more minutes.",
      "Add cardamom powder and saffron. Mix well.",
      "Add fried cashews and raisins. Serve warm or chilled."
    ]
  },
  {
    id: 10,
    name: "Pani Puri",
    category: "Snacks",
    time: 20,
    difficulty: "Easy",
    servings: 4,
    trending: false,
    image: "pani puri.jpg",
    ingredients: [
      "20 to 24 ready made puris",
      "1 cup boiled chickpeas or mashed potato",
      "1 cup fresh mint leaves",
      "1/2 cup coriander leaves",
      "2 green chillies",
      "1 tsp cumin powder",
      "1 tsp chaat masala",
      "1 tsp black salt",
      "2 tbsp tamarind paste",
      "4 cups cold water",
      "Salt to taste"
    ],
    steps: [
      "Blend mint, coriander and green chillies with a little water. Strain it.",
      "Mix the mint water with 4 cups cold water. Add tamarind paste, cumin powder, chaat masala, black salt and salt.",
      "Taste and adjust the flavour. Keep in the fridge for 30 minutes.",
      "Mix chickpeas or potato with a pinch of cumin and salt.",
      "Make a small hole on top of each puri.",
      "Fill with the chickpea or potato filling.",
      "Dip in the chilled mint water and eat immediately."
    ]
  },
  {
    id: 11,
    name: "Upma",
    category: "Breakfast",
    time: 20,
    difficulty: "Easy",
    servings: 3,
    trending: false,
    image: "upma.jpg",
    ingredients: [
      "1 cup semolina (rava)",
      "2 cups water",
      "1 onion, chopped",
      "2 green chillies",
      "1 tsp mustard seeds",
      "1 tsp urad dal",
      "8 curry leaves",
      "1 inch ginger, chopped",
      "2 tbsp oil",
      "Salt to taste",
      "Lemon juice and coriander to garnish"
    ],
    steps: [
      "Dry roast semolina in a pan on medium heat for 4 to 5 minutes until slightly golden. Keep aside.",
      "Heat oil in the same pan. Add mustard seeds and urad dal. Let them pop.",
      "Add curry leaves, green chillies, ginger and onion. Cook until onion is soft.",
      "Add 2 cups of water and salt. Bring to a boil.",
      "Slowly add the roasted semolina while stirring to avoid lumps.",
      "Mix well, cover and cook on low flame for 2 to 3 minutes.",
      "Add lemon juice. Garnish with coriander and serve hot."
    ]
  },
  {
    id: 12,
    name: "Chicken Chettinad",
    category: "Non-Veg",
    time: 50,
    difficulty: "Hard",
    servings: 4,
    trending: false,
    image: "chicken chettinad.jpg",
    ingredients: [
      "500g chicken pieces",
      "2 onions, finely chopped",
      "2 tomatoes, chopped",
      "1 tbsp ginger garlic paste",
      "2 tsp Chettinad masala powder",
      "1 tsp turmeric",
      "1 tsp red chilli powder",
      "8 to 10 curry leaves",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander to garnish"
    ],
    steps: [
      "Heat oil in a pan. Add curry leaves then add onion and cook until golden brown.",
      "Add ginger garlic paste and cook for 2 minutes.",
      "Add tomatoes and cook until soft and oil separates.",
      "Add turmeric, red chilli powder and Chettinad masala. Mix well.",
      "Add chicken pieces and coat them with the masala. Cook on high heat for 5 minutes.",
      "Add half a cup of water, cover and cook on medium heat for 25 to 30 minutes.",
      "Garnish with coriander and serve with rice or parotta."
    ]
  }
];

// ---- STATE ----
var currentCatFilter = "All";
var currentDiffFilter = "All";
var currentTimeFilter = "All";

// ---- SHOW PAGE ----
function showPage(pageName, recipeData) {
  var allPages = document.querySelectorAll(".page");
  for (var i = 0; i < allPages.length; i++) {
    allPages[i].classList.remove("active");
  }

  document.getElementById("page-" + pageName).classList.add("active");
  window.scrollTo(0, 0);

  if (pageName === "home") {
    renderTrending();
  }
  if (pageName === "recipes") {
    renderAllRecipes();
  }
  if (pageName === "recipe-detail" && recipeData) {
    renderDetail(recipeData);
  }
}

// ---- HAMBURGER MENU ----
function toggleMenu() {
  var menu = document.getElementById("navLinks");
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
}

// ---- RENDER TRENDING ----
function renderTrending() {
  var trending = [];
  for (var i = 0; i < RECIPES.length; i++) {
    if (RECIPES[i].trending === true) {
      trending.push(RECIPES[i]);
    }
  }

  var grid = document.getElementById("trendingGrid");
  grid.innerHTML = "";

  for (var j = 0; j < trending.length; j++) {
    grid.innerHTML += makeCard(trending[j]);
  }
}

// ---- RENDER ALL RECIPES ----
function renderAllRecipes() {
  currentCatFilter = "All";
  currentDiffFilter = "All";
  currentTimeFilter = "All";

  var searchInput = document.getElementById("recipeSearch");
  if (searchInput) {
    searchInput.value = "";
  }

  // reset all chips
  var catChips = document.querySelectorAll("[data-cat]");
  for (var i = 0; i < catChips.length; i++) {
    catChips[i].classList.remove("active");
    if (catChips[i].getAttribute("data-cat") === "All") {
      catChips[i].classList.add("active");
    }
  }

  applyFilters();
}

// ---- FILTER CATEGORY FROM HOME ----
function filterCategory(cat) {
  currentCatFilter = cat;
  showPage("recipes");

  // update the chip for that category
  setTimeout(function() {
    var catChips = document.querySelectorAll("[data-cat]");
    for (var i = 0; i < catChips.length; i++) {
      catChips[i].classList.remove("active");
      if (catChips[i].getAttribute("data-cat") === cat) {
        catChips[i].classList.add("active");
      }
    }
    applyFilters();
  }, 50);
}

// ---- HERO SEARCH ----
function doHeroSearch() {
  var q = document.getElementById("heroSearch").value;
  showPage("recipes");
  setTimeout(function() {
    var searchInput = document.getElementById("recipeSearch");
    if (searchInput) {
      searchInput.value = q;
    }
    applyFilters();
  }, 50);
}

// ---- SET FILTER ----
function setFilter(type, value, btn) {
  if (type === "cat") {
    currentCatFilter = value;
    // update cat chips
    var catChips = document.querySelectorAll("[data-cat]");
    for (var i = 0; i < catChips.length; i++) {
      catChips[i].classList.remove("active");
    }
  }
  if (type === "diff") {
    currentDiffFilter = value;
    // update diff chips
    var diffChips = document.querySelectorAll("[data-diff]");
    for (var i = 0; i < diffChips.length; i++) {
      diffChips[i].classList.remove("active");
    }
  }
  if (type === "time") {
    currentTimeFilter = value;
    // update time chips
    var timeChips = document.querySelectorAll("[data-time]");
    for (var i = 0; i < timeChips.length; i++) {
      timeChips[i].classList.remove("active");
    }
  }
  btn.classList.add("active");
  applyFilters();
}

// ---- APPLY FILTERS ----
function applyFilters() {
  var searchBox = document.getElementById("recipeSearch");
  var searchText = searchBox ? searchBox.value.toLowerCase() : "";

  var filtered = [];

  for (var i = 0; i < RECIPES.length; i++) {
    var r = RECIPES[i];
    var matchCat = (currentCatFilter === "All" || r.category === currentCatFilter);
    var matchDiff = (currentDiffFilter === "All" || r.difficulty === currentDiffFilter);
    var matchTime = true;

    if (currentTimeFilter === "quick") matchTime = (r.time <= 20);
    if (currentTimeFilter === "medium") matchTime = (r.time > 20 && r.time <= 40);
    if (currentTimeFilter === "long") matchTime = (r.time > 40);

    var matchSearch = (searchText === "" || r.name.toLowerCase().indexOf(searchText) !== -1 || r.category.toLowerCase().indexOf(searchText) !== -1);

    if (matchCat && matchDiff && matchTime && matchSearch) {
      filtered.push(r);
    }
  }

  var countEl = document.getElementById("resultsCount");
  if (countEl) {
    countEl.textContent = filtered.length + " recipe(s) found";
  }

  var grid = document.getElementById("allRecipesGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>No recipes found. Try changing the filters.</p></div>';
    return;
  }

  for (var j = 0; j < filtered.length; j++) {
    grid.innerHTML += makeCard(filtered[j]);
  }
}

// ---- MAKE RECIPE CARD ----
function makeCard(r) {
  var diffClass = "diff-" + r.difficulty.toLowerCase();
  return '<div class="recipe-card" onclick="openRecipe(' + r.id + ')">' +
    '<img src="' + r.image + '" alt="' + r.name + '" loading="lazy" />' +
    '<div class="card-body">' +
    '<span class="cat-label">' + r.category + '</span>' +
    '<h3>' + r.name + '</h3>' +
    '<div class="card-meta">' +
    '<span>⏱ ' + r.time + ' min</span>' +
    '<span>👥 ' + r.servings + ' servings</span>' +
    '<span class="' + diffClass + '">' + r.difficulty + '</span>' +
    '</div>' +
    '</div>' +
    '</div>';
}

// ---- OPEN SINGLE RECIPE ----
function openRecipe(id) {
  var recipe = null;
  for (var i = 0; i < RECIPES.length; i++) {
    if (RECIPES[i].id === id) {
      recipe = RECIPES[i];
      break;
    }
  }
  if (recipe) {
    showPage("recipe-detail", recipe);
  }
}

// ---- RENDER RECIPE DETAIL ----
function renderDetail(r) {
  var diffClass = "diff-" + r.difficulty.toLowerCase();

  var ingredientsList = "";
  for (var i = 0; i < r.ingredients.length; i++) {
    ingredientsList += '<div class="ing-item"><div class="ing-dot"></div>' + r.ingredients[i] + '</div>';
  }

  var stepsList = "";
  for (var j = 0; j < r.steps.length; j++) {
    stepsList += '<div class="step-item">' +
      '<div class="step-num">' + (j + 1) + '</div>' +
      '<div class="step-text">' + r.steps[j] + '</div>' +
      '</div>';
  }

  var html = '<img class="detail-hero-img" src="' + r.image + '" alt="' + r.name + '" />' +
    '<div class="detail-body">' +
    '<button class="back-btn" onclick="showPage(\'recipes\')">← Back to Recipes</button>' +
    '<h1 class="detail-title">' + r.name + '</h1>' +
    '<div class="detail-meta">' +
    '<span class="meta-pill">⏱ ' + r.time + ' minutes</span>' +
    '<span class="meta-pill">👥 ' + r.servings + ' servings</span>' +
    '<span class="meta-pill">🥗 ' + r.category + '</span>' +
    '<span class="meta-pill ' + diffClass + '">' + r.difficulty + '</span>' +
    '</div>' +
    '<div class="detail-grid">' +
    '<div class="ingredients-box"><h3>Ingredients</h3>' + ingredientsList + '</div>' +
    '<div class="steps-box"><h3>How to Cook</h3>' + stepsList + '</div>' +
    '</div>' +
    '</div>';

  document.getElementById("recipeDetailContent").innerHTML = html;
}

// ---- CONTACT FORM ----
function submitContact() {
  var name = document.getElementById("cName").value.trim();
  var email = document.getElementById("cEmail").value.trim();
  var msg = document.getElementById("cMsg").value.trim();

  if (name === "" || email === "" || msg === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (email.indexOf("@") === -1) {
    alert("Please enter a valid email address.");
    return;
  }

  document.getElementById("contactSuccess").style.display = "block";
  document.getElementById("cName").value = "";
  document.getElementById("cEmail").value = "";
  document.getElementById("cMsg").value = "";

  setTimeout(function() {
    document.getElementById("contactSuccess").style.display = "none";
  }, 5000);
}

// ---- ON PAGE LOAD ----
renderTrending();
