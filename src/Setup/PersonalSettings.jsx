// PersonalSettings.jsx
import React from 'react';
import './PersonalSettings.css';
import { Mail, Phone } from 'lucide-react';

const PersonalSettings = () => {
  return (
    <div className="settings-container">
      {/* Header */}
      <div className="settings-header">
        <img
          src="https://via.placeholder.com/80x50?text=TSAR+IT"
          alt="TSAR IT"
          className="logo"
        />
        <div>
          <h2 className="settings-title">
            TSAR IT <span className="badge">Super Admin</span>
          </h2>
          <p className="role">CEO at Tsar IT</p>
          <div className="contact-info">
            <div className="email">
              <Mail size={16} />
              <span>info@tsaritservices.com</span>
            </div>
            <Phone size={16} />
          </div>
        </div>
      </div>

      {/* Locale Info */}
      <section className="section">
        <h3 className="section-title">Locale Information</h3>
        <div className="info-grid">
          <div><strong>Language:</strong> English (United States)</div>
          <div><strong>Country Locale:</strong> United States</div>
          <div><strong>Date Format:</strong> DD/MM/YYYY</div>
          <div><strong>Time Format:</strong> 12 Hours</div>
          <div><strong>Time Zone:</strong> GMT+5:30 India Standard Time (Asia/Kolkata)</div>
          <div><strong>Number Format:</strong> 123,456.789</div>
        </div>
      </section>

      {/* Groups */}
      <section className="section">
        <h3 className="section-title">Groups</h3>
        <p className="text-sm">Member in: <em>-</em></p>
      </section>

      {/* Display Name Preferences */}
      <section className="section">
        <h3 className="section-title">Display Name Format & Preferences</h3>
        <div className="info-grid">
          <div><strong>Name Format:</strong> Salutation, First Name, Last Name</div>
          <div><strong>Sort Order Preference:</strong> First Name, Last Name</div>
        </div>
      </section>
    </div>
  );
};

export default PersonalSettings;
