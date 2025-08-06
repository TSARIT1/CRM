import React, { useState, useEffect } from 'react'; 
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
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import ProfileSidebar from './ProfileSidebar';



//Marketplace

import TSARPage from './Marketplace/TSARPage';
import MicrosoftAddinsPage from './Marketplace/MicrosoftAddinsPage';


//Search

import SearchPopup from './Search/SearchPopup';

//Setup
import PersonalSettings from './Setup/PersonalSettings';
import UserManagementPage from './Setup/UserManagementPage';
import CompanySettingsPage from './Setup/CompanySettingsPage';
import ProfilesPage from './Setup/ProfilesPage';
import RolesHierarchyPage from './Setup/RolesHierarchyPage';
import ComplianceSettings from './Setup/ComplianceSettings';
import SupportAccessPage from './Setup/SupportAccessPage';
import EmailComposeSettings from './Setup/EmailComposeSettings';
import WebForms from './Setup/WebForms';
import NotificationSMSPage from './Setup/NotificationSMSPage';
import Chatpage from './Setup/Chatpage';
import ModuleManagementPage from './Setup/ModuleManagement';
import CustomizeHomePage from './Setup/CustomizeHomePage';
import TemplatesPage from './Setup/TemplatesPage';
import WorkflowRulesPage from './Setup/WorkflowRulesPage';
import ActionPage from './Setup/ActionPage'; 
import ImportPage from './Setup/ImportPage';
import ExportPage from './Setup/ExportPage';
import DataBackupPage from './Setup/DataBackupPage';
import RemoveSampleData from './Setup/RemoveSampleData';
import RecycleBin from './Setup/RecycleBin';





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
    items: ["Import", "Export", "Data Backup", "Remove sample data",  "Recycle Bin"],
  },
  
];





const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeModule, setActiveModule] = useState("Leads");
  const [activeReports, setActiveReports] = useState("All Reports");
  const [activeMarketplace, setActiveMarketplace] = useState("TSAR");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);
 const [openMenu, setOpenMenu] = useState(null);
 const [expandedSections, setExpandedSections] = useState({ General: true });
const [selectedItem, setSelectedItem] = useState("Personal Settings");
const [isProfileOpen, setIsProfileOpen] = useState(false);
const [theme, setTheme] = useState('auto'); // auto, light, dark


