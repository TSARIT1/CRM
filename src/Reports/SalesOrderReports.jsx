import React from 'react';
import './SalesOrderReports.css';
import { FaSearch } from 'react-icons/fa';

const SalesOrderReports = () => {
  return (
    <div className="salesorder-reports-page">
      <div className="salesorder-reports-header">
        <h2>
          Sales Order Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Sales Order Reports" />
        </div>
      </div>

      <div className="salesorder-reports-table-wrapper">
        <table className="salesorder-reports-table">
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
              <td colSpan="3" className="no-salesorder-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesOrderReports;
