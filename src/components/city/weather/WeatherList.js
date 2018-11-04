import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import Weather from './Weather';
import LoadingSpinner from '../commom/LoadingSpinner';

class WeatherList extends Component {
    constructor(props) {
        super(props);

        this.handleCityResponse = this.handleCityResponse.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        return !this.props.cities.length 
            ? this.props.fetchCities().then(this.handleCityResponse)
            : !this.props.weather.length ? this.fetchWeather() : null;
    }

    handleCityResponse() {
        return this.props.cities.length ? this.fetchWeather() : null;
    }

    fetchWeather() {
        return this.props.fetchWeather(this.getCityId());
    }

    getCityId() {
        return this.props.cities.map(city => city.externalId);
    }

    renderWeather() {
        return (
            <section>
                {
                    !this.props.weather.length &&
                    <LoadingSpinner />
                }

                {
                    this.props.weather.length &&
                    <div className="row" style={{marginBottom: "4px"}}>
                        {this.props.weather.map(item => {
                            return (
                                <div key={item.id}>
                                    <Link to={`/city/forecast/${item.id}`}>
                                        <Weather weather={item}/>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                }
            </section>
        );
    }

    render() {
        return (
            this.renderWeather()
        );
    }
}

const mapStateToProps = ({ cities, weather }) => ({ cities, weather });

export default connect(mapStateToProps, actions)(WeatherList);