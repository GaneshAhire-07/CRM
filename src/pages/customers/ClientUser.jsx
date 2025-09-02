// import React, { useState } from "react";
// import {
//   Table,
//   Button,
//   Select,
//   Space,
//   Popconfirm,
//   Tooltip,
//   Modal,
//   Form,
// } from "antd";
// import {
//   EditOutlined,
//   DeleteOutlined,
//   MailOutlined,
//   KeyOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";
// import EditUser from "../../components/clients_users/EditUser";
// import { LuFilter } from "react-icons/lu";
// import "./ClientUser.css";

// const { Option } = Select;

// const initialData = [
//   {
//     key: "1",
//     name: "John Doe",
//     client: "Acme Corp",
//     email: "john.doe@acme.com",
//     phone: "123-456-7890",
//     lastseen: "2024-06-10 14:23",
//   },
//   {
//     key: "2",
//     name: "Jane Smith",
//     client: "Beta Inc",
//     email: "jane.smith@beta.com",
//     phone: "987-654-3210",
//     lastseen: "2024-06-11 09:15",
//   },
//   {
//     key: "3",
//     name: "Alice Johnson",
//     client: "Acme Corp",
//     email: "alice.j@acme.com",
//     phone: "555-123-4567",
//     lastseen: "2024-06-09 18:45",
//   },
// ];

// const clients = [...new Set(initialData.map((d) => d.client))];

// const ClientUser = () => {
//   const [data, setData] = useState(initialData);
//   const [searchText, setSearchText] = useState("");
//   const [clientFilter, setClientFilter] = useState("");
//   const [editModal, setEditModal] = useState({ visible: false, record: null });
//   const [form] = Form.useForm();
//   const [filterVisible, setFilterVisible] = useState(false);

//   // Filtering
//   const filteredData = data.filter((item) => {
//     const matchesSearch =
//       item.name.toLowerCase().includes(searchText.toLowerCase()) ||
//       item.email.toLowerCase().includes(searchText.toLowerCase()) ||
//       item.phone.includes(searchText);
//     const matchesClient = clientFilter ? item.client === clientFilter : true;
//     return matchesSearch && matchesClient;
//   });

//   // Actions
//   const handleDelete = (key) => {
//     setData((prev) => prev.filter((item) => item.key !== key));
//   };

//   const handleEdit = (record) => {
//     setEditModal({ visible: true, record });
//     form.setFieldsValue(record);
//   };

//   const handleEditOk = () => {
//     form.validateFields().then((values) => {
//       setData((prev) =>
//         prev.map((item) =>
//           item.key === editModal.record.key ? { ...item, ...values } : item
//         )
//       );
//       setEditModal({ visible: false, record: null });
//     });
//   };

//   const handleEditCancel = () => {
//     setEditModal({ visible: false, record: null });
//   };

//   const handleMail = (record) => {
//     window.location.href = `mailto:${record.email}`;
//   };

//   const handleUpdatePassword = (record) => {
//     Modal.info({
//       title: "Update Password",
//       content: `Password update link sent to ${record.email}`,
//     });
//   };

//   // Columns
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       sorter: (a, b) => a.name.localeCompare(b.name),
//     },
//     {
//       title: "Client",
//       dataIndex: "client",
//       key: "client",
//       filters: clients.map((c) => ({ text: c, value: c })),
//       onFilter: (value, record) => record.client === value,
//     },
//     { title: "Email", dataIndex: "email", key: "email" },
//     { title: "Phone", dataIndex: "phone", key: "phone" },
//     { title: "Last Seen", dataIndex: "lastseen", key: "lastseen" },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <Space>
//           <Tooltip title="Edit">
//             <Button
//               icon={<EditOutlined />}
//               onClick={() => handleEdit(record)}
//             />
//           </Tooltip>
//           <Tooltip title="Delete">
//             <Popconfirm
//               title="Are you sure to delete?"
//               onConfirm={() => handleDelete(record.key)}
//             >
//               <Button icon={<DeleteOutlined />} danger />
//             </Popconfirm>
//           </Tooltip>
//           <Tooltip title="Mail">
//             <Button
//               icon={<MailOutlined />}
//               onClick={() => handleMail(record)}
//             />
//           </Tooltip>
//           <Tooltip title="Update Password">
//             <Button
//               icon={<KeyOutlined />}
//               onClick={() => handleUpdatePassword(record)}
//             />
//           </Tooltip>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: 24 }}>
//       <h2>Client Users</h2>

//       <div className="container">
//         <div className="search-bar">
//           <SearchOutlined size={20} />
//           <input
//             type="text"
//             placeholder="Search by name, email, phone"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             style={{ height: 30 }}
//           />
//         </div>

//         <button onClick={() => setFilterVisible(!filterVisible)}>
//           <LuFilter
//             size={25}
//             color="#2d2d2d4e"
//           />
//         </button>

