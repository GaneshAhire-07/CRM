
import React, { useState } from "react";
import {
  Drawer,
  Select,
  DatePicker,
  Input,
  Button,
  Space,
  Divider,
} from "antd";
import { LuFilter } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

const { RangePicker } = DatePicker;

const FilterClientsModal = ({
  visible,
  onClose,
  onApply,
  onReset,
  clients = [],
}) => {
  const [filters, setFilters] = useState({
    company: [],
    category: [],
    tags: [],
    status: [],
    vat: "",
    projectType: "",
    dateRange: [],
  });

  // Build options dynamically
  const companyOptions = [...new Set(clients.map((c) => c.company))].map((c) => ({
    value: c,
    label: c,
  }));

  const categoryOptions = [...new Set(clients.map((c) => c.category))].map(
    (c) => ({ value: c, label: c })
  );

  const statusOptions = [...new Set(clients.map((c) => c.status))].map((c) => ({
    value: c,
    label: c,
  }));

  const tagOptions = [
    ...new Set(clients.flatMap((c) => c.tags || [])),
  ].map((t) => ({ value: t, label: t }));

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      company: [],
      category: [],
      tags: [],
      status: [],
      vat: "",
      projectType: "",
      dateRange: [],
    });
    onReset();
  };

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={visible}
      width={400}
      closable={false}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LuFilter size={22} color="white" />
          <span style={{ fontSize: "20px", fontWeight: 600 }}>Filter Clients</span>
        </div>
      }
      headerStyle={{
        background: "#3bbeff",
        color: "white",
      }}
      extra={
        <IoCloseSharp
          style={{ fontSize: 20, color: "#fff", cursor: "pointer" }}
          onClick={onClose}
        />
      }
      footer={
        <Space style={{ float: "right" }}>
          <Button onClick={handleReset}>Reset</Button>
          <Button type="primary" onClick={handleApply}>
            Apply Filter
          </Button>
        </Space>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <label>Company</label>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select company"
          options={companyOptions}
          value={filters.company}
          onChange={(val) => setFilters({ ...filters, company: val })}
        />

        <label>Category</label>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select category"
          options={categoryOptions}
          value={filters.category}
          onChange={(val) => setFilters({ ...filters, category: val })}
        />

        <label>Tags</label>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select tags"
          options={tagOptions}
          value={filters.tags}
          onChange={(val) => setFilters({ ...filters, tags: val })}
        />

        <label>Date Created</label>
        <RangePicker
          style={{ width: "100%" }}
          value={filters.dateRange}
          onChange={(val) => setFilters({ ...filters, dateRange: val })}
        />

        <label>Status</label>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select status"
          options={statusOptions}
          value={filters.status}
          onChange={(val) => setFilters({ ...filters, status: val })}
        />

        <label>VAT</label>
        <Input
          placeholder="Enter VAT"
          value={filters.vat}
          onChange={(e) => setFilters({ ...filters, vat: e.target.value })}
        />

        <label>Project Type</label>
        <Select
          style={{ width: "100%" }}
          placeholder="Select type"
          value={filters.projectType}
          onChange={(val) => setFilters({ ...filters, projectType: val })}
        >
          <Select.Option value="Web Development">Web Development</Select.Option>
          <Select.Option value="Design">Design</Select.Option>
          <Select.Option value="Marketing">Marketing</Select.Option>
        </Select>
      </div>
    </Drawer>
  );
};

export default FilterClientsModal;
