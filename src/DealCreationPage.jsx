import React, { useState } from 'react';
import './DealCreationPage.css';

const DealCreationPage = ({ onClose }) => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    stage: 'New',
    amount: '',
    currency: 'Indian Rupee',
    endDate: '',
    contact: '',
    company: '',
    dearType: 'Sales',
    source: 'Not selected',
    sourceInfo: '',
    startDate: '',
    availableToAll: false,
    responsible: '',
    email: 'info@tsartiservices.com',
    comment: '',
    products: []
  });

  const navItems = ['General', 'Products', 'Estimates', 'Invoices', 'Automation', 'History', 'Market', 'More'];
  const [activeNav, setActiveNav] = useState('General');
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries(prev => [...prev, formData]);
    setShowForm(false);
    setFormData({
      name: '',
      stage: 'New',
      amount: '',
      currency: 'Indian Rupee',
      endDate: '',
      contact: '',
      company: '',
      dearType: 'Sales',
      source: 'Not selected',
      sourceInfo: '',
      startDate: '',
      availableToAll: false,
      responsible: '',
      email: 'info@tsartiservices.com',
      comment: '',
      products: []
    });
  };

  const addProductRow = () => {
    const newRow = {
      product: '',
      price: 0,
      quantity: 1
    };
    setFormData(prev => ({ ...prev, products: [...prev.products, newRow] }));
  };

  const updateProductRow = (index, key, value) => {
    const updatedProducts = [...formData.products];
    updatedProducts[index][key] = key === 'price' || key === 'quantity' ? parseFloat(value) || 0 : value;
    setFormData(prev => ({ ...prev, products: updatedProducts }));
  };

  const getTotalAmount = () => {
    return formData.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  };

  return (
    <div className="deal-page-container">
      <nav className="deal-navbar">
        {navItems.map(item => (
          <button key={item} className={activeNav === item ? 'active' : ''} onClick={() => setActiveNav(item)}>
            {item}
          </button>
        ))}
      </nav>

      {activeNav === 'General' && showForm && (
        <div className="deal-popup-overlay">
          <div className="deal-popup animated-popup">
            <form onSubmit={handleSubmit} className="deal-form">
              {/* General Info */}
              <h3>ABOUT DEAL</h3>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Deal Name" required />
              <select name="stage" value={formData.stage} onChange={handleChange}>
                <option value="New">New</option>
                <option value="Create papers">Create papers</option>
                <option value="Invoice">Invoice</option>
                <option value="In progress">In progress</option>
              </select>
              <div className="currency-group">
                <input type="text" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required />
                <select name="currency" value={formData.currency} onChange={handleChange}>
                  <option>Indian Rupee</option>
                  <option>US Dollar</option>
                  <option>Euro</option>
                  <option>Yuan</option>
                </select>
              </div>
              <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact info" />
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />

              {/* More Info */}
              <h3>MORE</h3>
              <input type="text" name="dearType" value={formData.dearType} onChange={handleChange} placeholder="Deal Type" />
              <select name="source" value={formData.source} onChange={handleChange}>
                <option>Not selected</option>
                <option>Website</option>
                <option>Referral</option>
              </select>
              <input type="text" name="sourceInfo" value={formData.sourceInfo} onChange={handleChange} placeholder="Source Info" />
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
              <label>
                <input type="checkbox" name="availableToAll" checked={formData.availableToAll} onChange={handleChange} />
                Available to everyone
              </label>
              <input type="text" name="responsible" value={formData.responsible} onChange={handleChange} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Comments" />

              <div className="form-actions">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeNav === 'Products' && (
        <div className="products-section">
          <div className="product-header">
            <button onClick={addProductRow} className="add-btn">ADD PRODUCT</button>
            <button className="select-btn">SELECT PRODUCT</button>
          </div>

          <table className="product-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {formData.products.map((p, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>
                    <input
                      type="text"
                      value={p.product}
                      onChange={(e) => updateProductRow(index, 'product', e.target.value)}
                      placeholder="Find or create a new product"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={p.price}
                      onChange={(e) => updateProductRow(index, 'price', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={p.quantity}
                      onChange={(e) => updateProductRow(index, 'quantity', e.target.value)}
                    />
                  </td>
                  <td>{(p.price * p.quantity).toFixed(2)} Rs.</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="product-summary">
            <div>Total without discounts and taxes: Rs. {getTotalAmount().toFixed(2)}</div>
            <div>Delivery price: Rs. 0</div>
            <div>Discount amount: Rs. 0</div>
            <div>Total before tax: Rs. {getTotalAmount().toFixed(2)}</div>
            <div>Tax total: Rs. 0</div>
            <div className="total-amount">Total amount: <strong>Rs. {getTotalAmount().toFixed(2)}</strong></div>
          </div>
        </div>
      )}

      {!showForm && activeNav === 'General' && (
        <div className="entries-table">
          <h3>General Information</h3>
          <button className="add-new-btn" onClick={() => setShowForm(true)}>+ New Deal</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Stage</th>
                <th>Amount</th>
                <th>Contact</th>
                <th>Company</th>
                <th>Email</th>
                <th>Products</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.stage}</td>
                  <td>{entry.amount} {entry.currency}</td>
                  <td>{entry.contact}</td>
                  <td>{entry.company}</td>
                  <td>{entry.email}</td>
                  <td>{entry.products.map(p => p.product).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DealCreationPage;








