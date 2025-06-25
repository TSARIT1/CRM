import React, { useState } from 'react';
import './DocumentsModule.css';
import { FiChevronRight } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';

const DocumentsModule = () => {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showLabelMenu, setShowLabelMenu] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);

  return (
    <div className="documents-wrapper">
      <div className="documents-sidebar">
        <div className="sidebar-header">📁 My Folders</div>
        <div className="team-folder">
          <span>TEAM FOLDERS</span>
          <IoMdAdd className="plus-icon" onClick={() => setShowTeamDropdown(!showTeamDropdown)} />
          {showTeamDropdown && (
            <div className="dropdown team-dropdown">
              <div>Create Team Folder</div>
              <div>Associate Team Folder</div>
            </div>
          )}
        </div>
        <button className="open-drive">Open WorkDrive ↗</button>
      </div>

      <div className="documents-content">
        <div className="breadcrumb">
          <span>Apps &gt;</span>
          <span className="zoho-crm-btn" onClick={() => setShowMainMenu(!showMainMenu)}> TSAR CRM ▾ </span>
          {showMainMenu && (
            <div className="dropdown main-menu">
              <div>Copy Permalink</div>
              <div>Copy To…</div>
              <div
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                Organize <FiChevronRight className="right-arrow" />
                {showSubMenu && (
                  <div className="dropdown submenu">
                    <div>Add to Favorites</div>
                    <div
                      onMouseEnter={() => setShowLabelMenu(true)}
                      onMouseLeave={() => setShowLabelMenu(false)}
                    >
                      Label As <FiChevronRight className="right-arrow" />
                      {showLabelMenu && (
                        <div className="dropdown labelmenu">
                          <input type="text" placeholder="Search" />
                          <p>No labels available</p>
                          <div className="create-label">Create label</div>
                        </div>
                      )}
                    </div>
                    <div>Create shortcut</div>
                  </div>
                )}
              </div>
              <div>Properties</div>
              <div>Download</div>
              <div>More options</div>
            </div>
          )}
        </div>

        <div className="empty-state">
          <div className="empty-img" />
          <p>No items available.</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentsModule;


