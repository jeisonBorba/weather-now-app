import React, { Component } from 'react';
import { connect } from 'react-redux';

import Forecast from './Forecast';
import LoadingSpinner from '../commom/LoadingSpinner';
import * as actions from '../../../actions';

class CityForecastList extends Component {
    componentDidMount() {
        this.props.fetchForecast(this.props.cityId);
    }

    renderForecast() {
        const { forecast, city } = this.props.forecast;
        return (
            <section>
                {
                    !forecast &&
                    <LoadingSpinner />
                }

                {
                    forecast &&
                    <div className="row">
                        {forecast.map(item => {
                            return (
                                <div key={item.dt}>
                                    <Forecast forecast={{ 
                                        item,
                                        city
                                    }} />
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
            this.renderForecast()
        );
    }
}

const mapStateToProps = ({ forecast }) => ({ forecast });

export default connect(mapStateToProps, actions)(CityForecastList)