import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import certainRecipeStyle from './CertainRecipes.module.css';

function CertainRecipe () {
    const [ingredients, setIngredients] = useState(null);
    const [instructions, setInstructions] = useState(null);

    const params = useParams()
    const certain_view_recipes = JSON.parse(localStorage.getItem('view_certain_recipe'));

    useEffect(() => {
        setIngredients(certain_view_recipes.ingredients.split(';'))
        setInstructions(certain_view_recipes.instructions.split('.'))
    }, [])


    return (
        <section className={ certainRecipeStyle.certain_recipe }>
            <div className="container">
                <div className={ certainRecipeStyle.title }>
                    { params.certain_recipe}
                </div>
                <div className= { certainRecipeStyle.certain_recipe_body }>
                    <h4 className={["text_capitalize", certainRecipeStyle.text_warning].join(' ')}>ingredients</h4>
                    <div className={[certainRecipeStyle.title, certainRecipeStyle.justify_left].join(' ')}>
                        {
                            ingredients?
                                ingredients.map((ingredient, i) => {
                                    return /[^\s]/.test(ingredient)?
                                    <div key = { i } className={ certainRecipeStyle.ingredient }>
                                        { ingredient }
                                    </div>:
                                    "no ingredients to show!."
                                })
                            :
                            "no ingredients to show!."
                        }
                    </div>
                    <h4 className={["text_capitalize", certainRecipeStyle.text_success].join(' ')}>instructions</h4>
                    <div className={[certainRecipeStyle.title, certainRecipeStyle.justify_left].join(' ') }>
                        {
                            instructions?
                                instructions.map((instruction, i) => {
                                    return /[^\s]/.test(instruction)?
                                    <div key={ i } className= { certainRecipeStyle.instruction }>
                                        { instruction }
                                    </div>
                                    :""
                                })
                            :
                            "no instructions to show!."
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CertainRecipe;