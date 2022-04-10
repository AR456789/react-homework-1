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
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_DAY",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_DAY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
   };
   
    return (
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="lavender"
    size={props.size}
    animate={true}
  />
    );
}
