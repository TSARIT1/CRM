import React, { useState } from 'react';
import './EmailAddressesPage.css';
import { FaEnvelope, FaPlus, FaTrashAlt } from 'react-icons/fa';

const EmailAddressesPage = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [emailList, setEmailList] = useState([
    { email: 'info@tsaritservices.com', added: '3 months ago', verified: true },
  ]);
  const [newEmail, setNewEmail] = useState('');

  const addEmail = () => {
    if (newEmail.trim()) {
      setEmailList([...emailList, { email: newEmail, added: 'just now', verified: false }]);
      setNewEmail('');
      setAddModalOpen(false);
    }
  };

  const deleteEmail = (index) => {
    const updated = [...emailList];
    updated.splice(index, 1);
    setEmailList(updated);
  };

  return (
    <div className="email-page-container fade-in">
      <h2>My Email Addresses</h2>
      <p>Manage your email addresses used to sign in or reset your password.</p>

      {emailList.map((item, index) => (
        <div className="email-row" key={index}>
          <div className="icon-circle green"><FaEnvelope /></div>
          <div className="email-details">
            <span>{item.email}</span>
            <p>{item.added}</p>
          </div>
          <div className="verified-icon">{item.verified ? '✔' : ''}</div>
          <FaTrashAlt className="trash-icon" onClick={() => deleteEmail(index)} />
        </div>
      ))}

      <div className="add-link" onClick={() => setAddModalOpen(true)}>
        <FaPlus /> Add Email Address
      </div>

      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setAddModalOpen(false)}>
          <div className="modal-content slide-up" onClick={(e) => e.stopPropagation()}>
            <h3>Add Email Address</h3>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter email"
            />
            <button className="save-btn" onClick={addEmail}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailAddressesPage;
