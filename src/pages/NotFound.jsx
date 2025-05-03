import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container">
    <div className="planet planet-1"></div>
    <div className="planet planet-2"></div>
    <div className="planet planet-3"></div>

    <div className="notfound-card text-center">
      <h1 className="notfound-heading">404</h1>
      <p className="notfound-message">Oops! You're lost in space.</p>
      <Link to="/" className="btn notfound-btn">
        Take Me Home
      </Link>
    </div>
  </div>
  );
};

export default NotFound;
