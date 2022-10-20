import { createContext, useState } from "react";


export const RecipeContext = createContext([]);

const RecipeProvider = ({ children }) => {
    const [recipe, setRecipe] = useState(null);

    return (
        <RecipeContext.Provider value={{ recipe, setRecipe }}>
            { children }
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;