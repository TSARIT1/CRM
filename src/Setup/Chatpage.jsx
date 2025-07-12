import React, { useState } from 'react';
import './Chatpage.css'; 

function Chatpage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="app">
      {/* SCREEN 1: Marketing Page */}
      {!showPopup && (
        <div className="marketing-page">
          <h1>Connect with your visitors instantly with messenger</h1>
          <h2>Make Selling easy & effective - SalesIQ's Integration with Zoho CRM</h2>
          
          <div className="logos">
            <img src="zoho-salesiq-logo.png" alt="Zoho SalesIQ" />
            <img src="zoho-crm-logo.png" alt="Zoho CRM" />
          </div>

          <a 
            href="https://youtube.com/watch?v=example" 
            className="watch-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>

          <p>
            Integrate Zoho SalesIQ with Zoho CRM to generate, engage, and converge leads to optimize customer management.
          </p>

          <button 
            className="get-started-btn" 
            onClick={() => setShowPopup(true)}
          >
            Get Started
          </button>

          <div className="copy-info">Copy Ink</div>
        </div>
      )}

      {/* SCREEN 2: Account Creation Popup (Conditional Render) */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="account-popup">
            <h1>Create your Zoho SalesIQ Account</h1>
            
            <div className="form-group">
              <label>Account name</label>
              <input type="text" value="Tsar IT" readOnly />
            </div>

            <div className="form-group">
              <label>Account URL</label>
              <input type="text" value="https://salesiq.zoho.in/tsarit" readOnly />
              <span className="available-tag">Available</span>
            </div>

            <hr />

            <div className="note">
              <p><strong>Note:</strong></p>
              <ul>
                <li>This name will be used as your Zoho SalesIQ account name</li>
                <li>You can use account url for logging into your Zoho SalesIQ account.</li>
              </ul>
            </div>

            <div className="popup-buttons">
              <button 
                className="cancel-btn"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button className="create-btn">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatpage;