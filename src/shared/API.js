import axios from 'axios'

const API_INSTANCE = axios.create({
    baseURL: 'http://localhost:8080/api/city'
})

const API = {
    fetchCities   : ()       => API_INSTANCE.get(),
    submitCity    : city     => API_INSTANCE.post(`/${city}`),
    deleteCity    : cityId   => API_INSTANCE.delete(`/${cityId}`),
    fetchWeather  : citiesId => API_INSTANCE.get(`/weather/${citiesId.toString()}`),    
    fetchForecast : cityId   => API_INSTANCE.get(`/forecast/${cityId}`)
}

export default API;
