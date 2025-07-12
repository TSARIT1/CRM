import React from 'react';
import './ExportPage.css';
import { FaQuestionCircle } from 'react-icons/fa';

const ExportPage = () => {
  return (
    <div className="export-container">
      <div className="export-header">
        <h2 className="export-title">Export Data</h2>
        <div className="export-help">
          <FaQuestionCircle className="help-icon" />
          <span className="help-text">Help</span>
        </div>
      </div>

      <p className="export-info">
        You can export a max of 200,000 records. To export all of your data, you'll need to{' '}
        <a href="#" className="backup-link">request data backup</a>.
      </p>

      <button className="export-btn">Start an Export</button>
    </div>
  );
};

export default ExportPage;