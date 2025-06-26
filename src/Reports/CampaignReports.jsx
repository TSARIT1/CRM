import React from 'react';
import './CampaignReports.css';
import { FaSearch } from 'react-icons/fa';

const CampaignReports = () => {
  return (
    <div className="campaign-reports-page">
      <div className="campaign-reports-header">
        <h2>
          Campaign Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Campaign Reports" />
        </div>
      </div>

      <div className="campaign-reports-table-wrapper">
        <table className="campaign-reports-table">
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
              <td colSpan="3" className="no-campaign-reports">
                No Reports Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignReports;
