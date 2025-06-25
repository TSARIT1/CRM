import React, { useState } from 'react';
import './PriceBooksModule.css';
import priceBookImg from '../assets/pricebook.png'; // Replace with your actual image

const CreatePriceBookModal = ({ onClose }) => {
  return (
    <div className="pricebook-modal-overlay">
      <div className="pricebook-modal">
        <div className="pricebook-modal-header">
          <h2>Create Price Book <span className="edit-link">Edit Page Layout</span></h2>
          <button className="pricebook-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="pricebook-modal-body">
          <h4>Price Book Information</h4>
          <div className="pricebook-grid-2">
            <div><label>Price Book Name</label><input type="text" /></div>
            <div><label>Active</label><select><option>Yes</option><option>No</option></select></div>
            <div><label>Description</label><textarea placeholder="Add description..." /></div>
          </div>
        </div>

        <div className="pricebook-modal-footer">
          <button className="pricebook-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="pricebook-btn-secondary">Save and New</button>
          <button className="pricebook-btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

const ImportPriceBookModal = ({ onClose }) => {
  return (
    <div className="pricebook-modal-overlay">
      <div className="pricebook-modal import-modal">
        <div className="pricebook-modal-header">
          <h2>Import Price Books</h2>
          <button className="pricebook-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="pricebook-modal-body import-body">
          <div className="import-options">
            <div className="import-box">
              <h3>📄 From File</h3>
              <p>Drag and drop your file here.<br />- or -</p>
              <button className="pricebook-btn-primary">Browse</button>
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

        <div className="pricebook-modal-footer">
          <button className="pricebook-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="pricebook-btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
};

const PriceBooksModule = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showImport, setShowImport] = useState(false);

  return (
    <div className="pricebooks-container">
      <div className="pricebooks-content">
        <img src={priceBookImg} alt="Price Book Illustration" className="pricebook-illustration" />
        <div>
          <h2>Manage Price Books</h2>
          <p>Price Books contain specific pricing information for products and services you offer.</p>
          <div className="pricebooks-buttons">
            <button className="pricebook-btn-primary" onClick={() => setShowCreate(true)}>Create Price Book</button>
            <button className="pricebook-btn-primary" onClick={() => setShowImport(true)}>Import Price Books</button>
          </div>
        </div>
      </div>

      {showCreate && <CreatePriceBookModal onClose={() => setShowCreate(false)} />}
      {showImport && <ImportPriceBookModal onClose={() => setShowImport(false)} />}
    </div>
  );
};

export default PriceBooksModule;
