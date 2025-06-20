import React from 'react';
import './SalesInbox.css';
import icon1 from '../assets/deals-stack.png';     // left image
import icon2 from '../assets/filter-mail.png';     // middle image
import icon3 from '../assets/context-mail.png';    // right image

const SalesInbox = () => {
  return (
    <div className="salesinbox-container">
      <div className="salesinbox-header">
        <h1>SalesInbox</h1>
        <p><strong>This first-of-its-kind inbox</strong> will transform how you do sales. This deal-changing email organizer unites email and TSAR CRM information in a single view.</p>
        <button className="configure-btn">Configure Now</button>
      </div>

      <hr className="divider" />

      <div className="salesinbox-features">
        <div className="feature-box">
          <img src={icon1} alt="Deals Layout" />
          <h4>PRIORITIZED IN<br />4-COLUMN LAYOUT</h4>
        </div>

        <div className="feature-box">
          <img src={icon2} alt="Filtered CRM" />
          <h4>FILTERED WITH<br />TSAR CRM DATA</h4>
        </div>

        <div className="feature-box">
          <img src={icon3} alt="Context Info" />
          <h4>WITH ALL<br />CONTEXTUAL TSAR CRM INFO</h4>
        </div>
      </div>
    </div>
  );
};

export default SalesInbox;
