import React, { useState } from 'react';
import './DashboardPage.css';
import { SiGoogleads } from "react-icons/si";
import { RiContactsBookFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { SiCoinmarketcap } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaIdeal } from "react-icons/fa6";
import ContactsModule from './modules/ContactsModule';
import AccountsModule from './modules/AccountsModule';
import DealsModule from './modules/DealsModule';
import TasksModule from './modules/TasksModule';
import MeetingsModule from './modules/MeetingsModule';
import CallsModule from './modules/CallsModule';
import ProductsModule from './modules/ProductsModule';
import { GrTask } from "react-icons/gr";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsChatSquareQuote } from "react-icons/bs";
import { FaBorderStyle } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdOutlineCampaign } from "react-icons/md";
import { PiOvenDuotone } from "react-icons/pi";
import { RiPriceTag2Line } from "react-icons/ri";
import { IoBriefcaseSharp } from "react-icons/io5";
import { AiOutlineSolution } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { SiFarcaster } from "react-icons/si";
import QuotesModule from './modules/QuotesModule';
import SalesOrdersModule from './modules/SalesOrdersModule';
import PurchaseOrdersModule from './modules/PurchaseOrdersModule';
import InvoicesModule from './modules/InvoicesModule';
import SalesInbox from './modules/SalesInbox';
import CampaignsModule from './modules/CampaignsModule';


const modulesList = [
  { icon:<SiGoogleads />, label: " Leads" },
  { icon: <RiContactsBookFill />, label: "Contacts" },
  { icon: <MdManageAccounts />, label: "Accounts" },
  { icon: < FaIdeal />, label: "Deals" },
  { icon: < GrTask />, label: "Tasks" },
  { icon: < MdOutlineMeetingRoom />, label: "Meetings" },
  { icon: < IoCall />, label: "Calls" },
  { icon: < MdOutlineProductionQuantityLimits />, label: "Products" },
  { icon: < BsChatSquareQuote/>, label: "Quotes" },
  { icon: < FaBorderStyle />, label: "Sales Orders" },
  { icon: < BiPurchaseTagAlt /> , label: "Purchase Orders" },
  { icon: < LiaFileInvoiceSolid /> , label: "Invoices" },
  { icon: < BsBoxSeamFill />, label: "SalesInbox" },
  { icon: < MdOutlineCampaign />, label: "Campaigns" },
  { icon: <PiOvenDuotone />, label: "Vendors" },
  { icon: < RiPriceTag2Line />, label: "Price Books" },
  { icon: < IoBriefcaseSharp/>, label: "Cases" },
  { icon: < AiOutlineSolution />, label: "Solutions" },
  { icon: < IoDocumentOutline />, label: "Documents" },
  { icon: < SiFarcaster />, label: "Forecasts" },
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
>{
              tab === "Reports" ?  < TbReportSearch /> :
              tab === "Analytics" ? < IoMdAnalytics /> :
              tab === "Requests" ? < IoGitPullRequestSharp /> :
              tab === "Marketplace" ? < SiCoinmarketcap /> :
              tab === "Search" ? < FaSearch /> :
              tab === "AddNew" ? < MdOutlineAddCircle /> :
              tab === "Home" ? < IoHomeOutline /> :
              tab === "Setup" ? < MdOutlineWifiProtectedSetup /> :
              tab === "Modules" ?  < VscFileSubmodule /> :
              tab === "Profile" ?  < CgProfile /> :
              ""} {tab}
          </div>
        ))}
      </nav>

      <div className="main-layout">
        {activeTab ===  "Modules" && (
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
                    <button className="refresh-btn"><FiRefreshCcw /></button>
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
                    <button className="refresh-btn"><FiRefreshCcw /></button>
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
                    <button className="refresh-btn"><FiRefreshCcw /></button>
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
                  <button className="refresh-btn"><FiRefreshCcw /></button>
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
                  <input className="lead-search" placeholder=  " 🔍  Search" />
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
          {activeTab === "Modules" && activeModule === "Accounts" && <AccountsModule />}
          {activeTab === "Modules" && activeModule === "Deals" && <DealsModule />}
           {activeTab === "Modules" && activeModule === "Tasks" && <TasksModule />}
            {activeTab === "Modules" && activeModule === "Meetings" && <MeetingsModule />}
          {activeTab === "Modules" && activeModule === "Calls" && <CallsModule />}
            {activeTab === "Modules" && activeModule === "Products" && <ProductsModule />}
           {activeTab === "Modules" && activeModule === "Quotes" && <QuotesModule />}
           {activeTab === "Modules" && activeModule === "Sales Orders" && <SalesOrdersModule />}
           {activeTab === "Modules" && activeModule === "Purchase Orders" && <PurchaseOrdersModule />}
            {activeTab === "Modules" && activeModule === "Invoices" && <InvoicesModule />}
            {activeTab === "Modules" && activeModule === "SalesInbox" && <SalesInbox />}
            {activeTab === "Modules" && activeModule === "Campaigns" && <CampaignsModule />}
        </div>
        
      </div>
        
    </div>
   
  );
  
};


export default DashboardPage;























