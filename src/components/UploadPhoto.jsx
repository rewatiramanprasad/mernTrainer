import React from 'react';
import './UploadPhoto.css';
import logo from '../assets/upload.png'; 
import arrow from '../assets/arrow.png';
const UploadPhoto = () => {
    return (
        <div className="change-photo-container">
            <div className="photo-box">
                <img src={logo} alt="Logo" className="photo"/>
            </div>
            <button type='file' className="change-photo-button">
            <img src={arrow} alt="Logo" className="arrow"/> change photo
            </button>
        </div>
    );
};

export default UploadPhoto;
