import '../App.css'
import Favoris from '../composant/favoris';



function Fav() {
    const localFavoris = localStorage.getItem("favoris")
  return (
   <div className='App'>
       {localFavoris?<Favoris/>: <p>Aucun favoris</p>}
       
   </div>
  );
}

export default Fav;