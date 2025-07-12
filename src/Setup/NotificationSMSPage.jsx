import React from 'react';
import './NotificationSMSPage.css';

const NotificationSMSPage = () => {
  return (
    <div className="notification-container">
      <div className="notification-box">
        <div className="notification-header">
          <div>
            <h2>Notification SMS</h2>
            <p>
              Notification SMS allows you to send alert messages and transactional messages
              to your customers and your ZohoCRM users.
            </p>
          </div>
          <button className="enable-btn">Enable</button>
        </div>

        <div className="notification-body">
          <p>
            Add an extra layer of communication and stay in touch with your customers using Notification SMS,
            which enables you to send vital transactional SMS messages to customers from right inside the product.
          </p>
          <ul>
            <li>
              <strong>Personalized message templates -</strong> Build a personal connection with your customers
              by using merge fields to pull contextual information into your SMS messages.
            </li>
            <li>
              <strong>Automated SMS messages -</strong> Trigger important SMS messages from workflows, Blueprints,
              and CommandCenter journeys.
            </li>
            <li>
              <strong>Uninterrupted communication -</strong> Make sure your business is always ready to send out
              important SMS messages by setting up a minimum credit balance and leveraging the auto-recharge option.
            </li>
          </ul>
          <div className="resources">
            <strong>Resources</strong>
            <br />
            <a href="#">Notification SMS Help Doc</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSMSPage;
