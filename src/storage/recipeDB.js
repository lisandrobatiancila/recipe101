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
    removeRecipeFromFavorite(recipe) {
        var favoriteRecipes = JSON.parse(localStorage.getItem('recipes_favorites'));

        favoriteRecipes = favoriteRecipes.filter(favorite => {
            if((favorite.title === recipe.title) && 
            (favorite.servings === recipe.servings) && (favorite.ingredients === recipe.ingredients)) return;
            return favorite;
        });
        
        localStorage.setItem('recipes_favorites', JSON.stringify(favoriteRecipes));

        return JSON.parse(localStorage.getItem('recipes_favorites'));
    }
    isFavoriteAlreadyAdded(recipe) {
        const favoriteRecipes = JSON.parse(localStorage.getItem('recipes_favorites'));
        if(favoriteRecipes && favoriteRecipes.filter(favorite => favorite.title  === recipe.title).length > 0)
            return true;
        return false;
    }
}

export default RecipeStorage;