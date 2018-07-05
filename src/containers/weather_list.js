import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
//import { SparkLines, SparkLinesLine } from "react-sparklines";
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    console.log(temps);
    /*<SparkLines height={120} width={180} data={temps}>
            <SparkLinesLine color="red" />
        </SparkLines>
    */
    //OR
    //Using a reusable Chart COmponent:
    /*<Chart data={temps} color="orange" units="k"/>; 
    <Chart data={pressures} color="green" units="hPa"/>; 
    <Chart data={humidity} color="black" units="%"/>; 
    
    */
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          {temps[0]} {"K"}
        </td>
        <td>
          {pressures[0]} {"hPa"}
        </td>
        <td>
          {humidity[0]} {"%"}
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // {weather} === state , then state.weather

  //weather: state.weather
  return { weather }; // {weather} === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList);
