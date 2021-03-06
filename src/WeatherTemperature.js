import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("metrics");

    function showFarenheit(event) {
        event.preventDefault();
        setUnit("farenheight");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function farenheight() {
        return(props.celsius * 9) / 5 + 32;
    }

    if (unit === 'celsius') {
        return (
            <div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(props.celsius)}
            </span>
            <span className="unit">
                 °C |
                 <a href="/" onClick={showFarenheit}>
                 °F
                </a>  
                </span> 
            </div>
            );
    } else {
        return (
            <div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(farenheight())}
            </span>
            <span className="unit">
                 <a href="/" onClick={showCelsius}>
                °C 
                </a> 
                | °F 
                </span> 
            </div>
            );
    }
    
}