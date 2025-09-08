import React, { useState } from 'react';
import './AddExpenseForm.css';

const AddExpenseForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    description: '',
    date: '',
    amount: '',
    category: 'Default',
    project: '',
    billable: true,
    attachReceipt: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.description || !formData.date || !formData.amount) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const toggleAttachReceipt = () => {
    setFormData(prev => ({ 
      ...prev, 
      attachReceipt: !prev.attachReceipt 
    }));
  };

  return (
    <div className="expense-form-overlay">
      <div className="expense-form-modal">
        {/* Header */}
        <div className="expense-form-header">
          <h2 className="expense-form-title">Add A New Expense</h2>
          <button
            onClick={handleClose}
            className="expense-form-close-btn"
          >
            ×
          </button>
        </div>

        {/* Form Content */}
        <div className="expense-form-content">
          {/* Description */}
          <div className="expense-form-field">
            <label htmlFor="description" className="expense-form-label">
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="expense-form-textarea"
              required
            />
          </div>

          {/* Date */}
          <div className="expense-form-field">
            <label htmlFor="date" className="expense-form-label">
              Date*
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="expense-form-input"
              required
            />
          </div>

          {/* Amount */}
          <div className="expense-form-field">
            <label htmlFor="amount" className="expense-form-label">
              Amount*
            </label>
            <div className="expense-form-amount-wrapper">
              <span className="expense-form-currency">$</span>
              <input
                type="number"
                id="amount"
                name="amount"
                step="0.01"
                min="0"
                value={formData.amount}
                onChange={handleInputChange}
                className="expense-form-amount-input"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="expense-form-field">
            <label htmlFor="category" className="expense-form-label">
              Category*
            </label>
            <div className="expense-form-select-wrapper">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="expense-form-select"
                required
              >
                <option value="Default">Default</option>
                <option value="Office Supplies">Office Supplies</option>
                <option value="Travel">Travel</option>
                <option value="Meals">Meals</option>
                <option value="Software">Software</option>
                <option value="Equipment">Equipment</option>
              </select>
              <div className="expense-form-select-arrow">▼</div>
            </div>
          </div>

          {/* Project */}
          <div className="expense-form-field">
            <label htmlFor="project" className="expense-form-label">
              Project
            </label>
            <div className="expense-form-select-wrapper">
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="expense-form-select"
              >
                <option value="">Select a project</option>
                <option value="Project A">Project A</option>
                <option value="Project B">Project B</option>
                <option value="Project C">Project C</option>
              </select>
              <div className="expense-form-select-arrow">▼</div>
            </div>
          </div>

          {/* Billable */}
          <div className="expense-form-checkbox-field">
            <input
              type="checkbox"
              id="billable"
              name="billable"
              checked={formData.billable}
              onChange={handleInputChange}
              className="expense-form-checkbox"
            />
            <label htmlFor="billable" className="expense-form-checkbox-label">
              Billable?
            </label>
          </div>

          {/* Attach Receipt */}
          <div className="expense-form-toggle-field">
            <label className="expense-form-toggle-label">
              Attach A Receipt
            </label>
            <div 
              className={`expense-form-toggle ${formData.attachReceipt ? 'active' : ''}`}
              onClick={toggleAttachReceipt}
            >
              <div className="expense-form-toggle-slider"></div>
            </div>
          </div>

          {/* File Upload Area - Only show when attachReceipt is true */}
          {formData.attachReceipt && (
            <div className="expense-form-field">
              <div className="expense-form-upload-area">
                <div className="expense-form-upload-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <polyline points="9,15 12,12 15,15"/>
                  </svg>
                </div>
                <p className="expense-form-upload-text">
                  Drop files here or click to upload
                </p>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="expense-form-file-input"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      console.log('File selected:', file.name);
                      // Handle file upload logic here
                    }
                  }}
                />
              </div>
            </div>
          )}

          {/* Required Field Note */}
          <p className="expense-form-required-note">* Required</p>

          {/* Action Buttons */}
          <div className="expense-form-actions">
            <button
              type="button"
              onClick={handleClose}
              className="expense-form-btn expense-form-btn-secondary"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="expense-form-btn expense-form-btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;