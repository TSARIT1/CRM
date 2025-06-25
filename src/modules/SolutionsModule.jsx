import React, { useState } from 'react';
import './SolutionsModule.css';
import solutionImg from '../assets/solutions.png'; // Replace with your solution image path

const CreateSolutionModal = ({ onClose }) => {
  return (
    <div className="solution-modal-overlay">
      <div className="solution-modal">
        <div className="solution-modal-header">
          <h2>Create Solution <span className="edit-link">Edit Page Layout</span></h2>
          <button className="solution-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="solution-modal-body">
          <h4>Solution Information</h4>
          <div className="solution-grid-2">
            <div><label>Solution Title</label><input type="text" /></div>
            <div><label>Status</label><select><option>Draft</option><option>Published</option></select></div>
          </div>

          <h4>Description</h4>
          <textarea placeholder="Add description..." />
        </div>

        <div className="solution-modal-footer">
          <button className="solution-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="solution-btn-secondary">Save and New</button>
          <button className="solution-btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

const ImportSolutionModal = ({ onClose }) => {
  return (
    <div className="solution-modal-overlay">
      <div className="solution-modal import-modal">
        <div className="solution-modal-header">
          <h2>Import Solutions</h2>
          <button className="solution-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="solution-modal-body import-body">
          <div className="import-options">
            <div className="import-box">
              <h3>📄 From File</h3>
              <p>Drag and drop your file here.<br />- or -</p>
              <button className="solution-btn-primary">Browse</button>
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

        <div className="solution-modal-footer">
          <button className="solution-btn-secondary" onClick={onClose}>Cancel</button>
          <button className="solution-btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
};

const SolutionsModule = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showImport, setShowImport] = useState(false);

  return (
    <div className="solutions-container">
      <div className="solutions-content">
        <img src={solutionImg} alt="Solution Illustration" className="solution-illustration" />
        <div>
          <h2>Manage Knowledge Solutions</h2>
          <p>Solutions are useful documents that help in resolving issues or answering questions.</p>
          <div className="solutions-buttons">
            <button className="solution-btn-primary" onClick={() => setShowCreate(true)}>Create Solution</button>
            <button className="solution-btn-primary" onClick={() => setShowImport(true)}>Import Solutions</button>
          </div>
        </div>
      </div>

      {showCreate && <CreateSolutionModal onClose={() => setShowCreate(false)} />}
      {showImport && <ImportSolutionModal onClose={() => setShowImport(false)} />}
    </div>
  );
};

export default SolutionsModule;
