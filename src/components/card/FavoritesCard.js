import { useNavigate } from 'react-router-dom';
import favoritesCardStyle from './FavoritesCard.module.css';

function FavoritesCard ({ favorites, removeRecipe }) {
    const navigate = useNavigate();

    const viewMore = (title) => {
        navigate(`/view/${title}`);
    }
    

    return (
        <div className={ favoritesCardStyle.favorites_card }>
            {
                favorites?
                    favorites.map((favorite, i) =>
                        <div key={ i } className={ favoritesCardStyle.favorites_content }>
                            <div className={ favoritesCardStyle.favorites_header }>
                                <h4>{ favorite.title }</h4>
                            </div>
                            <div className={ favoritesCardStyle.favorites_body }>
                                <p>{ favorite.servings }</p>
                                
                                <div className={ favoritesCardStyle.actions }>
                                    <button
                                        onClick={ () => {
                                            viewMore(favorite.title)
                                            localStorage.setItem('view_certain_recipe', JSON.stringify(favorite))
                                        }}>view recipe</button>
                                    <button
                                        onClick={ ()=> removeRecipe(favorite) }>remove recipe</button>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    "no favorites!."
            }
        </div>
    )
}

export default FavoritesCard;