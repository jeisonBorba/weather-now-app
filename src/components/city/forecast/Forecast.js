import React from 'react';
import ForecastItem from '../commom/ForecastItem';

const formatDate = dt => new Date(dt*1000).toLocaleDateString() ;

const Forecast = props => {
    const { city, item: { dt, main, weather, wind, clouds } } = props.forecast
    debugger
    
    return (
        <div className="col s12" style={{marginTop: "12px"}}>
            <div className="card hoverable">
                <div className="card-content">
                    <div className="row align-detail">
                        <div className="col s7">
                            <h3 className="card-title custom-card-title">{`${city.name}, ${city.country}`}</h3>
                            <h6 className="custom-card-title">{formatDate(dt)}</h6>
                        </div>
                        <div className="col s5">
                            <div className="align-detail">
                                <span className="custom-card-subtitle">{`${Math.round(main.temperature)} º`}</span>
                                <br />
                                <span><b>{weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}</b></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card-action">
                    <div className="row align-detail">
                        <ForecastItem label={"Umidity"} value={main.humidity} simbol={"%"}/>
                        <ForecastItem label={"Pressure"} value={main.pressure} simbol={"hPa"}/>
                        <ForecastItem label={"Wind"} value={wind.speed} simbol={"km/h"}/>
                        <ForecastItem label={"Rain"} value={clouds.all} simbol={"%"}/>
                        <ForecastItem label={"Minimum"} value={main.minTemp} simbol={"º"}/>
                        <ForecastItem label={"Maximum"} value={main.maxTemp} simbol={"º"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forecast;