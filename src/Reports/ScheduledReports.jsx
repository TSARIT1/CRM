import React, { useState } from 'react';
import './ScheduledReports.css';

const ScheduledReports = () => {
  const [status, setStatus] = useState('Active');
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="scheduled-reports-page">
      <div className="scheduled-reports-header">
        <h2>Scheduled Reports</h2>
        <button className="new-scheduler-btn" onClick={toggleForm}>
          New Report Scheduler
        </button>
      </div>

      <div className="filter-bar">
        <span>Status Filter:</span>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Active</option>
          <option>Inactive</option>
          <option>All</option>
        </select>
      </div>

      <div className="scheduled-table-wrapper">
        <table className="scheduled-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Repeat Type</th>
              <th>Last Scheduled Date</th>
              <th>Scheduled By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="no-schedulers">
                No Active Schedulers
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Popup Form Modal */}
      {showForm && (
        <div className="scheduler-form-overlay">
          <div className="scheduler-form-container">
            <div className="form-header">
              <h3>New Report Scheduler</h3>
              <button className="close-btn" onClick={toggleForm}>
                &times;
              </button>
            </div>

            <form className="scheduler-form">
              <label>
                Report Name:
                <input type="text" placeholder="Enter Report Name" />
              </label>

              <label>
                Repeat Type:
                <select>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </label>

              <label>
                Scheduled Date:
                <input type="date" />
              </label>

              <label>
                Scheduled By:
                <input type="text" placeholder="Enter Your Name" />
              </label>

              <div className="form-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={toggleForm} className="cancel-btn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduledReports;
