import React, { useState ,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import "../css/weather.css";

const Weatherapp=() =>{
    const history = useHistory();
    const [city, setCity] = useState(null);
     const [search, setSearch] = useState(null);
    // api key::679ecf12144253ce6e871bb094fa0ecc

    useEffect(() => {
        const fetchApi = async () => {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);

            const resJson=  await response.json();
            setCity(resJson.main);
        };

        fetchApi( );
    },[search]
    );

    return(
        <>
        <div  className="weatherpage">

            <div>
                <button onClick={() =>{
                    history.push('/projects')
                }} > ◀️</button>
            </div>
            
        <div className=" d-flex  justify-content-center algin-items-center mt-5">
            <div className="weatherContainer shadow-lg p-3 mb-5 bg-white rounded ">
                <div className="row g-3">
                    <div className="d-block card displayInfo " >
                        <div className="inputData input-group mb-3 mt-2 ">
                            <input
                                type="search"
                                placeholder="City Name"
                                value={search}
                                className="inputArea form-control"
                                onChange={(event) =>{
                                    setSearch(event.target.value);

                                }}
                                
                            />
                        </div>

                        <div className="infoarea mt-5 ms-5" style={{color: "white"}}>
                        {!city ? (
                            <p >NO data found</p>
                        ):
                        (
                            <div >
                                <h1 className="location" >
                                    <FontAwesomeIcon className="fab-icon"  icon={faStreetView}/> {search}
                                </h1>
                                <h2 className="temperature" >
                                    {city.temp}°C
                                </h2>

                                <h4>MAX TEMP {city.temp_max}/MIN TEMP : {city.temp_min}</h4>
                                
                            </div>
                        )
                        }

                        </div>
                        
                       
                    </div>
                </div>
            </div>

        </div>
        </div>
        
        </>

    );

};

export default Weatherapp;