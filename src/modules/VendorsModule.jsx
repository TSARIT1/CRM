import React, { useState } from 'react';
import './VendorsModule.css';
import vendorImg from '../assets/vendors.png'; // Add your vendor illustration image here

const CreateVendorModal = ({ onClose }) => {
  return (
    <div className="vendor-modal-overlay">
      <div className="vendor-modal">
        <div className="vendor-modal-header">
          <h2>Create Vendor <span className="edit-link">Edit Page Layout</span></h2>
          <button className="vendor-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="vendor-modal-body">
          <h4>Vendor Information</h4>
          <div className="vendor-grid-2">
            <div><label>Vendor Name</label><input type="text" /></div>
            <div><label>Vendor Code</label><input type="text" /></div>
            <div><label>Phone</label><input type="text" /></div>
            <div><label>Email</label><input type="email" /></div>
            <div><label>Website</label><input type="text" /></div>
            <div><label>Category</label><select><option>-None-</option></select></div>
          </div>

          <h4>Description</h4>
          <textarea placeholder="Add description..." />
        </div>

        <div className="vendor-modal-footer">
          <button className="vendor-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="vendor-btn-secondary">Save and New</button>
          <button className="vendor-btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

const ImportVendorModal = ({ onClose }) => {
  return (
    <div className="vendor-modal-overlay">
      <div className="vendor-modal import-modal">
        <div className="vendor-modal-header">
          <h2>Import Vendors</h2>
          <button className="vendor-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="vendor-modal-body import-body">
          <div className="import-options">
            <div className="import-box">
              <h3>📄 From File</h3>
              <p>Drag and drop your file here.<br />- or -</p>
              <button className="vendor-btn-primary">Browse</button>
              <p>Download sample file <a href="#">CSV</a> or <a href="#">XLSX</a></p>
              <small>You can import up to 5000 records.</small>
            </div>

            <div className="or-divider"><span>or</span></div>

            <div className="import-box">
              <h3>🔁 From Other Systems</h3>
              <p>Choose a source system to import from easily and quickly.</p>
            </div>
          </div>
        </div>

        <div className="vendor-modal-footer">
          <button className="vendor-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="vendor-btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
};

const VendorsModule = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showImport, setShowImport] = useState(false);

  return (
    <div className="vendors-container">
      <div className="vendors-content">
        <img src={vendorImg} alt="Vendor Illustration" className="vendor-illustration" />
        <div>
          <h2>Plan Vendors</h2>
          <p>Vendors refer to the companies or individuals that supply goods and services to your organization.</p>
          <div className="vendors-buttons">
            <button className="vendor-btn-primary" onClick={() => setShowCreate(true)}>Create Vendor</button>
            <button className="vendor-btn-primary" onClick={() => setShowImport(true)}>Import Vendors</button>
          </div>
        </div>
      </div>

      {showCreate && <CreateVendorModal onClose={() => setShowCreate(false)} />}
      {showImport && <ImportVendorModal onClose={() => setShowImport(false)} />}
    </div>
  );
};

export default VendorsModule;
