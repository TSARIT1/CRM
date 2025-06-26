import React from 'react';
import './SharedReports.css';
import { FaSearch } from 'react-icons/fa';

const SharedReports = () => {
  return (
    <div className="shared-reports-page">
      <div className="shared-reports-header">
        <h2>Shared Reports</h2>
        <div className="shared-reports-search-container">
          <FaSearch className="shared-reports-search-icon" />
          <input type="text" placeholder="Search Shared Reports" />
        </div>
      </div>

      <div className="shared-reports-table-container">
        <table className="shared-reports-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Description</th>
              <th>Folder</th>
              <th>Last Accessed Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="shared-reports-no-reports">
                No Shared Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SharedReports;
