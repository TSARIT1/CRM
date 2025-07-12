import React, { useState } from 'react';
import './ImportPage.css';
import {
  FaSalesforce,
  FaMicrosoft,
  FaHubspot,
  FaBuilding,
  FaUserFriends,
  FaFilter,
  FaUserCircle,
  FaCircleNotch,
  FaUserCog,
  FaServer,
  FaIndustry,
} from 'react-icons/fa';

const crmList = [
  { name: 'Salesforce', icon: <FaSalesforce className="icon salesforce" /> },
  { name: 'Zoho CRM', icon: <FaUserCog className="icon zoho" /> },
  { name: 'Microsoft Dynamics 365', icon: <FaMicrosoft className="icon microsoft" /> },
  { name: 'Sugar', icon: <FaServer className="icon sugar" /> },
  { name: 'Act', icon: <FaCircleNotch className="icon act" /> },
  { name: 'Pipedrive', icon: <FaUserCircle className="icon pipedrive" /> },
  { name: 'Capsule', icon: <FaUserFriends className="icon capsule" /> },
  { name: 'HubSpot', icon: <FaHubspot className="icon hubspot" /> },
  { name: 'Insightly', icon: <FaIndustry className="icon insightly" /> },
  { name: 'Highrise', icon: <FaBuilding className="icon highrise" /> },
  { name: 'Maximizer CRM', icon: <FaBuilding className="icon maximizer" /> },
  { name: 'Bitrix', icon: <FaFilter className="icon bitrix" /> },
  { name: 'Bigin', icon: <FaUserFriends className="icon bigin" /> },
  { name: 'Other CRM', icon: <FaUserFriends className="icon other" /> },
];

const ImportPage = () => {
  const [activeTab, setActiveTab] = useState('Import');

  return (
    <div className="import-container">
      <div className="import-tabs">
        <div
          className={`tab ${activeTab === 'Import' ? 'active' : ''}`}
          onClick={() => setActiveTab('Import')}
        >
          Import
        </div>
        <div
          className={`tab ${activeTab === 'Import History' ? 'active' : ''}`}
          onClick={() => setActiveTab('Import History')}
        >
          Import History
        </div>
      </div>

      {activeTab === 'Import' && (
        <>
          <p className="import-info">
            Easily import records from your existing CRM with our migration tools. Select your existing CRM below to get started.
          </p>

          <div className="crm-grid">
            {crmList.map((crm, index) => (
              <div className="crm-box" key={index}>
                <div className="crm-icon">{crm.icon}</div>
                <div className="crm-label">{crm.name}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImportPage;


