import React, { useState } from 'react';
import  './PurchaseOrdersModule.css';;
import purchaseIcon from '../assets/purchase-icon.png'; // update with your image path

const PurchaseOrderFormModal = ({ onClose }) => {
  return (
    <div className="purchase-overlay">
      <div className="purchase-modal-box">
        <div className="purchase-modal-header">
          <h2>Create Purchase Order</h2>
          <button className="purchase-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="purchase-modal-body">
          <h4 className="purchase-section-title">Purchase Order Information</h4>
          <div className="purchase-grid-2">
            <div><label>Purchase Order Owner</label><input type="text" defaultValue="TSAR IT" /></div>
            <div><label>Subject</label><input type="text" /></div>
            <div><label>Vendor Name</label><input type="text" /></div>
            <div><label>Requisition No</label><input type="text" /></div>
            <div><label>Tracking Number</label><input type="text" /></div>
            <div><label>Contact Name</label><input type="text" /></div>
            <div><label>Carrier</label><input type="text" /></div>
            <div><label>Due Date</label><input type="date" /></div>
          </div>

          <h4 className="purchase-section-title">Address Information</h4>
          <div className="purchase-grid-2">
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

          <h4 className="purchase-section-title">Ordered Items</h4>
          <table className="purchase-table">
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

          <button className="purchase-add-row">+ Add row</button>

          <h4 className="purchase-section-title">Terms and Conditions</h4>
          <textarea className="purchase-textarea" placeholder="Terms and Conditions"></textarea>

          <h4 className="purchase-section-title">Description Information</h4>
          <textarea className="purchase-textarea" placeholder="Description"></textarea>
        </div>

        <div className="purchase-modal-footer">
          <button className="purchase-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="purchase-btn-primary">Save Purchase Order</button>
        </div>
      </div>
    </div>
  );
};

const PurchaseOrdersModule = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="purchase-page">
      <div className="purchase-landing">
        <img src={purchaseIcon} alt="Purchase Icon" className="purchase-icon" />
        <div>
          <h2>Manage Purchase Orders</h2>
          <p>Purchase Orders are commercial documents issued to a vendor to purchase goods/services under agreed conditions.</p>
          <button className="purchase-btn-primary" onClick={() => setShowForm(true)}>Create Purchase Order</button>
        </div>
      </div>

      {showForm && <PurchaseOrderFormModal onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default PurchaseOrdersModule;
