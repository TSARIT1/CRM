import React, { useState } from 'react';
import './AppPasswordsPage.css';

const AppPasswordsPage = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [appName, setAppName] = useState('');

  return (
    <div className="app-pass-container">
      <h2>App Passwords</h2><br />
      <p>Create secure app-specific passwords.</p><br />
      <button onClick={() => setPopupOpen(true)} className="app-btn">Generate Password</button>

      {popupOpen && (
        <div className="app-popup" onClick={() => setPopupOpen(false)}>
          <div className="app-modal" onClick={(e) => e.stopPropagation()}>
            <h3>New App Password</h3><br />
            <input
              type="text"
              placeholder="App Name"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
            />
            <button onClick={() => setPopupOpen(false)} className="app-save">Generate</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppPasswordsPage;
