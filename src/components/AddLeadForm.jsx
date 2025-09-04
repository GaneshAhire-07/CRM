import React, { useState } from "react";
import "./AddLeadForm.css";

const AddLeadForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    leadTitle: "",
    firstName: "",
    lastName: "",
    telephone: "",
    emailAddress: "",
    leadValue: "",
    status: "New",
    showDetails: false,
    showMoreInfo: false,
    showAddressOrg: false,
    showLeadAfterAdding: true,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.leadTitle.trim()) {
      newErrors.leadTitle = "Lead Title is required";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (
      formData.emailAddress &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)
    ) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      if (!formData.showLeadAfterAdding) {
        onClose();
      }
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="add-lead-overlay">
      <div className="add-lead-modal">
        <div className="add-lead-header">
          <h2>Add Lead</h2>
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
        </div>

        <form className="add-lead-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="leadTitle">
              Lead Title<span className="required">*</span>
            </label>
            <input
              type="text"
              id="leadTitle"
              name="leadTitle"
              value={formData.leadTitle}
              onChange={handleInputChange}
              className={errors.leadTitle ? "error" : ""}
            />
            {errors.leadTitle && (
              <span className="error-message">{errors.leadTitle}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="firstName">
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className={errors.emailAddress ? "error" : ""}
            />
            {errors.emailAddress && (
              <span className="error-message">{errors.emailAddress}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="leadValue">Lead Value ($)</label>
            <input
              type="number"
              id="leadValue"
              name="leadValue"
              value={formData.leadValue}
              onChange={handleInputChange}
              min="0"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">
              Status<span className="required">*</span>
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Closed Won">Closed Won</option>
              <option value="Closed Lost">Closed Lost</option>
            </select>
          </div>

          <div className="expandable-sections">
            <div className="section-toggle">
              <label className="toggle-label">
                Details
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    name="showDetails"
                    checked={formData.showDetails}
                    onChange={handleInputChange}
                  />
                  <span className="toggle-slider"></span>
                </div>
              </label>
            </div>

            <div className="section-toggle">
              <label className="toggle-label">
                More Information
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    name="showMoreInfo"
                    checked={formData.showMoreInfo}
                    onChange={handleInputChange}
                  />
                  <span className="toggle-slider"></span>
                </div>
              </label>
            </div>

            <div className="section-toggle">
              <label className="toggle-label">
                Address & Organisation Details
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    name="showAddressOrg"
                    checked={formData.showAddressOrg}
                    onChange={handleInputChange}
                  />
                  <span className="toggle-slider"></span>
                </div>
              </label>
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="showLeadAfterAdding"
                checked={formData.showLeadAfterAdding}
                onChange={handleInputChange}
              />
              <span className="checkbox-custom"></span>
              Show lead after adding
            </label>
          </div>

          <div className="form-note">
            <span className="required">*</span> Required
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLeadForm;
