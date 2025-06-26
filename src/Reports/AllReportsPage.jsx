import React from 'react';
import './AllReportsPage.css';
import { FaSearch } from 'react-icons/fa';

const AllReports = () => {
  return (
    <div className="all-reports-page">
      <div className="reports-header">
        <h2>All Reports</h2>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search My Reports" />
        </div>
      </div>

      <div className="table-container">
        <table className="reports-table">
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
              <td colSpan="4" className="no-reports">
                No Reports found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReports;
