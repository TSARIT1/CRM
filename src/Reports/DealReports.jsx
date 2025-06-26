import React from 'react';
import './DealReports.css';
import { FaSearch } from 'react-icons/fa';

const DealReports = () => {
  return (
    <div className="deal-reports-page">
      <div className="deal-reports-header">
        <h2>
          Deal Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Deal Reports" />
        </div>
      </div>

      <div className="deal-reports-table-wrapper">
        <table className="deal-reports-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
                &nbsp; Report Name
              </th>
              <th>Description</th>
              <th>Last Accessed Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="no-reports-msg">No Reports Found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealReports;
