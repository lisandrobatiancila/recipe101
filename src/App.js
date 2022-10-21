import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Favorites from './favorites/Favorites';
import Default from './Default';
import CertainRecipe from './certain-recipes/CertainRecipe';

function App() {
  return (
    <Routes>
      <Route path='/' element = { <Home /> }>
        <Route path='/' element = { <Default /> }  />
        <Route path='/favorites' element = { <Favorites /> }  />
        <Route path='/view/:certain_recipe' element = { <CertainRecipe /> }  />
      </Route>
    </Routes>
  );
}

export default App;
