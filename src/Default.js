import Loading from "./components/loading/Loading";
import Card from './components/card/Card';
import StackUsed from "./components/stack-use/StackUsed";
import { useEffect, useState } from "react";
import { useRecipe } from "./hooks/useRecipe";
import { useRecipeReceiver } from "./hooks/useRecipeReceiver";
import RecipeStorage from "./storage/recipeDB";

var recipeStorage = new RecipeStorage();

function Default () {
    const { isLoading, setIsLoading, keywords, setKeywords, recipe } = useRecipe();
    const recipeReceiver = useRecipeReceiver();

    useEffect(() => {
        const retrieveRecipe = async () => {
            try {
                await recipeReceiver();
                setIsLoading(false);
            }
            catch(err) {
                console.log(err);
            }
            finally {
                setIsLoading(false);
            }
        }
        isLoading?retrieveRecipe():setIsLoading(false);
    }, [keywords]);
    
    const addToFavorites = (recipe) => {
        recipeStorage.addToFavorites(recipe)
    }

    return (
        <section>
            <div className="container">
                    {
                        isLoading? <Loading message={"fetching..."} />
                        :
                        <Card recipes = { recipe } addToFavorites = { addToFavorites } />
                    }
                    
            </div>
            <StackUsed />
        </section>
    )
}

export default Default;