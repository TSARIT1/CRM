import React from 'react';


const ContactsModule = () => {
  return (
    <div className="leads-module">
      <div className="leads-sidebar">
        <div className="filter-title">Filter Contacts by</div>
        <input className="lead-search" placeholder="🔍 Search" />
        <div className="empty-state"><p>No Contacts found.</p></div>
      </div>

      <div className="leads-table-section">
        <div className="lead-table-header">
          <span>Total Records <strong>0</strong></span>
          <div className="lead-actions">
            <button className="btn">Create Contact</button>
            <button className="btn">Actions ⏷</button>
          </div>
        </div>

        <div className="leads-table-scroll">
          <table className="lead-table">
            <thead>
              <tr>
                <th>Contact Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Lead Source</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  No Contacts found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactsModule;
