import React, { useState } from 'react';
import './PersonalInformationPage.css';
import { FaEdit, FaUserCircle } from 'react-icons/fa';

const PersonalInformationPage = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'TSAR IT',
    displayName: 'TSAR IT',
    gender: 'I’d prefer not to say',
    country: 'India',
    state: 'Andhra Pradesh',
    language: 'English - United States',
    timezone: '(GMT +05:30) Asia/Kolkata',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    setEditModalOpen(false);
  };

  return (
    <div className="personal-info-container fade-in">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <FaUserCircle size={50} color="#4a90e2" />
          </div>
          <div>
            <h2>{formData.fullName}</h2>
            <p>info@tsaritservices.com</p>
          </div>
          <button className="edit-btn" onClick={() => setEditModalOpen(true)}>
            <FaEdit /> Edit
          </button>
        </div>

        <div className="info-grid">
          <div><strong>Full Name</strong><p>{formData.fullName}</p></div>
          <div><strong>Display Name</strong><p>{formData.displayName}</p></div>
          <div><strong>Gender</strong><p>{formData.gender}</p></div>
          <div><strong>Country/Region</strong><p>{formData.country}</p></div>
          <div><strong>State</strong><p>{formData.state}</p></div>
          <div><strong>Language</strong><p>{formData.language}</p></div>
          <div><strong>Time Zone</strong><p>{formData.timezone}</p></div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal-overlay" onClick={() => setEditModalOpen(false)}>
          <div className="modal-content slide-up" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Profile</h3>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder="Display Name"
            />
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gender"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
            />
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="Language"
            />
            <input
              type="text"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              placeholder="Time Zone"
            />
            <button className="save-btn" onClick={saveProfile}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInformationPage;


