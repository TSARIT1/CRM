import React, { useState } from 'react';
import './TemplatesPage.css';
import { FaPlus, FaSearch, FaUserFriends } from 'react-icons/fa';

const TemplatesPage = () => {
  const [activeTab, setActiveTab] = useState('Email');
  const [activeMenu, setActiveMenu] = useState('All Templates');

  return (
    <div className="templates-container">
      <div className="templates-left-panel">
        <button className="new-template-btn"><FaPlus /> New Template</button>
        <div
          className={activeMenu === 'All Templates' ? 'menu-item active' : 'menu-item'}
          onClick={() => setActiveMenu('All Templates')}
        >
          All Templates
        </div>
        <div className="menu-item">Favorites</div>
        <div className="menu-item">Associated Templates</div>
        <div className="menu-item">Created by me</div>
        <div className="menu-item">Shared with me</div>
        <div className="menu-item">
          Public Email Templates <FaUserFriends style={{ fontSize: '0.8rem', marginLeft: 6 }} />
        </div>
      </div>

      <div className="templates-main-content">
        <div className="templates-topbar">
          <div className="tab-buttons">
            <button className={activeTab === 'Email' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('Email')}>Email</button>
            <button className="tab-btn disabled">Inventory</button>
            <button className="tab-btn disabled">Mail Merge</button>
          </div>
          <div className="topbar-right">
            <select className="module-dropdown">
              <option>All Modules</option>
            </select>
            <div className="search-bar">
              <FaSearch />
              <input type="text" placeholder="Search Template" />
            </div>
          </div>
        </div>

        <div className="template-list">
          <div className="list-header">
            <div>Template Name</div>
            <div>Modified By</div>
            <div>Last Used</div>
          </div>

          <div className="list-row">
           
           
            
            <div className="last-used-icon">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
