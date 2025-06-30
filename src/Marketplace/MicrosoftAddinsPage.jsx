import React, { useState } from 'react';
import './MicrosoftAddinsPage.css';
import { FaEnvelope } from "react-icons/fa"; // email-looking icon
import { FaMicrosoft } from "react-icons/fa"; // Microsoft logo



const MicrosoftAddinsPage = () => {
  const [activeTab, setActiveTab] = useState("Outlook");

  return (
    <div className="microsoft-container">
      <div className="microsoft-tabs">
        <span
          className={activeTab === "Outlook" ? "active" : ""}
          onClick={() => setActiveTab("Outlook")}
        >
          Outlook
        </span>
        <span
          className={activeTab === "Word" ? "active" : ""}
          onClick={() => setActiveTab("Word")}
        >
          Word
        </span>
      </div>

      {activeTab === "Outlook" && (
        <div className="microsoft-content">
          <h2>TSAR CRM Addin for Microsoft Outlook</h2>
          <div className="outlook-card">
            <div className="icon-section">
              <FaEnvelope size={60} color="#0078D4" />


        
            </div>
            <div className="info-section">
              <h3>Outlook</h3>
              <p>Bring your Powerful TSAR CRM System inside your Outlook Mailbox</p>
              <small>TSAR CRM integration with outlook.</small>
              <button>Install Addin from Microsoft AppSource</button>
            </div>
          </div>

          <div className="features">
            <h4>Feature Highlights</h4>
            <ul>
              <li>Bring TSAR CRM context to your emails.</li>
              <li>Manage your leads and contacts from Outlook.</li>
              <li>Add tasks, events, call logs, and notes for effective sales follow-ups.</li>
              <li>Create and close deals instantly from Outlook.</li>
              <li>Addins are available across Desktop and Web platforms.</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "Word" && (
        <div className="microsoft-content">
          <h2>Zoho CRM Addin for Microsoft Word</h2>
          <div className="outlook-card">
            <div className="icon-section">
              <SiMicrosoftword size={64} color="#2b579a" />
            </div>
            <div className="info-section">
              <h3>Word</h3>
              <p>Generate dynamic documents and proposals from Zoho CRM data using Word Addin.</p>
              <small>Work smarter with Zoho CRM + Word integration.</small>
              <button>Install Addin from Microsoft AppSource</button>
            </div>
          </div>

          <div className="features">
            <h4>Feature Highlights</h4>
            <ul>
              <li>Create mail merge documents using CRM data.</li>
              <li>Pull contact, deal, or quote data into a Word template.</li>
              <li>Save and email documents automatically from Word.</li>
              <li>Use from both Word desktop and online editor.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MicrosoftAddinsPage;
