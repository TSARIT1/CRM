import React, { useState } from 'react';
import './Module.css';

const CreateDealModal = ({ onClose }) => {
  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-box">
        <div className="contact-modal-header">
          <h2>Create Deal</h2>
          <button className="contact-btn-close" onClick={onClose}>×</button>
        </div>

        <div className="contact-modal-body">
          <h4>Deal Information</h4>
          <div className="contact-form-grid">
            <input type="text" placeholder="Deal Owner" />
            <input type="text" placeholder="Deal Name" required />
            <input type="text" placeholder="Account Name" />
            <input type="text" placeholder="Amount" />
            <input type="text" placeholder="Stage" />
            <input type="text" placeholder="Type" />
            <input type="date" placeholder="Closing Date" />
            <input type="text" placeholder="Lead Source" />
            <input type="text" placeholder="Next Step" />
            <input type="text" placeholder="Contact Name" />
            <input type="text" placeholder="Campaign Source" />
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

const DealsModule = () => {
  const [showDealModal, setShowDealModal] = useState(false);

  return (
    <div className="contact-module">
      <div className="contact-sidebar">
        <div className="contact-filter-title">Filter Deals by</div>
        <input className="contact-search" placeholder="🔍 Search" />

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>System Defined Filters</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Open Deals</label></li>
              <li><label><input type="checkbox" /> Closed Won</label></li>
              <li><label><input type="checkbox" /> Closed Lost</label></li>
            </ul>
          </details>
        </div>

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>Filter By Fields</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Deal Name</label></li>
              <li><label><input type="checkbox" /> Stage</label></li>
              <li><label><input type="checkbox" /> Amount</label></li>
              <li><label><input type="checkbox" /> Closing Date</label></li>
            </ul>
          </details>
        </div>
      </div>

      <div className="contact-table-section">
        <div className="contact-table-header">
          <span>Total Deals <strong>0</strong></span>
          <div className="contact-actions">
            <select className="contact-dropdown"><option>All Deals</option></select>
            <button className="btn-primary" onClick={() => setShowDealModal(true)}>Create Deal</button>
            <button className="btn-primary">Actions ⏷</button>
          </div>
        </div>

        <div className="contact-table-scroll">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Deal Name</th>
                <th>Account Name</th>
                <th>Stage</th>
                <th>Amount</th>
                <th>Closing Date</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  No Deals found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showDealModal && <CreateDealModal onClose={() => setShowDealModal(false)} />}
    </div>
  );
};

export default DealsModule;
