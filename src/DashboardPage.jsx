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


// Module Components
import LeadsModule from './modules/LeadsModule';
import ContactsModule from './modules/ContactsModule';
import AccountsModule from './modules/AccountsModule';
import DealsModule from './modules/DealsModule';
import TasksModule from './modules/TasksModule';
import MeetingsModule from './modules/MeetingsModule';
import CallsModule from './modules/CallsModule';
import ProductsModule from './modules/ProductsModule';
import QuotesModule from './modules/QuotesModule';
import SalesOrdersModule from './modules/SalesOrdersModule';
import PurchaseOrdersModule from './modules/PurchaseOrdersModule';
import InvoicesModule from './modules/InvoicesModule';
import SalesInbox from './modules/SalesInbox';
import CampaignsModule from './modules/CampaignsModule';
import VendorsModule from './modules/VendorsModule';
import CasesModule from './modules/CasesModule';
import PriceBooksModule from './modules/PriceBooksModule';
import SolutionsModule from './modules/SolutionsModule';
import DocumentsModule from './modules/DocumentsModule';


//Reports
import AllReportsPage from './Reports/AllReportsPage';
import  MyReportsPage from "./Reports/MyReportsPage";
import Favorites from './Reports/Favorites';
import RecentlyViewed from './Reports/RecentlyViewed';
import SharedReports from './Reports/SharedReports';
import  ScheduledReports from './Reports/ScheduledReports';
import RecentlyDeleted from './Reports/RecentlyDeleted';
import AccountContactReports from './Reports/AccountContactReports';
import DealReports from './Reports/DealReports';
import LeadReports from './Reports/LeadReports';
import CampaignReports from './Reports/CampaignReports';
import CaseReports from './Reports/CaseReports';
import ProductReports from './Reports/ProductReports';
import VendorReports from './Reports/VendorReports';
import QuoteReports from './Reports/QuoteReports';
import SalesOrderReports from './Reports/SalesOrderReports';
import PurchaseOrderReports from './Reports/PurchaseOrderReports';
import InvoiceReports from './Reports/InvoiceReports';
import SalesMetricsReports from './Reports/SalesMetricsReports';
import EmailReports from './Reports/EmailReports';
import MeetingReports from './Reports/MeetingReports';

//Marketplace

import TSARPage from './Marketplace/TSARPage';
import MicrosoftAddinsPage from './Marketplace/MicrosoftAddinsPage';


//Search

import SearchPopup from './Search/SearchPopup';

//Setup
import SetupSidebar from './Setup/SetupSidebar';
import PersonalSettings from './Setup/PersonalSettings';




const modulesList = [
  { icon: <SiGoogleads style={{ color: "#F59E0B" }} />, label: "Leads" },
  { icon: <RiContactsBookFill style={{ color: "#3B82F6" }} />, label: "Contacts" },
  { icon: <MdManageAccounts style={{ color: "#10B981" }} />, label: "Accounts" },
  { icon: <FaIdeal style={{ color: "#6366F1" }} />, label: "Deals" },
  { icon: <GrTask style={{ color: "#A855F7" }} />, label: "Tasks" },
  { icon: <MdOutlineMeetingRoom style={{ color: "#EC4899" }} />, label: "Meetings" },
  { icon: <IoCall style={{ color: "#2563EB" }} />, label: "Calls" },
  { icon: <MdOutlineProductionQuantityLimits style={{ color: "#E11D48" }} />, label: "Products" },
  { icon: <BsChatSquareQuote style={{ color: "#F43F5E" }} />, label: "Quotes" },
  { icon: <FaBorderStyle style={{ color: "#0EA5E9" }} />, label: "Sales Orders" },
  { icon: <BiPurchaseTagAlt style={{ color: "#22C55E" }} />, label: "Purchase Orders" },
  { icon: <LiaFileInvoiceSolid style={{ color: "#9333EA" }} />, label: "Invoices" },
  { icon: <BsBoxSeamFill style={{ color: "#8B5CF6" }} />, label: "SalesInbox" },
  { icon: <MdOutlineCampaign style={{ color: "#F59E0B" }} />, label: "Campaigns" },
  { icon: <PiOvenDuotone style={{ color: "#10B981" }} />, label: "Vendors" },
  { icon: <RiPriceTag2Line style={{ color: "#D97706" }} />, label: "Price Books" },
  { icon: <IoBriefcaseSharp style={{ color: "#0EA5E9" }} />, label: "Cases" },
  { icon: <AiOutlineSolution style={{ color: "#F43F5E" }} />, label: "Solutions" },
  { icon: <IoDocumentOutline style={{ color: "#3B82F6" }} />, label: "Documents" },
  { icon: <SiFarcaster style={{ color: "#A21CAF" }} />, label: "Forecasts" },
];

