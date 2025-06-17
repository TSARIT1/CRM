import React, { useState } from 'react';
import './DashboardPage.css';
import ContactsModule from './modules/ContactsModule';


const modulesList = [
  { icon: "🎯", label: "Leads" },
  { icon: "👥", label: "Contacts" },
  { icon: "🏢", label: "Accounts" },
  { icon: "💼", label: "Deals" },
  { icon: "📅", label: "Tasks" },
  { icon: "📆", label: "Meetings" },
  { icon: "📞", label: "Calls" },
  { icon: "📦", label: "Products" },
  { icon: "💬", label: "Quotes" },
  { icon: "🛒", label: "Sales Orders" },
  { icon: "🧾", label: "Purchase Orders" },
  { icon: "📄", label: "Invoices" },
  { icon: "📥", label: "SalesInbox" },
  { icon: "📣", label: "Campaigns" },
  { icon: "🏷️", label: "Vendors" },
  { icon: "💰", label: "Price Books" },
  { icon: "📂", label: "Cases" },
  { icon: "🧠", label: "Solutions" },
  { icon: "📁", label: "Documents" },
  { icon: "🔮", label: "Forecasts" },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeModule, setActiveModule] = useState("Leads");
  const [openMenu, setOpenMenu] = useState(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
      
 const CreateLeadModal = ({ onClose }) => {
  return (

    
    <div className="modal-overlay">
      <div className="modal-box">
         
        <h2>Create Lead</h2>
         <button className="close-btn" onClick={onClose}>×</button>
        <form className="create-lead-form">
      

      <div className="lead-image-section">
     
        <div className="lead-image-wrapper">
          <div className="lead-avatar"></div>
        </div>
      </div>

      <h3>Lead Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Lead Owner</label>
          <input type="text"  />
        </div>
        <div className="form-group">
          <label>Company <span className="required">*</span></label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <select>
            <option>-None-</option>
            <option>Mr.</option>
            <option>Ms.</option>
          </select>
        </div>
        <div className="form-group">
          <label>Last Name <span className="required">*</span></label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Fax</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Lead Source</label>
          <select><option>-None-</option></select>
        </div>
        <div className="form-group">
          <label>Lead Status</label>
          <select><option>-None-</option></select>
        </div>
        <div className="form-group">
          <label>Industry</label>
          <select><option>-None-</option></select>
        </div>
        <div className="form-group">
          <label>No. of Employees</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label>Annual Revenue</label>
          <input type="text" placeholder="$" />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <select><option>-None-</option></select>
        </div>
       
        <div className="form-group">
          <label>Skype ID</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input type="text" placeholder="@" />
        </div>
      </div>

      <h3>Address Information</h3>
      <div className="form-grid">
        <div className="form-group"><label>Street</label><input type="text" /></div>
        <div className="form-group"><label>City</label><input type="text" /></div>
        <div className="form-group"><label>State</label><input type="text" /></div>
        <div className="form-group"><label>Zip Code</label><input type="text" /></div>
        <div className="form-group"><label>Country</label><input type="text" /></div>
      </div>

      <h3>Description Information</h3>
      <div className="form-group full-width">
        <label>Description</label>
        <textarea rows="3" />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn primary">Save</button>
        <button type="button" className="btn" onClick={onClose}>Cancel</button>
        <button type="button" className="btn">Save and New</button>
      </div>
    </form>
      </div>
    </div>
  );
}; 



  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
   <div className="dashboard-page">
      <nav className="top-navbar">
        {["Modules", "Reports", "Analytics", "Requests", "Marketplace", "Search", "AddNew", "Home", "Setup", "Profile"].map(tab => (
          <div
  key={tab}
  className={activeTab === tab ? "active" : ""}
  onClick={() => setActiveTab(tab)}
>
            {tab === "Modules" ? "📁" :
              tab === "Reports" ? "📊" :
              tab === "Analytics" ? "📈" :
              tab === "Requests" ? "🙋" :
              tab === "Marketplace" ? "🛒" :
              tab === "Search" ? "🔍" :
              tab === "AddNew" ? "➕" :
              tab === "Home" ? "🏠" :
              tab === "Setup" ? "⚙️" :
              "👤"} {tab}
          </div>
        ))}
      </nav>

      <div className="main-layout">
        {activeTab === "Modules" && (
          <aside className="sidebar">
            {modulesList.map((item, idx) => (
              <div
                key={idx}
                className="sidebar-item"
                onClick={() => setActiveModule(item.label)}
              >
                {item.icon} {item.label}
              </div>
            ))}
          </aside>
        )}

        <div className="main-content">
          {activeTab === "Home" ? (
            <>
              {/* Welcome Section */}
              <div className="welcome-box">
                <div className="icon">🏢</div>
                <h2>Welcome Admin</h2>
              </div>

              {/* Summary Cards */}
              <div className="summary-cards">
                <div className="card">My Open Deals <span>0</span></div>
                <div className="card">My Untouched Deals <span>0</span></div>
                <div className="card">My Calls Today <span>0</span></div>
                <div className="card">My Leads <span>0</span></div>
              </div>

              {/* Tables */}
              <div className="table-section">
                {/* Open Tasks */}
                <div className="table-box">
                  <div className="box-actions">
                    <button className="refresh-btn">🔄</button>
                    <button className="menu-btn" onClick={() => toggleMenu('tasks')}>⋮</button>
                    {openMenu === 'tasks' && (
                      <div className="menu-dropdown">
                        <div>Edit</div>
                        <div>Delete</div>
                      </div>
                    )}
                  </div>
                  <h3>My Open Tasks</h3>
                  <div className="table-scroll">
                    <table>
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
                    </table>
                  </div>
                </div>

                {/* Meetings */}
                <div className="table-box">
                  <div className="box-actions">
                    <button className="refresh-btn">🔄</button>
                    <button className="menu-btn" onClick={() => toggleMenu('meetings')}>⋮</button>
                    {openMenu === 'meetings' && (
                      <div className="menu-dropdown">
                        <div>Edit</div>
                        <div>Delete</div>
                      </div>
                    )}
                  </div>
                  <h3>My Meetings</h3>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>From</th>
                          <th>To</th>
                          <th>Related To</th>
                          <th>Contact Name</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>

                {/* Deals Closing */}
                <div className="table-box">
                  <div className="box-actions">
                    <button className="refresh-btn">🔄</button>
                    <button className="menu-btn" onClick={() => toggleMenu('deals')}>⋮</button>
                    {openMenu === 'deals' && (
                      <div className="menu-dropdown">
                        <div>Edit</div>
                        <div>Delete</div>
                      </div>
                    )}
                  </div>
                  <h3>My Deals Closing This Month</h3>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Deal Name</th>
                          <th>Amount</th>
                          <th>Stage</th>
                          <th>Closing Date</th>
                          <th>Account Name</th>
                          <th>Contact Name</th>
                          <th>Deal Owner</th>

                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* Leads box */}
              <div className="leads-box">
                <div className="box-actions">
                  <button className="refresh-btn">🔄</button>
                  <button className="menu-btn" onClick={() => toggleMenu('leads')}>⋮</button>
                  {openMenu === 'leads' && (
                    <div className="menu-dropdown">
                      <div>Edit</div>
                      <div>Delete</div>
                    </div>
                  )}
                </div>
                <h3>Today's Leads</h3>
                <div className="empty-state">
                  <p>No Leads found.</p>
                </div>
              </div>
            </>
          ) : activeTab === "Modules" && activeModule === "Leads" ? (
            <>
              <div className="leads-module">
                <div className="leads-sidebar">
                  <div className="filter-title">Filter Leads by</div>
                  <input className="lead-search" placeholder="🔍 Search" />
                  <div className="filter-group">
                <details open>
                   <summary>▾ <strong>System Defined Filters</strong></summary>
                  <ul className="filter-list">
      <li><label><input type="checkbox" /> Touched Records</label></li>
      <li><label><input type="checkbox" /> Untouched Records</label></li>
      <li><label><input type="checkbox" /> Record Action</label></li>
      <li><label><input type="checkbox" /> Related Records Action</label></li>
      <li><label><input type="checkbox" /> Locked</label></li>
      <li><label><input type="checkbox" /> Latest Email Status</label></li>
      <li><label><input type="checkbox" /> Activities</label></li>
      <li><label><input type="checkbox" /> Campaigns</label></li>
      <li><label><input type="checkbox" /> Cadences</label></li>
               </ul>
               
             </details>
              </div>
                    <div className="filter-group">
                <details open>
                   <summary>▾ <strong>Filter By Fields</strong></summary>
                  <ul className="filter-list">
      <li><label><input type="checkbox" /> Annual Revenue</label></li>
  <li><label><input type="checkbox" /> City</label></li>
  <li><label><input type="checkbox" /> Company</label></li>
  <li><label><input type="checkbox" /> Converted Account</label></li>
  <li><label><input type="checkbox" /> Converted Contact</label></li>
  <li><label><input type="checkbox" /> Converted Deal</label></li>
  <li><label><input type="checkbox" /> Country</label></li>
  <li><label><input type="checkbox" /> Created By</label></li>
  <li><label><input type="checkbox" /> Created Time</label></li>
  <li><label><input type="checkbox" /> Email</label></li>
  <li><label><input type="checkbox" /> Email Opt Out</label></li>
  <li><label><input type="checkbox" /> Fax</label></li>
  <li><label><input type="checkbox" /> First Name</label></li>
  <li><label><input type="checkbox" /> Industry</label></li>
  <li><label><input type="checkbox" /> Last Activity Time</label></li>
  <li><label><input type="checkbox" /> Last Name</label></li>
  <li><label><input type="checkbox" /> Lead Conversion Time</label></li>
  <li><label><input type="checkbox" /> Lead Name</label></li>
  <li><label><input type="checkbox" /> Lead Owner</label></li>
  <li><label><input type="checkbox" /> Unsubscribed Time</label></li>
  <li><label><input type="checkbox" /> Website</label></li>
  <li><label><input type="checkbox" /> Zip Code</label></li>
  <li><label><input type="checkbox" /> Lead Source</label></li>
  <li><label><input type="checkbox" /> Lead Status</label></li>
  <li><label><input type="checkbox" /> Mobile</label></li>
  <li><label><input type="checkbox" /> Modified By</label></li>
  <li><label><input type="checkbox" /> Modified Time</label></li>
  <li><label><input type="checkbox" /> No. of Employees</label></li>
  <li><label><input type="checkbox" /> Phone</label></li>
  <li><label><input type="checkbox" /> Rating</label></li>
  <li><label><input type="checkbox" /> Salutation</label></li>
  <li><label><input type="checkbox" /> Secondary Email</label></li>
  <li><label><input type="checkbox" /> Skype ID</label></li>
  <li><label><input type="checkbox" /> State</label></li>
  <li><label><input type="checkbox" /> Street</label></li>
  <li><label><input type="checkbox" /> Tag</label></li>
  <li><label><input type="checkbox" /> Title</label></li>
  <li><label><input type="checkbox" /> Twitter</label></li>
  <li><label><input type="checkbox" /> Unsubscribed Mode</label></li>
               </ul>
               
             </details>
              </div>
                  
                   <div className="filter-group">
                <details open>
                   <summary>▾ <strong>Filter By Related Modules</strong></summary>
                  <ul className="filter-list">
      <li><label><input type="checkbox" /> Calls</label></li>
      <li><label><input type="checkbox" /> Emails</label></li>
      <li><label><input type="checkbox" /> Invitees (Invited Meetings)</label></li>
      <li><label><input type="checkbox" /> Lead Product Relation (Products)</label></li>
      <li><label><input type="checkbox" /> Meetings</label></li>
      <li><label><input type="checkbox" /> Notes</label></li>
      <li><label><input type="checkbox" /> Tasks</label></li>
      
               </ul>
               
             </details>
              </div>
                </div>

                <div className="leads-table-section">
                  <div className="lead-table-header">
                    <span>Total Records <strong>0</strong></span>
                    <div className="lead-actions">
                      <select className="lead-dropdown"><option>All Locked Leads</option></select>
                     <button className="btn" onClick={() => setShowLeadModal(true)}>Create Lead</button>
                      {showLeadModal && <CreateLeadModal onClose={() => setShowLeadModal(false)} />}


                      <button className="btn">Actions ⏷</button>
                    </div>
                  </div>
            <div className="leads-table-scroll">
  <table className='lead-table'>
    <thead>
      <tr>
        <th>Lead Name</th>
        <th>Company</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Lead Source</th>
        <th>Lead Owner</th>
        <th>Created By</th>
        <th>Industry</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="8" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
          No Leads found.
        </td>
      </tr>
    </tbody>
  </table>
</div>

                </div>
              </div>
            </>
          ) : (
            <>
             
            </>
          )}
          {activeTab === "Modules" && activeModule === "Contacts" && <ContactsModule />}
        </div>
        
      </div>
        
    </div>
   
  );
  
};


export default DashboardPage;
























