import { useNavigate } from 'react-router-dom';
import Ratings from '../ratings/Ratings';
import cardStyle from './Card.module.css';

function Card ({ recipes, addToFavorites }) {
    const navigate = useNavigate();

    const viewMore = (title) => {
        navigate(`/view/${title}`);
    }

    return (
        <div className={ cardStyle.card }>
            {
                recipes?.map((recipe, i) => 
                    <div key={ i } className={ cardStyle.card_container }>
                        <div className={ cardStyle.card_header }>
                            <h3>
                                { recipe.title }
                            </h3>
                            <hr />
                        </div>
                        <div className={ cardStyle.card_body }>
                            <span>
                                {
                                    recipe.servings
                                }
                            </span>
                            <Ratings />
                        </div>
                        <div className={ cardStyle.actions }>
                            <button className="text_capitalize"
                                onClick={ ()=>{
                                    viewMore(recipe.title)
                                    localStorage.setItem('view_certain_recipe', JSON.stringify(recipe))
                                } }>view more</button>
                            <button className="text_capitalize"
                                onClick={ () => addToFavorites(recipe) }>add to favorites</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card;