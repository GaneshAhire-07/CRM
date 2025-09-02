// // import React, { useState } from "react";
// // import * as XLSX from "xlsx";
// // import { saveAs } from "file-saver";
// // import "./ExportClients.css";
// // import { MdOutlineFileUpload } from "react-icons/md";
// // import { IoCloseSharp } from "react-icons/io5";

// // const ExportClientsModal = ({ onClose, clients }) => {
// //   // All possible exportable fields
// //   const fields = {
// //     standard: [
// //       { key: "company", label: "Client Name" },
// //       { key: "date", label: "Date Created" },
// //       { key: "category", label: "Category" },
// //       { key: "owner", label: "Contact Name" },
// //       { key: "email", label: "Contact Email" },
// //       { key: "billing_address.telephone", label: "Telephone" },
// //       { key: "billing_address.website", label: "Website" },
// //       { key: "billing_address.vat_number", label: "VAT/TAX Number" },
// //       { key: "billing_address.street", label: "Street" },
// //       { key: "billing_address.city", label: "City" },
// //       { key: "billing_address.state", label: "State" },
// //       { key: "billing_address.zip", label: "Zip Code" },
// //       { key: "billing_address.country", label: "Country" },
// //       { key: "invoices", label: "Invoices" },
// //       { key: "payments", label: "Payments" },
// //       { key: "status", label: "Status" },
// //     ],
// //     custom: [
// //       { key: "more.vat", label: "VAT" },
// //       { key: "more.last_project", label: "Last Project" },
// //       { key: "more.Comment", label: "Comment" },
// //       { key: "more.project_type", label: "Project Type" },
// //     ],
// //   };

// //   // Store only keys in state
// //   const [selectedFields, setSelectedFields] = useState([
// //     ...fields.standard.map((f) => f.key),
// //     ...fields.custom.map((f) => f.key),
// //   ]);

// //   const toggleField = (key) => {
// //     setSelectedFields((prev) =>
// //       prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
// //     );
// //   };

// //   const handleExport = () => {
// //     const filteredData = clients.map((client) => {
// //       let obj = {};
// //       selectedFields.forEach((fieldKey) => {
// //         const keys = fieldKey.split(".");
// //         let value = client;
// //         for (let k of keys) {
// //           value = value ? value[k] : "";
// //         }
// //         obj[fieldKey] = value || "";
// //       });
// //       return obj;
// //     });

// //     const worksheet = XLSX.utils.json_to_sheet(filteredData);
// //     const workbook = XLSX.utils.book_new();
// //     XLSX.utils.book_append_sheet(workbook, worksheet, "Clients");

// //     const excelBuffer = XLSX.write(workbook, {
// //       bookType: "xlsx",
// //       type: "array",
// //     });
// //     saveAs(
// //       new Blob([excelBuffer], { type: "application/octet-stream" }),
// //       "clients.xlsx"
// //     );

// //     onClose();
// //   };

// //   return (
// //     <div className="export-overlay">
// //       <div className="export-modal">
// //         <div className="export-head">
// //           <div className="export-header">
// //             <div className="export-title">
// //               <MdOutlineFileUpload size={35} />
// //               <p>Export Clients</p>
// //             </div>
// //           </div>
// //           <button className="close-btn" onClick={onClose}>
// //             <IoCloseSharp />
// //           </button>
// //         </div>

// //         <h4>Standard Fields</h4>
// //         <div className="fields-container">
// //           {fields.standard.map(({ key, label }) => (
// //             <label key={key} className="checkbox-label">
// //               <input
// //                 type="checkbox"
// //                 checked={selectedFields.includes(key)}
// //                 onChange={() => toggleField(key)}
// //               />
// //               {label}
// //             </label>
// //           ))}
// //         </div>

// //         <h4>Custom Fields</h4>
// //         <div className="fields-container">
// //           {fields.custom.map(({ key, label }) => (
// //             <label key={key} className="checkbox-label">
// //               <input
// //                 type="checkbox"
// //                 checked={selectedFields.includes(key)}
// //                 onChange={() => toggleField(key)}
// //               />
// //               {label}
// //             </label>
// //           ))}
// //         </div>

// //         <div className="export-footer">
// //           <button className="export-btn" onClick={handleExport}>
// //             Export
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExportClientsModal;

// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import { Drawer, Checkbox, Button, Typography, Divider, Space } from "antd";
// import { MdOutlineFileUpload } from "react-icons/md";
// import { IoCloseSharp } from "react-icons/io5";

// const { Title } = Typography;

// const ExportClientsModal = ({ visible, onClose, clients }) => {
//   // All possible exportable fields
//   const fields = {
//     standard: [
//       { key: "company", label: "Client Name" },
//       { key: "date", label: "Date Created" },
//       { key: "category", label: "Category" },
//       { key: "owner", label: "Contact Name" },
//       { key: "email", label: "Contact Email" },
//       { key: "billing_address.telephone", label: "Telephone" },
//       { key: "billing_address.website", label: "Website" },
//       { key: "billing_address.vat_number", label: "VAT/TAX Number" },
//       { key: "billing_address.street", label: "Street" },
//       { key: "billing_address.city", label: "City" },
//       { key: "billing_address.state", label: "State" },
//       { key: "billing_address.zip", label: "Zip Code" },
//       { key: "billing_address.country", label: "Country" },
//       { key: "invoices", label: "Invoices" },
//       { key: "payments", label: "Payments" },
//       { key: "status", label: "Status" },
//     ],
//     custom: [
//       { key: "more.vat", label: "VAT" },
//       { key: "more.last_project", label: "Last Project" },
//       { key: "more.Comment", label: "Comment" },
//       { key: "more.project_type", label: "Project Type" },
//     ],
//   };

