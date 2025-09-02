import { useState } from "react";
import {
  Search,
  Star,
  X,
  Users,
  Folder,
  CheckSquare,
  MessageSquare,
  StickyNote,
} from "lucide-react";
import "./StarredProjects.css";
import { useNavigate } from "react-router-dom";

export default function StarredProjects() {
  const [sortBy, setSortBy] = useState("Project Title");
  const [activeTab, setActiveTab] = useState("projects");
  const navigate = useNavigate();
  // 👉 Mapping for tab → icon + label
  const tabConfig = {
    clients: {
      icon: <Users className="h-5 w-5 text-sky-600" />,
      label: "Clients",
    },
    projects: {
      icon: <Folder className="h-5 w-5 text-sky-600" />,
      label: "Projects",
    },
    tasks: {
      icon: <CheckSquare className="h-5 w-5 text-sky-600" />,
      label: "Tasks",
    },
    comments: {
      icon: <MessageSquare className="h-5 w-5 text-sky-600" />,
      label: "Project Comments",
    },
    notes: {
      icon: <StickyNote className="h-5 w-5 text-sky-600" />,
      label: "Notes",
    },
  };

  return (
    <div className="starred-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <Star className="icon" />
            <span className="header-title">Starred</span>
          </div>
          <X
            className="close-btn cursor-pointer"
            onClick={() => navigate("/staff")}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="nav">
        <div className="nav-items">
          {Object.keys(tabConfig).map((tab) => (
            <span
              key={tab}
              className={`nav-link text-white ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tabConfig[tab].label}
            </span>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="content">
        <div className="projects-header">
          <div className="projects-left">
            {/* 👉 Auto-updated Tab Title with Icon + Space */}
            <span className="projects-title flex items-center gap-3">
              {tabConfig[activeTab].icon}
              {tabConfig[activeTab].label}
            </span>
          </div>
          <div className="projects-right">
            <span className="sort-text">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option>Client Name</option>
              <option>Last Seen</option>
            </select>
          </div>
        </div>

        <div className="no-records">
          <div className="search-wrapper">
            <div className="search-circle">
              <Search className="search-icon" strokeWidth={2} />
            </div>
          </div>
          <h3 className="no-records-text">No records were found</h3>
        </div>
      </div>
    </div>
  );
}
