import React, { useState } from 'react';
import './Module.css';

const CreateMeetingModal = ({ onClose }) => {
  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-box">
        <div className="contact-modal-header">
          <h2>Create Meeting</h2>
          <button className="contact-btn-close" onClick={onClose}>×</button>
        </div>

        <div className="contact-modal-body">
          <h4>Meeting Information</h4>
          <div className="contact-form-grid">
            <input type="text" placeholder="Meeting Owner" />
            <input type="text" placeholder="Subject" required />
            <input type="text" placeholder="Contact Name" />
            <input type="text" placeholder="Account Name" />
            <input type="text" placeholder="Location" />
            <input type="datetime-local" placeholder="Start Time" />
            <input type="datetime-local" placeholder="End Time" />
            <input type="text" placeholder="Status" />
            <input type="text" placeholder="Host Name" />
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

const MeetingsModule = () => {
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  return (
    <div className="contact-module">
      <div className="contact-sidebar">
        <div className="contact-filter-title">Filter Meetings by</div>
        <input className="contact-search" placeholder="🔍 Search" />

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>System Defined Filters</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Upcoming Meetings</label></li>
              <li><label><input type="checkbox" /> Past Meetings</label></li>
            </ul>
          </details>
        </div>

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>Filter By Fields</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Subject</label></li>
              <li><label><input type="checkbox" /> Start Time</label></li>
              <li><label><input type="checkbox" /> End Time</label></li>
              <li><label><input type="checkbox" /> Status</label></li>
            </ul>
          </details>
        </div>
      </div>

      <div className="contact-table-section">
        <div className="contact-table-header">
          <span>Total Meetings <strong>0</strong></span>
          <div className="contact-actions">
            <select className="contact-dropdown"><option>All Meetings</option></select>
            <button className="btn-primary" onClick={() => setShowMeetingModal(true)}>Create Meeting</button>
            <button className="btn-primary">Actions ⏷</button>
          </div>
        </div>

        <div className="contact-table-scroll">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
                <th>Location</th>
                <th>Contact Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  No Meetings found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showMeetingModal && <CreateMeetingModal onClose={() => setShowMeetingModal(false)} />}
    </div>
  );
};

export default MeetingsModule;
