import React from 'react';
import './DataBackupPage.css';
import { FaQuestionCircle } from 'react-icons/fa';

const DataBackupPage = () => {
  return (
    <div className="backup-container">
      <div className="backup-header">
        <h2 className="backup-title">Data Backup</h2>
        <div className="backup-help">
          <FaQuestionCircle className="help-icon" />
          <span className="help-text">Help</span>
        </div>
      </div>

      <p className="backup-description">
        Download a complete copy of CRM data by purchasing a backup from here.
      </p>

      <button className="backup-download-btn">Download Now</button>
    </div>
  );
};

export default DataBackupPage;
