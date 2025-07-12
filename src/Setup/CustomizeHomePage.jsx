import React, { useState } from 'react';
import './CustomizeHomePage.css';
import { FaQuestionCircle } from 'react-icons/fa';

const CustomizeHomePage = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="customize-home-container">
      <div className="customize-home-header">
        <div>
          <h2>Customize Home page</h2>
          <p>
            You can create custom homepages for each role and profile, making it easier for employees to complete their daily task efficiently.
          </p>
        </div>
        <div className="header-actions">
          <FaQuestionCircle className="help-icon" />
          <button className="new-home-btn">+ New Home Page</button>
        </div>
      </div>

      <div className="home-table">
        <div className="table-header">
          <div>Name</div>
          <div>Description</div>
          <div>Shared With</div>
          <div>Last Modified</div>
          <div>Status</div>
        </div>

        <div className="table-row">
          <div className="home-link">
            <span className="link">Manager's Home</span>
            <span className="new-label">New!</span>
          </div>
          <div></div>
          <div className="shared-link">1 Role</div>
          <div></div>
          <div>
            <div
              className={`toggle-switch ${enabled ? 'on' : 'off'}`}
              onClick={() => setEnabled(!enabled)}
            >
              <div className="toggle-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeHomePage;
