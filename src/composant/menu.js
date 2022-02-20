import logo from '../img/logo_marvel.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageComics from '../Pages/PageComics';
import App from '../App';

const Menu = () => {
    return (
        <div className='menu'>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/comics">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/comics" element={<PageComics />} />

      </Routes>
    </Router>
            <img src={logo} width="130px"/>
            <ul>
                <li>Favoris</li>
                <li><Link to="/">Personnages</Link></li>
                <li><Link to="/Pagecomics">Comics</Link></li>
            </ul>
        </div>
    )
  }
  
export default Menu;