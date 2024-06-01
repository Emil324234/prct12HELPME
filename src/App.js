import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";



const API_KEY = "5ede0070fc76f39ac09e8282ea4df59a";


class App extends React.Component{


  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},,RU&limit=1&appid=${API_KEY}`);
    const data = await api_url.json();

    if(city) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      });
    }
    }

  render(){
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather}/>
        <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}

        />
      </div>
    )
  }
}

export default App;
