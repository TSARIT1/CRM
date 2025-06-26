import React from 'react';
import './MyReportsPage.css';
import { FaSearch } from 'react-icons/fa';

const MyReports = () => {
  return (
    <div className="my-reports-page">
      <div className="my-reports-header">
        <h2>My Reports</h2>
        <div className="my-search-container">
          <FaSearch className="my-search-icon" />
          <input type="text" placeholder="Search My Reports" />
        </div>
      </div>

      <div className="my-table-container">
        <table className="my-reports-table">
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
              <td colSpan="4" className="my-no-reports">
                No Reports found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReports;
