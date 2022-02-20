import '../App.css'



function Favoris() {
    const removeLocaleStorage = (id) => {
        var existingEntries = JSON.parse(localStorage.getItem("favoris"));
        existingEntries.splice(id, 1);
        localStorage.setItem("favoris", JSON.stringify(existingEntries));
        window.location.reload();
      }

  return (
    <div className='App'>
        <div className="container">
      {JSON.parse(localStorage.getItem("favoris")).map(function(test, i){
      return (
        
          <ul key={test} className='cards'>
                            <div className="card">
                            <p className="fav" onClick={() => { removeLocaleStorage(i) }}>❤</p>
                                <img className="portrait" src={test.image} alt="" width="250px" height="250px"/>
                                <h2>{test.nom}</h2>
                                <h2>Description :</h2>
                                <p>{test.description}</p>
                            </div>
                        </ul>
        
        );
        
      })}
      </div>
    </div>
  );
}

export default Favoris;