import React from 'react';
import './ComplianceSettings.css';
import { ShieldCheck, Database, UserCheck } from 'lucide-react';

const ComplianceSettings = () => {
  return (
    <div className="compliance-container">
      <h2>GDPR Compliance</h2>
      <p className="description">
        This page helps you decide how you want to handle, manage, and process personal data of your customers
        to comply with GDPR for your organization.
      </p>

      <h4>Enable GDPR Compliance settings</h4>

      <div className="gdpr-options">
        <div className="gdpr-box">
          <Database className="gdpr-icon blue" size={64} />
          <h5>Data Collection</h5>
          <p>
            Data collected through various sources will be captured <br />
            <a href="#">Know more</a>
          </p>
        </div>

        <div className="gdpr-box">
          <ShieldCheck className="gdpr-icon green" size={64} />
          <h5>Data Processing</h5>
          <p>
            Manage personal data of customers inside CRM <br />
            <a href="#">Know more</a>
          </p>
        </div>

        <div className="gdpr-box">
          <UserCheck className="gdpr-icon purple" size={64} />
          <h5>Data Request</h5>
          <p>
            Handle data requests of customers inside CRM <br />
            <a href="#">Know more</a>
          </p>
        </div>
      </div>

      <div className="compliance-footer">
        <button className="enable-btn">Enable GDPR Compliance</button>
        <p className="watch-link">▶️ <a href="#">Watch Video</a></p>
      </div>
    </div>
  );
};

export default ComplianceSettings;
