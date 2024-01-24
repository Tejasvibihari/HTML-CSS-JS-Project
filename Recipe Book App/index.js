const API_KEY = "3a417722e93e419696e3943dff5269ef";
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;

        const recipeNameEl = document.createElement("h2");
        recipeNameEl.innerText = recipe.title;
        const recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerText = recipe.extendedIngredients.map((ingredient) => ingredient.name).join(", ");
        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";
        recipeLinkEl.target = "_blank";





        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeNameEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);

    });
}




async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
    return data.recipes
}


async function init() {
    const recipes = await getRecipes()

    displayRecipes(recipes);

}

init();