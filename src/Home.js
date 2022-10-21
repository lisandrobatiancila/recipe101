import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import RecipeStorage from './storage/recipeDB';
import { Outlet } from "react-router-dom";
import { useRecipe } from './hooks/useRecipe';

function Home() {
    const { setIsLoading, keywords, setKeywords } = useRecipe();
    
    const goSearch = () => {
        console.log(keywords)
    }

    return(
        <div style={{position: "relative"}}>
            <Navigation keywords={ keywords } setKeywords = { setKeywords } goSearch = { goSearch } setIsLoading = { setIsLoading } />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Home