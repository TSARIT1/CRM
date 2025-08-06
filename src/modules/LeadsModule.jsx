import React, { useState } from 'react';
import './LeadsModule.css';

const LeadsModule = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  const CreateLeadModal = ({ onClose }) => (
    <div className="lm-modal-overlay">
      <div className="lm-modal-box">
        <h2>Create Lead</h2>
        <button className="lm-close-btn" onClick={onClose}>×</button>
        <form className="lm-form">
          <h3>Lead Information</h3>
          <div className="lm-grid">
            <div className="lm-group"><label>Company *</label><input type="text" /></div>
            <div className="lm-group"><label>First Name</label><input type="text" /></div>
            <div className="lm-group"><label>Last Name *</label><input type="text" /></div>
            <div className="lm-group"><label>Email</label><input type="email" /></div>
            <div className="lm-group"><label>Phone</label><input type="text" /></div>
          </div>

          <h3>Address Information</h3>
          <div className="lm-grid">
            <div className="lm-group"><label>City</label><input type="text" /></div>
            <div className="lm-group"><label>Country</label><input type="text" /></div>
          </div>

          <h3>Description</h3>
          <div className="lm-group lm-full">
            <textarea placeholder="Type here..." rows="3" />
          </div>

          <div className="lm-actions">
            <button type="submit" className="lm-btn lm-primary">Save</button>
            <button type="button" className="lm-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="lm-wrapper">
      <div className="lm-sidebar">
        <div className="lm-title">Filter Leads by</div>
        <input className="lm-search" placeholder="🔍 Search" />

        <div className="lm-filters">
          <details open>
            <summary>▾ System Defined Filters</summary>
            <ul>
              <li><input type="checkbox" /> Untouched Records</li>
              <li><input type="checkbox" /> Locked</li>
              <li><input type="checkbox" /> Email Status</li>
            </ul>
          </details>

          <details open>
            <summary>▾ Filter By Related Modules</summary>
            <ul>
              <li><input type="checkbox" /> Tasks</li>
              <li><input type="checkbox" /> Meetings</li>
              <li><input type="checkbox" /> Emails</li>
            </ul>
          </details>
        </div>
      </div>

      <div className="lm-table-section">
        <div className="lm-header">
          <span>Total Records: <strong>0</strong></span>
          <div className="lm-actions">
            <button className="lm-btn" onClick={() => setShowLeadModal(true)}>+ Create Lead</button>
          </div>
        </div>

        <div className="lm-table-scroll">
          <table className="lm-table">
            <thead>
              <tr>
                <th>Lead Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan="5">No Leads found.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {showLeadModal && <CreateLeadModal onClose={() => setShowLeadModal(false)} />}
    </div>
  );
};

export default LeadsModule;

