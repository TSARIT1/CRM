import React, { useState } from 'react';
import './DealCreationPage.css';

const DealPopupForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    stage: 'New',
    amount: '',
    currency: 'Indian Rupee',
    endDate: '2025-06-19',
    contact: '',
    company: '',
    dearType: 'Sales',
    source: 'Not selected',
    sourceInfo: '',
    startDate: '2025-06-12',
    availableToAll: false,
    responsible: 'CNAME',
    email: 'info@tsartiservices.com',
    comment: 'B'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="deal-popup">
      <form onSubmit={handleSubmit} className="deal-form">
        <h2>Create Deal</h2>

        <input type="text" name="name" placeholder="Deal Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
        <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />

        <button type="submit" className="save-btn">Save</button>
      </form>
    </div>
  );
};

export default DealPopupForm;
