import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ amount, label, icon, color }) => {
  return (
    <div className="dashboard-card">
      <div className="card-content">
        <div className="card-text">
          <h3>{amount}</h3>
          <p>{label}</p>
        </div>
        <div className="card-icon" style={{ color: color }}>
          {icon}
        </div>
      </div>
      <div className="card-border" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default DashboardCard;