//   // Store only keys in state
//   const [selectedFields, setSelectedFields] = useState([
//     ...fields.standard.map((f) => f.key),
//     ...fields.custom.map((f) => f.key),
//   ]);

//   const toggleField = (key) => {
//     setSelectedFields((prev) =>
//       prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
//     );
//   };

//   const handleExport = () => {
//     const filteredData = clients.map((client) => {
//       let obj = {};
//       selectedFields.forEach((fieldKey) => {
//         const keys = fieldKey.split(".");
//         let value = client;
//         for (let k of keys) {
//           value = value ? value[k] : "";
//         }
//         obj[fieldKey] = value || "";
//       });
//       return obj;
//     });

//     const worksheet = XLSX.utils.json_to_sheet(filteredData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Clients");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });
//     saveAs(
//       new Blob([excelBuffer], { type: "application/octet-stream" }),
//       "clients.xlsx"
//     );

//     onClose();
//   };

//   return (
//     <Drawer
//       title={
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <MdOutlineFileUpload size={25} />
//           <span>Export Clients</span>
//         </div>
//       }
//       placement="right"
//       onClose={onClose}
//       open={visible}
//       width={350}
//       closeIcon={<IoCloseSharp style={{ fontSize: 20, color: "#555" }} />}
//       footer={
//         <Space style={{ float: "right" }}>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button
//             type="primary"
//             onClick={handleExport}
//             disabled={selectedFields.length === 0}
//           >
//             Export
//           </Button>
//         </Space>
//       }
//     >
//       <Title level={5}>Standard Fields</Title>
//       <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
//         {fields.standard.map(({ key, label }) => (
//           <Checkbox
//             key={key}
//             checked={selectedFields.includes(key)}
//             onChange={() => toggleField(key)}
//           >
//             {label}
//           </Checkbox>
//         ))}
//       </div>

//       <Divider />

//       <Title level={5}>Custom Fields</Title>
//       <div style={{ display: "grid", gap: "8px" }}>
//         {fields.custom.map(({ key, label }) => (
//           <Checkbox
//             key={key}
//             checked={selectedFields.includes(key)}
//             onChange={() => toggleField(key)}
//           >
//             {label}
//           </Checkbox>
//         ))}
//       </div>
//     </Drawer>
//   );
// };

// export default ExportClientsModal;
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  Drawer,
  Checkbox,
  Button,
  Typography,
  Divider,
  Space,
} from "antd";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const { Title } = Typography;

const ExportClientsModal = ({ visible, onClose, clients }) => {
  const fields = {
    standard: [
      { key: "company", label: "Client Name" },
      { key: "date", label: "Date Created" },
      { key: "category", label: "Category" },
      { key: "owner", label: "Contact Name" },
      { key: "email", label: "Contact Email" },
      { key: "billing_address.telephone", label: "Telephone" },
      { key: "billing_address.website", label: "Website" },
      { key: "billing_address.vat_number", label: "VAT/TAX Number" },
      { key: "billing_address.street", label: "Street" },
      { key: "billing_address.city", label: "City" },
      { key: "billing_address.state", label: "State" },
      { key: "billing_address.zip", label: "Zip Code" },
      { key: "billing_address.country", label: "Country" },
      { key: "invoices", label: "Invoices" },
      { key: "payments", label: "Payments" },
      { key: "status", label: "Status" },
    ],
    custom: [
      { key: "more.vat", label: "VAT" },
      { key: "more.last_project", label: "Last Project" },
      { key: "more.Comment", label: "Comment" },
      { key: "more.project_type", label: "Project Type" },
    ],
  };

  const [selectedFields, setSelectedFields] = useState([
    ...fields.standard.map((f) => f.key),
    ...fields.custom.map((f) => f.key),
  ]);

  const toggleField = (key) => {
    setSelectedFields((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const handleExport = () => {
    const filteredData = clients.map((client) => {
      let obj = {};
      selectedFields.forEach((fieldKey) => {
        const keys = fieldKey.split(".");
        let value = client;
        for (let k of keys) {
          value = value ? value[k] : "";
        }
        obj[fieldKey] = value || "";
      });
      return obj;
    });

    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Clients");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAs(
      new Blob([excelBuffer], { type: "application/octet-stream" }),
      "clients.xlsx"
    );

    onClose();
  };

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={visible}
      width={350}
      closable={false} 
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <MdOutlineFileUpload size={26} color="white" />
            <span style={{ fontSize: "20px", fontWeight: 600 }}>
              Export Clients
            </span>
          </div>
      }
      headerStyle={{
              background: "#3bbeffff",
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
          <Button onClick={onClose}>Cancel</Button>
          <Button
            type="primary"
            onClick={handleExport}
            disabled={selectedFields.length === 0}
          >
            Export
          </Button>
        </Space>
      }
    >
      <Title level={5}>Standard Fields</Title>
      <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }} className="fields-container">
        {fields.standard.map(({ key, label }) => (
          <Checkbox
            key={key}
            checked={selectedFields.includes(key)}
            onChange={() => toggleField(key)}
          >
            {label}
          </Checkbox>
        ))}
      </div>

      <Divider />

      <Title level={5}>Custom Fields</Title>
      <div style={{ display: "grid", gap: "8px" }}>
        {fields.custom.map(({ key, label }) => (
          <Checkbox
            key={key}
            checked={selectedFields.includes(key)}
            onChange={() => toggleField(key)}
          >
            {label}
          </Checkbox>
        ))}
      </div>
    </Drawer>
  );
};

export default ExportClientsModal;
