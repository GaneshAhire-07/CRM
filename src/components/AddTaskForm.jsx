import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import "./AddTaskForm.css";

const AddTaskForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    project: "",
    title: "",
    status: "New",
    priority: "Normal",
    description: "",
    moreInformation: "",
    options: "",
    showTaskAfterAdding: true,
  });

  const [dropdownStates, setDropdownStates] = useState({
    project: false,
    status: false,
    priority: false,
  });

  const [collapsibleStates, setCollapsibleStates] = useState({
    description: false,
    moreInformation: false,
    options: false,
  });

  const statusOptions = [
    "New",
    "In Progress",
    "Completed",
    "On Hold",
    "Cancelled",
  ];
  const priorityOptions = ["Low", "Normal", "High", "Urgent"];
  const projectOptions = [
    "Project Alpha",
    "Project Beta",
    "Project Gamma",
    "Project Delta",
  ];

  const toggleDropdown = (field) => {
    setDropdownStates((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const toggleCollapsible = (section) => {
    setCollapsibleStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDropdownSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setDropdownStates((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form data:", formData);
    if (onClose) onClose();
  };

  return (
    <div className="add-task-form">
      {/* Header */}
      <div className="form-header">
        <h1>Add A New Task</h1>
        <button className="close-button" onClick={onClose}>
          <X />
        </button>
      </div>

      <div className="form-content">
        {/* Project Field */}
        <div className="form-group">
          <label className="form-label">
            Project<span className="required">*</span>
          </label>
          <div className="dropdown-container">
            <div
              className="dropdown-field"
              onClick={() => toggleDropdown("project")}
            >
              <span
                className={`dropdown-text ${
                  !formData.project ? "placeholder" : ""
                }`}
              >
                {formData.project || "Select a project"}
              </span>
              <ChevronDown
                className={`dropdown-icon ${
                  dropdownStates.project ? "rotated" : ""
                }`}
              />
            </div>
            {dropdownStates.project && (
              <div className="dropdown-menu">
                {projectOptions.map((option) => (
                  <div
                    key={option}
                    className="dropdown-option"
                    onClick={() => handleDropdownSelect("project", option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Title Field */}
        <div className="form-group">
          <label className="form-label">
            Title<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Enter task title"
          />
        </div>

        {/* Status Field */}
        <div className="form-group">
          <label className="form-label">
            Status<span className="required">*</span>
          </label>
          <div className="dropdown-container">
            <div
              className="dropdown-field"
              onClick={() => toggleDropdown("status")}
            >
              <span className="dropdown-text">{formData.status}</span>
              <ChevronDown
                className={`dropdown-icon ${
                  dropdownStates.status ? "rotated" : ""
                }`}
              />
            </div>
            {dropdownStates.status && (
              <div className="dropdown-menu">
                {statusOptions.map((option) => (
                  <div
                    key={option}
                    className="dropdown-option"
                    onClick={() => handleDropdownSelect("status", option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Priority Field */}
        <div className="form-group">
          <label className="form-label">
            Priority<span className="required">*</span>
          </label>
          <div className="dropdown-container">
            <div
              className="dropdown-field"
              onClick={() => toggleDropdown("priority")}
            >
              <span className="dropdown-text">{formData.priority}</span>
              <ChevronDown
                className={`dropdown-icon ${
                  dropdownStates.priority ? "rotated" : ""
                }`}
              />
            </div>
            {dropdownStates.priority && (
              <div className="dropdown-menu">
                {priorityOptions.map((option) => (
                  <div
                    key={option}
                    className="dropdown-option"
                    onClick={() => handleDropdownSelect("priority", option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Collapsible Sections */}
        <div className="collapsible-section">
          <div
            className="collapsible-header"
            onClick={() => toggleCollapsible("description")}
          >
            <span>Description</span>
            <div
              className={`toggle-switch ${
                collapsibleStates.description ? "active" : ""
              }`}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          {collapsibleStates.description && (
            <div className="collapsible-content">
              <textarea
                className="form-textarea"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Enter task description..."
                rows="4"
              />
            </div>
          )}
        </div>

        <div className="collapsible-section">
          <div
            className="collapsible-header"
            onClick={() => toggleCollapsible("moreInformation")}
          >
            <span>More Information</span>
            <div
              className={`toggle-switch ${
                collapsibleStates.moreInformation ? "active" : ""
              }`}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          {collapsibleStates.moreInformation && (
            <div className="collapsible-content">
              <textarea
                className="form-textarea"
                value={formData.moreInformation}
                onChange={(e) =>
                  handleInputChange("moreInformation", e.target.value)
                }
                placeholder="Enter additional information..."
                rows="3"
              />
            </div>
          )}
        </div>

        <div className="collapsible-section">
          <div
            className="collapsible-header"
            onClick={() => toggleCollapsible("options")}
          >
            <span>Options</span>
            <div
              className={`toggle-switch ${
                collapsibleStates.options ? "active" : ""
              }`}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
          {collapsibleStates.options && (
            <div className="collapsible-content">
              <div className="options-content">
                <p>
                  Additional task options and settings will be displayed here.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Checkbox */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={formData.showTaskAfterAdding}
              onChange={(e) =>
                handleInputChange("showTaskAfterAdding", e.target.checked)
              }
            />
            <span className="checkbox-text">Show task after adding</span>
          </label>
        </div>

        {/* Required note */}
        <div className="required-note">
          <span className="required">*</span> Required
        </div>

        {/* Action buttons */}
        <div className="form-actions">
          <button className="btn-close" onClick={onClose}>
            Close
          </button>
          <button className="btn-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
