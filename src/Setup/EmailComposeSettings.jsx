import React, { useState } from 'react';
import { 
  FiMail, FiLink, FiSettings, FiFileText, FiPlus, FiX, FiHelpCircle 
} from 'react-icons/fi';
import { 
  FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaLink, 
  FaImage, FaAlignLeft, FaCheck 
} from 'react-icons/fa';
import './EmailComposeSettings.css';

const EmailConfiguration = () => {
  const [activeTab, setActiveTab] = useState('configuration');
  const [activeSubTab, setActiveSubTab] = useState('email');
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [showDomainModal, setShowDomainModal] = useState(false);
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);
  const [fontFamily, setFontFamily] = useState('Times New Roman');
  const [fontSize, setFontSize] = useState(10);
  const [signatureName, setSignatureName] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [linkName, setLinkName] = useState('');
  const [locationUrl, setLocationUrl] = useState('Standard Page');
  const [unsubscribeAction, setUnsubscribeAction] = useState('Display Message');
  const [domainEmail, setDomainEmail] = useState('');

  const unsubscribeLinks = [
    { name: 'Default', landingUrl: 'Standard Page', actionUrl: 'Display Message', modifiedBy: '' }
  ];

  const domains = [
    { domain: 'tsaritservices.com', emailStatus: 'Not Applicable', authStatus: 'Required' }
  ];

  return (
    <div className="email-config-container">
      {/* Main Tabs */}
      <div className="email-config-tabs">
        <button 
          className={`email-config-tab ${activeTab === 'configuration' ? 'email-tab-active' : ''}`}
          onClick={() => setActiveTab('configuration')}
        >
          <FiSettings className="email-tab-icon" /> Email Configuration
        </button>
        <button 
          className={`email-config-tab ${activeTab === 'deliverability' ? 'email-tab-active' : ''}`}
          onClick={() => setActiveTab('deliverability')}
        >
          <FiMail className="email-tab-icon" /> Email Deliverability
        </button>
        <button 
          className={`email-config-tab ${activeTab === 'unsubscribe' ? 'email-tab-active' : ''}`}
          onClick={() => setActiveTab('unsubscribe')}
        >
          <FiLink className="email-tab-icon" /> Unsubscribe Link
        </button>
        <button 
          className={`email-config-tab ${activeTab === 'compose' ? 'email-tab-active' : ''}`}
          onClick={() => {
            setActiveTab('compose');
            setActiveSubTab('email');
          }}
        >
          <FiFileText className="email-tab-icon" /> Compose
        </button>
      </div>

      <div className="email-config-content">
        {/* Configuration Tab */}
        {activeTab === 'configuration' && (
          <div className="email-config-feature-section">
            <div className="email-feature-card">
              <FiMail className="email-feature-icon" size={48} />
              <h2 className="email-section-title">Configure Email</h2>
              <p className="email-section-description">Connect your email inbox with Zoho CRM and transform the way you do sales.</p>
              
              <div className="email-feature-grid">
                <div className="email-feature-item">
                  <FaCheck className="email-feature-check" />
                  <span>Access your customer emails with holistic CRM information</span>
                </div>
                <div className="email-feature-item">
                  <FaCheck className="email-feature-check" />
                  <span>Send and receive mails from inside CRM records</span>
                </div>
                <div className="email-feature-item">
                  <FaCheck className="email-feature-check" />
                  <span>Synchronize your email inbox with Zoho CRM</span>
                </div>
              </div>
              
              <div className="email-upgrade-notice">
                <p>This feature is supported from professional plan and above</p>
                <button className="email-btn-upgrade">Upgrade</button>
              </div>
            </div>
          </div>
        )}

        {/* Deliverability Tab */}
        {activeTab === 'deliverability' && (
          <div className="email-deliverability-section">
            <h2 className="email-section-title">Email Deliverability</h2>
            <div className="email-info-card">
              <p>
                To improve deliverability of your emails, please ensure that all email-sending domains are authenticated 
                with SPF (Sender Policy Framework) and DKIM (Domain Keys Identified Mail) records, and also have a DMARC 
                status set. <a href="#"><FiHelpCircle /> Learn More</a>
              </p>
              
              <ul className="email-info-list">
                <li>
                  <FaCheck className="email-info-check" />
                  Domains authenticated in other Zoho services will also be considered as authenticated within Zoho CRM.
                </li>
                <li>
                  <FaCheck className="email-info-check" />
                  DMARC records added to domains will be automatically detected once every 48 hours.
                </li>
              </ul>
            </div>
            
            <div className="email-domains-section">
              <h3 className="email-subsection-title">Available domains <span className="email-emoji">😊</span></h3>
              <div className="email-domains-table-container">
                <table className="email-domains-table">
                  <thead>
                    <tr>
                      <th>Domain</th>
                      <th>Email Status</th>
                      <th>Authentication Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {domains.map((domain, index) => (
                      <tr key={index}>
                        <td>{domain.domain}</td>
                        <td>{domain.emailStatus}</td>
                        <td className={domain.authStatus === 'Required' ? 'email-status-required' : ''}>
                          {domain.authStatus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <button 
                className="email-btn-primary"
                onClick={() => setShowDomainModal(true)}
              >
                <FiPlus /> Add domain
              </button>
            </div>

            {/* Add Domain Modal */}
            {showDomainModal && (
              <div className="email-modal-backdrop">
                <div className="email-modal-container">
                  <div className="email-modal-header">
                    <h3>Add domain to authenticate</h3>
                    <button 
                      className="email-btn-close"
                      onClick={() => setShowDomainModal(false)}
                    >
                      <FiX />
                    </button>
                  </div>
                  
                  <div className="email-modal-body">
                    <div className="email-form-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        value={domainEmail}
                        onChange={(e) => setDomainEmail(e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>
                    
                    <div className="email-additional-info-card">
                      <h4>Additional Information</h4>
                      <ul>
                        <li>Identification</li>
                        <li>Authenticate every 48 hours</li>
                      </ul>
                    </div>
                    
                    <div className="email-status-info">
                      <h4>Email Status</h4>
                      <p>Email Address</p>
                    </div>
                  </div>
                  
                  <div className="email-modal-footer">
                    <button 
                      className="email-btn-secondary"
                      onClick={() => setShowDomainModal(false)}
                    >
                      Cancel
                    </button>
                    <button className="email-btn-primary">
                      Add domain
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Unsubscribe Link Tab */}
        {activeTab === 'unsubscribe' && (
          <div className="email-unsubscribe-section">
            <h2 className="email-section-title">Unsubscribe Link</h2>
            <div className="email-info-card">
              <p>
                Unsubscribe links can be created here and added to a template using the Create Link option. 
                HTML code for the Unsubscribe link can be generated here and published on your webpage.
              </p>
            </div>
            
            <div className="email-links-table-container">
              <table className="email-links-table">
                <thead>
                  <tr>
                    <th>Link Name</th>
                    <th>Landing URL</th>
                    <th>Action URL</th>
                    <th>Modified By</th>
                  </tr>
                </thead>
                <tbody>
                  {unsubscribeLinks.map((link, index) => (
                    <tr key={index}>
                      <td>{link.name}</td>
                      <td>{link.landingUrl}</td>
                      <td>{link.actionUrl}</td>
                      <td>{link.modifiedBy || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button 
              className="email-btn-primary"
              onClick={() => setShowUnsubscribeModal(true)}
            >
              <FiPlus /> Create Unsubscribe Link
            </button>

            {/* Create Unsubscribe Link Modal */}
            {showUnsubscribeModal && (
              <div className="email-modal-backdrop">
                <div className="email-modal-container">
                  <div className="email-modal-header">
                    <h3>Create Unsubscribe Link</h3>
                    <button 
                      className="email-btn-close"
                      onClick={() => setShowUnsubscribeModal(false)}
                    >
                      <FiX />
                    </button>
                  </div>
                  
                  <div className="email-modal-body">
                    <div className="email-form-group">
                      <label>Link Name</label>
                      <input 
                        type="text" 
                        value={linkName}
                        onChange={(e) => setLinkName(e.target.value)}
                        placeholder="Enter a value"
                      />
                    </div>
                    
                    <div className="email-form-group">
                      <label>Location URL</label>
                      <select 
                        value={locationUrl}
                        onChange={(e) => setLocationUrl(e.target.value)}
                      >
                        <option>Standard Page</option>
                        <option>Custom Page</option>
                      </select>
                    </div>
                    
                    <div className="email-form-group">
                      <label>Action on unsubscribe</label>
                      <select 
                        value={unsubscribeAction}
                        onChange={(e) => setUnsubscribeAction(e.target.value)}
                      >
                        <option>Display Message</option>
                        <option>Redirect to another URL</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="email-modal-footer">
                    <button 
                      className="email-btn-secondary"
                      onClick={() => setShowUnsubscribeModal(false)}
                    >
                      Cancel
                    </button>
                    <button className="email-btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Compose Tab with Sub-tabs */}
        {activeTab === 'compose' && (
          <div className="email-compose-settings-section">
            {/* Sub Tabs */}
            <div className="email-compose-subtabs">
              <button 
                className={`email-compose-subtab ${activeSubTab === 'email' ? 'email-subtab-active' : ''}`}
                onClick={() => setActiveSubTab('email')}
              >
                Email
              </button>
              <button 
                className={`email-compose-subtab ${activeSubTab === 'org-emails' ? 'email-subtab-active' : ''}`}
                onClick={() => setActiveSubTab('org-emails')}
              >
                Organization Emails
              </button>
              <button 
                className={`email-compose-subtab ${activeSubTab === 'custom-fields' ? 'email-subtab-active' : ''}`}
                onClick={() => setActiveSubTab('custom-fields')}
              >
                Custom Email Fields
              </button>
            </div>

            {/* Email Sub Tab */}
            {activeSubTab === 'email' && (
              <div className="email-compose-settings">
                <h2 className="email-section-title">Compose Settings</h2>
                <p className="email-section-description">Configure basic default email compose settings to personalize your composing experience.</p>
                
                <div className="email-settings-form">
                  <div className="email-form-row">
                    <div className="email-form-group">
                      <label>Default Font Family</label>
                      <select 
                        value={fontFamily} 
                        onChange={(e) => setFontFamily(e.target.value)}
                      >
                        <option>Times New Roman</option>
                        <option>Arial</option>
                        <option>Verdana</option>
                        <option>Georgia</option>
                      </select>
                    </div>
                    
                    <div className="email-form-group">
                      <label>Default Font Size</label>
                      <select 
                        value={fontSize} 
                        onChange={(e) => setFontSize(e.target.value)}
                      >
                        {[8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24].map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="email-preview-container">
                    <label>Preview</label>
                    <div className="email-preview-content">
                      <p style={{ fontFamily: fontFamily, fontSize: `${fontSize}px` }}>
                        The quick brown fox jumps over the lazy dog
                      </p>
                    </div>
                  </div>
                  
                  <div className="email-form-group">
                    <label>Default From Address</label>
                    <select>
                      <option>TSAR IT - info@tsaritservices.com</option>
                    </select>
                  </div>
                  
                  <div className="email-form-group">
                    <label>Email Signature</label>
                    <button 
                      className="email-btn-primary"
                      onClick={() => setShowSignatureModal(true)}
                    >
                      <FiPlus /> Add New Signature
                    </button>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="email-form-actions">
                  <button className="email-btn-secondary">Cancel</button>
                  <button className="email-btn-primary">Save Settings</button>
                </div>
              </div>
            )}

            {/* Organization Emails Sub Tab */}
            {activeSubTab === 'org-emails' && (
              <div className="email-org-emails-section">
                <h2 className="email-section-title">Organization Email Addresses</h2>
                <div className="email-info-card">
                  <p>
                    Add the email addresses of your various departments from which you send and receive customer emails. 
                    You can use these addresses as the 'From' and 'Reply to' addresses. The email addresses have to be 
                    verified before you can use them.
                  </p>
                </div>
                
                <button className="email-btn-primary">
                  <FiPlus /> Add Email Addresses
                </button>
              </div>
            )}

            {/* Custom Email Fields Sub Tab */}
            {activeSubTab === 'custom-fields' && (
              <div className="email-custom-fields-section">
                <h2 className="email-section-title">Custom Email Fields Preferences</h2>
                <div className="email-info-card">
                  <p>
                    Choose whether you want to sync email conversation with the email addresses stored in the custom email 
                    fields across all records in Zoho CRM.
                  </p>
                  
                  <h3 className="email-subsection-title">By enabling custom email preferences, your organisations users can:</h3>
                  <ul className="email-features-list">
                    <li>
                      <FaCheck className="email-feature-check" />
                      View email conversations with email addresses present in custom email fields
                    </li>
                    <li>
                      <FaCheck className="email-feature-check" />
                      Get quick suggestions from the email composer
                    </li>
                    <li>
                      <FaCheck className="email-feature-check" />
                      Add more data to all existing email reports
                    </li>
                    <li>
                      <FaCheck className="email-feature-check" />
                      Use the Smart Filter to search for records
                    </li>
                  </ul>
                  
                  <div className="email-toggle-container">
                    <label className="email-toggle-switch">
                      <input type="checkbox" />
                      <span className="email-toggle-slider"></span>
                    </label>
                    <span>Enable Custom Email Fields Sync</span>
                  </div>
                  
                  <div className="email-note-card">
                    <strong>Note:</strong> When this preference is enabled, email conversation with the addresses present in 
                    the custom email fields will have the same sharing permissions as the record's primary and secondary 
                    email addresses.
                  </div>
                </div>
                
                <div className="email-form-actions">
                  <button className="email-btn-secondary">Cancel</button>
                  <button className="email-btn-primary">Save Preferences</button>
                </div>
              </div>
            )}

            {/* Email Signature Modal */}
            {showSignatureModal && (
              <div className="email-modal-backdrop">
                <div className="email-modal-container email-signature-modal">
                  <div className="email-modal-header">
                    <h3>Email Signature</h3>
                    <button 
                      className="email-btn-close"
                      onClick={() => setShowSignatureModal(false)}
                    >
                      <FiX />
                    </button>
                  </div>
                  
                  <div className="email-modal-body">
                    <div className="email-form-row">
                      <div className="email-form-group">
                        <label>Signature Name</label>
                        <input 
                          type="text" 
                          value={signatureName}
                          onChange={(e) => setSignatureName(e.target.value)}
                          placeholder="Enter signature name"
                        />
                      </div>
                      
                      <div className="email-form-group">
                        <label>Select an email address</label>
                        <select 
                          value={selectedEmail}
                          onChange={(e) => setSelectedEmail(e.target.value)}
                        >
                          <option value="">Select email</option>
                          <option value="info@tsaritservices.com">info@tsaritservices.com</option>
                          <option value="support@tsaritservices.com">support@tsaritservices.com</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="email-editor-toolbar">
                      <button className="email-tool-btn"><FaBold /></button>
                      <button className="email-tool-btn"><FaItalic /></button>
                      <button className="email-tool-btn"><FaUnderline /></button>
                      <select className="email-tool-select">
                        <option>10</option>
                        <option>12</option>
                        <option>14</option>
                      </select>
                      <button className="email-tool-btn"><FaAlignLeft /></button>
                      <button className="email-tool-btn"><FaListUl /></button>
                      <button className="email-tool-btn"><FaListOl /></button>
                      <button className="email-tool-btn"><FaLink /></button>
                      <button className="email-tool-btn"><FaImage /></button>
                      <select className="email-tool-select">
                        <option>Plain text</option>
                        <option>HTML</option>
                      </select>
                    </div>
                    
                    <div className="email-editor-content" contentEditable="true">
                      Type your signature here...
                    </div>
                  </div>
                  
                  <div className="email-modal-footer">
                    <button 
                      className="email-btn-secondary"
                      onClick={() => setShowSignatureModal(false)}
                    >
                      Cancel
                    </button>
                    <button className="email-btn-primary">
                      Save Signature
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailConfiguration;
