import React from 'react';
import './VendorReports.css';
import { FaSearch } from 'react-icons/fa';

const VendorReports = () => {
  return (
    <div className="vendor-reports-page">
      <div className="vendor-reports-header">
        <h2>
          Vendor Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Vendor Reports" />
        </div>
      </div>

      <div className="vendor-reports-table-wrapper">
        <table className="vendor-reports-table">
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
              <td colSpan="3" className="no-vendor-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorReports;
