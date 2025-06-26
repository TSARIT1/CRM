import React from 'react';
import './Favorites.css';
import { FaSearch } from 'react-icons/fa';

const Favorites = () => {
  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h2>Favorites</h2>
        <div className="favorites-search-container">
          <FaSearch className="favorites-search-icon" />
          <input type="text" placeholder="Search Favorites" />
        </div>
      </div>

      <div className="favorites-table-container">
        <table className="favorites-table">
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
              <td colSpan="4" className="favorites-no-reports">
                No Favorites found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorites;
