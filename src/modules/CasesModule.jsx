import React, { useState } from 'react';
import './CasesModule.css';
import casesImg from '../assets/cases.png'; // Replace with your actual image path

const CreateCaseModal = ({ onClose }) => {
  return (
    <div className="case-modal-overlay">
      <div className="case-modal">
        <div className="case-modal-header">
          <h2>Create Case <span className="edit-link">Edit Page Layout</span></h2>
          <button className="case-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="case-modal-body">
          <h4>Case Information</h4>
          <div className="case-grid-2">
            <div><label>Case Title</label><input type="text" /></div>
            <div><label>Status</label><select><option>Open</option><option>Closed</option></select></div>
            <div><label>Priority</label><select><option>High</option><option>Medium</option><option>Low</option></select></div>
            <div><label>Case Origin</label><input type="text" /></div>
            <div><label>Contact Name</label><input type="text" /></div>
            <div><label>Account Name</label><input type="text" /></div>
          </div>

          <h4>Description</h4>
          <textarea placeholder="Add case description..." />
        </div>

        <div className="case-modal-footer">
          <button className="case-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="case-btn-secondary">Save and New</button>
          <button className="case-btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

const ImportCaseModal = ({ onClose }) => {
  return (
    <div className="case-modal-overlay">
      <div className="case-modal import-modal">
        <div className="case-modal-header">
          <h2>Import Cases</h2>
          <button className="case-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="case-modal-body import-body">
          <div className="import-options">
            <div className="import-box">
              <h3>📄 From File</h3>
              <p>Drag and drop your file here.<br />- or -</p>
              <button className="case-btn-primary">Browse</button>
              <p>Download sample file <a href="#">CSV</a> or <a href="#">XLSX</a></p>
              <small>You can import up to 5000 records.</small>
            </div>

            <div className="or-divider"><span>or</span></div>

            <div className="import-box">
              <h3>📂 From Other CRMs</h3>
              <p>Select your CRM and start importing your existing cases quickly.</p>
            </div>
          </div>
        </div>

        <div className="case-modal-footer">
          <button className="case-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="case-btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
};

const CasesModule = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showImport, setShowImport] = useState(false);

  return (
    <div className="cases-container">
      <div className="cases-content">
        <img src={casesImg} alt="Cases Illustration" className="case-illustration" />
        <div>
          <h2>Manage Cases</h2>
          <p>Cases refer to customer service issues, complaints, or queries raised by users.</p>
          <div className="cases-buttons">
            <button className="case-btn-primary" onClick={() => setShowCreate(true)}>Create Case</button>
            <button className="case-btn-primary" onClick={() => setShowImport(true)}>Import Cases</button>
          </div>
        </div>
      </div>

      {showCreate && <CreateCaseModal onClose={() => setShowCreate(false)} />}
      {showImport && <ImportCaseModal onClose={() => setShowImport(false)} />}
    </div>
  );
};

export default CasesModule;
