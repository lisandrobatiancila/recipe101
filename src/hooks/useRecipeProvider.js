import { createContext, useState } from "react";


export const RecipeContext = createContext([]);

const RecipeProvider = ({ children }) => {
    const [recipe, setRecipe] = useState(null);
    const [keywords, setKeywords] = useState('adobo');
    const [isLoading, setIsLoading] = useState(true);

    return (
        <RecipeContext.Provider value={{ recipe, setRecipe, keywords, setKeywords, isLoading, setIsLoading }}>
            { children }
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;