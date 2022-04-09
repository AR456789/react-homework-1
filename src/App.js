import './App.css';
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <Weather defaultCity="New York" />
      <footer>
        <a 
        href="https://github.com/AR456789/react-homework-1"
        target="_blank"
        rel="noopener noreferrer"
        > This project was coded by Adelaide and is open-sourced </a>
      </footer>
      </div>
    </div>
  );
}


