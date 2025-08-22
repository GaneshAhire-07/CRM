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
              src="https://i.pravatar.cc/40"
              alt="user"
              className="activity-avatar"
            />
            <div className="activity-details">
              <p className="activity-text">
                <strong>{activity.user}</strong> assigned you to a task (
                <span className="task-link">{activity.task}</span>) -{" "}
                {activity.action}
              </p>
              <p className="activity-time">2 hours ago</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestActivity;
