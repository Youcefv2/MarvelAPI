import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import '../App.css'
import ComicsSearchBar from "./comicssearchbar";

const ComicsSearch = () => {
    const {REACT_APP_API_KEY} = process.env
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    let imgName
    const param = useParams().title
    console.log(param)
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=' + REACT_APP_API_KEY + '&title=' + param);
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
              <ComicsSearchBar/>
                {data["results"].map(test => {
                      imgName = test.thumbnail.path + ".jpg"
                        return (
                            <ul key={test} className='cards'>
                                <div className="card">
                                    
                                    <img className="portrait" src={imgName} alt="" width="250px" height="250px"/>
                                    <li><h2>{test.title}</h2></li>
                                </div>
                            </ul>);
                        })}
            </div>
        )
  }
  
export default ComicsSearch;