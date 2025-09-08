import React from "react";
import SupportTicketForm from "../../components/SupportTicketForm";
import "./tickets.css";
import { useNavigate } from "react-router-dom";

const CreateTicketPage = () => {
  const navigate = useNavigate();

  const handleTicketSubmit = (ticketData) => {
    console.log("New Ticket Submitted:", ticketData);
    navigate("/staff"); // Or wherever you want to redirect after submission
  };

  const handleClose = () => {
    navigate("/staff"); // Navigate back to the staff page or dashboard
  };

  return (
    <div className="ticket-container">
      <SupportTicketForm onSubmit={handleTicketSubmit} onClose={handleClose} />
    </div>
  );
};

export default CreateTicketPage;
