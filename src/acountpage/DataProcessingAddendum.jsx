import React, { useState } from 'react';
import './DataProcessingAddendum.css';

const DataProcessingAddendum = () => {
  const [selectedOrg, setSelectedOrg] = useState('TSAR IT');

  return (
    <div className="dpa-container">
      <h2>Data Processing Addendum</h2>
      <p className="dpa-description">
        Data Processing Addendum (DPA) is an agreement between you and TSAR about processing your personal data.
      </p>

      <div className="dpa-card">
        <h3>Initiate DPA</h3>
        <p>
          You can choose your organization to initiate the DPA with TSAR. A copy of the addendum will be sent to the email address <strong>info@tsaritservices.com</strong>
        </p>

        <label htmlFor="org-select">Choose Organization</label>
        <div className="org-select">
          <select value={selectedOrg} onChange={(e) => setSelectedOrg(e.target.value)}>
            <option value="TSAR IT">TSAR IT</option>
            <option value="TSAR Global">TSAR Global</option>
          </select>
        </div>

        <button className="dpa-btn">Initiate Now</button>
      </div>
    </div>
  );
};

export default DataProcessingAddendum;