const requestReportsList = [
  { label: "All Reports" },
  { label: "My Reports" },
  { label: "Favorites" },
  { label: "Recently Viewed" },
  { label: "Shared Reports" },
  { label: "Scheduled Reports" },
  { label: "Recently Deleted" },
  { label: "Account and Contact Reports" },
  { label: "Deal Reports" },
  { label: "Lead Reports" },
  { label: "Campaign Reports" },
  { label: "Case and Solution Reports" },
  { label: "Product Reports" },
  { label: "Vendor Reports" },
  { label: "Quote Reports" },
  { label: "Sales Order Reports" },
  { label: "Purchase Order Reports" },
  { label: "Invoice Reports" },
  { label: "Sales Metrics Reports" },
  { label: "Email Reports" },
   { label: "Meeting Reports" },
];
const marketplaceItems = [
  { label: "TSAR" },
  { label: "Microsoft" },
];






const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeModule, setActiveModule] = useState("Leads");
  const [activeReports, setActiveReports] = useState("All Reports");
  const [activeMarketplace, setActiveMarketplace] = useState("TSAR");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);
 const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(prev => (prev === menuName ? null : menuName));
  };

  return (
    <div className="dashboard-page">
      <nav className="top-navbar">
        {["Modules", "Reports", "Analytics", "Requests", "Marketplace", "Search", "AddNew", "Home", "Setup", "Profile"].map(tab => (
          <div
                 key={tab}
                 className={activeTab === tab ? "active" : ""}
               onClick={() => {
  if (tab === "Search") {
    setIsSearchOpen(true);
  } else if (tab === "AddNew") {
    setIsAddNewOpen(prev => !prev); 
  } else {
    setActiveTab(tab);
    setIsAddNewOpen(false); // Close dropdown if navigating elsewhere
  }
}}

         ><span className="nav-icon">
               { tab === "Reports" ? <TbReportSearch style={{ color: "#4F46E5" }} /> :
                 tab === "Analytics" ? <IoMdAnalytics style={{ color: "#16A34A" }} /> :
                 tab === "Requests" ? <IoGitPullRequestSharp style={{ color: "#D97706" }} /> :
                 tab === "Marketplace" ? <SiCoinmarketcap style={{ color: "#DB2777" }} /> :
                 tab === "Search" ? <FaSearch style={{ color: "#2563EB" }} /> :
                 tab === "AddNew" ? <MdOutlineAddCircle style={{ color: "#10B981" }} /> :
                 tab === "Home" ? <IoHomeOutline style={{ color: "#9333EA" }} /> :
                 tab === "Setup" ? <MdOutlineWifiProtectedSetup style={{ color: "#F59E0B" }} /> :
                 tab === "Modules" ? <VscFileSubmodule style={{ color: "#3B82F6" }} /> :
                 tab === "Profile" ? <CgProfile style={{ color: "#0EA5E9" }} /> :
                                                                                              ""}
            </span>
            <span className="nav-label">{tab}</span>
            
          </div>
        ))}
      </nav>

      <div className="main-layout">
        {activeTab === "Modules" && (
          <aside className="sidebar">
            {modulesList.map((item, idx) => (
              <div
                key={idx}
                className={`sidebar-item ${activeModule === item.label ? 'active' : ''}`}
                onClick={() => setActiveModule(item.label)}
              >
                {item.icon} {item.label}
              </div>
            ))}
          </aside>
        )}

        {activeTab === "Reports" && (
  <aside className="sidebar">
    {requestReportsList.map((item, idx) => (
      <div
        key={idx}
        className={`sidebar-item ${activeReports === item.label ? 'active' : ''}`}
        onClick={() => setActiveReports(item.label)}>
        {item.label}
      </div>
    ))}
  </aside>
)}
{activeTab === "Marketplace" && (
  <aside className="sidebar">
    <h4 className="sidebar-heading">Integrations</h4>
    {marketplaceItems.map((item, idx) => (
      <div key={idx} 
         className={`sidebar-item ${activeMarketplace === item.label ? 'active' : ''}`}
         onClick={() => setActiveMarketplace(item.label)}
         >
        {item.label}
      </div>
    ))}
  </aside>
)}

{isAddNewOpen && (
  <div className="addnew-dropdown">
    {["Lead", "Contact", "Account", "Deal", "Task", "Meeting", "Call", "Campaign"].map(item => (
      <div
        key={item}
        className="addnew-item"
        onClick={() => {
          setActiveTab("Modules");
          setActiveModule(item + (item === "Lead" ? "s" : "s")); 
          setIsAddNewOpen(false);
        }}
      >
        + {item}
      </div>
    ))}
  </div>
)}
{activeTab === "Setup" && (
  <aside>
    <SetupSidebar />
  </aside>
)}



<div className="main-content">
   
          {activeTab === "Home" && (
            <>
              <div className="welcome-box">
                <div className="icon">🏢</div>
                <h2>Welcome Admin</h2>
              </div>

              <div className="summary-cards">
                <div className="card">My Open Deals <span>0</span></div>
                <div className="card">My Untouched Deals <span>0</span></div>
                <div className="card">My Calls Today <span>0</span></div>
                <div className="card">My Leads <span>0</span></div>
              </div>

              <div className="table-section">
                {["tasks", "meetings", "deals"].map(section => (
                  <div className="table-box" key={section}>
                    <div className="box-actions">
                      <button className="refresh-btn"><FiRefreshCcw /></button>
                      <button className="menu-btn" onClick={() => toggleMenu(section)}>⋮</button>
                      {openMenu === section && (
                        <div className="menu-dropdown">
                          <div>Edit</div>
                          <div>Delete</div>
                          
                        </div>
                      )}
                    </div>
                    <h3>{section === 'tasks' ? "My Open Tasks" :
                        section === 'meetings' ? "My Meetings" :
                        "My Deals Closing This Month"}</h3>
                    <div className="table-scroll">
                      
                      <table>
                        <thead>
                          <tr>
                            {section === "tasks" && <>
                              <th>Subject</th><th>Due Date</th><th>Status</th><th>Priority</th><th>Related To</th><th>Contact Name</th>
                            </>}
                            {section === "meetings" && <>
                              <th>Title</th><th>From</th><th>To</th><th>Related To</th><th>Contact Name</th>
                            </>}
                            {section === "deals" && <>
                              <th>Deal Name</th><th>Amount</th><th>Stage</th><th>Closing Date</th><th>Account Name</th><th>Contact Name</th><th>Deal Owner</th>
                            </>}
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

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
          )}

          {/* Module Switching */}
          {activeTab === "Modules" && activeModule === "Leads" && <LeadsModule />}
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
          {activeTab === "Modules" && activeModule === "Vendors" && <VendorsModule />}
          {activeTab === "Modules" && activeModule === "Cases" && <CasesModule />}
          {activeTab === "Modules" && activeModule === "Price Books" && <PriceBooksModule />}
          {activeTab === "Modules" && activeModule === "Solutions" && <SolutionsModule />}
          {activeTab === "Modules" && activeModule === "Documents" && <DocumentsModule />}
          {/* Reports Switching */}
          {activeTab === "Reports" && activeReports === "All Reports" && <AllReportsPage />}
          {activeTab === "Reports" && activeReports === "My Reports" && <  MyReportsPage />}
          {activeTab === "Reports" && activeReports === "Favorites" && <  Favorites />}
          {activeTab === "Reports" && activeReports === "Recently Viewed" && <  RecentlyViewed />}
          {activeTab === "Reports" && activeReports === "Shared Reports" && <  SharedReports />}
          {activeTab === "Reports" && activeReports === "Scheduled Reports" && <  ScheduledReports />}
          { activeTab === "Reports" && activeReports === "Recently Deleted" && <  RecentlyDeleted />}
          { activeTab === "Reports" && activeReports === "Account and Contact Reports" && <  AccountContactReports />}
          { activeTab === "Reports" && activeReports === "Deal Reports" && <  DealReports />}
          { activeTab === "Reports" && activeReports === "Lead Reports" && <  LeadReports />}
          { activeTab === "Reports" && activeReports === "Campaign Reports" && <  CampaignReports />}
          { activeTab === "Reports" && activeReports === "Case and Solution Reports" && <  CaseReports />}
          { activeTab === "Reports" && activeReports === "Product Reports" && <  ProductReports />}
          { activeTab === "Reports" && activeReports === "Vendor Reports" && <  VendorReports />}
          { activeTab === "Reports" && activeReports === "Quote Reports" && <  QuoteReports />}
          { activeTab === "Reports" && activeReports === "Sales Order Reports" && <  SalesOrderReports />}
          { activeTab === "Reports" && activeReports === "Purchase Order Reports" && <  PurchaseOrderReports />}
          { activeTab === "Reports" && activeReports === "Invoice Reports" && <  InvoiceReports />}
          { activeTab === "Reports" && activeReports === "Sales Metrics Reports" && <  SalesMetricsReports />}
          { activeTab === "Reports" && activeReports === "Email Reports" && <  EmailReports />}
          { activeTab === "Reports" && activeReports === "Meeting Reports" && <   MeetingReports />}
            {/* Marketplace Switching */}
            {activeTab === "Marketplace" && activeMarketplace === "TSAR" && <TSARPage />}
            {activeTab === "Marketplace" && activeMarketplace === "Microsoft" && <MicrosoftAddinsPage />}
            { isSearchOpen && <SearchPopup onClose={() => setIsSearchOpen(false)} />}

              <PersonalSettings />




        </div>
        
      </div>
    </div>
  );
};

export default DashboardPage;




























