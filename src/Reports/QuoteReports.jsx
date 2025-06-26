import React from 'react';
import './QuoteReports.css';
import { FaSearch } from 'react-icons/fa';

const QuoteReports = () => {
  return (
    <div className="quote-reports-page">
      <div className="quote-reports-header">
        <h2>
          Quote Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Quote Reports" />
        </div>
      </div>

      <div className="quote-reports-table-wrapper">
        <table className="quote-reports-table">
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
              <td colSpan="3" className="no-quote-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuoteReports;