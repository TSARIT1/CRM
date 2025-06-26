import React from 'react';
import './CaseReports.css';
import { FaSearch } from 'react-icons/fa';

const CaseReports = () => {
  return (
    <div className="case-reports-page">
      <div className="case-reports-header">
        <h2>
          Case Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Case Reports" />
        </div>
      </div>

      <div className="case-reports-table-wrapper">
        <table className="case-reports-table">
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
              <td colSpan="3" className="no-case-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CaseReports;
