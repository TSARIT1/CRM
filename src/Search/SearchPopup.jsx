import React from 'react';
import './SearchPopup.css';

const SearchPopup = ({ onClose }) => {
  return (
    <div className="search-overlay">
      <div className="search-popup-container">
        <div className="search-popup-bar">
          <select className="search-dropdown">
            <option>All Modules</option>
            <option>Leads</option>
            <option>Deals</option>
            <option>Contacts</option>
          </select>
          <input
            className="search-text"
            type="text"
            placeholder="Press # for specific search"
          />
          <button className="search-close" onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;


