import React, { useState } from 'react';
import './Module.css';

const CreateTaskModal = ({ onClose }) => {
  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-box">
        <div className="contact-modal-header">
          <h2>Create Task</h2>
          <button className="contact-btn-close" onClick={onClose}>×</button>
        </div>

        <div className="contact-modal-body">
          <h4>Task Information</h4>
          <div className="contact-form-grid">
            <input type="text" placeholder="Task Owner" />
            <input type="text" placeholder="Subject" required />
            <input type="text" placeholder="Contact Name" />
            <input type="text" placeholder="Account Name" />
            <input type="text" placeholder="Status" />
            <input type="text" placeholder="Priority" />
            <input type="date" placeholder="Due Date" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Email" />
          </div>

          <h4>Description Information</h4>
          <textarea placeholder="Description"></textarea>
        </div>

        <div className="contact-modal-footer">
          <button className="btn-primary cancel" onClick={onClose}>Cancel</button>
          <button className="btn-primary save">Save</button>
        </div>
      </div>
    </div>
  );
};

const TasksModule = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);

  return (
    <div className="contact-module">
      <div className="contact-sidebar">
        <div className="contact-filter-title">Filter Tasks by</div>
        <input className="contact-search" placeholder="🔍 Search" />

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>System Defined Filters</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Open Tasks</label></li>
              <li><label><input type="checkbox" /> Completed Tasks</label></li>
              <li><label><input type="checkbox" /> Overdue Tasks</label></li>
            </ul>
          </details>
        </div>

        <div className="contact-filter-group">
          <details open>
            <summary>▾ <strong>Filter By Fields</strong></summary>
            <ul className="contact-filter-list">
              <li><label><input type="checkbox" /> Subject</label></li>
              <li><label><input type="checkbox" /> Due Date</label></li>
              <li><label><input type="checkbox" /> Priority</label></li>
              <li><label><input type="checkbox" /> Status</label></li>
            </ul>
          </details>
        </div>
      </div>

      <div className="contact-table-section">
        <div className="contact-table-header">
          <span>Total Tasks <strong>0</strong></span>
          <div className="contact-actions">
            <select className="contact-dropdown"><option>All Tasks</option></select>
            <button className="btn-primary" onClick={() => setShowTaskModal(true)}>Create Task</button>
            <button className="btn-primary">Actions ⏷</button>
          </div>
        </div>

        <div className="contact-table-scroll">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Related To</th>
                <th>Contact Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  No Tasks found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showTaskModal && <CreateTaskModal onClose={() => setShowTaskModal(false)} />}
    </div>
  );
};

export default TasksModule;