useEffect(() => {
  const root = document.documentElement;

  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    // Auto: use system preference
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', systemDark ? 'dark' : 'light');
  }
}, [theme]);



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
  } else if (tab === "Profile") {
    setIsProfileOpen(true);       // open Profile Sidebar
    setIsAddNewOpen(false);       // close AddNew dropdown
    setIsSearchOpen(false);       // close Search popup if open
  } else {
    setActiveTab(tab);            // switch tab
    setIsAddNewOpen(false);       // close AddNew dropdown
    setIsProfileOpen(false);      // close Profile if navigating away
    setIsSearchOpen(false);       // close Search popup if navigating away
  }
}} ><span className="nav-icon">
               { tab === "Reports" ? <TbReportSearch style={{ color: "#4c44e0ff" }} /> :
                 tab === "Analytics" ? <IoMdAnalytics style={{ color: "#19aa4eff" }} /> :
                 tab === "Requests" ? <IoGitPullRequestSharp style={{ color: "#D97706" }} /> :
                 tab === "Marketplace" ? <SiCoinmarketcap style={{ color: "#dc297aff" }} /> :
                 tab === "Search" ? <FaSearch style={{ color: "#2563EB" }} /> :
                 tab === "AddNew" ? <MdOutlineAddCircle style={{ color: "#10B981" }} /> :
                 tab === "Home" ? <IoHomeOutline style={{ color: "#9333EA" }} /> :
                 tab === "Setup" ? <MdOutlineWifiProtectedSetup style={{ color: "#eb9a0eff" }} /> :
                 tab === "Modules" ? <VscFileSubmodule style={{ color: "#3B82F6" }} /> :
                 tab === "Profile" ? <CgProfile style={{ color: "#17aff6ff" }} /> :
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
  <aside className="setup-sidebar">
    <h3 className="setup-title">Setup</h3>
    <input type="text" placeholder="Search" className="setup-search" />
    {setupSections.map((section, idx) => (
      <div key={idx} className="setup-section">
        <div className="setup-heading" onClick={() =>
          setExpandedSections((prev) => ({
            ...prev,
            [section.heading]: !prev[section.heading],
          }))
        }>
          {expandedSections[section.heading] ? <IoIosArrowDown /> : <IoIosArrowForward />}
          <span>{section.heading}</span>
        </div>
        {expandedSections[section.heading] && (
          <div className="setup-items">
            {section.items.map((item) => (
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
  </aside>

)}
{activeTab === "Profile" && (
  <div className="profile-sidebar">
    <h3>Profile Settings</h3>

    <div className="theme-section">
      <h4>Theme Mode</h4>
      <div className="theme-switcher">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("auto")}>Auto</button>
      </div>
    </div>

    
  </div>
)}

<div className="main-content">
   <>
   <div className="profile-overlay" onClick={() => setIsProfileOpen(false)}></div>
    <div className="profile-overlay" onClick={() => setIsProfileOpen(true)} />
    
  </>
{activeTab === "Home" && (
  <div className="home-content">
    {/* Welcome Section */}
    <div className="welcome-box">
      <div className="welcome-icon"><IoHomeOutline /></div>
      <h2>Welcome, Admin</h2>
      <p>Here's a quick overview of your CRM activity</p>
    </div>

    {/* Summary Cards */}
    <div className="summary-cards">
      <div className="card"><h4>My Open Deals</h4><span>0</span></div>
      <div className="card"><h4>My Untouched Deals</h4><span>0</span></div>
      <div className="card"><h4>My Calls Today</h4><span>0</span></div>
      <div className="card"><h4>My Leads</h4><span>0</span></div>
    </div>

    {/* Data Tables */}
    <div className="table-section">
      {["tasks", "meetings", "deals"].map(section => (
        <div className="table-box" key={section}>
          <div className="table-header">
            <h3>
              {section === 'tasks' ? "My Open Tasks" :
               section === 'meetings' ? "My Meetings" :
               "My Deals Closing This Month"}
            </h3>
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
          </div>

          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  {section === "tasks" && (
                    <>
                      <th>Subject</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>Related To</th>
                      <th>Contact Name</th>
                    </>
                  )}
                  {section === "meetings" && (
                    <>
                      <th>Title</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Related To</th>
                      <th>Contact Name</th>
                    </>
                  )}
                  {section === "deals" && (
                    <>
                      <th>Deal Name</th>
                      <th>Amount</th>
                      <th>Stage</th>
                      <th>Closing Date</th>
                      <th>Account Name</th>
                      <th>Contact Name</th>
                      <th>Deal Owner</th>
                    </>
                  )}
                </tr>
              </thead>
            </table>
          </div>
        </div>
      ))}
    </div>

    {/* Today's Leads Box */}
    <div className="leads-box">
      <div className="box-header">
        <h3>Today's Leads</h3>
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
      </div>
      <div className="empty-state">
        <p>No Leads found.</p>
      </div>
    </div>
  </div>
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

            {/* SetUp*/}
            {activeTab === "Setup" && selectedItem === "Personal Settings" && <PersonalSettings />}
            {activeTab === "Setup" && selectedItem === "Users" && <UserManagementPage/>}
            {activeTab === "Setup" && selectedItem === "Company Settings" && <CompanySettingsPage/>}
            {activeTab === "Setup" && selectedItem === "Profiles" && <ProfilesPage/>}
            {activeTab === "Setup" && selectedItem === "Roles and Sharing" && <RolesHierarchyPage/>}
            {activeTab === "Setup" && selectedItem === "Compliance Settings" && <ComplianceSettings/>}
            {activeTab === "Setup" && selectedItem === "Support Access" && <SupportAccessPage/>}
            {activeTab === "Setup" && selectedItem === "Email" && <EmailComposeSettings/>}
            {activeTab === "Setup" && selectedItem === "Webforms" && <WebForms/>}
            {activeTab === "Setup" && selectedItem === "Notification SMS" && <NotificationSMSPage/>}
            {activeTab === "Setup" && selectedItem === "Chat" && <Chatpage/>}
            {activeTab === "Setup" && selectedItem === "Modules and Fields" && <ModuleManagementPage/>}
            {activeTab === "Setup" && selectedItem === "Customize Home page" && <CustomizeHomePage/>}
            {activeTab === "Setup" && selectedItem === "Templates" && <TemplatesPage/>}
            {activeTab === "Setup" && selectedItem === "Workflow Rules" && <WorkflowRulesPage/>}
            {activeTab === "Setup" && selectedItem === "Actions" && <ActionPage/>}
            {activeTab === "Setup" && selectedItem === "Import" && <ImportPage/>}
            {activeTab === "Setup" && selectedItem === "Export" && <ExportPage/>}
            {activeTab === "Setup" && selectedItem === "Data Backup" && <DataBackupPage/>}
            {activeTab === "Setup" && selectedItem === "Remove sample data" && <RemoveSampleData/>}
            {activeTab === "Setup" && selectedItem === "Recycle Bin" && <RecycleBin/>}
            {isProfileOpen && <ProfileSidebar onClose={() => setIsProfileOpen(false)} />}
            







        </div>
        
      </div>
    </div>
  );
};

export default DashboardPage;


