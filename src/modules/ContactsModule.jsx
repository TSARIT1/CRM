// ContactsModule.jsx
import React, { useState } from 'react';
import './Module.css';

const CreateContactModal = ({ onClose }) => {
  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-box">
        <div className="contact-modal-header">
          <h2>Create Contact</h2>
          <button className="contact-btn-close" onClick={onClose}>×</button>
        </div>

        <div className="contact-modal-body">
          <h4>Contact Information</h4>
          <div className="contact-form-grid">
            <input type="text" placeholder="Contact Owner" />
            <input type="text" placeholder="Lead Source" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" required />
            <input type="text" placeholder="Account Name" />
            <input type="text" placeholder="Vendor Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Title" />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Department" />
            <input type="tel" placeholder="Other Phone" />
            <input type="tel" placeholder="Home Phone" />
            <input type="tel" placeholder="Mobile" />
            <input type="tel" placeholder="Fax" />
            <input type="text" placeholder="Assistant" />
            <input type="date" placeholder="Date of Birth" />
            <input type="tel" placeholder="Asst Phone" />
          </div>

          <h4>Address Information</h4>
          <div className="contact-form-grid">
            <input type="text" placeholder="Mailing Street" />
            <input type="text" placeholder="Other Street" />
            <input type="text" placeholder="Mailing City" />
            <input type="text" placeholder="Other City" />
            <input type="text" placeholder="Mailing State" />
            <input type="text" placeholder="Other State" />
            <input type="text" placeholder="Mailing Zip" />
            <input type="text" placeholder="Other Zip" />
            <input type="text" placeholder="Mailing Country" />
            <input type="text" placeholder="Other Country" />
          </div>

          <h4>Description Information</h4>
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

const ContactsModule = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="contact-module">
      <div className="contact-sidebar">
        <div className="contact-filter-title">Filter Contacts by</div>
        <input className="contact-search" placeholder="🔍 Search" />

        <div className="contact-filter-group">
  <details open>
    <summary>▾ <strong>System Defined Filters</strong></summary>
    <ul className="contact-filter-list">
      <li><label><input type="checkbox" /> Active Contacts</label></li>
      <li><label><input type="checkbox" /> Inactive Contacts</label></li>
    </ul>
  </details>
</div>

<div className="contact-filter-group">
  <details open>
    <summary>▾ <strong>Filter By Fields</strong></summary>
    <ul className="contact-filter-list">
      <li><label><input type="checkbox" /> First Name</label></li>
      <li><label><input type="checkbox" /> Last Name</label></li>
      <li><label><input type="checkbox" /> Email</label></li>
      <li><label><input type="checkbox" /> Phone</label></li>
    </ul>
  </details>
</div>
</div>

      <div className="contact-table-section">
        <div className="contact-table-header">
          <span>Total Records <strong>0</strong></span>
          <div className="contact-actions">
            <select className="contact-dropdown"><option>All Contacts</option></select>
            <button className="btn-primary" onClick={() => setShowContactModal(true)}>Create Contact</button>
            <button className="btn-primary">Actions ⏷</button>
          </div>
        </div>

        <div className="contact-table-scroll">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Contact Name</th>
                <th>Details</th>
                <th>Lead Source</th>
                <th>Department</th>
                <th>Created By</th>
                <th>Created Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  No Contacts found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showContactModal && <CreateContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

export default ContactsModule;
