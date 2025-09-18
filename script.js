// script.js - contains recipe data and small helpers to render cards
const RECIPES = [
  { id: 1, name: "Ginger Tea", shortDesc: "Boosts immunity & relieves cold.", image: "https://via.placeholder.com/600x400?text=Ginger+Tea", steps: ["Boil water","Add ginger slices","Simmer 5 min","Add honey"], nutrients: "Vitamin C, Antioxidants" },
  { id: 2, name: "Tulsi Tea", shortDesc: "Reduces stress and improves digestion.", image: "https://via.placeholder.com/600x400?text=Tulsi+Tea", steps: ["Boil water","Add tulsi leaves","Simmer 3 min","Add honey"], nutrients: "Iron, Calcium" },
  { id: 3, name: "Turmeric Milk", shortDesc: "Rich in antioxidants & healing.", image: "https://via.placeholder.com/600x400?text=Turmeric+Milk", steps: ["Heat milk","Add turmeric powder","Stir well"], nutrients: "Curcumin, Vitamin D" }
];

// helper: create a DOM node for recipe card
function createRecipeCard(recipe){
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" />
    <h2>${recipe.name}</h2>
    <p>${recipe.shortDesc}</p>
    <a class="view" href="recipe.html?id=${recipe.id}">View Details →</a>
  `;
  return card;
}
