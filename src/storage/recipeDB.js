class RecipeStorage {
    constructor() {

    }
    addToFavorites(recipe) {
        if(localStorage.getItem('recipes_favorites')) {
            var recipes = [];
            recipes = JSON.parse(localStorage.getItem('recipes_favorites'));
            // console.log(recipes)
            recipes.push(recipe);
            // console.log(recipes)

            localStorage.setItem('recipes_favorites', JSON.stringify(recipes));
        }
        else {
            const recipes = [];
            recipes.push(recipe);
            localStorage.setItem('recipes_favorites', JSON.stringify(recipes));
        }
    }
    allFavorites() {
        return JSON.parse(localStorage.getItem('recipes_favorites'));
    }
}

export default RecipeStorage;