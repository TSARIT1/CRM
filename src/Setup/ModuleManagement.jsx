import React, { useState } from 'react';
import './ModuleManagement.css';
import {
  FaUserTie, FaUser, FaBuilding, FaBriefcase, FaTasks,
  FaCalendarAlt, FaPhone, FaChartBar, FaNewspaper,
  FaBullhorn, FaFolder, FaWalking
} from 'react-icons/fa';

const initialModules = [
  { name: 'Leads', icon: <FaUserTie />, tabName: 'Leads', sharedTo: 'All Profiles', status: true },
  { name: 'Contacts', icon: <FaUser />, tabName: 'Contacts', sharedTo: 'All Profiles', status: true },
  { name: 'Accounts', icon: <FaBuilding />, tabName: 'Accounts', sharedTo: 'All Profiles', status: true },
  { name: 'Deals', icon: <FaBriefcase />, tabName: 'Deals', sharedTo: 'All Profiles', status: true },
  { name: 'Tasks', icon: <FaTasks />, tabName: 'Tasks', sharedTo: 'All Profiles', status: true },
  { name: 'Meetings', icon: <FaCalendarAlt />, tabName: 'Meetings', sharedTo: 'All Profiles', status: true },
  { name: 'Calls', icon: <FaPhone />, tabName: 'Calls', sharedTo: 'All Profiles', status: true },
  { name: 'Reports', icon: <FaChartBar />, tabName: 'Reports', sharedTo: 'All Profiles', status: true },
  { name: 'Feeds', icon: <FaNewspaper />, tabName: 'Feeds', sharedTo: 'All Profiles', status: true },
  { name: 'Campaigns', icon: <FaBullhorn />, tabName: 'Campaigns', sharedTo: 'All Profiles', status: true },
  { name: 'Documents', icon: <FaFolder />, tabName: 'Documents', sharedTo: 'All Profiles', status: true },
  { name: 'Visits', icon: <FaWalking />, tabName: 'Visits', sharedTo: '1 Profile', status: false }
];

const ModuleManagementPage = () => {
  const [modules, setModules] = useState(initialModules);

  const toggleStatus = (index) => {
    const updated = [...modules];
    updated[index].status = !updated[index].status;
    setModules(updated);
  };

  return (
    <div className="module-management-container">
      <div className="module-header">
        <h2>Modules</h2>
        <button className="create-btn">Create New Module</button>
      </div>

      <div className="module-search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="module-table">
        <div className="table-header">
          <div>Displayed In Tabs As</div>
          <div>Module Name</div>
          <div>Shared To</div>
          <div>Status</div>
        </div>

        {modules.map((mod, index) => (
          <div className="table-row" key={index}>
            <div className="tab-name">
              <span className="icon">{mod.icon}</span>
              <span className="link">{mod.tabName}</span>
            </div>
            <div>{mod.name}</div>
            <div className="shared-to">{mod.sharedTo}</div>
            <div onClick={() => toggleStatus(index)} className="toggle-wrapper">
              <div className={`toggle-switch ${mod.status ? 'on' : 'off'}`}>
                <div className="toggle-ball" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleManagementPage;



