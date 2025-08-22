import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  Label,
} from "recharts";
import "./DashboardChart.css";

const yearlyData = {
  2023: [
    { month: "1", income: 800, expense: 400 },
    { month: "2", income: 1200, expense: 700 },
    { month: "3", income: 2500, expense: 900 },
    { month: "4", income: 1000, expense: 800 },
    { month: "5", income: 900, expense: 850 },
    { month: "6", income: 500, expense: 300 },
    { month: "7", income: 3500, expense: 1200 },
    { month: "8", income: 1800, expense: 1000 },
    { month: "9", income: 950, expense: 700 },
    { month: "10", income: 1200, expense: 600 },
    { month: "11", income: 600, expense: 400 },
    { month: "12", income: 400, expense: 300 },
  ],
  2024: [
    { month: "1", income: 4000, expense: 400 },
    { month: "2", income: 3200, expense: 700 },
    { month: "3", income: 2500, expense: 900 },
    { month: "4", income: 2000, expense: 800 },
    { month: "5", income: 950, expense: 850 },
    { month: "6", income: 1500, expense: 300 },
    { month: "7", income: 3000, expense: 1200 },
    { month: "8", income: 2800, expense: 1000 },
    { month: "9", income: 1950, expense: 700 },
    { month: "10", income: 2200, expense: 600 },
    { month: "11", income: 1600, expense: 400 },
    { month: "12", income: 1400, expense: 300 },
  ],
  2025: [
    { month: "1", income: 1800, expense: 400 },
    { month: "2", income: 1600, expense: 700 },
    { month: "3", income: 2500, expense: 900 },
    { month: "4", income: 1000, expense: 800 },
    { month: "5", income: 2400, expense: 850 },
    { month: "6", income: 1500, expense: 300 },
    { month: "7", income: 4500, expense: 1200 },
    { month: "8", income: 3800, expense: 1000 },
    { month: "9", income: 900, expense: 700 },
    { month: "10", income: 1200, expense: 600 },
    { month: "11", income: 1600, expense: 400 },
    { month: "12", income: 2700, expense: 300 },
  ],
};

const leadData = [
  { name: "New", value: 300 },
  { name: "Disqualified", value: 200 },
  { name: "Qualified", value: 400 },
  { name: "Contacted", value: 250 },
  { name: "Proposal Sent", value: 180 },
  { name: "Converted", value: 300 },
];

const ticketData = [
  { name: "Open", value: 400 },
  { name: "On Hold", value: 300 },
  { name: "Answered", value: 500 },
  { name: "Closed", value: 200 },
];

const COLORS = ["#999", "#f44336", "#2196f3", "#ff9800", "#cddc39", "#4caf50"];
const ticketColors = ["#00c6a9", "#ff9800", "#2196f3", "#757575ff"];

const DashboardCharts = () => {
  const [year, setYear] = useState("2025");
  return (
    <div className="dashboard-charts">
      {/* Income vs Expenses */}
      <div className="chart-card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "#757575ff" }}>Income vs Expenses</h3>
          <div className="chart-legend">
            <p style={{ background: "#00c6a9" }}>Income</p>
            <p style={{ background: "#2196f3" }}>Expenses</p>
          </div>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{
              padding: "5px 10px",
              borderRadius: "3px",
              border: "1px solid #e5e5e5",
            }}
          >
            {Object.keys(yearlyData).map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={yearlyData[year]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Area
              type="monotone"
              dataKey="income"
              stroke="none"
              fill="#00c6a9"
              fillOpacity={0.2}
              baseLine={(d) => d.expense}
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="none"
              fill="#2196f3"
              fillOpacity={0.2}
              baseLine={0}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#00c6a9"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#2196f3"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="chart-summary">
          <div>
            <strong>{year}</strong>
            <br />
            Period
          </div>
          <div>
            <strong>
              ${yearlyData[year].reduce((acc, d) => acc + d.income, 0)}
            </strong>
            <br />
            Income
          </div>
          <div>
            <strong>
              ${yearlyData[year].reduce((acc, d) => acc + d.expense, 0)}
            </strong>
            <br />
            Expenses
          </div>
        </div>
      </div>

      {/* Leads */}
      <div className="chart-card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Leads</h3>
          <h3>This year</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={leadData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={100}
              paddingAngle={4}
            >
              {leadData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                value="Leads"
                position="center"
                style={{
                  fontSize: "12px",
                  color: "#757575ff",
                  fill: "#333",
                }}
              />
            </Pie>
            <Tooltip />
            {/* <Legend /> */}
          </PieChart>
        </ResponsiveContainer>

        <div className="lead-tags">
          <span className="tag new">New</span>
          <span className="tag disqualified">Disqualified</span>
          <span className="tag qualified">Qualified</span>
          <span className="tag contacted">Contacted</span>
          <span className="tag proposal">Proposal Sent</span>
          <span className="tag converted">Converted</span>
        </div>
      </div>
      <div className="chart-card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Tickets</h3>
          <h3>This year</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={ticketData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={100}
              paddingAngle={4}
            >
              {ticketData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={ticketColors[index % ticketColors.length]}
                />
              ))}

              <Label
                value={`lang.no_tickets: ${ticketData.reduce((acc, d) => acc + d.value, 0)}`}
                position="center"
                style={{
                  fontSize: "12px",
                  color: "#757575ff",
                  fill: "#333",
                }}
              />
            </Pie>
            <Tooltip />
            {/* <Legend /> */}
          </PieChart>
        </ResponsiveContainer>

        <div className="lead-tags">

          <div className="pie-legend">
            <p style={{ background: "#00c6a9" }}>
              <div>Open : {ticketData[0].value}</div>
            </p>
            <p style={{ background: "#ff9800" }}>
              <div>On Hold : {ticketData[1].value}</div>
            </p>
            <p style={{ background: "#2196f3" }}>
              <div>Answered : {ticketData[2].value}</div>
            </p>
            <p style={{ background: "#757575ff" }}>
              <div>Closed : {ticketData[3].value}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
