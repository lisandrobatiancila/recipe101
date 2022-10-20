import { useContext } from "react";
import { RecipeContext } from "./useRecipeProvider";

export const useRecipe = () => {
    return useContext(RecipeContext);
}