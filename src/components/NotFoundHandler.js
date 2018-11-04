import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundHandler = () => (
    <div>
      <center><h3>404 - Page Not Found :(</h3></center>
      <center><Link to="/">Return to Home Page</Link></center>
    </div>
);  

export default NotFoundHandler;