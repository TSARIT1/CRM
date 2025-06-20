import React, { useState } from 'react';
import './ProductsModule.css';
import productImg from '../assets/prodcuts.png'; // your illustration image path
import { SiGoogleforms } from "react-icons/si";

const CreateProductModal = ({ onClose }) => {
  return (
    <div className="product-modal-overlay">
      <div className="product-modal">
        <div className="modal-header">
          <h2>Create Product <span className="edit-link">Edit Page Layout</span></h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <h4>Product Image</h4>
          <div className="image-placeholder" />

          <h4>Product Information</h4>
          <div className="two-column-grid">
            <div><label>Product Owner</label><input type="text" defaultValue="" /></div>
            <div><label>Product Name</label><input type="text" /></div>
            <div><label>Product Code</label><input type="text" /></div>
            <div><label>Vendor Name</label><input type="text" /></div>
            <div><label>Manufacturer</label><select><option>-None-</option></select></div>
            <div><label>Product Category</label><select><option>-None-</option></select></div>
            <div><label>Sales Start Date</label><input type="date" /></div>
            <div><label>Sales End Date</label><input type="date" /></div>
            <div><label>Support Start Date</label><input type="date" /></div>
            <div><label>Support End Date</label><input type="date" /></div>
          </div>

          <h4>Price Information</h4>
          <div className="two-column-grid">
            <div><label>Unit Price</label><input type="text" /></div>
            <div><label>Commission Rate</label><input type="text" /></div>
            <div><label>Tax</label><select><option>None</option></select></div>
          </div>

          <h4>Stock Information</h4>
          <div className="two-column-grid">
            <div><label>Usage Unit</label><select><option>Box</option></select></div>
            <div><label>Qty Ordered</label><input type="text" /></div>
            <div><label>Quantity in Stock</label><input type="text" /></div>
            <div><label>Reorder Level</label><input type="text" /></div>
            <div><label>Handler</label><select><option>None</option></select></div>
            <div><label>Quantity in Demand</label><input type="text" /></div>
          </div>

          <h4>Description Information</h4>
          <textarea placeholder="Description"></textarea>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-secondary">Save and New</button>
          <button className="btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

const ImportProductModal = ({ onClose }) => {
  return (
    <div className="product-modal-overlay">
      <div className="product-modal import-modal">
        <div className="modal-header">
          <h2>Import Products</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body import-body">
          <div className="import-options">
            <div className="import-box">
              <h3><SiGoogleforms /> From File</h3>
              <p>Drag and drop your file here.<br />- or -</p>
              <button className="btn-primary">Browse</button>
              <p>Download sample file <a href="#">CSV</a> or <a href="#">XLSX</a></p>
              <small>You can import up to 5000 records through .xls, .xlsx, .vcf, or .csv file.</small>
            </div>

            <div className="or-divider"><span>or</span></div>

            <div className="import-box">
              <h3>👥 From other CRMs</h3>
              <p>Which CRM are you coming from?</p>
              <p>Choose a CRM from which to import. It’s easy and fast.</p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
};

const ProductsModule = () => {
  const [showModal, setShowModal] = useState(false);
  const [showImportPopup, setShowImportPopup] = useState(false);

  return (
    <div className="products-container">
      <div className="products-content">
        <img src={productImg} alt="Product Illustration" className="product-illustration" />
        <div>
          <h2>List out Products</h2>
          <p>Products refer to the goods or services sold or procured by an organization.</p>
          <div className="products-buttons">
            <button className="btn-primary" onClick={() => setShowModal(true)}>Create Product</button>
            <button className="btn-primary" onClick={() => setShowImportPopup(true)}>Import Products</button>
          </div>
        </div>
      </div>

      {showModal && <CreateProductModal onClose={() => setShowModal(false)} />}
      {showImportPopup && <ImportProductModal onClose={() => setShowImportPopup(false)} />}
    </div>
  );
};

export default ProductsModule;



