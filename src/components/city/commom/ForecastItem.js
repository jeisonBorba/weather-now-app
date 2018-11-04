import React from 'react';

const ForecastItem = props => {
    const { label, value, simbol } = props;
    return (
        <div className="col s2">
            <b>{label}</b>
            <br />
            <span>{`${Math.round(value)}${simbol}`}</span>
        </div>
    );
}

export default ForecastItem;