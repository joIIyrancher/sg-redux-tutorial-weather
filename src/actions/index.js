import axios from 'axios';

const API_KEY = '09d27469b15bdd2d64a7d71e28f7fc8e';

// template string = es6 synthax for JS string interpolation
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);  // returns a promise

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}