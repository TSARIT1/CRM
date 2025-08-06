import React from 'react';
import './LinkedAccountsPage.css';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

const LinkedAccountsPage = () => {
  return (
    <div className="linked-accounts-container">
      <h2>Linked Accounts</h2>
      <ul className="linked-list">
        <li><FaGoogle /> Google - connected</li>
        <li><FaFacebook /> Facebook - not connected</li>
        <li><FaGithub /> GitHub - connected</li>
      </ul>
    </div>
  );
};

export default LinkedAccountsPage;
