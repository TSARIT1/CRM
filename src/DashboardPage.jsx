import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DashboardPage.css';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('CRM');
  const [activeTab, setActiveTab] = useState('Kanban');
  const [searchVisible, setSearchVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showInvitePopup, setShowInvitePopup] = useState(false);
  const [showDealForm, setShowDealForm] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('Indian Rupee');
  const [currencyDropdownVisible, setCurrencyDropdownVisible] = useState(false);
  const [calendarValue, setCalendarValue] = useState(new Date());

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);
  const toggleSearch = () => setSearchVisible(!searchVisible);
  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
    setActiveItem(item);
  };
  const toggleInvitePopup = () => setShowInvitePopup(!showInvitePopup);
  const openDealForm = () => setShowDealForm(true);
  const closeDealForm = () => {
    setShowDealForm(false);
    setCurrencyDropdownVisible(false);
  };

  const submenuIcons = {
    Messenger: '💬', Feed: '📰', Workgroups: '👥', Calendar: '📅',
    Collabs: '🤝', 'Online documents': '📄', Drive: '🗂️', Webmail: '📧',
    Market: '🛍️', 'Developer resources': '💻'
  };

  const submenuItems = {
    Collaboration: ['Messenger', 'Feed', 'Workgroups', 'Calendar', 'Collabs', 'Online documents', 'Drive', 'Webmail'],
    Applications: ['Market', 'Developer resources']
  };

  const menuItems = [
    { label: 'CRM', emoji: '🧩' }, { label: 'Booking', emoji: '📅' }, { label: 'Inventory management', emoji: '🏠' },
    { label: 'Marketing', emoji: '🔗' }, { label: 'Sites and stores', emoji: '🛒' }, { label: 'Tasks and Projects', emoji: '☑️' },
    { label: 'Collaboration', emoji: '🤝', dropdown: true }, { label: 'BI Builder', emoji: '📊' }, { label: 'Employees', emoji: '👨‍💼' },
    { label: 'Automation', emoji: '🤖' }, { label: 'Applications', emoji: '📦', dropdown: true }, { label: 'e-Signature for HR', emoji: '📝' },
    { label: 'e-Signature', emoji: '✒️' }, { label: 'Settings', emoji: '⚙️' }
  ];

  const currencies = ['Indian Rupee', 'US Dollar', 'Euro', 'China Yuan Renminbi', 'Brazilian Real'];

  const kanbanStages = [
    { title: 'New', color: '#1da1f2', amount: 0, button: '+ Quick Deal' },
    { title: 'Create papers', color: '#2bafec', amount: 0 },
    { title: 'Invoice', color: '#34d1bf', amount: 0 },
    { title: 'In progress', color: '#1dd1a1', amount: 0 },
    { title: 'Final invoice', color: '#f39c12', amount: 0 },
    { title: 'Deal lost', color: '#ef5350', amount: 0 },
    { title: 'Analyze failure', color: '#e53935', amount: '+' },
    { title: 'Deal won', color: '#66bb6a', amount: 0 }
  ];

  const activityStages = [
    { title: 'Overdue', color: '#e74c3c', amount: 0, button: '+ Quick Deal' },
    { title: 'Due Today', color: '#f39c12', amount: 0 },
    { title: 'Due This Week', color: '#3498db', amount: 0 },
    { title: 'Due Later', color: '#1abc9c', amount: 0 },
    { title: 'Completed', color: '#2ecc71', amount: 0 }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="main-content">
        <nav className="navbar">
          <ul className="nav-links">
            <li className="active">Deals</li>
            <li>Inventory ▾</li><li>Customers ▾</li><li>Sales ▾</li><li>Analytics ▾</li><li>Smart Process Automation ▾</li><li>More ▾</li>
          </ul>
          <div className="right-nav">
            <div className="search-wrapper">
              <input type="text" className={`search-input ${searchVisible ? 'visible' : ''}`} placeholder="Find people, documents and more" />
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
                <Link to="/CreateDeal">
                <button className="create-btn">Create ▾</button>
               </Link> 
                <button className="filter-btn">General ▾</button>
                <input type="text" className="search-bar short" placeholder="Search" />
              </div>

              <div className="deals-tabs">
                <button className={`tab ${activeTab === 'Kanban' ? 'active' : ''}`} onClick={() => setActiveTab('Kanban')}>Kanban</button>
                <button className={`tab ${activeTab === 'List' ? 'active' : ''}`} onClick={() => setActiveTab('List')}>List</button>
                <button className={`tab ${activeTab === 'Activities' ? 'active' : ''}`} onClick={() => setActiveTab('Activities')}>Activities</button>
                <button className={`tab ${activeTab === 'Calendar' ? 'active' : ''}`} onClick={() => setActiveTab('Calendar')}>Calendar</button>
                <div className="tab-group"><span>0 Inbound</span><span>0 Planned</span><span>More ▾</span></div>
                <div className="right-actions">
                  <button className="automation-btn">⚙️ Automation rules</button>
                  <button className="extensions-btn">Extensions ▾</button>
                </div>
              </div>

              {activeTab === 'Kanban' || activeTab === 'Activities' ? (
                <div className="kanban-scroll-wrapper">
                  <div className="kanban-container">
                    {(activeTab === 'Kanban' ? kanbanStages : activityStages).map((stage, index) => (
                      <div className="kanban-column" key={index}>
                        <div className="kanban-header" style={{ backgroundColor: stage.color }}>
                          {stage.title} (0)
                        </div>
                        <div className="kanban-body">
                          <div className="kanban-amount">Rs. {stage.amount}</div>
                          <button className="kanban-add-btn" onClick={openDealForm}>
                            {stage.button || '+'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeTab === 'List' ? (
                <div className="deals-table-container">
                  <div className="deals-table">
                    <div className="deals-header-row">
                      <span>Deal</span><span>Stage ▾</span><span>Activity</span><span>Client</span>
                      <span>Amount/Currency</span><span>Responsible</span><span>Created</span><span>Customer</span>
                    </div>
                    <div className="deals-empty-state">
                      <div className="empty-icon">📄</div>
                      <div className="empty-text">– No data –</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="calendar-container">
                  <Calendar onChange={setCalendarValue} value={calendarValue} />
                </div>
              )}
            </div>
          ) : (
            <div><h2>{activeItem}</h2><p>Welcome to the {activeItem} module.</p></div>
          )}
        </div>
      </div>

      {/* Invite Popup */}
      {showInvitePopup && (
        <div className="popup-overlay" onClick={toggleInvitePopup}>
          <div className="invite-popup" onClick={(e) => e.stopPropagation()}>
            <div className="invite-header">
              <h3>Invite users</h3><button className="invite-action">+ Invite</button>
            </div>
            <div className="invite-content">
              <div className="invite-box"><div className="icon-box">🏢</div><div><div><strong>Structure</strong></div><button className="small-btn">Edit</button></div></div>
              <div className="invite-box"><div className="icon-box green">👤</div><div><div><strong>Users</strong></div><small>Employees: 0</small><br /><small>Unlimited users</small></div></div>
              <div className="invite-collab"><div>Invite to collabs</div><button className="small-btn">Create a collab</button></div>
              <div className="invite-users-list"><div className="user-circle">0</div><div className="user-icon">👤</div></div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Deal Popup */}
      {showDealForm && (
        <div className="popup-overlay" onClick={closeDealForm}>
          <div className="deal-form-popup" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Deal #" />
            <div className="form-group">
              <input type="text" placeholder="Amount" />
              <div className="dropdown-wrapper">
                <button className="dropdown-toggle" onClick={() => setCurrencyDropdownVisible(!currencyDropdownVisible)}>
                  {selectedCurrency} ▼
                </button>
                {currencyDropdownVisible && (
                  <div className="dropdown-menu">
                    {currencies.map((currency, idx) => (
                      <div key={idx} className="dropdown-item" onClick={() => {
                        setSelectedCurrency(currency);
                        setCurrencyDropdownVisible(false);
                      }}>{currency}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <input type="text" placeholder="Contact name" />
            <a href="#">+ Add participant</a>
            <input type="text" placeholder="Company name" />
            <button className="form-save">Save</button>
            <button className="form-cancel" onClick={closeDealForm}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;



























