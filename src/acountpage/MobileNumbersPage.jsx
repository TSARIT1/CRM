import React, { useState } from 'react';
import './MobileNumbersPage.css';
import { FaMobileAlt, FaPlus, FaTrashAlt } from 'react-icons/fa';

const MobileNumbersPage = () => {
  const [mobiles, setMobiles] = useState([{ number: '+91 9876543210', added: '2 months ago' }]);
  const [newMobile, setNewMobile] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const addMobile = () => {
    if (newMobile.trim()) {
      setMobiles([...mobiles, { number: newMobile, added: 'just now' }]);
      setNewMobile('');
      setModalOpen(false);
    }
  };

  const deleteMobile = (index) => {
    const updated = [...mobiles];
    updated.splice(index, 1);
    setMobiles(updated);
  };

  return (
    <div className="mobile-page-container fade-in">
      <h2>My Mobile Numbers</h2>
      <p>Manage your registered mobile numbers.</p>

      {mobiles.map((item, index) => (
        <div className="mobile-row" key={index}>
          <div className="icon-circle blue"><FaMobileAlt /></div>
          <div className="mobile-details">
            <span>{item.number}</span>
            <p>{item.added}</p>
          </div>
          <FaTrashAlt className="trash-icon" onClick={() => deleteMobile(index)} />
        </div>
      ))}

      <div className="add-link" onClick={() => setModalOpen(true)}>
        <FaPlus /> Add Mobile Number
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content slide-up" onClick={(e) => e.stopPropagation()}>
            <h3>Add Mobile Number</h3>
            <input
              type="text"
              value={newMobile}
              onChange={(e) => setNewMobile(e.target.value)}
              placeholder="Enter mobile number"
            />
            <button className="save-btn" onClick={addMobile}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNumbersPage;
