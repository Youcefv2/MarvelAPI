import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import PersoSearchbar from "./persosearchbar";

const PersoSearchPage= () => {
  const {REACT_APP_API_KEY} = process.env
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let imgName
  const param = useParams().name
  console.log(param)
  useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get('https://lereacteur-marvel-api.herokuapp.com/characters?apiKey='+ REACT_APP_API_KEY + '&name=' + param)
            setData(response.data);
            setIsLoading(false);
            console.log(response)
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
                          <Link to={'/personnage/'+ test['_id']}>
                            <li><div className="card" >
                                
                                <img className="portrait" src={imgName} alt="" width="250px" height="250px"/>
                                <h2>{test.name}</h2>
                            </div>
                            </li>
                          </Link>
                        </ul>);
                    })}
          </div>
      )
}
  
export default PersoSearchPage;