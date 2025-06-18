import React, { useState } from 'react';
import './Module.css';

const CreateCallModal = ({ onClose }) => {
  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-box">
        <div className="contact-modal-header">
          <h2>Create Call</h2>
          <button className="contact-btn-close" onClick={onClose}>×</button>
        </div>

        <div className="contact-modal-body">
          <h4>Call Information</h4>
          <div className="contact-form-grid">
            <input type="text" placeholder="Call Owner" />
            <input type="text" placeholder="Subject" required />
            <input type="text" placeholder="Call Type" />
            <input type="datetime-local" placeholder="Call Start Time" />
            <input type="text" placeholder="Call Duration" />
            <input type="text" placeholder="Call Status" />
            <input type="text" placeholder="Contact Name" />
            <input type="text" placeholder="Account Name" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <h4>Description</h4>
          <textarea placeholder="Description"></textarea>
        </div>

        <div className="contact-modal-footer">
          <button className="btn-primary cancel" onClick={onClose}>Cancel</button>
          <button className="btn-primary save">Save</button>
        </div>
      </div>
    </div>
  );
};

const CallsModule = () => {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <div className="contact-module">
      <div className="contact-sidebar">
        <div className="contact-filter-title">Filter Calls by</div>
        <input className="contact-search" placeholder="🔍 Search" />

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>System Defined Filters</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Completed Calls</label></li>
              <li><label><input type="checkbox" /> Scheduled Calls</label></li>
              <li><label><input type="checkbox" /> Missed Calls</label></li>
            </ul>
          </details>
        </div>

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>Filter By Fields</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Subject</label></li>
              <li><label><input type="checkbox" /> Call Type</label></li>
              <li><label><input type="checkbox" /> Call Status</label></li>
              <li><label><input type="checkbox" /> Duration</label></li>
            </ul>
          </details>
        </div>
      </div>

      <div className="contact-table-section">
        <div className="contact-table-header">
          <span>Total Calls <strong>0</strong></span>
          <div className="contact-actions">
            <select className="contact-dropdown"><option>All Calls</option></select>
            <button className="btn-primary" onClick={() => setShowCallModal(true)}>Create Call</button>
            <button className="btn-primary">Actions ⏷</button>
          </div>
        </div>

        <div className="contact-table-scroll">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Call Type</th>
                <th>Status</th>
                <th>Duration</th>
                <th>Contact Name</th>
                <th>Call Start Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  No Calls found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showCallModal && <CreateCallModal onClose={() => setShowCallModal(false)} />}
    </div>
  );
};

export default CallsModule;
