import React, { useState } from 'react';
import './GeoFencingPage.css';

const GeoFencingPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [location, setLocation] = useState('');

  return (
    <div className="geo-container">
      <h2>Geo-Fencing</h2><br />
      <p>Restrict access based on geographic location.</p><br />
      <button onClick={() => setPopupOpen(true)} className="geo-btn">Add Geo-Fence</button>

      {isPopupOpen && (
        <div className="geo-popup" onClick={() => setPopupOpen(false)}>
          <div className="geo-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add Geo Location</h3><br />
            <input
              type="text"
              placeholder="Enter Country or Region"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={() => setPopupOpen(false)} className="geo-save">Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeoFencingPage;
