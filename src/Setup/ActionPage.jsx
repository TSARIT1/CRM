import React, { useState } from 'react';
import './ActionPage.css';

const ActionPage = () => {
  // State for modals and form data
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  
  const [emailData, setEmailData] = useState({
    name: '',
    module: 'Leads',
    to: '',
    emailTemplate: '',
    massEmail: false
  });
  
  const [taskData, setTaskData] = useState({
    module: 'Leads',
    subject: '',
    dueDate: 'Trigger Date',
    days: 1,
    status: 'Not Started',
    priority: 'High',
    owner: 'None',
    notifyAssignee: false,
    reminder: false,
    description: ''
  });

  // Handler functions
  const handleEmailInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmailData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTaskInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTaskData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email Notification Submitted:', emailData);
    setShowEmailModal(false);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    console.log('Task Submitted:', taskData);
    setShowTaskModal(false);
  };

  // Sample data
  const emailNotifications = [
    { name: 'Big Deal Alert', recipients: 1, module: 'Deals', template: 'Big Deal Alert', modified: '10/06/2025' }
  ];

  const tasks = [
    { subject: 'Reminder task f...', module: 'Tasks', dueDate: 'Reminder minus 1 day(s)', 
      priority: 'Highest', status: 'Waiting for in...', modified: '10/06/2025' },
    { subject: 'Reminder for d...', module: 'Tasks', dueDate: 'Reminder minus 1 day(s)', 
      priority: 'Highest', status: 'Deferred', modified: '10/06/2025' },
    { subject: 'Recontact: $f!...', module: 'Leads', dueDate: 'Trigger Date plus 1 da...', 
      priority: 'Highest', status: 'Not Started', modified: '10/06/2025' },
    { subject: 'Task to re-attem...', module: 'Leads', dueDate: 'Trigger Date plus 1 da...', 
      priority: 'Highest', status: 'Not Started', modified: '10/06/2025' },
    { subject: 'Follow up - $(l.e...', module: 'Leads', dueDate: 'Trigger Date plus 2 da...', 
      priority: 'Highest', status: 'Waiting for in...', modified: '10/06/2025' }
  ];

  return (
    <div className="action-dashboard">
      {/* Email Notifications Section */}
      <section className="action-email-section">
        <h2 className="action-section-title">Email Notifications</h2>
        <p className="action-section-description">Email notifications let users know a particular event has occurred.</p>
        
        <div className="action-section-header">
          <h3 className="action-subsection-title">Usage</h3>
          <button 
            className="action-create-btn"
            onClick={() => setShowEmailModal(true)}
          >
            Create Email Notification
          </button>
        </div>
        
        <div className="action-table-container">
          <table className="action-email-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>No. Of Recipients</th>
                <th>All Modules <span className="action-dropdown-arrow">▼</span></th>
                <th>Email Template</th>
                <th>Modified On <span className="action-dropdown-arrow">▼</span></th>
              </tr>
            </thead>
            <tbody>
              {emailNotifications.map((notification, index) => (
                <tr key={index}>
                  <td>{notification.name}</td>
                  <td>{notification.recipients}</td>
                  <td>{notification.module}</td>
                  <td>{notification.template}</td>
                  <td>{notification.modified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tasks Section */}
      <section className="action-tasks-section">
        <h2 className="action-section-title">Tasks</h2>
        <p className="action-section-description">These are tasks assigned to users when Workflow Rules, Blueprints, or Approval Processes are executed.</p>
        
       
        
        <div className="action-section-header">
          <button 
            className="action-create-btn"
            onClick={() => setShowTaskModal(true)}
          >
            Create Task
          </button>
        </div>
        
        <div className="action-table-container">
          <table className="action-tasks-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Module</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Modified On</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.subject}</td>
                  <td>{task.module}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>{task.modified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Email Notification Modal */}
      {showEmailModal && (
        <div className="action-modal-overlay">
          <div className="action-modal">
            <h2 className="action-modal-title">Create Email Notification</h2>
            <form onSubmit={handleEmailSubmit} className="action-form">
              <div className="action-form-group">
                <label htmlFor="name" className="action-form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={emailData.name}
                  onChange={handleEmailInputChange}
                  className="action-form-input"
                  required
                />
              </div>
              
              <div className="action-form-group">
                <label htmlFor="module" className="action-form-label">Module</label>
                <select
                  id="module"
                  name="module"
                  value={emailData.module}
                  onChange={handleEmailInputChange}
                  className="action-form-select"
                >
                  <option value="Leads">Leads</option>
                  <option value="Deals">Deals</option>
                  <option value="Contacts">Contacts</option>
                </select>
              </div>
              
              <div className="action-form-group">
                <label htmlFor="to" className="action-form-label">To</label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={emailData.to}
                  onChange={handleEmailInputChange}
                  className="action-form-input"
                  placeholder="Choose Users, Groups, Roles etc."
                  required
                />
                <p className="action-edition-note">
                  *Sending email notifications to customers by choosing the email address field is available only in the Standard and above editions.
                </p>
              </div>
              
              <div className="action-form-checkbox-group">
                <input
                  type="checkbox"
                  id="massEmail"
                  name="massEmail"
                  checked={emailData.massEmail}
                  onChange={handleEmailInputChange}
                  className="action-form-checkbox"
                />
                <label htmlFor="massEmail" className="action-form-checkbox-label">
                  Send this notification as a Single Mass Email with all recipients displayed
                </label>
              </div>
              
              <div className="action-form-group">
                <label htmlFor="emailTemplate" className="action-form-label">Email Template</label>
                <select
                  id="emailTemplate"
                  name="emailTemplate"
                  value={emailData.emailTemplate}
                  onChange={handleEmailInputChange}
                  className="action-form-select"
                  required
                >
                  <option value="">Select Template</option>
                  <option value="Big Deal Alert">Big Deal Alert</option>
                  <option value="Follow Up">Follow Up</option>
                </select>
              </div>
              
              <div className="action-form-actions">
                <button type="submit" className="action-save-btn">Save</button>
                <button 
                  type="button" 
                  className="action-cancel-btn"
                  onClick={() => setShowEmailModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Task Creation Modal */}
      {showTaskModal && (
        <div className="action-modal-overlay">
          <div className="action-modal">
            <h2 className="action-modal-title">Create Task</h2>
            <form onSubmit={handleTaskSubmit} className="action-form">
              <div className="action-form-group">
                <label htmlFor="taskModule" className="action-form-label">Module</label>
                <select
                  id="taskModule"
                  name="module"
                  value={taskData.module}
                  onChange={handleTaskInputChange}
                  className="action-form-select"
                >
                  <option value="Leads">Leads</option>
                  <option value="Deals">Deals</option>
                  <option value="Contacts">Contacts</option>
                </select>
              </div>
              
              <div className="action-form-group">
                <label htmlFor="subject" className="action-form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={taskData.subject}
                  onChange={handleTaskInputChange}
                  className="action-form-input"
                  required
                />
              </div>
              
              <div className="action-form-date-group">
                <label htmlFor="dueDate" className="action-form-label">Due Date</label>
                <div className="action-date-inputs">
                  <select
                    id="dueDate"
                    name="dueDate"
                    value={taskData.dueDate}
                    onChange={handleTaskInputChange}
                    className="action-form-select"
                  >
                    <option value="Trigger Date">Trigger Date</option>
                    <option value="Created Date">Created Date</option>
                  </select>
                  <span className="action-date-text">plus</span>
                  <input
                    type="number"
                    name="days"
                    value={taskData.days}
                    onChange={handleTaskInputChange}
                    className="action-form-input action-date-input"
                    min="1"
                  />
                  <span className="action-date-text">day(s)</span>
                </div>
              </div>
              
              <div className="action-form-group">
                <label htmlFor="status" className="action-form-label">Status</label>
                <select
                  id="status"
                  name="status"
                  value={taskData.status}
                  onChange={handleTaskInputChange}
                  className="action-form-select"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Waiting for input">Waiting for input</option>
                  <option value="Deferred">Deferred</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              
              <div className="action-form-group">
                <label htmlFor="priority" className="action-form-label">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={taskData.priority}
                  onChange={handleTaskInputChange}
                  className="action-form-select"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              
              <div className="action-form-group">
                <label htmlFor="owner" className="action-form-label">Task Owner 1</label>
                <select
                  id="owner"
                  name="owner"
                  value={taskData.owner}
                  onChange={handleTaskInputChange}
                  className="action-form-select"
                >
                  <option value="None">None</option>
                  <option value="Current User">Current User</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
              
              <div className="action-form-checkbox-group">
                <input
                  type="checkbox"
                  id="notifyAssignee"
                  name="notifyAssignee"
                  checked={taskData.notifyAssignee}
                  onChange={handleTaskInputChange}
                  className="action-form-checkbox"
                />
                <label htmlFor="notifyAssignee" className="action-form-checkbox-label">Notify Assignee 1</label>
              </div>
              
              <div className="action-form-checkbox-group">
                <input
                  type="checkbox"
                  id="reminder"
                  name="reminder"
                  checked={taskData.reminder}
                  onChange={handleTaskInputChange}
                  className="action-form-checkbox"
                />
                <label htmlFor="reminder" className="action-form-checkbox-label">Reminder</label>
              </div>
              
              <div className="action-form-group">
                <label htmlFor="description" className="action-form-label">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={taskData.description}
                  onChange={handleTaskInputChange}
                  className="action-form-textarea"
                  rows="4"
                />
              </div>
              
              <div className="action-form-actions">
                <button type="submit" className="action-save-btn">Save</button>
                <button 
                  type="button" 
                  className="action-cancel-btn"
                  onClick={() => setShowTaskModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionPage;