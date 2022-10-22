import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { useRecipe } from './hooks/useRecipe';
import { Outlet } from "react-router-dom";

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