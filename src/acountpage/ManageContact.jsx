import React, { useState } from 'react';
import './ManageContact.css';

const ManageContact = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Manage Your Contact</h2>
        <p>View and manage the contacts you've assigned to represent your organization.</p>
      </div>

      <div className="contact-org-box">
        <div className="org-info">
          <img src="/campaign-icon.svg" alt="icon" />
          <div>
            <span className="org-name">TSAR IT</span>
            <span className="org-id">tsarcampaigns</span>
          </div>
        </div>
      </div>

      <div className="contact-add-box">
        <button className="add-btn" onClick={() => setShowDropdown(!showDropdown)}>
          Add ▾
        </button>
        {showDropdown && (
          <div className="dropdown">
            <div className="dropdown-item">Details</div>
            <div className="dropdown-item">Contact</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageContact;
