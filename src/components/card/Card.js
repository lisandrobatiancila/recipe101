import Ratings from '../ratings/Ratings';
import cardStyle from './Card.module.css';
import { Link } from 'react-router-dom';

function Card ({ recipes }) {

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
                            {
                                recipe.servings
                            }
                            <Ratings />
                        </div>
                        <button>view more</button>
                    </div>
                )
            }
        </div>
    )
}

export default Card;