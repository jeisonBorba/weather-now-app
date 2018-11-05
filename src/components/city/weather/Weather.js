import React from 'react';
import ForecastItem from '../commom/ForecastItem';

const Weather = props => {
    const { weather } = props;
    
    return (
        <div className="col s12 m6  align-detail" style={{marginTop: "12px"}}>
            <div className="card hoverable">
                <div className="card-content">
                    <div className="row">
                        <div className="col s7">
                            <h3 className="card-title custom-card-title">{`${weather.name}, ${weather.systemResponse.country}`}</h3>
                        </div>
                        <div className="col s5">
                            <div>
                                <span className="custom-card-subtitle">{`${Math.round(weather.main.temperature)} º`}</span>
                                <br />
                                <span><b>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</b></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-action">
                    <div className="row">
                        <ForecastItem label={"Umidity"}  value={weather.main.humidity} simbol={"%"}    col={'s4'}/>
                        <ForecastItem label={"Pressure"} value={weather.main.pressure} simbol={"hPa"}  col={'s4'}/>
                        <ForecastItem label={"Wind"}     value={weather.wind.speed}    simbol={"km/h"} col={'s4'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;