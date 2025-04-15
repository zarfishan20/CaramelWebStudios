import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container d-flex align-items-center justify-content-center">
      <div className="notfound-card text-center">
        <h1 className="notfound-heading">404</h1>
        <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn notfound-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
