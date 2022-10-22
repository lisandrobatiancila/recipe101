import { useEffect, useState } from "react";
import FavoritesCard from "../components/card/FavoritesCard";
import { useRecipe } from "../hooks/useRecipe";
import RecipeStorage from "../storage/recipeDB";
import favoritesStyle from './Favorites.module.css';
import FixedMessageContainer from '../components/message/FixedMessageContainer';
import Message from "../components/message/Message";

var recipeStorage = new RecipeStorage();

function Favorites () {
    const [favorites, setFavorites] = useState(null);
    const { message, setMessage } = useRecipe();

    useEffect(() => {
        setFavorites(recipeStorage.allFavorites())
        setMessage({
            message: '', error_types: {
                error: false,
                warning: false,
                success: false
            }});
    }, []);

    const removeRecipe = (recipe) => {
        setFavorites(recipeStorage.removeRecipeFromFavorite(recipe));
        setMessage({
            message: `${recipe.title} was removed to favorties.`, error_types: {
                error: false,
                warning: true,
                success: false
        }});
    }

    return (
        <section className="container">
            <div className={[favoritesStyle.favorites_title, "text_capitalize"].join(' ')}>
                <h3>favorites</h3>
            </div>
            {
                favorites && favorites.length > 0?
                <FavoritesCard favorites = { favorites } removeRecipe = { removeRecipe } />
                :
                <div style={{paddingBottom: "175px"}}>
                    <span style={{borderBottom: "2px solid #1ca854"}}>you have no favorites added!.</span>
                </div>
            }
            {
                    /[^\s]/.test(message.message)?
                    <FixedMessageContainer error_types={ message.error_types }>
                        <Message message={ message } />
                    </FixedMessageContainer>
                    :
                    ""
                }
        </section>
    )
}

export default Favorites;