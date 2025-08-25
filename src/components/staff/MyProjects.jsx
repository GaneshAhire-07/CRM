import React from "react";
import "./MyProjects.css";

const MyProjects = () => {
  const projects = [
    {
      id: 62,
      title: "WordPress Landing Pa...",
      dueDate: "07-31-2025",
      status: "not started",
      link: "https://example.com/project/62",
    },
    {
      id: 59,
      title: "Shopping app develop...",
      dueDate: "10-30-2025",
      status: "not started",
      link: "https://example.com/project/59",
    },
    {
      id: 54,
      title: "Blog Post - 5 Ways t...",
      dueDate: "04-29-2024",
      status: "Completed",
      link: "https://example.com/project/54",
    },
    {
      id: 50,
      title: "Logo design",
      dueDate: "08-05-2025",
      status: "Completed",
      link: "https://example.com/project/50",
    },
    {
      id: 49,
      title: "Cereal box design",
      dueDate: "08-28-2024",
      status: "On Hold",
      link: "https://example.com/project/49",
    },
    {
      id: 48,
      title: "Fruit juice bottle l...",
      dueDate: "09-27-2024",
      status: "In Progress",
      link: "https://example.com/project/48",
    },
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "not started":
        return "status-not-started";
      case "completed":
        return "status-completed";
      case "on hold":
        return "status-on-hold";
      case "in progress":
        return "status-in-progress";
      default:
        return "";
    }
  };

  return (
    <div className="card-container my-projects">
      <h3 className="card-title">My Projects</h3>
      <table className="projects-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>
                {/* Make title clickable */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.title}
                </a>
              </td>
              <td>{project.dueDate}</td>
              <td>
                <span
                  className={`status-badge ${getStatusClass(project.status)}`}
                >
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProjects;