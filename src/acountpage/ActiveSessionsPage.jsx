import React from 'react';
import './ActiveSessionsPage.css';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';

const ActiveSessionsPage = () => {
  return (
    <div className="active-sessions-container">
      <h2>Active Sessions</h2>
      <p>Below are the devices where your account is currently signed in:</p>
      <div className="session-card">
        <FaDesktop className="session-icon" />
        <div className="session-details">
          <h4>Chrome on Windows</h4>
          <p>IP: 192.168.1.101</p>
          <p>Last Active: Aug 2, 2025 - 11:30 AM</p>
        </div>
        <button className="logout-btn">Sign Out</button>
      </div>
      <div className="session-card">
        <FaMobileAlt className="session-icon" />
        <div className="session-details">
          <h4>Mobile App (Android)</h4>
          <p>IP: 192.168.1.105</p>
          <p>Last Active: Aug 2, 2025 - 09:10 AM</p>
        </div>
        <button className="logout-btn">Sign Out</button>
      </div>
    </div>
  );
};

export default ActiveSessionsPage;
