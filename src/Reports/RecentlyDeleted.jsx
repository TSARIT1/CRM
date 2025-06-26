import React from 'react';
import './RecentlyDeleted.css';

const RecentlyDeleted = () => {
  return (
    <div className="recently-deleted-page">
      <div className="recently-deleted-header">
        <h2>Recently Deleted</h2>
        <p className="deletion-note">
          (Reports that have been in recently deleted for more than 30 days will be permanently deleted)
        </p>
      </div>

      <div className="deleted-table-wrapper">
        <table className="deleted-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Description</th>
              <th>Folder</th>
              <th>Days Remaining Before Permanent Deletion</th>
              <th>Deleted Time</th>
              <th>Deleted By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="no-deleted-reports">
                No Reports found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentlyDeleted;
