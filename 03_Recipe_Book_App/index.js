// Replace your API_KEY Here...
const API_KEY = "23d7e6515827456380a46ece11c012af";
const recipeListElement = document.getElementById("recipe-list");

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
}

async function init(){
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

function displayRecipes(recipes){
    recipeListElement.innerHTML = "";
    recipes.forEach((recipe)=>{
        const recipeItemElement = document.createElement("li");
        recipeItemElement.classList.add("recipe-item");
        
        recipeImageElement = document.createElement("img");
        recipeImageElement.src = recipe.image;
        recipeImageElement.alt = "recipe Image";

        recipeTitleElement = document.createElement("h2");
        recipeTitleElement.innerText = recipe.title;

        recipeIngredientsElement = document.createElement("p");
        recipeIngredientsElement.innerHTML = `
            <strong>Ingredients:<strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}
        `;

        recipeLinkElement = document.createElement("a");
        recipeLinkElement.href = recipe.sourceUrl;
        recipeLinkElement.innerText = "View Recipe";

        recipeItemElement.appendChild(recipeImageElement);
        recipeItemElement.appendChild(recipeTitleElement);
        recipeItemElement.appendChild(recipeIngredientsElement);
        recipeItemElement.appendChild(recipeLinkElement);
        recipeListElement.appendChild(recipeItemElement);
    })
}

init()