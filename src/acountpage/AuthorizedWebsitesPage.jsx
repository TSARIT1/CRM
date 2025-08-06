import React from 'react';
import './AuthorizedWebsitesPage.css';
import { FaGlobe } from 'react-icons/fa';

const AuthorizedWebsitesPage = () => {
  return (
    <div className="auth-websites-container">
      <h2>Authorized Websites</h2>
      <ul className="website-list">
        <li><FaGlobe /> https://tsarcrm.com</li>
        <li><FaGlobe /> https://portal.tsarit.com</li>
      </ul>
    </div>
  );
};

export default AuthorizedWebsitesPage;
