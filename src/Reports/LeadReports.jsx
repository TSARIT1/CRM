import React from 'react';
import './LeadReports.css';
import { FaSearch } from 'react-icons/fa';

const LeadReports = () => {
  return (
    <div className="lead-reports-page">
      <div className="lead-reports-header">
        <h2>
          Lead Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Lead Reports" />
        </div>
      </div>

      <div className="lead-reports-table-wrapper">
        <table className="lead-reports-table">
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
              <td colSpan="3" className="no-lead-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadReports;
