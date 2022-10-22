import Loading from "./components/loading/Loading";
import Card from './components/card/Card';
import StackUsed from "./components/stack-use/StackUsed";
import { useEffect, useState } from "react";
import { useRecipe } from "./hooks/useRecipe";
import { useRecipeReceiver } from "./hooks/useRecipeReceiver";
import RecipeStorage from "./storage/recipeDB";
import FixedMessageContainer from './components/message/FixedMessageContainer';
import Message from './components/message/Message';

var recipeStorage = new RecipeStorage();

function Default () {
    const { isLoading, setIsLoading, 
        keywords, setKeywords, recipe,
        message, setMessage
     } = useRecipe();
    const recipeReceiver = useRecipeReceiver();

    useEffect(() => {
        setMessage({
            message: '', error_types: {
                error: false,
                warning: false,
                success: false
        }});
        
        const retrieveRecipe = async () => {
            try {
                await recipeReceiver();
                setIsLoading(false);
            }
            catch(err) {
                if(err)
                    setMessage({message: err?.message, error_types: {
                        error: true,
                        warning: false,
                        success: false
                    }});
            }
            finally {
                setIsLoading(false);
            }
        }
        isLoading?retrieveRecipe():setIsLoading(false);
    }, [keywords]);
    
    const addToFavorites = (recipe) => {
        if(!recipeStorage.isFavoriteAlreadyAdded(recipe)){
            setMessage({
                message: `${recipe.title} Recipe was added to favorites.`,
                error_types: {
                    error: false,
                    warning: false,
                    success: true
                }
            })
            return recipeStorage.addToFavorites(recipe)
        }
        setMessage({
            message: `${recipe.title} Recipe already added to favorites.`,
            error_types: {
                error: false,
                warning: true,
                success: false
            }
        });
    }

    return (
        <section>
            <div className="container">
                    {
                        isLoading? <Loading message={"fetching..."} />
                        :
                        <Card recipes = { recipe } addToFavorites = { addToFavorites } />
                    }
                {
                    /[^\s]/.test(message.message)?
                    <FixedMessageContainer error_types={ message.error_types }>
                        <Message message={ message } />
                    </FixedMessageContainer>
                    :
                    ""
                }
            </div>
            <StackUsed />
        </section>
    )
}

export default Default;