import React from "react";
import "./LatestActivity.css";

const LatestActivity = () => {
  const activities = [
    { user: "Steven", task: "Task #104", action: "Initial Draft" },
    { user: "Steven", task: "Task #109", action: "Initial Draft" },
    { user: "Steven", task: "Task #111", action: "Logo designs x 3" },
    { user: "Steven", task: "Task #133", action: "Initial Draft" },
    {
      user: "Steven",
      task: "Task #134",
      action: "Initial design concepts & mockups",
    },
    { user: "Steven", task: "Task #142", action: "Initial Draft" },
  ];

  return (
    <div className="card-container latest-activity">
      <h3 className="card-title">Latest Activity</h3>
      <ul className="activity-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
              alt={activity.user}
              className="activity-avatar"
            />
            <div className="activity-details">
              <p className="activity-text">
                <span className="activity-user">{activity.user}</span>
                <span className="activity-time"> · 2 hours ago</span>
              </p>
              <p className="activity-task">
                Assigned you to a task (
                <span className="task-link">{activity.task}</span>) –{" "}
                <span className="task-link">{activity.action}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestActivity;
