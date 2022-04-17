import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }

    function maxTemperatureFahrenheit() {
        let temperature = Math.round((props.data.temp.max * 9) / 5 + 32);
        return `${temperature}`;
    }

    function minTemperatureFahrenheit() {
        let temperature = Math.round((props.data.temp.min * 9) / 5 + 32);
        return `${temperature}`;
    }

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}

    return (
        <div>
        <div className="WeatherForecast-day">{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={64} /> 
                <div className="WeatherForecast-temperatures"> 
                <span className="WeatherForecast-temperature-max">{maxTemperature()}°</span>
                <span className="WeatherForecast-temperature-min"> {minTemperature()}°C |</span>
                <span className="WeatherForecast-temperature-max-Fahrenheit"> {maxTemperatureFahrenheit()}°</span>
                <span className="WeatherForecast-temperature-min-Fahrenheit"> {minTemperatureFahrenheit()}°F</span> 
                </div>
        </div>
    );
}