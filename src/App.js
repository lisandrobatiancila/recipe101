import Navigation from './components/navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element = { <Home /> }>
      </Route>
    </Routes>
  );
}

export default App;
