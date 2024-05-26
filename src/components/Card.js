
import React from 'react';
import './Card.css';

const Card = ({ logo, companyName, service, url, description }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={logo} alt={`${companyName} logo`} className="card-logo" />
                <div>
                    <h3 className="card-title">{companyName}</h3>
                    <p className="card-service">{service}</p>
                </div>
            </div>
            <a href={url} className="card-url">{url}</a>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;
