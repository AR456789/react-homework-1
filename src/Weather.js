import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDatte";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city" className="search-bar " autoFocus="on"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
                </form>
                <h1> {weatherData.city} </h1>
                <ul>
                    <li> <FormattedDate date={weatherData.date}/> </li>
                    <li className="text-capitalize"> {weatherData.description} </li>
                </ul>
                 <div className="row mt-3">
                     <div className="col-6">
                         <div className="clearfix">
                         <img
                            src={weatherData.iconUrl}
                            alt={weatherData.description}
                         />
                         <span className="temperature"> {weatherData.temperature} </span>
                         <span className="unit"> °C </span>
                         </div>
                     </div>
                     <div className="col-6">
                         <ul>
                             <li>Humidity = {weatherData.humidity} % </li>
                             <li> Windspeed = {weatherData.wind} km/h</li>
                         </ul>
                     </div>
                </div> 
                         
             </div>
        );
    } else {
        const apiKey = "333d1e7c5f22cf63ff65c69aa26537e4";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return ("Loading");
    }
}