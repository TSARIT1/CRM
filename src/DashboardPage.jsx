import React, { useState } from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('CRM');
  const [searchVisible, setSearchVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showInviteBox, setShowInviteBox] = useState(false);

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);
  const toggleSearch = () => setSearchVisible(!searchVisible);
  const toggleDropdown = (item) => {
    if (openDropdown === item) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(item);
      setActiveItem(item);
    }
  };

  const toggleInviteBox = () => setShowInviteBox(!showInviteBox);

  const submenuIcons = {
    Messenger: '💬',
    Feed: '📰',
    Workgroups: '👥',
    Calendar: '📅',
    Collabs: '🤝',
    'Online documents': '📄',
    Drive: '🗂️',
    Webmail: '📧',
    Market: '🛍️',
    'Developer resources': '💻'
  };

  const submenuItems = {
    Collaboration: [
      'Messenger',
      'Feed',
      'Workgroups',
      'Calendar',
      'Collabs',
      'Online documents',
      'Drive',
      'Webmail'
    ],
    Applications: ['Market', 'Developer resources']
  };

  const menuItems = [
    { label: 'CRM', emoji: '🧩' },
    { label: 'Booking', emoji: '📅' },
    { label: 'Inventory management', emoji: '🏠' },
    { label: 'Marketing', emoji: '🔗' },
    { label: 'Sites and stores', emoji: '🛒' },
    { label: 'Tasks and Projects', emoji: '☑️' },
    { label: 'Collaboration', emoji: '🤝', dropdown: true },
    { label: 'BI Builder', emoji: '📊' },
    { label: 'Employees', emoji: '👨‍💼' },
    { label: 'Automation', emoji: '🤖' },
    { label: 'Applications', emoji: '📦', dropdown: true },
    { label: 'e-Signature for HR', emoji: '📝' },
    { label: 'e-Signature', emoji: '✒️' },
    { label: 'Settings', emoji: '⚙️' }
  ];

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${sidebarExpanded ? 'expanded' : ''}`}>
        <div className="sidebar-header">
          <button className="menu-btn" onClick={toggleSidebar}>☰</button>
          {sidebarExpanded && <span className="brand-title">TSAR</span>}
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <React.Fragment key={item.label}>
              <li
                className={`menu-item ${activeItem === item.label ? 'active' : ''}`}
                onClick={() => item.dropdown ? toggleDropdown(item.label) : setActiveItem(item.label)}
                title={!sidebarExpanded ? item.label : ''}
              >
                <span className="emoji">{item.emoji}</span>
                {sidebarExpanded && <span className="label">{item.label}</span>}
                {sidebarExpanded && item.dropdown && <span className="arrow">▾</span>}
              </li>
              {item.dropdown && openDropdown === item.label && (
                <div className={`submenu-wrapper ${sidebarExpanded ? 'open' : ''}`}>
                  {submenuItems[item.label]?.map((sub) => (
                    <div key={sub} className="submenu-item">
                      <span className="submenu-dot">{submenuIcons[sub]}</span>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <nav className="navbar">
          <ul className="nav-links">
            <li className="active">Deals</li>
            <li>Inventory ▾</li>
            <li>Customers ▾</li>
            <li>Sales ▾</li>
            <li>Analytics ▾</li>
            <li>Smart Process Automation ▾</li>
            <li>More ▾</li>
          </ul>
          <div className="right-nav">
            <div className="search-wrapper">
              <input
                type="text"
                className={`search-input ${searchVisible ? 'visible' : ''}`}
                placeholder="Find people, documents and more"
              />
              <span className="search-icon" onClick={toggleSearch}>🔍</span>
            </div>
            <span className="logo-light">TSAR</span>
            <button className="nav-btn" onClick={toggleInviteBox}>Invite</button>
            <button className="nav-btn green">Buy Now</button>
            <button className="nav-btn">Helpdesk <span className="badge">0</span></button>
            <div className="profile-icon">👤</div>
          </div>
        </nav>

        {/* 🎯 Invite Dropdown */}
        {showInviteBox && (
          <div className="invite-box">
            <div className="invite-header">
              <h4>Invite users</h4>
              <button className="invite-btn">+ Invite</button>
            </div>
            <div className="invite-body">
              <div className="invite-card">
                <div className="icon">🏢</div>
                <div>
                  <h5>Structure</h5>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>
              <div className="invite-card">
                <div className="icon">🧑‍💼</div>
                <div>
                  <h5>Users</h5>
                  <p>Employees: 1</p>
                  <small>Unlimited users</small>
                </div>
              </div>
              <div className="collab-section">
                <h5>Invite to collabs <span className="info">(?)</span></h5>
                <button className="collab-btn">Create a collab</button>
              </div>
              <div className="bottom-user-count">
                <div className="circle">1</div>
                <div className="user-icon">👤</div>
              </div>
            </div>
          </div>
        )}

        <div className="content-body">
          <h2>{activeItem}</h2>
          <p>Welcome to the {activeItem} module.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;












