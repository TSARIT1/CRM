// PersonalSettings.jsx
import React, { useState } from 'react';
import { Mail, Phone, Pencil, ChevronDown, Eye, Hand, Sparkles } from 'lucide-react';
import './PersonalSettings.css';

const PersonalSettings = () => {
  const [activeTab, setActiveTab] = useState('Personal Settings');

  return (
    <div className="settings-container">
      {/* Tabs */}
      <div className="tabs-header">
        <button
          className={activeTab === 'Personal Settings' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('Personal Settings')}
        >
          Personal Settings
        </button>
        <button
          className={activeTab === 'Accessibility' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('Accessibility')}
        >
          Accessibility
        </button>
      </div>

      {activeTab === 'Personal Settings' && (
        <div className="tab-content">
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
                <Pencil size={14} className="edit-icon" />
              </h2>
              <p className="role">CEO at Tsar IT</p>
              <div className="contact-info">
                <div className="email">
                  <Mail size={16} />
                  <span>info@tsaritservices.com</span>
                </div>
                <Phone size={16} />
              </div>
              <div className="show-details">
                <ChevronDown size={14} /> Show Details
              </div>
            </div>
          </div>

          <section className="section">
            <h3 className="section-title">Locale Information <Pencil size={14} /></h3>
            <div className="info-grid">
              <div><strong>Language:</strong> English (United States)</div>
              <div><strong>Country Locale:</strong> United States</div>
              <div><strong>Date Format:</strong> DD/MM/YYYY</div>
              <div><strong>Time Format:</strong> 12 Hours</div>
              <div><strong>Time Zone:</strong> (GMT 5:30) India Standard Time (Asia/Kolkata)</div>
              <div><strong>Number Format:</strong> 123,456.789</div>
            </div>
          </section>

          <section className="section">
            <h3 className="section-title">Groups</h3>
            <p className="text-sm">Member in: <em>-</em></p>
          </section>

          <section className="section">
            <h3 className="section-title">Display Name Format & Preferences</h3>
            <p className="text-note">It applies to full name in column of list view, lookup fields and user name</p>
            <div className="info-grid">
              <div>
                <label>Name Format</label>
                <select>
                  <option>Salutation, First Name, Last Name</option>
                </select>
              </div>
              <div>
                <label>Sort order preference</label>
                <select>
                  <option>First Name, Last Name</option>
                </select>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'Accessibility' && (
        <div className="tab-content">
          <h2 className="section-title">Accessibility</h2>
          <p className="text-note">
            Accessibility allows everyone to use CRM regardless of their disability.
          </p>

          <input type="text" placeholder="Search" className="search-bar" />

          <div className="accessibility-tabs">
            <button className="active-tab"><Eye size={14} /> Vision</button>
            <button><Hand size={14} /> Motor</button>
            <button><Sparkles size={14} /> Interaction</button>
          </div>

          <div className="note-card green">
            <h4 className="font-semibold">Screen Reader</h4>
            <p>Works with screen reader extensions in your browser or computer to read the content on screen.</p>
            <div className="note">
              <strong>Note:</strong> Full compatibility is currently limited to the Home page, Custom view, Standard record view of Create, Edit, Clone and Details pages.
            </div>
          </div>

          <div className="note-card orange">
            <h4 className="font-semibold">Zoom</h4>
            <p>Works with browser's zoom functionality to zoom pages from 25% to 150%.</p>
            <div className="note">
              <strong>Note:</strong> Full compatibility is currently limited to the Home page, Custom view, Standard record view of Create, Edit, Clone and Details pages.
            </div>
          </div>

          <div className="note-card pink">
            <h4 className="font-semibold">Font Size</h4>
            <p>Set your preferred font size for enhanced readability and text appearance.</p>
            <input type="range" min="1" max="5" defaultValue="2" className="w-full mt-2" />
            <div className="font-slider-labels">
              <span>Size Aa</span>
              <span>Aa</span>
            </div>
            <button className="reset-btn">Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalSettings;

