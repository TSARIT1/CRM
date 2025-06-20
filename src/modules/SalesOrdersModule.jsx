import React, { useState } from 'react';
import './SalesOrdersModule.css';
import salesOrderIcon from '../assets/sales-order-icon.png'; // your icon path

const SalesOrderFormModal = ({ onClose }) => {
  return (
    <div className="salesorder-overlay">
      <div className="salesorder-modal-box">
        <div className="salesorder-modal-header">
          <h2>Create Sales Order</h2>
          <button className="salesorder-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="salesorder-modal-body">
          <h4 className="salesorder-section-title">Sales Order Information</h4>
          <div className="salesorder-grid-2">
            <div><label>Order Owner</label><input type="text" defaultValue="TSAR IT" /></div>
            <div><label>Subject</label><input type="text" /></div>
            <div><label>Due Date</label><input type="date" /></div>
            <div><label>Customer Name</label><input type="text" /></div>
            <div><label>Status</label><select><option>Pending</option></select></div>
            <div><label>Carrier</label><input type="text" /></div>
            <div><label>Account Name</label><input type="text" /></div>
          </div>

          <h4 className="salesorder-section-title">Billing & Shipping</h4>
          <div className="salesorder-grid-2">
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

          <h4 className="salesorder-section-title">Order Items</h4>
          <table className="salesorder-table">
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
                <td><input placeholder="Product" /><br /><textarea placeholder="Description" /></td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
                <td><input /></td>
              </tr>
            </tbody>
          </table>

          <button className="salesorder-add-row">+ Add row</button>

          <h4 className="salesorder-section-title">Terms and Notes</h4>
          <textarea className="salesorder-textarea" placeholder="Terms and Conditions" />
          <textarea className="salesorder-textarea" placeholder="Additional Notes" />
        </div>

        <div className="salesorder-modal-footer">
          <button className="salesorder-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="salesorder-btn-primary">Save Order</button>
        </div>
      </div>
    </div>
  );
};

const SalesOrdersModule = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="salesorder-page">
      <div className="salesorder-landing">
        <img src={salesOrderIcon} alt="Sales Order Icon" className="salesorder-icon" />
        <div>
          <h2>Get Sales Orders</h2>
          <p>Sales Orders are documents that confirm the sales generated after the customer sends a purchase order. They are based on your quotes.</p>
          <button className="salesorder-btn-primary" onClick={() => setShowForm(true)}>Create Sales Order</button>
        </div>
      </div>

      {showForm && <SalesOrderFormModal onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default SalesOrdersModule;
