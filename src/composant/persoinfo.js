import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import '../App.css'

const Persoinfo = () => {
    const {REACT_APP_API_KEY} = process.env
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const param = useParams().characterid
    console.log(param)
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('https://lereacteur-marvel-api.herokuapp.com/comics/' + param + '?apiKey=' + REACT_APP_API_KEY);
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
                {data["comics"].map(test => {
                        return (
                            <ul key={test} className='cards'>
                                <img className="jaquette" src={test.thumbnail.path + ".jpg"} alt="" />
                                {test.title}
                            </ul>);
                        })}
            </div>
        )
  }
  
export default Persoinfo;