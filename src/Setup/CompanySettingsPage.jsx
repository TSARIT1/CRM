import React, { useState } from 'react';
import './CompanySettingsPage.css';
import {
  Mail, Phone, PhoneCall, Printer, Link, MapPin, Edit2, Copy
} from 'lucide-react';

const CompanySettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Company Details');

  return (
    <div className="company-settings-container">
      {/* Tabs */}
      <div className="company-tabs">
        {['Company Details', 'Fiscal Year', 'Business hours', 'Holidays', 'Currencies'].map(tab => (
          <div
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'Company Details' && (
        <div className="company-info-content">
          <div className="company-profile">
            <div className="company-icon-box">
              <span className="company-icon">🏢</span>
            </div>
            <div className="company-text">
              <h3>Tsar IT (5)</h3>
              <p className="org-id">Org ID: 60042289809</p>

              <div className="contact-line"><Mail size={16} /> info@tsaritservices.com</div>
              <div className="contact-line"><Phone size={16} /> 8142616767</div>
              <div className="contact-line"><PhoneCall size={16} /></div>
              <div className="contact-line"><Printer size={16} /></div>
              <div className="contact-line"><Link size={16} /></div>
              <div className="contact-line"><MapPin size={16} /></div>
            </div>
          </div>

          <div className="access-url-block">
            <h4>Access URL <Edit2 size={14} className="edit-icon" /></h4>
            <div className="url-line">
              <span className="label">URL</span>
              <span className="value">https://crm.zoho.in/crm/org60042289809/</span>
              <Copy size={14} className="copy-icon" />
            </div>
          </div>

          <div className="locale-block">
            <h4>Locale Information</h4>
            <div className="time-zone-row">
              <span className="label">Time Zone</span>
              <span className="value">(GMT 5:30) India Standard Time (Asia/Kolkata)</span>
              <Edit2 size={14} className="edit-icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySettingsPage;
