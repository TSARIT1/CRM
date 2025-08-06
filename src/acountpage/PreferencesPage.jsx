import React from 'react';
import './PreferencesPage.css';
import { FaLanguage, FaClock, FaPalette } from 'react-icons/fa';

const PreferencesPage = () => {
  return (
    <div className="preferences-container">
      <h2>Preferences</h2>
      <div className="pref-item">
        <FaLanguage className="pref-icon" />
        <div>
          <h4>Language</h4>
          <p>English (United States)</p>
        </div>
      </div>
      <div className="pref-item">
        <FaClock className="pref-icon" />
        <div>
          <h4>Time Zone</h4>
          <p>(GMT +05:30) Asia/Kolkata</p>
        </div>
      </div>
      <div className="pref-item">
        <FaPalette className="pref-icon" />
        <div>
          <h4>Theme</h4>
          <p>Light</p>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
