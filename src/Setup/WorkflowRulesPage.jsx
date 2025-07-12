import React, { useState } from 'react';
import './WorkflowRulesPage.css';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const WorkflowRulesPage = () => {
  const [enabled, setEnabled] = useState(true);

  const toggleStatus = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <div className="workflow-page">
      <h2 className="workflow-heading">Workflow Rules</h2>
      <p className="workflow-subheading">
        Workflow rules allow you to perform certain automatic actions on specific records based on filter criteria.
        Workflow automations can send emails, update fields, create records and much more.
      </p>

      <div className="workflow-notice">
        <span className="notice-icon">🔊</span>
        <span className="notice-text">
          <strong>Simply Build Data Processing!</strong> Introducing our Catalyst-powered solution for build CRM Operations,
          automating workflows with serverless functions and simplifying data handling.
        </span>
        <button className="notice-btn">Explore Now</button>
      </div>

      <div className="workflow-buttons">
        <button className="reorder-btn" disabled>Reorder Rules</button>
        <button className="create-rule-btn">Create Rule</button>
      </div>

      <div className="workflow-table">
        <div className="workflow-table-header">
          <div><input type="checkbox" /></div>
          <div>Rule Name</div>
          <div>All Modules</div>
          <div>Execute On</div>
          <div>Actions</div>
          <div>Modified On</div>
          <div>Status</div>
        </div>

        <div className="workflow-table-row">
          <div><input type="checkbox" /></div>
          <div className="rule-name">Big Deal Rule</div>
          <div>Deals</div>
          <div>Create or Edit</div>
          <div>1</div>
          <div>10/06/2025</div>
          <div onClick={toggleStatus} className="toggle-btn">
            {enabled ? (
              <FaToggleOn className="toggle-icon toggle-on" />
            ) : (
              <FaToggleOff className="toggle-icon toggle-off" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowRulesPage;

