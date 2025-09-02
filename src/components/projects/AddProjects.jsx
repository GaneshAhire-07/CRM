import React, { useState } from "react";
import { Modal, Input, Select, DatePicker, Button } from "antd";

const { Option } = Select;

const AddProjectModal = ({ visible, onClose, onAdd, clients }) => {
  const [clientName, setClientName] = useState("");
  const [template, setTemplate] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = () => {
    if (!title || !clientName) {
      return alert("Project title and client name are required!");
    }

    const newProject = {
      id: Date.now(),
      title,
      client: clientName,
      start: startDate ? startDate.format("MM-DD-YYYY") : "---",
      due: dueDate ? dueDate.format("MM-DD-YYYY") : "---",
      tags: template ? [template.toLowerCase().replace(" ", "-")] : [],
      progress: 0,
      team: [],
      pinned: false,
    };

    onAdd(newProject);
    onClose();
    setClientName("");
    setTemplate("");
    setTitle("");
    setStartDate(null);
    setDueDate(null);
  };

  return (
    <Modal
      title="Add New Project"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Client Name */}
        <Select
          showSearch
          placeholder="Select or enter client"
          value={clientName || undefined}
          onChange={(val) => setClientName(val)}
          onSearch={(val) => setClientName(val)}
          allowClear
        >
          {clients.map((c) => (
            <Option key={c} value={c}>
              {c}
            </Option>
          ))}
        </Select>

        {/* Template */}
        <Select
          placeholder="Select template"
          value={template || undefined}
          onChange={(val) => setTemplate(val)}
        >
          <Option value="Graphic Design">Graphic Design</Option>
          <Option value="Logo Design">Logo Design</Option>
          <Option value="Content Writing">Content Writing</Option>
        </Select>

        {/* Project Title */}
        <Input
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Start Date */}
        <DatePicker
          placeholder="Start Date"
          value={startDate}
          onChange={(date) => setStartDate(date)}
          format="MM-DD-YYYY"
        />

        <DatePicker
          placeholder="Due Date"
          value={dueDate}
          onChange={(date) => setDueDate(date)}
          format="MM-DD-YYYY"
        />

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddProjectModal;
