import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/home';
import Comics from './composant/comics';
import Personnages from './Pages/personnage';
import Persoinfo from './composant/persoinfo';
import ComicsSearch from './composant/comicsearch';
import PersoSearch from './composant/persosearch';
import Fav from './Pages/fav';
import logo from './img/logo_marvel.png'


function App() {
  return (
    <div className="App">
      <img src={logo} alt="" height='200px'/>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/personnages">Personnages</Link>
            </li>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
            <li>
              <Link to="/fav">Favoris</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/personnage/:characterid" element={<Persoinfo />} />
          <Route path="/search/comics/:title" element={<ComicsSearch />} />
          <Route path="/search/personnage/:name" element={<PersoSearch />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
