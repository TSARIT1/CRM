import React from 'react';
import './PurchaseOrderReports.css';
import { FaSearch } from 'react-icons/fa';

const PurchaseOrderReports = () => {
  return (
    <div className="purchaseorder-reports-page">
      <div className="purchaseorder-reports-header">
        <h2>
          Purchase Order Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Purchase Order Reports" />
        </div>
      </div>

      <div className="purchaseorder-reports-table-wrapper">
        <table className="purchaseorder-reports-table">
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
              <td colSpan="3" className="no-purchaseorder-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseOrderReports;
