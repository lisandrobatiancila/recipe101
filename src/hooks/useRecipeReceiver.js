import { axios_api } from "../api/recipeAPI"
import { useRecipe } from "./useRecipe"


export const useRecipeReceiver = () => {
    const { setRecipe } = useRecipe()

    const recipes = async () => {
        const response = await axios_api.get(
            '/recipe',
            {
                params: {query: 'adobo'}
            }
        )
        setRecipe(response?.data)
        console.log(response)

        return response
    }
    
    return recipes;
}
