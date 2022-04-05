import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
   console.log(props.code);
   const codeMapping = {
    "clear sky": "CLEAR_DAY",
    "scattered clouds": "PARTLY_CLOUDY_DAY",
    "few clouds": "PARTLY_CLOUDY_DAY",
    "overcast clouds": "CLOUDY",
    "broken clouds": "CLOUDY",
    "shower rain": "RAIN",
    "rain": "RAIN",
    "thunderstorm": "RAIN",
    "snow": "SNOW",
    "mist": "FOG",
   };
   
    return (
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="#1e1e1e"
    size={props.size}
    animate={true}
  />
    );
}
