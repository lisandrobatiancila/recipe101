import { axios_api } from "../api/recipeAPI"
import { useRecipe } from "./useRecipe"


export const useRecipeReceiver = () => {
    const { keywords, setKeywords, setRecipe } = useRecipe()

    const recipes = async () => {
        if(/[^\s]/.test(keywords)) {
            const response = await axios_api.get(
                '/recipe',
                {
                    params: {query: keywords}
                }
            )
            setRecipe(response?.data)
    
            return response
        }
        else{
            setKeywords('')
            setRecipe(null)
        }
        return null;
    }
    
    return recipes;
}
