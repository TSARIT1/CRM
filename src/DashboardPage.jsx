import React, { useState } from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('CRM');
  const [searchVisible, setSearchVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showInvitePopup, setShowInvitePopup] = useState(false);
  const [activeTab, setActiveTab] = useState('List'); // default to List

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);
  const toggleSearch = () => setSearchVisible(!searchVisible);
  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
    setActiveItem(item);
  };
  const toggleInvitePopup = () => setShowInvitePopup(!showInvitePopup);

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
    Collaboration: ['Messenger', 'Feed', 'Workgroups', 'Calendar', 'Collabs', 'Online documents', 'Drive', 'Webmail'],
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
            <button className="nav-btn" onClick={toggleInvitePopup}>Invite</button>
            <button className="nav-btn green">Buy Now</button>
            <button className="nav-btn">Helpdesk <span className="badge">0</span></button>
            <div className="profile-icon">👤</div>
          </div>
        </nav>

        <div className="content-body">
          {activeItem === 'CRM' ? (
            <div className="deals-section">
              <div className="deals-header">
                <button className="create-btn">Create ▾</button>
                <button className="filter-btn">General ▾</button>
                <input
                  type="text"
                  className={`search-bar ${activeTab === 'Kanban' ? 'small' : ''}`}
                  placeholder="Filter and search"
                />
              </div>
              <div className="deals-tabs">
                <button className={`tab ${activeTab === 'Kanban' ? 'active' : ''}`} onClick={() => setActiveTab('Kanban')}>Kanban</button>
                <button className={`tab ${activeTab === 'List' ? 'active' : ''}`} onClick={() => setActiveTab('List')}>List</button>
                <button className={`tab ${activeTab === 'Activities' ? 'active' : ''}`} onClick={() => setActiveTab('Activities')}>Activities</button>
                <button className={`tab ${activeTab === 'Calendar' ? 'active' : ''}`} onClick={() => setActiveTab('Calendar')}>Calendar</button>
                <div className="tab-group">
                  <span>0 Inbound</span>
                  <span>0 Planned</span>
                  <span>More ▾</span>
                </div>
                <div className="right-actions">
                  <button className="automation-btn">⚙️ Automation rules</button>
                  <button className="extensions-btn">Extensions ▾</button>
                </div>
              </div>

              <div className="deals-content">
                {activeTab === 'Kanban' ? (
                  <div className="kanban-view">
                    <div className="kanban-column">📌 Lead</div>
                    <div className="kanban-column">🔄 Contacted</div>
                    <div className="kanban-column">✅ Qualified</div>
                  </div>
                ) : (
                  <div className="deals-table-container">
                    <div className="deals-table">
                      <div className="deals-header-row">
                        <span>Deal</span>
                        <span>Stage ▾</span>
                        <span>Activity</span>
                        <span>Client</span>
                        <span>Amount/Currency</span>
                        <span>Responsible</span>
                        <span>Created</span>
                        <span>Customer</span>
                      </div>
                      <div className="deals-empty-state">
                        <div className="empty-icon">📄</div>
                        <div className="empty-text">– No data –</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <h2>{activeItem}</h2>
              <p>Welcome to the {activeItem} module.</p>
            </div>
          )}
        </div>
      </div>

      {showInvitePopup && (
        <div className="popup-overlay" onClick={toggleInvitePopup}>
          <div className="invite-popup" onClick={(e) => e.stopPropagation()}>
            <div className="invite-header">
              <h3>Invite users</h3>
              <button className="invite-action">+ Invite</button>
            </div>
            <div className="invite-content">
              <div className="invite-box">
                <div className="icon-box">🏢</div>
                <div>
                  <div><strong>Structure</strong></div>
                  <button className="small-btn">Edit</button>
                </div>
              </div>
              <div className="invite-box">
                <div className="icon-box green">👤</div>
                <div>
                  <div><strong>Users</strong></div>
                  <small>Employees: 1</small><br />
                  <small>Unlimited users</small>
                </div>
              </div>
              <div className="invite-collab">
                <div>Invite to collabs</div>
                <button className="small-btn">Create a collab</button>
              </div>
              <div className="invite-users-list">
                <div className="user-circle">1</div>
                <div className="user-icon">👤</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;



















