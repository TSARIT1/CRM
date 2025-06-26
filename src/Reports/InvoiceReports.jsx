import React from 'react';
import './InvoiceReports.css';
import { FaSearch } from 'react-icons/fa';

const InvoiceReports = () => {
  return (
    <div className="invoice-reports-page">
      <div className="invoice-reports-header">
        <h2>
          Invoice Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Invoice Reports" />
        </div>
      </div>

      <div className="invoice-reports-table-wrapper">
        <table className="invoice-reports-table">
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
              <td colSpan="3" className="no-invoice-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceReports;
