import React from 'react';
import './RecycleBin.css';

const RecycleBin = () => {
  return (
    <div className="recycle-container">
      <h2 className="recycle-title">Recycle Bin</h2>
      <p className="recycle-description">
        The Recycle Bin displays all the records you have access to that have been deleted in your TSAR CRM account.<br /><br />
        After records are deleted, they will be stored in the Recycle Bin for <strong>60 days</strong>. After that, they will be deleted permanently.<br /><br />
        Only users with an administrator profile can delete records in the Recycle Bin.<br /><br />
        Non-admin users can restore their own records from the Recycle Bin. Depending on their permissions, they may also be able to restore other users' records as well.<br /><br />
        During Mass Restore, any Notes, Attachments, Emails, Visits or Appointments cannot be restored if their parent records are present in the Recycle Bin.
      </p>

      <div className="recycle-table">
        <div className="recycle-table-header">
          <div>Name</div>
          <div>Type</div>
          <div>Deleted By</div>
          <div>Deleted Time</div>
        </div>
        <div className="recycle-table-body no-data">
          &lt; No data available &gt;
        </div>
      </div>
    </div>
  );
};

export default RecycleBin;
