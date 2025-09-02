import React, { useState } from "react";
import "./ImportClient.css";
import csv from "../../Assets/client/csv.png";
import xlsx from "../../Assets/client/xlsx.png";
import { BsFiletypeCsv, BsFiletypeXlsx } from "react-icons/bs";

const ImportClientsModal = ({ onClose, onImport }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleImport = () => {
    if (file) {
      onImport([{ id: Date.now(), company: file.name }]); // demo new client
    }
  };

  return (
    <div className="import-overlay">
      <div className="import-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="modal-title">Import Clients</h2>

        <div className="file-icons">
          {/* <div className="file-icon csv">CSV</div>
          <div className="file-icon xlsx">XLSX</div> */}
          {/* <img src={csv} alt="CSV Icon" className="file-icon" />
          <img src={xlsx} alt="XLSX Icon" className="file-icon" /> */}
          <BsFiletypeCsv size={100} color="#444444ff" />
          <BsFiletypeXlsx size={100} color="#00c896" />
        </div>

        <div className="upload-box">
          <input type="file" id="fileUpload" accept=".csv,.xlsx" onChange={handleFileChange} hidden />
          <label htmlFor="fileUpload" className="upload-label">
            Drop a single file or click to upload <br />
            <span>(CSV or XLSX)</span>
          </label>
        </div>

        {file && <p className="file-name">Selected: {file.name}</p>}

        <div className="sample-links">
          <p>
            You can download sample importing files below <br />
            <a href="#">CSV Sample</a> | <a href="#">XLSX Sample</a>
          </p>
        </div>

        <div className="modal-actions">
          <button className="import-btn" onClick={handleImport}>Import</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ImportClientsModal;
