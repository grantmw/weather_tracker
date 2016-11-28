import axios from 'axios';

const API_KEY = '3c18d158a054e92fbba2b133ccb926b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
	//api request
	const url = `${ROOT_URL}&q={${city}},{us}`;
	const request = axios.get(url); //request is promise, doesn't contain anything until done

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}