import React, { useState } from 'react';
import {
  FaUserCircle,
  FaShieldAlt,
  FaKey,
  FaCog,
  FaCalendarAlt,
  FaUsers,
  FaLock,
  FaArrowLeft
} from 'react-icons/fa';

import './MyAccountPage.css';
import PersonalInformationPag from './acountpage/PersonalInformationPage'; 
import EmailAddressesPage from './acountpage/EmailAddressesPage';
import MobileNumbersPage from './acountpage/MobileNumbersPage';
import PasswordPage from './acountpage/PasswordPage';
import GeoFencingPage from './acountpage/GeoFencingPage';
import AllowedIPPage from './acountpage/AllowedIPPage';
import AppPasswordsPage from './acountpage/AppPasswordsPage';
import DeviceSignInsPage from './acountpage/DeviceSignInsPage'; 
import MFAModesPage from './acountpage/MFAModesPage';
import PreferencesPage from './acountpage/PreferencesPage';
import NotificationsPage from './acountpage/NotificationsPage';
import AuthorizedWebsitesPage from './acountpage/AuthorizedWebsitesPage';
import LinkedAccountsPage from './acountpage/LinkedAccountsPage';
import CloseAccountPage from './acountpage/CloseAccountPage';
import ActiveSessionsPage from './acountpage/ActiveSessionsPage';
import ActivityHistoryPage from './acountpage/ActivityHistoryPage';
import GroupPage from './acountpage/GroupPage';
import DataProcessingAddendum from './acountpage/DataProcessingAddendum';
import ManageContact from './acountpage/ManageContact';



const MyAccountPage = () => {
  const [activeSection, setActiveSection] = useState('profile.personal');
  const [openMenus, setOpenMenus] = useState({
    profile: false,
    security: false,
    mfa: false,
    settings: false,
    sessions: false,
    privacy: false,
  });

  const toggleMenu = (section) => {
    setOpenMenus((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuItems = [
    {
      section: 'profile',
      icon: <FaUserCircle />,
      label: 'Profile',
      subItems: [
        { key: 'personal', label: 'Personal Information' },
        { key: 'email', label: 'Email Address' },
        { key: 'mobile', label: 'Mobile Numbers' },
      ],
    },
    {
      section: 'security',
      icon: <FaShieldAlt />,
      label: 'Security',
      subItems: [
        { key: 'password', label: 'Password' },
        { key: 'geofencing', label: 'Geo-fencing' },
        { key: 'ip', label: 'Allowed IP Address' },
        { key: 'apps', label: 'App Passwords' },
        { key: 'devices', label: 'Device Sign-ins' },
      ],
    },
    {
      section: 'mfa',
      icon: <FaKey />,
      label: 'Multi-Factor Authentication',
      subItems: [{ key: 'modes', label: 'MFA Modes' }],
    },
    {
      section: 'settings',
      icon: <FaCog />,
      label: 'Settings',
      subItems: [
        { key: 'preferences', label: 'Preferences' },
        { key: 'notifications', label: 'Notifications' },
        { key: 'websites', label: 'Authorized Websites' },
        { key: 'linked', label: 'Linked Accounts' },
        { key: 'close', label: 'Close Account' },
      ],
    },
    {
      section: 'sessions',
      icon: <FaCalendarAlt />,
      label: 'Sessions',
      subItems: [
        { key: 'active', label: 'Active Sessions' },
        { key: 'history', label: 'Activity History' },
      ],
    },
    {
      section: 'groups',
      icon: <FaUsers />,
      label: 'Groups',
      subItems: [],
    },
    {
      section: 'privacy',
      icon: <FaLock />,
      label: 'Privacy',
      subItems: [
        { key: 'dpa', label: 'Data Processing Addendum' },
        { key: 'contact', label: 'Manage Your Contact' },
      ],
    },
  ];

  return (
    <div className="account-container">
      <aside className="account-sidebar">
        <div className="account-header">
          
          <span className="header-title">Accounts</span>
        </div>
   


        <ul className="sidebar-menu">
          {menuItems.map(({ section, icon, label, subItems }) => (
            <li key={section} className="menu-group">
              <div
                className={`menu-main ${activeSection.startsWith(section) ? 'active' : ''}`}
                onClick={() =>
                  subItems.length > 0
                    ? toggleMenu(section)
                    : setActiveSection(section)
                }
              >
                <span className="menu-icon">{icon}</span>
                <span>{label}</span>
              </div>

              <div className={`submenu-container ${openMenus[section] ? 'open' : ''}`}>
                {subItems.map(({ key, label }) => (
                  <div
                    key={key}
                    className={`submenu-item ${activeSection === `${section}.${key}` ? 'active-dot' : ''}`}
                    onClick={() => setActiveSection(`${section}.${key}`)}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <main className="account-content">
        <button className="back-button" onClick={() => (window.location.href = '/dashboard')}>
          <FaArrowLeft className="back-icon" /> Back to Dashboard
        </button>

        <div className="section-content">
          
          {/* ✅ Render actual components */}
          {activeSection === 'profile.personal' && <PersonalInformationPag />}
          {activeSection === 'profile.email' && <EmailAddressesPage />}
          {activeSection === 'profile.mobile' && <MobileNumbersPage />}
          {activeSection === 'security.password' && <PasswordPage />}
           {activeSection === 'security.geofencing' && <GeoFencingPage />}
           {activeSection === 'security.ip' && <AllowedIPPage />}
           {activeSection === 'security.apps' && <AppPasswordsPage />}
           {activeSection === 'security.devices' && <DeviceSignInsPage />}
           {activeSection === 'mfa.modes' && <MFAModesPage />}
           {activeSection === 'settings.preferences' && <PreferencesPage />}
           {activeSection === 'settings.notifications' && <NotificationsPage/>}
          {activeSection === 'settings.websites' && <AuthorizedWebsitesPage/>}
          {activeSection === 'settings.linked' && <LinkedAccountsPage/>}
          {activeSection === 'settings.close' && <CloseAccountPage/>}
          {activeSection === 'sessions.active' && <ActiveSessionsPage/>}
          {activeSection === 'sessions.history' && <ActivityHistoryPage/>}
          {activeSection === 'groups' && <GroupPage/>}
          {activeSection === 'privacy.dpa' && <DataProcessingAddendum/>}
          {activeSection === 'privacy.contact' && <ManageContact/>}
        </div>
      </main>
    </div>
  );
};

export default MyAccountPage;





