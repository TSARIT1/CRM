import React from 'react';
import './EmailReports.css';
import { FaSearch } from 'react-icons/fa';

const EmailReports = () => {
  return (
    <div className="email-reports-page">
      <div className="email-reports-header">
        <h2>
          Email Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Email Reports" />
        </div>
      </div>

      <div className="email-reports-table-wrapper">
        <table className="email-reports-table">
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
              <td colSpan="3" className="no-email-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailReports;
