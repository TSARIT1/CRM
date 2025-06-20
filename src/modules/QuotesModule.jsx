import React, { useState } from 'react';
import './QuotesModule.css';
import quoteIcon from '../assets/quote-icon.png';

const QuoteFormModal = ({ onClose }) => {
  return (
    <div className="quote-overlay">
      <div className="quote-modal-box">
        <div className="quote-modal-header">
          <h2>Create Quote</h2>
          <button className="quote-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="quote-modal-body">
          <h4 className="quote-section-title">Quote Information</h4>
          <div className="quote-grid-2">
            <div><label>Quote Owner</label><input className="quote-input" type="text" defaultValue="TSAR IT" /></div>
            <div><label>Deal Name</label><input className="quote-input" type="text" /></div>
            <div><label>Subject</label><input className="quote-input" type="text" /></div>
            <div><label>Valid Until</label><input className="quote-input" type="date" /></div>
            <div><label>Quote Stage</label><select className="quote-select"><option>Draft</option></select></div>
            <div><label>Contact Name</label><input className="quote-input" type="text" /></div>
            <div><label>Team</label><input className="quote-input" type="text" /></div>
            <div><label>Account Name</label><input className="quote-input" type="text" /></div>
            <div><label>Carrier</label><input className="quote-input" type="text" defaultValue="FedEX" /></div>
          </div>

          <h4 className="quote-section-title">Address Information</h4>
          <div className="quote-grid-2">
            <div><label>Billing Street</label><input className="quote-input" /></div>
            <div><label>Shipping Street</label><input className="quote-input" /></div>
            <div><label>Billing City</label><input className="quote-input" /></div>
            <div><label>Shipping City</label><input className="quote-input" /></div>
            <div><label>Billing State</label><input className="quote-input" /></div>
            <div><label>Shipping State</label><input className="quote-input" /></div>
            <div><label>Billing Code</label><input className="quote-input" /></div>
            <div><label>Shipping Code</label><input className="quote-input" /></div>
            <div><label>Billing Country</label><input className="quote-input" /></div>
            <div><label>Shipping Country</label><input className="quote-input" /></div>
          </div>

          <h4 className="quote-section-title">Quoted Items</h4>
          <table className="quote-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>List Price ($)</th>
                <th>Amount ($)</th>
                <th>Discount ($)</th>
                <th>Tax ($)</th>
                <th>Total ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input className="quote-input" placeholder="Product" /><br />
                  <textarea className="quote-textarea" placeholder="Description" />
                </td>
                <td><input className="quote-input" /></td>
                <td><input className="quote-input" /></td>
                <td><input className="quote-input" /></td>
                <td><input className="quote-input" /></td>
                <td><input className="quote-input" /></td>
                <td><input className="quote-input" /></td>
              </tr>
            </tbody>
          </table>

          <button className="quote-add-row">+ Add row</button>

          <h4 className="quote-section-title">Terms and Conditions</h4>
          <textarea className="quote-textarea" placeholder="Terms and Conditions"></textarea>

          <h4 className="quote-section-title">Description Information</h4>
          <textarea className="quote-textarea" placeholder="Description"></textarea>
        </div>

        <div className="quote-modal-footer">
          <button className="quote-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="quote-btn-primary">Save Quote</button>
        </div>
      </div>
    </div>
  );
};

const QuotesModule = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="quote-page">
      <div className="quote-landing">
        <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
        <div>
          <h2>Manage Customer Quotes</h2>
          <p>Quotes are legal agreements between a customer and a vendor to deliver the requested product(s) at the agreed upon price within the specified time period.</p>
          <button className="quote-btn-primary" onClick={() => setShowForm(true)}>Create Quote</button>
        </div>
      </div>

      {showForm && <QuoteFormModal onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default QuotesModule;


