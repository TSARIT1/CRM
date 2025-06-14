// DashboardPage.jsx
import React, { useState } from 'react';
import {
  Folder, BarChart2, PieChart, Edit, Store, Search,
  Settings, Bell, LayoutGrid, RefreshCcw, MoreVertical
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [activeMainIcon, setActiveMainIcon] = useState('Modules');
  const [activeModuleItem, setActiveModuleItem] = useState('Home');

  const mainIcons = [
    { name: 'Modules', icon: Folder },
    { name: 'Reports', icon: BarChart2 },
    { name: 'Analytics', icon: PieChart },
    { name: 'My Requests', icon: Edit },
    { name: 'Marketplace', icon: Store },
    { name: 'Search', icon: Search },
  ];

  const modules = [
    'Home', 'Leads', 'Contacts', 'Accounts', 'Deals', 'Tasks',
    'Meetings', 'Calls', 'Products', 'Quotes', 'Sales Orders',
    'Purchase Orders', 'Invoices', 'SalesInbox', 'Campaigns',
    'Vendors', 'Price Books', 'Cases', 'Solutions', 'Documents',
    'Forecasts'
  ];

  const funnelStages = [
    { label: 'Qualification', route: '/qualification', class: 'segment-1' },
    { label: 'Needs Analysis', route: '/needs-analysis', class: 'segment-2' },
    { label: 'Value Prop', route: '/value-prop', class: 'segment-3' },
    { label: 'Identify DM', route: '/identify-dm', class: 'segment-4' },
    { label: 'Proposal/Quote', route: '/proposal-quote', class: 'segment-5' },
    { label: 'Negotiation', route: '/negotiation', class: 'segment-6' },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-icon-bar custom-scrollbar">
          <div className="sidebar-logo"><Folder size={28} /></div>
          <div className="main-icons">
            {mainIcons.map(item => (
              <div
                key={item.name}
                className={`icon-wrapper ${activeMainIcon === item.name ? 'active' : ''}`}
                onClick={() => setActiveMainIcon(item.name)}
              >
                <item.icon size={24} />
              </div>
            ))}
          </div>
          <div className="bottom-icons">
            <div className="icon-wrapper"><Settings size={24} /></div>
            <div className="icon-wrapper notification"><Bell size={24} /><span /></div>
            <div className="icon-wrapper"><LayoutGrid size={24} /></div>
          </div>
        </div>

        <div className="sidebar-content custom-scrollbar">
          {activeMainIcon === 'Modules' && (
            <>
              <div className="sidebar-header">
                <h3>Modules</h3>
                <button className="add-btn">+</button>
              </div>
              <div className="search-wrapper">
                <input placeholder="Search modules..." />
                <Search size={16} className="search-icon"/>
              </div>
              <ul className="module-list">
                {modules.map(m => (
                  <li
                    key={m}
                    className={activeModuleItem === m ? 'active' : ''}
                    onClick={() => setActiveModuleItem(m)}
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="teamspace">CT CRM Teamspace</div>
      </aside>

      <main className="main-content custom-scrollbar">
        <h2>Welcome TSAR IT</h2>
        <div className="stats-row">
          {['Open Deals', 'Untouched Deals', 'Calls Today', 'My Leads'].map(label => (
            <div key={label} className="stat-box">{label}<span>0</span></div>
          ))}
        </div>

        <div className="widgets-row">
          {['Tasks', 'Meetings'].map(w => (
            <div key={w} className="widget">
              <div className="widget-header">
                <h3>My Open {w}</h3>
                <div className="widget-controls">
                  <button><RefreshCcw size={18} /></button>
                  <button><MoreVertical size={18} /></button>
                </div>
              </div>
              <div className="widget-body">
                <div className="table-heading-row">
                  {['Subject','Status','Priority','Related','Contact'].map(col => (
                    <div key={col}>{col}</div>
                  ))}
                </div>
                <div className="empty-message">No {w.toLowerCase()} found.</div>
              </div>
            </div>
          ))}
        </div>

        <div className="widgets-row">
          <div className="widget leads-widget">
            <div className="widget-header">
              <h3>Today's Leads</h3>
              <div className="widget-controls">
                <button><RefreshCcw size={18} /></button>
                <button><MoreVertical size={18} /></button>
              </div>
            </div>
            <div className="empty-box"><p>No Leads found.</p></div>
          </div>

          <div className="widget funnel-widget">
            <div className="widget-header">
              <h3>My Pipeline Deals By Stage</h3>
              <div className="widget-controls">
                <button><RefreshCcw size={18} /></button>
                <button><MoreVertical size={18} /></button>
              </div>
            </div>
            <div className="funnel">
              {funnelStages.map(stage => (
                <div
                  key={stage.label}
                  className={`funnel-segment ${stage.class}`}
                  onClick={() => navigate(stage.route)}
                >
                  {stage.label}: <span>0</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="widget full-width">
          <div className="widget-header">
            <h3>My Deals Closing This Month</h3>
            <div className="widget-controls">
              <button><RefreshCcw size={18} /></button>
              <button><MoreVertical size={18} /></button>
            </div>
          </div>
          <div className="widget-body">
            <div className="table-heading-row">
              {['Deal Name','Amount','Stage','Account','Contact','Owner'].map(col => (
                <div key={col}>{col}</div>
              ))}
            </div>
            <div className="empty-message">No deals found.</div>
          </div>
        </div>
      </main>
    </div>
  );
}














