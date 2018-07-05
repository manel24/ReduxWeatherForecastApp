import React, { Component } from "react";
import connect from "react-redux";

class WeatherList extends Component {
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
          <tbody />
        </thead>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // {weather} === state , then state.weather
  return {
    //weather: state.weather
    wether: { weather } // {weather} ===
  };
}

export default connect(mapStateToProps)(WeatherList);
