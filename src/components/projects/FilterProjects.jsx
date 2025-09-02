import { Button, DatePicker, Drawer, Input, Select } from "antd";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const { RangePicker } = DatePicker;
const { Option } = Select;

const FilterProjects = ({
  setFilterOpen,
  filterOpen,
  projects,
  setFilters,
  filters,
}) => {
  return (
    <Drawer
      title="Filter Projects"
      placement="right"
      //   closeIcon={<IoCloseSharp style={{ fontSize: 18, color: "#555" }} />}
      onClose={() => setFilterOpen(false)}
      open={filterOpen}
      width={350}
      closable={false}
      headerStyle={{
        background: "#3bbeffff",
        color: "white",
      }}
      extra={
        <IoCloseSharp
          style={{ fontSize: 20, color: "#fff", cursor: "pointer" }}
          onClick={() => setFilterOpen(false)}
        />
      }
    >
      <label>Client</label>
      <Select
        allowClear
        showSearch
        placeholder="Select client"
        style={{ width: "100%", marginBottom: 16 }}
        onChange={(v) => setFilters({ ...filters, client: v })}
      >
        {[...new Set(projects.map((p) => p.client))].map((c) => (
          <Option key={c} value={c}>
            {c}
          </Option>
        ))}
      </Select>

      <label>Assigned</label>
      <Select
        allowClear
        showSearch
        placeholder="Select team member"
        style={{ width: "100%", marginBottom: 16 }}
        onChange={(v) => setFilters({ ...filters, team: v })}
      >
        {[...new Set(projects.flatMap((p) => p.team))].sort().map((c) => (
          <Option key={c} value={c}>
            {c}
          </Option>
        ))}
      </Select>

      <label>Status</label>
      <Select
        allowClear
        showSearch
        placeholder="Select status"
        style={{ width: "100%", marginBottom: 16 }}
        onChange={(v) => setFilters({ ...filters, status: v })}
      >
        <Option value="not-started">Not Started</Option>
        <Option value="in-progress">In Progress</Option>
        <Option value="completed">Completed</Option>
      </Select>

      <label>Tags</label>
      <Select
        allowClear
        showSearch
        placeholder="Enter tag"
        style={{ width: "100%", marginBottom: 16 }}
        // onChange={(e) => setFilters({ ...filters, tags: e.target.value })}
        onChange={(v) => setFilters({ ...filters, tags: v })}
        filterOption={(input, option) =>
          option?.children?.toLowerCase().includes(input.toLowerCase())
        }
      >
        {[...new Set(projects.flatMap((p) => p.tags || []))].map((tag) => (
          <Option key={tag} value={tag}>
            {tag}
          </Option>
        ))}
      </Select>

      <label>Start Date</label>
      <DatePicker
        style={{ width: "100%", marginBottom: 16 }}
        onChange={(date) =>
          setFilters({ ...filters, startDate: date ? date : null })
        }
      />

      <label>Due Date</label>
      <DatePicker
        style={{ width: "100%", marginBottom: 16 }}
        onChange={(date) =>
          setFilters({ ...filters, dueDate: date ? date : null })
        }
      />

      <div style={{ textAlign: "right" }}>
        <Button
          onClick={() => {
            setFilters({ client: "", dateRange: null, tags: "", status: "" });
          }}
          style={{ marginRight: 8 }}
        >
          Reset
        </Button>
        <Button type="primary" danger onClick={() => setFilterOpen(false)}>
          Apply Filter
        </Button>
      </div>
    </Drawer>
  );
};

export default FilterProjects;
