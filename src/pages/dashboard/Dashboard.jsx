import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import DashboardCard from "../../components/DashboardCard";
import DashboardCharts from "../../components/charts/DashboardChart";
import { HiOutlineCreditCard } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div style={{ display: "flex" }}>
          <DashboardCard
            amount="$320.00"
            label="Payments - Today"
            icon={<HiOutlineCreditCard />}
            color="#00c6a9"
          />
          <DashboardCard
            amount="$175.00"
            label="Invoices - Due"
            icon={<HiOutlineCreditCard />}
            color="#ff9800"
          />
          <DashboardCard
            amount="$1,000.00"
            label="Payments - Month"
            icon={<AiOutlineDollar />}
            color="#2196f3"
          />
          <DashboardCard
            amount="$1,597.40"
            label="Invoices - Overdue"
            icon={<AiOutlineDollar />}
            color="#f44336"
          />
        </div>
        <DashboardCharts />
      </div>
    </div>
  );
};

export default Dashboard;