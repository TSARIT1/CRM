import React from 'react';
import './RemoveSampleData.css';

const RemoveSampleData = () => {
  return (
    <div className="remove-container">
      <h2 className="remove-title">Remove Sample Data</h2>
      <p className="remove-warning">
        All changes that you made to the sample data will be lost. Are you sure of removing them?
      </p>

      <div className="remove-buttons">
        <button className="btn-proceed">Yes, Proceed</button>
        <button className="btn-cancel">Cancel</button>
      </div>
    </div>
  );
};

export default RemoveSampleData;
