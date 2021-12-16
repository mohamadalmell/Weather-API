import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import storm from "./img/weather-icons/mostlycloudy.svg"

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mohamad"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
          <h1 className="">London</h1>
          <button>FIND WEATHER</button>
        </header>
        <img src="{mostlycloudy}" alt="Mostly cloudy"/>

      </div>
    );
  }
}

export default App;
