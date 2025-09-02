import React from "react";
import { Modal, Form, Input, Select } from "antd";

const AddUser = ({ visible, onOk, onCancel, form }) => {
  return (
    <Modal
      title="Create A New User"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Submit"
      cancelText="Close"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="company"
          label="Company Name"
          rules={[{ required: true, message: "Company name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: "First name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Last name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email Address"
          rules={[{ required: true, type: "email", message: "Valid email is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="telephone" label="Telephone">
          <Input />
        </Form.Item>
        <Form.Item name="position" label="Position">
          <Input />
        </Form.Item>
        <Form.Item name="timezone" label="Time Zone" initialValue="Europe/Amsterdam">
          <Select>
            <Select.Option value="Europe/Amsterdam">Europe/Amsterdam</Select.Option>
            <Select.Option value="Asia/Kolkata">Asia/Kolkata</Select.Option>
            <Select.Option value="America/New_York">America/New_York</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUser;
