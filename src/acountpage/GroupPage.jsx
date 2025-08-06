import React, { useState } from 'react';
import './GroupPage.css';

const GroupPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="group-container">
      <div className="group-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="Group Illustration"
          className="group-illustration"
        />
        <p className="group-text">Add a group of people and simplify email communication with them.</p>
        <button className="create-group-btn" onClick={() => setShowPopup(true)}>
          Create New Group
        </button>
      </div>

      {showPopup && (
        <div className="group-popup-overlay">
          <div className="group-popup">
            <button className="close-popup" onClick={() => setShowPopup(false)}>×</button>
            <h2>Create Group</h2>
            <div className="popup-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Group Icon" />
            </div>
            <label>Group Name</label>
            <input type="text" placeholder="Enter group name" />
            <label>Description (Optional)</label>
            <textarea placeholder="Enter description..." />
            <label>Initial Members</label>
            <input type="text" placeholder="Search..." />
            <div className="popup-buttons">
              <button className="btn-create">Create</button>
              <button className="btn-back" onClick={() => setShowPopup(false)}>Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupPage;
