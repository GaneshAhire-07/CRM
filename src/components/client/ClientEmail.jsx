import React, { useState } from "react";
import "./ClientEmail.css";
import { IoCloseSharp } from "react-icons/io5";

const ClientEmail = ({ onSend, client, onClose }) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // API call logic goes here
  };

  return (
    <div className="client-email-overlay">
      <div className="client-email-container">
        <button className="client-email-close" onClick={onClose}>
          <IoCloseSharp />
        </button>
        <h2>Send Email</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>To:</label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default ClientEmail;
