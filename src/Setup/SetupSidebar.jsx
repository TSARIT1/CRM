import React, { useState } from 'react';
import './SetupSidebar.css';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import  PersonalSettings from './PersonalSettings';
const setupSections = [
  {
    heading: "General",
    items: ["Personal Settings", "Users", "Company Settings"],
  },
  {
    heading: "Security Control",
    items: ["Profiles", "Roles and Sharing", "Compliance Settings", "Support Access"],
  },
  {
    heading: "Channels",
    items: ["Email", "Notification SMS", "Webforms", "Chat"],
  },
  {
    heading: "Customization",
    items: ["Modules and Fields", "Customize Home page", "Templates"],
  },
  {
    heading: "Automation",
    items: ["Workflow Rules", "Actions"],
  },
  {
    heading: "Data Administration",
    items: ["Import", "Export", "Data Backup", "Remove sample data", "Storage", "Recycle Bin"],
  },
  {
    heading: "Developer Hub",
    items: ["APIs and SDKs", "Catalyst Solutions"],
  },
];



const SetupSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedItem, setSelectedItem] = useState("Personal Settings");

  const toggleSection = (heading) => {
    setExpandedSections(prev => ({
      ...prev,
      [heading]: !prev[heading],
    }));
  };

  return (
    <div className="setup-sidebar">
      <h3 className="setup-title">Setup</h3>
      <input type="text" placeholder="Search" className="setup-search" />
      {setupSections.map((section, idx) => (
        <div key={idx} className="setup-section">
          <div className="setup-heading" onClick={() => toggleSection(section.heading)}>
            {expandedSections[section.heading] ? <IoIosArrowDown /> : <IoIosArrowForward />}
            <strong>{section.heading}</strong>
          </div>
          {expandedSections[section.heading] && (
            <div className="setup-items">
              {section.items.map(item => (
                <div
                  key={item}
                  className={`setup-item ${selectedItem === item ? 'active' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
         
          
        </div>
      ))}
       
      
    </div>
     );
};




export default SetupSidebar;
