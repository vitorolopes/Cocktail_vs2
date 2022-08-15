import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import CocktailDetails from "./pages/CocktailDetails";



function App() {
  return (
    <Router>
      
      <Navbar/>
      
      <Routes>

        <Route exact path="/" element={ <Home/> } />

        <Route path="/about" element={ <About/> } />

        <Route path="/cocktail/:idDrink" element= { <CocktailDetails/> } />

      </Routes>

    </Router>
  );
}

export default App;
