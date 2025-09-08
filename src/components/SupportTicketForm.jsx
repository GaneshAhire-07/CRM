import React, { useState } from 'react';
import { 
  ChevronDown, 
  Bold, 
  Link, 
  List, 
  ListOrdered, 
  Image, 
  Table, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Indent, 
  Outdent, 
  Minus, 
  MoreHorizontal,
  Code,
  MoreVertical,
  Upload,
  X,
  MessageCircle,
  Grid3X3,
  HelpCircle
} from 'lucide-react';
import "./SupportTicketForm.css"
const TicketForm = () => {
  const [formData, setFormData] = useState({
    client: '',
    project: '',
    department: 'Sales',
    priority: 'Normal',
    customText: '',
    description: '',
    tags: ''
  });

  const [dragOver, setDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Submitting ticket:', formData);
    alert('Support ticket submitted successfully!');
  };

  return (
    <div className="ticket-form-container">
      <div className="form-layout">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="form-field">
            <label className="field-label">Client</label>
            <div className="select-wrapper">
              <select 
                value={formData.client}
                onChange={(e) => handleInputChange('client', e.target.value)}
                className="form-select"
              >
                <option value=""></option>
                <option value="acme-corp">Acme Corp</option>
                <option value="tech-solutions">Tech Solutions</option>
                <option value="global-inc">Global Inc</option>
              </select>
              <ChevronDown className="select-arrow" size={16} />
            </div>
          </div>

          <div className="form-field">
            <label className="field-label">Project</label>
            <div className="select-wrapper">
              <select 
                value={formData.project}
                onChange={(e) => handleInputChange('project', e.target.value)}
                className="form-select disabled"
                disabled
              >
                <option value=""></option>
              </select>
              <ChevronDown className="select-arrow" size={16} />
            </div>
          </div>

          <div className="form-field">
            <label className="field-label">Department</label>
            <div className="select-wrapper">
              <select 
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                className="form-select"
              >
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
              </select>
              <ChevronDown className="select-arrow" size={16} />
            </div>
          </div>

          <div className="form-field">
            <label className="field-label">Priority</label>
            <div className="select-wrapper">
              <select 
                value={formData.priority}
                onChange={(e) => handleInputChange('priority', e.target.value)}
                className="form-select"
              >
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
              <ChevronDown className="select-arrow" size={16} />
            </div>
          </div>

          <div className="form-field">
            <label className="field-label">Ticket Custom Text</label>
            <textarea 
              rows={6}
              className="form-textarea"
              value={formData.customText}
              onChange={(e) => handleInputChange('customText', e.target.value)}
              placeholder=""
            />
          </div>
        </div>

        {/* Right Main Content */}
        <div className="main-content">
          {/* Editor Toolbar */}
          <div className="editor-toolbar">
            <div className="toolbar-section">
              <button className="toolbar-btn" title="Bold">
                <Bold size={16} />
              </button>
              <button className="toolbar-btn" title="Link">
                <Link size={16} />
              </button>
              <button className="toolbar-btn" title="Bullet List">
                <List size={16} />
              </button>
              <button className="toolbar-btn" title="Numbered List">
                <ListOrdered size={16} />
              </button>
              <button className="toolbar-btn" title="Image">
                <Image size={16} />
              </button>
              <button className="toolbar-btn" title="Table">
                <Table size={16} />
              </button>
            </div>
            
            <div className="toolbar-section">
              <button className="toolbar-btn" title="Align Left">
                <AlignLeft size={16} />
              </button>
              <button className="toolbar-btn" title="Align Center">
                <AlignCenter size={16} />
              </button>
              <button className="toolbar-btn" title="Align Right">
                <AlignRight size={16} />
              </button>
              <button className="toolbar-btn" title="Indent">
                <Indent size={16} />
              </button>
              <button className="toolbar-btn" title="Outdent">
                <Outdent size={16} />
              </button>
              <button className="toolbar-btn" title="Horizontal Rule">
                <Minus size={16} />
              </button>
              <button className="toolbar-btn" title="Table">
                <MoreHorizontal size={16} />
              </button>
            </div>

            <div className="toolbar-section">
              <button className="toolbar-btn" title="Code">
                <Code size={16} />
              </button>
              <button className="toolbar-btn" title="More">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>

          {/* Text Editor */}
          <div className="editor-area">
            <textarea 
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="editor-textarea"
              rows={12}
              placeholder=""
            />
          </div>

          {/* Canned Messages */}
          <div className="canned-messages">
            <MessageCircle size={16} className="message-icon" />
            <span>Canned Messages</span>
          </div>

          {/* File Upload Area */}
          <div 
            className={`upload-area ${dragOver ? 'dragover' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input').click()}
          >
            <Upload className="upload-icon" size={32} />
            <p>Drop files here or click to upload</p>
            <input 
              id="file-input"
              type="file"
              multiple
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="file-list">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="file-item">
                  <span className="file-name">{file.name}</span>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFile(index)}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tags Field */}
          <div className="form-field">
            <label className="field-label">Tags</label>
            <input 
              type="text"
              value={formData.tags}
              onChange={(e) => handleInputChange('tags', e.target.value)}
              className="form-input"
              placeholder=""
            />
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button 
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit Support Ticket
            </button>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <button className="float-btn grid-btn">
          <Grid3X3 size={20} />
        </button>
        <button className="float-btn help-btn">
          <HelpCircle size={20} />
        </button>
      </div>
    </div>
  );
};

export default TicketForm;