//         {filterVisible && (
//           <Select
//             placeholder="Filter by client"
//             value={clientFilter}
//             onChange={setClientFilter}
//             allowClear
//             style={{ width: 180, height: 40 }}
//           >
//             {clients.map((client) => (
//               <Option key={client} value={client}>
//                 {client}
//               </Option>
//             ))}
//           </Select>
//         )}
//       </div>

//       <Table
//         columns={columns}
//         dataSource={filteredData}
//         rowKey="key"
//         pagination={{ pageSize: 5 }}
//       />

//       {/* Reusable EditUser Component */}
//       <EditUser
//         visible={editModal.visible}
//         onOk={handleEditOk}
//         onCancel={handleEditCancel}
//         record={editModal.record}
//         clients={clients}
//         form={form}
//       />
//     </div>
//   );
// };

// export default ClientUser;

import React, { useState } from "react";
import { Table, Button, Space, Popconfirm, Tooltip, Modal, Form } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  KeyOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { LuFilter } from "react-icons/lu";
import EditUser from "../../components/clients_users/EditUser";
import FilterClientUser from "../../components/clients_users/FilterClientUser"; 
import "./ClientUser.css";
import { FiPlus } from "react-icons/fi";

const initialData = [
  {
    key: "1",
    name: "John Doe",
    client: "Acme Corp",
    email: "john.doe@acme.com",
    phone: "123-456-7890",
    lastseen: "2024-06-10 14:23",
  },
  {
    key: "2",
    name: "Jane Smith",
    client: "Beta Inc",
    email: "jane.smith@beta.com",
    phone: "987-654-3210",
    lastseen: "2024-06-11 09:15",
  },
  {
    key: "3",
    name: "Alice Johnson",
    client: "Acme Corp",
    email: "alice.j@acme.com",
    phone: "555-123-4567",
    lastseen: "2024-06-09 18:45",
  },
];

const ClientUser = () => {
  const [data, setData] = useState(initialData);
  const [searchText, setSearchText] = useState("");
  const [editModal, setEditModal] = useState({ visible: false, record: null });
  const [form] = Form.useForm();
  const [filterVisible, setFilterVisible] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({}); 
  const [showAddUser, setShowAddUser] = useState(false);

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase()) ||
      item.phone.includes(searchText);

    const matchesCompany = appliedFilters.companyName
      ? item.client
          .toLowerCase()
          .includes(appliedFilters.companyName.toLowerCase())
      : true;

    const matchesName = appliedFilters.name
      ? item.name.toLowerCase().includes(appliedFilters.name.toLowerCase())
      : true;

    const matchesEmail = appliedFilters.email
      ? item.email.toLowerCase().includes(appliedFilters.email.toLowerCase())
      : true;

    const matchesUserType = appliedFilters.userType
      ? item.role === appliedFilters.userType 
      : true;

    return (
      matchesSearch &&
      matchesCompany &&
      matchesName &&
      matchesEmail &&
      matchesUserType
    );
  });

  const handleDelete = (key) => {
    setData((prev) => prev.filter((item) => item.key !== key));
  };

  const handleEdit = (record) => {
    setEditModal({ visible: true, record });
    form.setFieldsValue(record);
  };

  const handleEditOk = () => {
    form.validateFields().then((values) => {
      setData((prev) =>
        prev.map((item) =>
          item.key === editModal.record.key ? { ...item, ...values } : item
        )
      );
      setEditModal({ visible: false, record: null });
    });
  };

  const handleEditCancel = () => {
    setEditModal({ visible: false, record: null });
  };

  const handleMail = (record) => {
    window.location.href = `mailto:${record.email}`;
  };

  const handleUpdatePassword = (record) => {
    Modal.info({
      title: "Update Password",
      content: `Password update link sent to ${record.email}`,
    });
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Client", dataIndex: "client", key: "client" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Last Seen", dataIndex: "lastseen", key: "lastseen" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Tooltip title="Edit">
            <Button
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <Button icon={<DeleteOutlined />} danger />
            </Popconfirm>
          </Tooltip>
          <Tooltip title="Mail">
            <Button
              icon={<MailOutlined />}
              onClick={() => handleMail(record)}
            />
          </Tooltip>
          <Tooltip title="Update Password">
            <Button
              icon={<KeyOutlined />}
              onClick={() => handleUpdatePassword(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Client Users</h2>

      <div className="container">
        <div className="search-bar">
          <SearchOutlined />
          <input
            type="text"
            placeholder="Search by name, email, phone"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <button onClick={() => setFilterVisible(true)}>
          <LuFilter size={25} color="#2d2d2d4e" />
        </button>

        <div className="plus-btn" onClick={() => setShowAddUser(true)}>
          <FiPlus size={28} />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="key"
        pagination={{ pageSize: 5 }}
      />

      <EditUser
        visible={editModal.visible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        record={editModal.record}
        clients={[...new Set(initialData.map((d) => d.client))]}
        form={form}
      />

      <FilterClientUser
        open={filterVisible}
        onClose={() => setFilterVisible(false)}
        onApply={(filters) => setAppliedFilters(filters)}
      />
    </div>
  );
};

export default ClientUser;
