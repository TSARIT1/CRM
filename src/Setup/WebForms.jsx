import React, { useState } from 'react';
import './WebForms.css';
import { FaTimes, FaPlus, FaSearch } from 'react-icons/fa';
import { RiRobot2Line } from 'react-icons/ri';

const WebForms = () => {
  const [activeTab, setActiveTab] = useState('webforms');
  const [showFormModal, setShowFormModal] = useState(false);
  const [showRuleModal, setShowRuleModal] = useState(false);
  const [ruleName, setRuleName] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [moduleFilter, setModuleFilter] = useState('All Modules');

  const modules = ['Leads', 'Contacts', 'Accounts', 'Deals'];
  const statuses = ['All Status', 'Active', 'Inactive'];

  const handleCreateRule = () => {
    setShowRuleModal(true);
  };

  const closeModal = () => {
    setShowFormModal(false);
    setShowRuleModal(false);
  };

  return (
    <div className="webforms-container">
      {/* Navigation Tabs */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'webforms' ? 'active' : ''}`}
          onClick={() => setActiveTab('webforms')}
        >
          Webforms
        </button>
        <button 
          className={`tab ${activeTab === 'autoResponse' ? 'active' : ''}`}
          onClick={() => setActiveTab('autoResponse')}
        >
          Auto-Response Rules
        </button>
      </div>

      {/* Webforms Main Content */}
      {activeTab === 'webforms' && (
        <div className="webforms-content">
          <h1>Turn your website visitors into customers</h1>
          <p className="description">
            Create your form to collect different information from the website visitors and push them into your Zoho CRM.
          </p>
          <button 
            className="new-form-btn"
            onClick={() => setShowFormModal(true)}
          >
            <FaPlus /> New Form
          </button>
        </div>
      )}

      {/* Auto-Response Rules Content */}
      {activeTab === 'autoResponse' && (
        <div className="auto-response-content">
          <div className="header-section">
            <div>
              <h1>Auto-Response Rules</h1>
              <p className="description">
                Auto-response rules allow you to specify criteria that select the required email templates to be sent when a record is generated through webforms.
              </p>
            </div>
            <button className="create-rule-btn" onClick={handleCreateRule}>
              <FaPlus /> Create Rule
            </button>
          </div>
          
          <div className="filters">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
            
            <div className="filter-dropdown">
              <select 
                value={moduleFilter}
                onChange={(e) => setModuleFilter(e.target.value)}
              >
                <option value="All Modules">All Modules</option>
                {modules.map(module => (
                  <option key={module} value={module}>{module}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-dropdown">
              <select 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
          
          <table className="rules-table">
            <thead>
              <tr>
                <th>Rule Name</th>
                <th>Module</th>
                <th>Associated Webforms</th>
                <th>Last Modified</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="no-data">
                  No Rules Found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* New Form Modal */}
      {showFormModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            <h2>809/settings/webform</h2>
            
            <div className="form-group">
              <label>Form Name</label>
              <div className="form-section">
                <div className="form-label">Form Name</div>
                <input 
                  type="text" 
                  placeholder="Enter Form Name"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Module</label>
              <div className="form-section">
                <div className="form-label">Select Module</div>
                <select>
                  <option value="">Select Module</option>
                  <option value="leads">Leads</option>
                  <option value="contacts">Contacts</option>
                  <option value="accounts">Accounts</option>
                </select>
              </div>
            </div>
            
            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button className="create-btn">Create</button>
            </div>
          </div>
        </div>
      )}

      {/* Create Rule Modal */}
      {showRuleModal && (
        <div className="modal full-page">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <div className="rule-icon">
              <RiRobot2Line />
            </div>
            
            <h1>Create New Auto-Response Rule</h1>
            
            <div className="form-group">
              <label>Rule name</label>
              <input 
                type="text" 
                placeholder="Enter rule name"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Module</label>
              <select 
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value)}
              >
                <option value="">Choose module</option>
                {modules.map(module => (
                  <option key={module} value={module}>{module}</option>
                ))}
              </select>
            </div>
            
            <div className="divider"></div>
            
            <div className="code-section">
              <div className="code-label">Code: 1.0</div>
            </div>
            
            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button className="next-btn">Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebForms;