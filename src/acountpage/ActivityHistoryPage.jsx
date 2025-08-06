import React from 'react';
import './ActivityHistoryPage.css';
import { FaHistory } from 'react-icons/fa';

const ActivityHistoryPage = () => {
  const activities = [
    {
      action: 'Logged in from new device',
      time: 'Aug 2, 2025 - 11:20 AM',
      ip: '192.168.1.101',
    },
    {
      action: 'Changed password',
      time: 'Aug 1, 2025 - 6:45 PM',
      ip: '192.168.1.88',
    },
    {
      action: 'Enabled 2FA (Passkey)',
      time: 'Jul 31, 2025 - 2:10 PM',
      ip: '192.168.1.76',
    },
  ];

  return (
    <div className="activity-history-container">
      <h2>Activity History</h2>
      <div className="activity-list">
        {activities.map((item, index) => (
          <div key={index} className="activity-item">
            <FaHistory className="activity-icon" />
            <div>
              <h4>{item.action}</h4>
              <p>{item.time}</p>
              <p>IP: {item.ip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityHistoryPage;
