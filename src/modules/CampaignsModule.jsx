import React, { useState } from 'react';
import './CampaignsModule.css';
import campaignImg from '../assets/campaigns.png'; // Your campaign image path

const CreateCampaignModal = ({ onClose }) => {
  return (
    <div className="campaign-modal-overlay">
      <div className="campaign-modal">
        <div className="campaign-modal-header">
          <h2>Create Campaign <span className="edit-link">Edit Page Layout</span></h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="campaign-modal-body">
          <h4>Campaign Information</h4>
          <div className="campaign-grid">
            <div><label>Campaign Owner</label><input type="text" /></div>
            <div><label>Campaign Name</label><input type="text" /></div>
            <div><label>Start Date</label><input type="date" /></div>
            <div><label>End Date</label><input type="date" /></div>
            <div><label>Expected Revenue</label><input type="text" /></div>
            <div><label>Budgeted Cost</label><input type="text" /></div>
            <div><label>Actual Cost</label><input type="text" /></div>
            <div><label>Status</label><select><option>Planning</option></select></div>
            <div><label>Type</label><select><option>Email</option></select></div>
          </div>

          <h4>Description</h4>
          <textarea placeholder="Description" />
        </div>

        <div className="campaign-modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-secondary">Save and New</button>
          <button className="btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

const ImportCampaignModal = ({ onClose }) => {
  return (
    <div className="campaign-modal-overlay">
      <div className="campaign-modal import-modal">
        <div className="campaign-modal-header">
          <h2>Import Campaigns</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="campaign-modal-body import-body">
          <div className="import-options">
            <div className="import-box">
              <h3>📄 From File</h3>
              <p>Drag and drop your file here.<br />- or -</p>
              <button className="btn-primary">Browse</button>
              <p>Download sample file <a href="#">CSV</a> or <a href="#">XLSX</a></p>
              <small>You can import up to 5000 records using .xls, .xlsx, .vcf, or .csv file.</small>
            </div>

            <div className="or-divider"><span>or</span></div>

            <div className="import-box">
              <h3>📤 From other CRMs</h3>
              <p>Select your source CRM. Importing is quick and easy.</p>
            </div>
          </div>
        </div>

        <div className="campaign-modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
};

const CampaignsModule = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

  return (
    <div className="campaigns-container">
      <div className="campaigns-content">
        <img src={campaignImg} alt="Campaign Illustration" className="campaign-illustration" />
        <div>
          <h2>Plan Campaigns</h2>
          <p>Campaigns are marketing efforts planned, executed, and monitored from within your CRM.</p>
          <div className="campaigns-buttons">
            <button className="btn-primary" onClick={() => setShowCreateModal(true)}>Create Campaign</button>
            <button className="btn-primary" onClick={() => setShowImportModal(true)}>Import Campaigns</button>
          </div>
        </div>
      </div>

      {showCreateModal && <CreateCampaignModal onClose={() => setShowCreateModal(false)} />}
      {showImportModal && <ImportCampaignModal onClose={() => setShowImportModal(false)} />}
    </div>
  );
};

export default CampaignsModule;
