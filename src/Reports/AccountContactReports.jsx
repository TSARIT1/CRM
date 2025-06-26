import React from 'react';
import './AccountContactReports.css';
import { FaSearch } from 'react-icons/fa';

const reports = [
 
    


    
];

const AccountContactReports = () => {
  return (
    <div className="account-contact-page">
      <div className="account-contact-header">
        <h2>
          Account and Contact Reports <span className="globe-icon">🌐</span>
        </h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Account and Contact Reports" />
        </div>
      </div>

      <div className="account-contact-table-wrapper">
        <table className="account-contact-table">
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
            {reports.map((report, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />{' '}
                  <span className="star">☆</span>{' '}
                  <span className="report-link">{report.name}</span>
                </td>
                <td>{report.description}</td>
                <td>{report.lastAccessed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountContactReports;
