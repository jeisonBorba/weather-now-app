import { 
    FETCH_CITY, 
    DELETE_CITY, 
    CREATE_CITY, 
    FETCH_WEATHER,
    UPDATE_WEATHER, 
    FETCH_FORECAST 
} from './types';

import API from '../shared/API';

export const fetchCities = () => async dispatch => {
    const res = await API.fetchCities();
    dispatch({ type: FETCH_CITY, payload: res.data });
}

export const submitCity = city => async dispatch => {
    const res = await API.submitCity(city);
    dispatch({ type: CREATE_CITY, payload: res.data });
    dispatch({ type: UPDATE_WEATHER, payload: [] });
}

export const deleteCity = cityId => async dispatch => {
    const res = await API.deleteCity(cityId)
    dispatch({ type: DELETE_CITY, payload: res.data });
    dispatch({ type: UPDATE_WEATHER, payload: [] });
}

export const fetchWeather = citiesId => async dispatch => {
    const res = await API.fetchWeather(citiesId);
    dispatch({ type: FETCH_WEATHER, payload: res.data });
}

export const fetchForecast = cityId => async dispatch => {
    const res = await API.fetchForecast(cityId);
    dispatch({ type: FETCH_FORECAST, payload: res.data });
}

