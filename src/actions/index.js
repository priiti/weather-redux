import axios from 'axios';
const API_KEY = '9aa43842e64dba2df49f9fd7be6f8958';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=city_input&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeatherData(city) {
    const [start, end] = ROOT_URL.split('city_input');
    const url = [start, city, end].join('');

    const request = axios.get(url);

    // console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
};