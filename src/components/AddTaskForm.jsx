import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AddTaskForm.css';

const AddTaskForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    project: '',
    title: '',
    status: 'New',
    priority: 'Normal',
    showTaskAfterAdding: false
  });

  const [expandedSections, setExpandedSections] = useState({
    description: false,
    moreInformation: false,
    options: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = () => {
    if (formData.project && formData.title) {
      onSubmit && onSubmit(formData);
      onClose && onClose();
    }
  };

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <div className="task-form-overlay">
      <div className="task-form-container">
        <div className="task-form-header">
          <h2>Add A New Task</h2>
          <button className="close-button" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <div className="task-form-content">
          <div className="form-group">
            <label className="form-label required">Project*</label>
            <select
              className="form-select"
              value={formData.project}
              onChange={(e) => handleInputChange('project', e.target.value)}
            >
              <option value="">Select a project...</option>
              <option value="project1">Project Alpha</option>
              <option value="project2">Project Beta</option>
              <option value="project3">Project Gamma</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label required">Title*</label>
            <input
              type="text"
              className="form-input"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter task title..."
            />
          </div>

          <div className="form-group">
            <label className="form-label required">Status*</label>
            <select
              className="form-select"
              value={formData.status}
              onChange={(e) => handleInputChange('status', e.target.value)}
            >
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Review">Review</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label required">Priority*</label>
            <select
              className="form-select"
              value={formData.priority}
              onChange={(e) => handleInputChange('priority', e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          <div className="expandable-section">
            <div className="section-header" onClick={() => toggleSection('description')}>
              <span>Description</span>
              <button className={`toggle-button ${expandedSections.description ? 'active' : ''}`}>
                <div className="toggle-slider"></div>
              </button>
            </div>
            {expandedSections.description && (
              <div className="section-content">
                <textarea
                  className="form-textarea"
                  placeholder="Enter task description..."
                  rows={4}
                />
              </div>
            )}
          </div>

          <div className="expandable-section">
            <div className="section-header" onClick={() => toggleSection('moreInformation')}>
              <span>More Information</span>
              <button className={`toggle-button ${expandedSections.moreInformation ? 'active' : ''}`}>
                <div className="toggle-slider"></div>
              </button>
            </div>
            {expandedSections.moreInformation && (
              <div className="section-content">
                <div className="form-group">
                  <label className="form-label">Due Date</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Assignee</label>
                  <select className="form-select">
                    <option value="">Select assignee...</option>
                    <option value="user1">John Doe</option>
                    <option value="user2">Jane Smith</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <div className="section-header" onClick={() => toggleSection('options')}>
              <span>Options</span>
              <button className={`toggle-button ${expandedSections.options ? 'active' : ''}`}>
                <div className="toggle-slider"></div>
              </button>
            </div>
            {expandedSections.options && (
              <div className="section-content">
                <div className="form-group">
                  <label className="form-label">Tags</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter tags separated by commas..."
                  />
                </div>
              </div>
            )}
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.showTaskAfterAdding}
                onChange={(e) => handleInputChange('showTaskAfterAdding', e.target.checked)}
              />
              <span className="checkbox-text">Show task after adding</span>
            </label>
          </div>

          <div className="required-note">* Required</div>
        </div>

        <div className="task-form-footer">
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!formData.project || !formData.title}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;