import React from 'react';
import './DeviceSignInsPage.css';

const DeviceSignInsPage = () => {
  const devices = [
    
  ];

  return (
    <div className="device-container">
      <h2>Device Sign-ins</h2><br />
      <p>Track devices that signed in to your account.</p><br />
      <ul className="device-list">
        {devices.map((d, i) => (
          <li key={i} className="device-item">
            <strong>{d.device}</strong>
            <span>{d.location}</span>
            <span>{d.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceSignInsPage;
