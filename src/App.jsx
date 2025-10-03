import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weathercard from "./components/Weathercard";
import "./App.css";
import { useState } from "react";

function App() {
  const [weatherDetails, setweatherDetails] = useState(null);
  return (
    <div className="app-container">
      <Header />
      <Search setweatherDetails={setweatherDetails} />

      {weatherDetails && <Weathercard weatherDetails={weatherDetails}/>}

      <Footer />
    </div>
  );
}

export default App;
