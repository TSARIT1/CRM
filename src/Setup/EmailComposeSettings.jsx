import React, { useState } from 'react';
import './EmailComposeSettings.css';

const EmailComposeSettings = () => {
  const [fontFamily, setFontFamily] = useState('Verdana');
  const [fontSize, setFontSize] = useState('10');
  const [fromAddress, setFromAddress] = useState('TSAR IT <info@tsaritservices.com>');

  return (
    <div className="email-compose-container">
      <div className="tabs">
        <span className="active">Compose</span>
        <span>Email</span>
        <span>Organization Emails</span>
        <span>Custom Email Fields</span>
      </div>

      <h2>Compose Settings</h2>
      <p className="subtitle">
        Configure basic default email compose settings to personalize your composing experience.
      </p>

      <div className="form-group">
        <label>Default Font Family</label>
        <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Verdana">Verdana</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>

      <div className="form-group">
        <label>Default Font Size</label>
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          {[10, 12, 14, 16, 18, 20].map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Preview</label>
        <div className="preview-box" style={{ fontFamily, fontSize: `${fontSize}px` }}>
          The quick brown fox jumps over the lazy dog
        </div>
      </div>

      <div className="form-group">
        <label>Default From Address</label>
        <select value={fromAddress} onChange={(e) => setFromAddress(e.target.value)}>
          <option value="TSAR IT <info@tsaritservices.com>">TSAR IT &lt;info@tsaritservices.com&gt;</option>
          <option value="Sales <sales@tsaritservices.com>">Sales &lt;sales@tsaritservices.com&gt;</option>
        </select>
      </div>

      <div className="form-group">
        <label>Email Signature</label>
        <span className="add-signature">Add New Signature</span>
      </div>
    </div>
  );
};

export default EmailComposeSettings;
