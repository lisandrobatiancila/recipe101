import { useEffect } from "react";
import RecipeStorage from "../storage/recipeDB";

var recipeStorage = new RecipeStorage();

function Favorites () {
    useEffect(() => {
        console.log(recipeStorage.allFavorites())
    }, []);

    return (
        <section>
            fav
        </section>
    )
}

export default Favorites;