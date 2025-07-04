import React, { useState } from 'react';
import './UserManagementPage.css';
import { ChevronDown } from 'lucide-react';

const UserManagementPage = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Active Users (3)');
  const [showNewUserDropdown, setShowNewUserDropdown] = useState(false);

  const userList = [
    
  ];

  const filterOptions = ['Active Users', 'Inactive Users', 'Unconfirmed Users', 'Deleted Users'];

  const toggleUserStatus = (index) => {
    const updatedUsers = [...userList];
    updatedUsers[index].active = !updatedUsers[index].active;
  };

  return (
    <div className="user-management-container">
      {/* Tabs */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </div>
        <div
          className={`tab ${activeTab === 'activate' ? 'active' : ''}`}
          onClick={() => setActiveTab('activate')}
        >
          Activate Users
        </div>
      </div>

      {/* Users Tab */}
      {activeTab === 'users' && (
        <>
          <div className="users-header">
            <div className="dropdown-container">
              <button className="filter-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {selectedFilter} <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <ul className="dropdown-list">
                  {filterOptions.map((opt) => (
                    <li key={opt} onClick={() => {
                      setSelectedFilter(opt);
                      setDropdownOpen(false);
                    }}>
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="action-btns">
              <button className="new-user-btn" onClick={() => setShowNewUserDropdown(!showNewUserDropdown)}>
                + New User
              </button>
             {showNewUserDropdown && (
  <div className="import-dropdown">
    <button>Import Users</button>
  </div>
)}

            </div>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>

          <div className="user-list">
            {userList.map((user, idx) => (
              <div className="user-card" key={idx}>
                <div className="avatar">
                  {user.image ? (
                    <img src={user.image} alt={user.name} />
                  ) : (
                    <div className="placeholder-avatar" />
                  )}
                  {user.active !== false && <span className="status-dot" />}
                </div>
                <div className="info">
                  <div className="name">{user.name}</div>
                  <div className="details">
                    {user.role}, {user.profile === 'Super Admin' ? (
                      <span className="super-badge">Super Admin</span>
                    ) : user.profile}
                  </div>
                  <div className="email">{user.email}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Activate Users Tab */}
      {activeTab === 'activate' && (
        <div className="activate-users">
          <h2>Activate Users</h2>
          <p>This page allows you to activate and deactivate users.</p>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Profile</th>
                <th>User Status</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.name}</td>
                  <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                  <td>{user.role}</td>
                  <td>{user.profile}</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={user.active}
                        onChange={() => toggleUserStatus(idx)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;

