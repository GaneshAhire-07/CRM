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
    { user: "Steven", task: "Task #143", action: "Logo designs x 3" },
    {
      user: "Steven",
      type: "file",
      lead: "Lead #8",
      description: "Android stock taking apps",
      fileName: "prototype-1.jpg",
      fileUrl: "/uploads/prototype-1.jpg",
    },
    {
      user: "Steven",
      type: "file",
      lead: "Lead #11",
      description: "Custom landing page with timer",
      fileName: "wordpress-theme-design-2.jpg",
      fileUrl: "/uploads/wordpress-theme-design-2.jpg",
    },
    {
      user: "Steven",
      type: "file",
      lead: "Lead #6",
      description: "Login page redesign",
      fileName: "sample-logo-3.jpg",
      fileUrl: "/uploads/sample-logo-3.jpg",
    },
    {
      user: "Steven",
      type: "status",
      lead: "Lead #7",
      description: "Mobile banking app development",
    },
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

              {/* ✅ Conditional Rendering */}
              {"task" in activity ? (
                <p className="activity-task">
                  Assigned you to a task (
                  <span className="task-link">{activity.task}</span>) –{" "}
                  <span className="task-link">{activity.action}</span>
                </p>
              ) : activity.type === "file" ? (
                <p className="activity-task">
                  Attached a file (<span className="task-link">{activity.lead}</span>) –{" "}
                  <a
                    href={activity.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="desc-link"
                  >
                    {activity.description}
                  </a>
                  <br />
                  <a
                    href={activity.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="file-link"
                  >
                    {activity.fileName}
                  </a>
                </p>
              ) : activity.type === "status" ? (
                <p className="activity-task">
                  Changed lead status (<span className="task-link">{activity.lead}</span>) –{" "}
                  <a href="#" className="desc-link">
                    {activity.description}
                  </a>
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestActivity;
