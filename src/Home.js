import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer"
import { useEffect, useState } from "react"
import Loading from "./components/loading/Loading"
import { useRecipe } from "./hooks/useRecipe"
import { useRecipeReceiver } from "./hooks/useRecipeReceiver"
import Card from './components/card/Card'

function Home() {
    const { recipe } = useRecipe();
    const recipeReceiver = useRecipeReceiver();
    const [isLoading, setIsLoading] = useState(true);

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
    }, []);

    return(
        <>
            <Navigation />
            <div className="container">
                {
                    isLoading? <Loading message={"fetching..."} />
                    :
                    <Card recipes = { recipe } />
                }
            </div>
            <Footer />
        </>
    )
}

export default Home