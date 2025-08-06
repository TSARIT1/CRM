import React from 'react';
import './NotificationsPage.css';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const NotificationsPage = () => {
  return (
    <div className="notifications-container">
      <h2>Notifications</h2><br />
      <div className="notification-item">
        <FaBell className="notif-icon" />
        <span>Push Notifications: Enabled</span><br />
      </div>
      <div className="notification-item">
        <FaEnvelope className="notif-icon" />
        <span>Email Alerts: Enabled</span>
      </div>
    </div>
  );
};

export default NotificationsPage;
