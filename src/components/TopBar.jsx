import React from 'react';
import "./TopBar.css";
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

const TopBar = ({buttonStatus,goAhead}) => {
    return (
        <div className="topbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="actions">
            {buttonStatus&&<button onClick={goAhead}>+ ADD</button>}
                <img src={profile} alt="Profile" className="profile-image" />
            </div>
        </div>
    );
};

export default TopBar;
