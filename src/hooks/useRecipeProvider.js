import { createContext, useState } from "react";


export const RecipeContext = createContext([]);

const RecipeProvider = ({ children }) => {
    const [recipe, setRecipe] = useState(null);
    const [keywords, setKeywords] = useState('adobo');
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState({
        message: '', error_types: {
            error: false,
            warning: false,
            success: false
        }
    });

    return (
        <RecipeContext.Provider value={{ 
            recipe, setRecipe, 
            keywords, setKeywords, 
            isLoading, setIsLoading,
            message, setMessage
            }}>
                
            { children }
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;