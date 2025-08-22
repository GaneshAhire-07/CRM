import React from "react";
import "./DashboardCard.css";

const ClientCard = ({ value, label, color }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h3>{value}</h3>
          <p>{label}</p>
        </div>
      </div>
      <div className="card-border" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ClientCard;
