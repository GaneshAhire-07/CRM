import React from "react";
import DashboardCard from "../../components/DashboardCard";
import LatestActivity from "../../components/staff/LatestActivity";
import MyProjects from "../../components/staff/MyProjects";
import { FaFolder, FaPlus, FaArrowRight, FaClock } from "react-icons/fa";
import "./StaffPage.css";

const StaffPage = () => {
  return (
    <div className="staff-page-content">
      <div className="stats-container">
        <DashboardCard
          amount="4"
          label="Projects - Pending"
          icon={<FaFolder />}
          color="#a777e3"
        />
        <DashboardCard
          amount="4"
          label="Tasks - New"
          icon={<FaPlus />}
          color="#20c997"
        />
        <DashboardCard
          amount="7"
          label="Tasks - In Progress"
          icon={<FaArrowRight />}
          color="#5c9cec"
        />
        <DashboardCard
          amount="3"
          label="Tasks - Completed"
          icon={<FaClock />}
          color="#f68444"
        />
      </div>
      <div className="staff-main-content">
        <LatestActivity />
        <MyProjects />
      </div>
    </div>
  );
};

export default StaffPage;