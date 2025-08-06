import React, { useState } from 'react';
import './AllowedIPPage.css';

const AllowedIPPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [ipAddress, setIpAddress] = useState('');

  return (
    <div className="ip-container">
      <h2>Allowed IP Address</h2><br />
      <p>Allow sign-ins only from specific IP addresses.</p><br />
      <button onClick={() => setShowPopup(true)} className="ip-btn">Add IP Address</button>

      {showPopup && (
        <div className="ip-popup" onClick={() => setShowPopup(false)}>
          <div className="ip-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Enter IP Address</h3><br />
            <input
              type="text"
              placeholder="e.g., 192.168.0.1"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button onClick={() => setShowPopup(false)} className="ip-save">Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllowedIPPage;
