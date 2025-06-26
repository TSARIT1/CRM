import React from 'react';
import './SalesMetricsReports.css';
import { FaSearch } from 'react-icons/fa';

const SalesMetricsReports = () => {
  return (
    <div className="salesmetrics-reports-page">
      <div className="salesmetrics-reports-header">
        <h2>
          Sales Metrics Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Sales Metrics Reports" />
        </div>
      </div>

      <div className="salesmetrics-reports-table-wrapper">
        <table className="salesmetrics-reports-table">
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
              <td colSpan="3" className="no-salesmetrics-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesMetricsReports;
