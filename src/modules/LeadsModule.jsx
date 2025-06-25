// src/modules/LeadsModule.jsx
import React, { useState } from 'react';
import './LeadsModule.css';

const LeadsModule = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  const CreateLeadModal = ({ onClose }) => (
    <div className="lead-modal-overlay">
      <div className="lead-modal-box">
        <h2>Create Lead</h2>
        <button className="close-btn" onClick={onClose}>×</button>
        <form className="create-lead-form">
          <h3>Lead Information</h3>
          <div className="form-grid">
            <div className="form-group"><label>Company *</label><input type="text" /></div>
            <div className="form-group"><label>First Name</label><input type="text" /></div>
            <div className="form-group"><label>Last Name *</label><input type="text" /></div>
            <div className="form-group"><label>Email</label><input type="email" /></div>
            <div className="form-group"><label>Phone</label><input type="text" /></div>
          </div>

          <h3>Address Information</h3>
          <div className="form-grid">
            <div className="form-group"><label>City</label><input type="text" /></div>
            <div className="form-group"><label>Country</label><input type="text" /></div>
          </div>

          <h3>Description</h3>
          <div className="form-group full-width">
            <textarea placeholder="Type here..." rows="3" />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn primary">Save</button>
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="leads-module">
      <div className="leads-sidebar">
        <div className="filter-title">Filter Leads by</div>
        <input className="lead-search" placeholder="🔍 Search" />

        <div className="filter-group">
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

      <div className="leads-table-section">
        <div className="lead-table-header">
          <span>Total Records: <strong>0</strong></span>
          <div className="lead-actions">
            <button className="btn" onClick={() => setShowLeadModal(true)}>+ Create Lead</button>
          </div>
        </div>

        <div className="leads-table-scroll">
          <table className="lead-table">
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
