import React, { Component } from "react";
import { connect } from "react-redux";
//import { SparkLines, SparkLinesLine } from "react-sparklines";
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);
    /*<SparkLines height={120} width={180} data={temps}>
            <SparkLinesLine color="red" />
        </SparkLines>
    */
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{temps[0]}</td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
