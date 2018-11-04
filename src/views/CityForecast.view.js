import React from 'react';
import CityForecastList from '../components/city/forecast/CityForecastList';

const CityForecastView = (props) => <CityForecastList cityId={props.match.params.cityId}/>

export default CityForecastView;
