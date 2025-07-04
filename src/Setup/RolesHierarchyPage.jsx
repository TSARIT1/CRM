import React from 'react';
import './RolesHierarchyPage.css';
import { Plus, Edit2, Trash } from 'lucide-react';

const RolesHierarchyPage = () => {
  return (
    <div className="roles-container">
      <h2 className="roles-title">Roles</h2>
      <p className="roles-subtitle">
        This page will allow you to define how you share the data among users based on your organization's role hierarchy. For more information, refer to online help.
      </p>

      <div className="roles-toolbar">
        <button className="new-role-btn">New Role</button>
        <div className="actions-inline">
          <span>Expand All</span> | <span>Collapse All</span>
        </div>
      </div>

      <div className="role-tree">
        <ul>
          <li>
            <span className="node">📁 Tsar IT</span>
            <ul>
              <li>
                <span className="node">📁 CEO</span>
                <ul>
                  <li className="node-line">
                    <span className="node">📁 Manager</span>
                    <span className="icons">
                      <Plus size={14} />
                      <Edit2 size={14} />
                      <Trash size={14} />
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RolesHierarchyPage;
