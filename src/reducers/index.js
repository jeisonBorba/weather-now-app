import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import citiesReducer from './citiesReducer';
import weatherReducer from './weatherReducer';
import forecastReducer from './forecastReducer';

export default combineReducers({
    cities   :  citiesReducer,
    weather  :  weatherReducer,
    forecast :  forecastReducer
});