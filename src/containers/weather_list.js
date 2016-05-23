// this is a container because it needs access to the app state

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // combine these 2 lines into a single line by 'destructuring'
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td className="map"><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="°C" /></td>
        <td><Chart data={pressures} color="blue" units="hPa" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Map</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// function mapStateToProps(state) {
//   return { weather: state.weather }
// }

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);