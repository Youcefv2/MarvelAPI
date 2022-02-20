import axios from "axios";
import { useState, useEffect } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import PersoSearchbar from "../composant/persosearchbar";

const Personnages = () => {
  const {REACT_APP_API_KEY} = process.env
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    let imgName
    const addLocaleStorage = (image,nom,description,id) => {
      
      var existingEntries = JSON.parse(localStorage.getItem("favoris"));
      if(existingEntries == null) existingEntries = [];
      var entry = {
        "image": image,
        "nom": nom,
        "description": description,
        "id": id
      };
      if(existingEntries.length < 1){
        existingEntries.push(entry);
          localStorage.setItem("favoris", JSON.stringify(existingEntries));
      }else{
      let addlocal = true
      for(var i = 0; i < existingEntries.length; i++){
        
        if(existingEntries[i].id == id){
          console.log(existingEntries[i].id)
          console.log(id)
          addlocal = false
          console.log("test2")
          break
        }
      }
        if(addlocal == true){
          existingEntries.push(entry);
          localStorage.setItem("favoris", JSON.stringify(existingEntries));
        }
      }}

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get("https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=" + REACT_APP_API_KEY);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.response);
        }
      };
      fetchData();
    }, []);
    return isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="container">
          <PersoSearchbar/>
            {data["results"].sort((a, b) => a.name.localeCompare(b.name)).map(test => {
                  imgName = test.thumbnail.path + ".jpg"
                    return (
                        <ul key={test} className='cards' >
                          
                          
                            <li><div className="card" >
                            <p className="fav" onClick={() => { addLocaleStorage(test.thumbnail.path + ".jpg",test.name,test.description,test._id) }}>❤</p>
                            <Link to={'/personnage/'+ test['_id']}>
                                <img className="portrait" src={imgName} alt="" width="250px" height="250px"/>
                                <h2>{test.name}</h2>
                                <h2>Description :</h2>
                                <p>{test.description}</p>
                            </Link>    
                            </div>
                            
                            </li>
                          
                        </ul>);
                    })}
        </div>
    )
  }
  
export default Personnages;