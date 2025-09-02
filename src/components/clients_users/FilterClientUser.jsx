import React, { useState } from "react";
import { Modal, Button, Input, Select, DatePicker, Row, Col, Form } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

const userTypes = [
  { value: "", label: "All" },
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
];

const initialFilters = {
  companyName: "",
  name: "",
  email: "",
  userType: "",
  dateRange: [],
};

const FilterClientUser = ({ open, onClose, onApply }) => {
  const [form] = Form.useForm();

  const handleReset = () => {
  form.resetFields();
  onApply(initialFilters);
  onClose();
};


  const handleApply = () => {
    const values = form.getFieldsValue();
    const filters = {
      ...values,
      startDate: values.dateRange?.[0]?.format("YYYY-MM-DD") || "",
      endDate: values.dateRange?.[1]?.format("YYYY-MM-DD") || "",
    };
    delete filters.dateRange;
    onApply(filters);
    onClose();
  };

  return (
    <Modal
      title="Filter Clients/Users"
      open={open}
      onCancel={onClose}
      footer={[
        <Button
          key="reset"
          onClick={handleReset}
        >
          Reset
        </Button>,
        <Button key="apply" type="primary" onClick={handleApply}>
          Apply Filter
        </Button>,
      ]}
      destroyOnClose
    >
      <Form form={form} layout="vertical" initialValues={initialFilters}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Company Name" name="companyName">
              <Input placeholder="Company Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="User Type" name="userType">
              <Select>
                {userTypes.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Date Added" name="dateRange">
              <RangePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default FilterClientUser;
