// AccountsModule.jsx
import React, { useState } from 'react';
import './Module.css';

const CreateAccountModal = ({ onClose }) => {
  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-box">
        <div className="contact-modal-header">
          <h2>Create Account</h2>
          <button className="contact-btn-close" onClick={onClose}>×</button>
        </div>

        <div className="contact-modal-body">
          <h4>Account Information</h4>
          <div className="contact-form-grid">
            <input type="text" placeholder="Account Name" />
            <input type="text" placeholder="Website" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Industry" />
            <input type="text" placeholder="Account Type" />
            <input type="text" placeholder="Ownership" />
            <input type="text" placeholder="Revenue" />
          </div>

          <h4>Address Information</h4>
          <div className="contact-form-grid">
            <input type="text" placeholder="Billing Street" />
            <input type="text" placeholder="Shipping Street" />
            <input type="text" placeholder="Billing City" />
            <input type="text" placeholder="Shipping City" />
            <input type="text" placeholder="Billing State" />
            <input type="text" placeholder="Shipping State" />
            <input type="text" placeholder="Billing Zip" />
            <input type="text" placeholder="Shipping Zip" />
            <input type="text" placeholder="Billing Country" />
            <input type="text" placeholder="Shipping Country" />
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

const AccountsModule = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="contact-module">
      <div className="contact-sidebar">
        <div className="contact-filter-title">Filter Accounts by</div>
        <input className="contact-search" placeholder="🔍 Search" />

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>System Defined Filters</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Active Accounts</label></li>
              <li><label><input type="checkbox" /> Inactive Accounts</label></li>
            </ul>
          </details>
        </div>

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>Filter By Fields</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Account Name</label></li>
              <li><label><input type="checkbox" /> Industry</label></li>
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
            <select className="contact-dropdown"><option>All Accounts</option></select>
            <button className="btn-primary" onClick={() => setShowContactModal(true)}>Create Account</button>
            <button className="btn-primary">Actions ⏷</button>
          </div>
        </div>

        <div className="contact-table-scroll">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Industry</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Created By</th>
                <th>Created Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  No Accounts found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showContactModal && <CreateAccountModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
};

export default AccountsModule;
