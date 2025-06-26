import React from 'react';
import './ProductReports.css';
import { FaSearch } from 'react-icons/fa';

const ProductReports = () => {
  return (
    <div className="product-reports-page">
      <div className="product-reports-header">
        <h2>
          Product Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Product Reports" />
        </div>
      </div>

      <div className="product-reports-table-wrapper">
        <table className="product-reports-table">
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
              <td colSpan="3" className="no-product-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReports;
