import '../App.css'
import Menu from '../composant/menu';
import Comics from '../composant/comics';
import ComicsSearchBar from '../composant/comicssearchbar.js'

function PageComics() {
  return (
    <div className="App">
      <Menu/>
      <ComicsSearchBar/>
      <Comics/>
    </div>
  );
}

export default PageComics;