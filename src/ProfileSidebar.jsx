// ProfileSidebar.jsx
import React, { useEffect, useState } from 'react';
import './ProfileSidebar.css';
import { IoClose } from 'react-icons/io5';
import { BsSun, BsMoonStars, BsCircleHalf } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { FaUserCircle, FaArrowCircleUp, FaGift, FaUserFriends, FaCommentDots, FaBookOpen, FaPenNib, FaInbox } from 'react-icons/fa';

const ProfileSidebar = ({ onClose }) => {
  const [theme, setTheme] = useState('auto');

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (selectedTheme) => {
    const body = document.body;
    body.classList.remove('theme-day', 'theme-night');

    if (selectedTheme === 'day') {
      body.classList.add('theme-day');
    } else if (selectedTheme === 'night') {
      body.classList.add('theme-night');
    } else {
      const hour = new Date().getHours();
      body.classList.add(hour >= 6 && hour < 18 ? 'theme-day' : 'theme-night');
    }
  };

  return (
    <div className="profile-sidebar">
      <button className="close-btn" onClick={onClose}><IoClose /></button>
      <div className="profile-section">
        <FaUserCircle className="avatar-icon" />
        <div className="user-info">
          <h4>TSAR IT</h4>
          <p>User Id: 60039638850</p>
          <div className="tag">Tsar IT ▾</div>
        </div>
      </div>

      <div className="plan-section">
        <div className="current-plan">
          <p>Free Edition</p>
        </div>
        <button className="upgrade-btn"><FaArrowCircleUp /> UPGRADE</button>
      </div>

      <div className="theme-switch">
        <div className="modes">
          <button className={theme === 'day' ? 'active' : ''} onClick={() => setTheme('day')}><BsSun /> Day</button>
          <button className={theme === 'night' ? 'active' : ''} onClick={() => setTheme('night')}><BsMoonStars /> Night</button>
          <button className={theme === 'auto' ? 'active' : ''} onClick={() => setTheme('auto')}><BsCircleHalf /> Auto</button>
        </div>
        <div className="colors">
          {[...Array(10)].map((_, i) => (
            <span key={i} style={{ background: `hsl(${i * 36}, 80%, 60%)` }} />
          ))}
        </div>
      </div>

      <div className="help-section">
        <h4>Need Help?</h4>
        <div className="help-links">
          <p><FaCommentDots /> Talk with us</p>
          <p><FaUserFriends /> Community</p>
          <p><FaPenNib /> Write to us</p>
          <p><FaBookOpen /> Resources</p>
        </div>
      </div>

      <div className="news-room">
        <button><FaGift /> What's New?</button>
        <button><FaInbox /> Refer and Earn</button>
      </div>

      <div className="footer-actions">
        <button className="my-account">My Account</button>
        <button className="signout"><FiLogOut /> Sign Out</button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
