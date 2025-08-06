import React, { useState } from 'react';
import './PasswordPage.css';

const PasswordPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div className="password-container">
      <h2>Password</h2><br />
      <p>Change your account password securely.</p><br />
      <button onClick={() => setShowPopup(true)} className="change-btn">Change Password</button>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>Change Password</h3><br />
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={() => setShowPopup(false)} className="save-btn">Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordPage;
