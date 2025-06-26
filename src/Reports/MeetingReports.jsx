import React from 'react';
import './MeetingReports.css';
import { FaSearch } from 'react-icons/fa';

const MeetingReports = () => {
  return (
    <div className="meeting-reports-page">
      <div className="meeting-reports-header">
        <h2>
          Meeting Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Meeting Reports" />
        </div>
      </div>

      <div className="meeting-reports-table-wrapper">
        <table className="meeting-reports-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" /> &nbsp; Report Name
              </th>
              <th>Description</th>
              <th>Last Accessed Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="no-meeting-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingReports;
