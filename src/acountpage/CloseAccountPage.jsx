import React, { useState } from 'react';
import './CloseAccountPage.css';
import { FaExclamationTriangle } from 'react-icons/fa';

const CloseAccountPage = () => {
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="close-account-container">
      <h2>Close Account</h2>
      <div className="warning-box">
        <FaExclamationTriangle className="warn-icon" />
        <p>This action is permanent. All your data will be deleted.</p><br />
      </div>
      <button className="close-btn3" onClick={() => setConfirm(true)}>Close My Account</button>

      {confirm && (
        <div className="popup-overlay" onClick={() => setConfirm(false)}>
          <div className="popup" onClick={e => e.stopPropagation()}>
            <h3>Are you sure?</h3><br />
            <p>This will permanently close your TSAR account.</p><br />
            <button className="confirm-btn">Yes, Close It</button>
            <button className="cancel-btn" onClick={() => setConfirm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloseAccountPage;
