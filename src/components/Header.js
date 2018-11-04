import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={"/"} style={{marginLeft:'15px'}} className="brand-logo">WeatherNow</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    )    
}

const renderContent = () => {
    return [
        <li key="1"><Link to={"/city/new"} className="waves-effect waves-light btn">Add City</Link></li>
    ];
}

export default Header;