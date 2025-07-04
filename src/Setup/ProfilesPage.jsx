import React, { useState } from 'react';
import './ProfilesPage.css';

const ProfilesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const profiles = [
    {
      name: 'Administrator',
      description: 'This profile will have all the permissions including settings, users, and roles.',
      createdBy: '',
      modifiedBy: '',
    },
    {
      name: 'Standard',
      description: 'This profile will have all the permissions except admin-level access.',
      createdBy: '',
      modifiedBy: '',
    },
  ];

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profiles-container">
      <div className="profiles-header">
        <div>
          <h2>Profiles</h2>
          <p>
            Profile is a set of permissions dealing with module access and operations, setup customizations,
            and access to various apps. You can provide different set of permissions to various users.
          </p>
        </div>
        <button className="new-profile-btn">New Profile</button>
      </div>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="🔍 Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="profiles-table">
        <table>
          <thead>
            <tr>
              <th>Profile Name</th>
              <th>Profile Description</th>
              <th>Created By</th>
              <th>Modified By</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfiles.map((profile, index) => (
              <tr key={index}>
                <td>
                  <a href="#" className="profile-link">{profile.name}</a>
                </td>
                <td>
                  {profile.description.slice(0, 40)}...{' '}
                  <span className="more-link">More</span>
                </td>
                <td>{profile.createdBy || '-'}</td>
                <td>{profile.modifiedBy || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilesPage;
