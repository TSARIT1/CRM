import React from 'react';
import './RecentlyViewed.css';
import { FaSearch } from 'react-icons/fa';

const RecentlyViewed = () => {
  return (
    <div className="recently-viewed-page">
      <div className="recently-viewed-header">
        <h2>Recently Viewed</h2>
        <div className="recently-viewed-search-container">
          <FaSearch className="recently-viewed-search-icon" />
          <input type="text" placeholder="Search Recently Viewed" />
        </div>
      </div>

      <div className="recently-viewed-table-container">
        <table className="recently-viewed-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Description</th>
              <th>Folder</th>
              <th>Last Accessed Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="recently-viewed-no-reports">
                No Recently Viewed Reports
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentlyViewed;
