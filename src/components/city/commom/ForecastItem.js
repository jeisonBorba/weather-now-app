import React from 'react';

const ForecastItem = props => {
    const { label, value, simbol, col } = props;
    return (
        <div className={`col ${col}`}>
            <b>{label}</b>
            <br />
            <span>{`${Math.round(value)}${simbol}`}</span>
        </div>
    );
}

export default ForecastItem;