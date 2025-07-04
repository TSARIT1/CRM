import React from 'react';
import './SupportAccessPage.css';
import { HelpCircle } from 'lucide-react';

const SupportAccessPage = () => {
  return (
    <div className="support-access-container">
      <div className="support-header">
        <h2>Support Access</h2>
        <div className="help-link">
          <HelpCircle size={18} /> Help
        </div>
      </div>
      <p className="support-description">
        Support Access is a secure way of allowing Zoho Support to get access to your Zoho CRM account for troubleshooting without a remote session. The access is restricted to Zoho's support team only.
      </p>

      <div className="date-input-wrapper">
        <label htmlFor="support-date">Select duration</label>
        <input type="text" id="support-date" placeholder="DD/MM/YYYY" />
      </div>
    </div>
  );
};

export default SupportAccessPage;
