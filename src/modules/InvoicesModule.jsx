import React, { useState } from 'react';
import './InvoicesModule.css';
import invoiceIcon from '../assets/invoice-icon.png'; // Replace with your image path

const InvoiceFormModal = ({ onClose }) => {
  return (
    <div className="invoice-overlay">
      <div className="invoice-modal-box">
        <div className="invoice-modal-header">
          <h2>Create Invoice</h2>
          <button className="invoice-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="invoice-modal-body">
          <h4 className="invoice-section-title">Invoice Information</h4>
          <div className="invoice-grid-2">
            <div><label>Invoice Owner</label><input type="text" defaultValue="TSAR IT" /></div>
            <div><label>Subject</label><input type="text" /></div>
            <div><label>Invoice Date</label><input type="date" /></div>
            <div><label>Due Date</label><input type="date" /></div>
            <div><label>Sales Order</label><input type="text" /></div>
            <div><label>Status</label><select><option>Draft</option></select></div>
            <div><label>Account Name</label><input type="text" /></div>
            <div><label>Contact Name</label><input type="text" /></div>
          </div>

          <h4 className="invoice-section-title">Address Information</h4>
          <div className="invoice-grid-2">
            <div><label>Billing Street</label><input /></div>
            <div><label>Shipping Street</label><input /></div>
            <div><label>Billing City</label><input /></div>
            <div><label>Shipping City</label><input /></div>
            <div><label>Billing State</label><input /></div>
            <div><label>Shipping State</label><input /></div>
            <div><label>Billing Code</label><input /></div>
            <div><label>Shipping Code</label><input /></div>
            <div><label>Billing Country</label><input /></div>
            <div><label>Shipping Country</label><input /></div>
          </div>

          <h4 className="invoice-section-title">Invoice Items</h4>
          <table className="invoice-table">
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
                  <input placeholder="Product" /><br />
                  <textarea placeholder="Description" />
                </td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
              </tr>
            </tbody>
          </table>

          <button className="invoice-add-row">+ Add row</button>

          <h4 className="invoice-section-title">Terms and Conditions</h4>
          <textarea className="invoice-textarea" placeholder="Terms and Conditions" />

          <h4 className="invoice-section-title">Description Information</h4>
          <textarea className="invoice-textarea" placeholder="Description" />
        </div>

        <div className="invoice-modal-footer">
          <button className="invoice-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="invoice-btn-primary">Save Invoice</button>
        </div>
      </div>
    </div>
  );
};

const InvoicesModule = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="invoice-page">
      <div className="invoice-landing">
        <img src={invoiceIcon} alt="Invoice Icon" className="invoice-icon" />
        <div>
          <h2>Manage Invoices</h2>
          <p>Invoices are issued to customers to request payment for products or services provided.</p>
          <button className="invoice-btn-primary" onClick={() => setShowForm(true)}>Create Invoice</button>
        </div>
      </div>

      {showForm && <InvoiceFormModal onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default InvoicesModule;
