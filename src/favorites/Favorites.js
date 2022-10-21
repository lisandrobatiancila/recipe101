import { useEffect, useState } from "react";
import FavoritesCard from "../components/card/FavoritesCard";
import RecipeStorage from "../storage/recipeDB";

var recipeStorage = new RecipeStorage();

function Favorites () {
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        setFavorites(recipeStorage.allFavorites())
    }, []);

    return (
        <section>
            {
                favorites?
                <FavoritesCard favorites = { favorites } />
                :
                "you have no favorites!."
            }
        </section>
    )
}

export default Favorites;