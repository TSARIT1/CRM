import React, { useEffect, useState } from 'react';
import './ProfileSidebar.css';
import { IoClose } from 'react-icons/io5';
import { BsSun, BsMoonStars, BsCircleHalf } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import {
  FaUserCircle,
  FaArrowCircleUp,
  FaGift,
  FaUserFriends,
  FaCommentDots,
  FaBookOpen,
  FaPenNib,
  FaInbox
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfileSidebar = ({ onClose }) => {
  const [theme, setTheme] = useState('day');
  const navigate = useNavigate();

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
      const isDay = hour >= 6 && hour < 18;
      body.classList.add(isDay ? 'theme-day' : 'theme-night');
    }
  };

  const handleAccountClick = () => {
    navigate('/my-account');
    onClose();
  };

  const handleSignOutClick = () => {
    // Add actual logout logic if needed
    navigate('/');
    onClose();
  };

  return (
    <div className="profile-sidebar slide-in">
      <button className="close-btn2" onClick={onClose}>
        <IoClose size={20} />
      </button>

      <div className="sidebar-header">
        <FaUserCircle className="user-avatar" />
        <div>
          <h3 className="org-name">TSAR IT</h3>
          <p className="user-id">User ID: 60039638850</p>
          <div className="org-dropdown">TSAR IT ▾</div>
        </div>
      </div>

      <div className="plan-section">
        <div className="current-plan">
          <span className="plan-label">Free Edition</span>
        </div>
        <button className="upgrade-btn">
          <FaArrowCircleUp /> Upgrade
        </button>
      </div>

      <div className="theme-section">
        <h4>Mode</h4>
        <div className="theme-buttons">
          <button className={theme === 'day' ? 'active' : ''} onClick={() => setTheme('day')}>
            <BsSun /> Day
          </button>
          <button className={theme === 'night' ? 'active' : ''} onClick={() => setTheme('night')}>
            <BsMoonStars /> Night
          </button>
          <button className={theme === 'auto' ? 'active' : ''} onClick={() => setTheme('auto')}>
            <BsCircleHalf /> Auto
          </button>
        </div>

        <h4>Themes</h4>
        <div className="theme-colors">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="theme-color"
              style={{ backgroundColor: `hsl(${i * 45}, 70%, 55%)` }}
            />
          ))}
        </div>
      </div>

      <div className="help-section">
        <h4>Need Help?</h4>
        <div className="help-items">
          <p><FaCommentDots /> Talk with us</p>
          <p><FaUserFriends /> Community</p>
          <p><FaPenNib /> Write to us</p>
          <p><FaBookOpen /> Resources</p>
        </div>
      </div>

      <div className="news-section">
        <button><FaGift /> What’s New?</button>
        <button><FaInbox /> Refer & Earn</button>
      </div>

      <div className="footer-section">
        <button className="account-btn" onClick={handleAccountClick}>My Account</button>
        <button className="signout-btn" onClick={handleSignOutClick}><FiLogOut /> Sign Out</button>
      </div>
    </div>
  );
};

export default ProfileSidebar;




