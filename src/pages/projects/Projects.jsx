import React, { useState } from "react";
import "./Projects.css";
import { SearchOutlined } from "@ant-design/icons";
import { SlPrinter, SlUser } from "react-icons/sl";
import {
  TfiArchive,
  TfiLayoutGrid2,
  TfiPin2,
  TfiViewListAlt,
} from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import dayjs from "dayjs";
import {
  Table,
  Tag,
  Progress,
  Avatar,
  Button,
  Space,
  Menu,
  Dropdown,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  UserOutlined,
  PushpinOutlined,
  PushpinFilled,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
import { IoTrendingUpSharp } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { VscFilter } from "react-icons/vsc";
import { BsCreditCard2Front, BsUpload } from "react-icons/bs";
import { HiOutlineCreditCard } from "react-icons/hi";
import { GoNote } from "react-icons/go";
import FilterProjects from "../../components/projects/FilterProjects";
import AddProjectModal from "../../components/projects/AddProjects";

const projects = [
  {
    id: 63,
    title: "Website landing page",
    client: "House & Home Co",
    start: "06-03-2025",
    due: "---",
    tags: ["wordpress-theme"],
    progress: 60,
    team: ["Annie Milton", "Steven Mallet"],
  },
  {
    id: 55,
    title: "Blog Post - 10 ways...",
    client: "Malvo Holidays Co",
    start: "03-12-2025",
    due: "03-25-2025",
    tags: ["seo"],
    progress: 40,
    team: ["Edwin Cook", "Annie Milton", "Steven Mallet"],
  },
  {
    id: 50,
    title: "Logo design",
    client: "Fast Applications Inc",
    start: "07-12-2025",
    due: "08-05-2025",
    tags: ["logo"],
    progress: 100,
    team: ["Annie Milton", "Faith Hamilton", "Steven Mallet"],
  },
  {
    id: 62,
    title: "WordPress Landing Page",
    client: "Rapid Software Inc",
    start: "07-09-2025",
    due: "07-31-2025",
    tags: ["graphic-design"],
    progress: 100,
    team: ["Steven Mallet", "Faith Hamilton"],
  },
];

const ProjectsPage = () => {
  const [pinned, setPinned] = useState({});
  const [starred, setStarred] = useState({});
  const [onSelect, setOnSelect] = useState([]);
  const [projectSD, setProjectSD] = useState(
    projects.map((c) => ({ ...c, pinned: false }))
  );
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [showStats, setShowStats] = useState(true);
  const [showAddProject, setShowAddProject] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    client: "",
    startDateRange: null,
    dueDateRange: null,
    team: "",
    tags: "",
    status: "",
  });

   const handleAddProject = (newProject) => {
    setProjectSD((prev) => [newProject, ...prev]); 
  };

  const filteredClients = projectSD
    .filter((p) =>
      Object.values(p).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    )
    .filter((p) => (filters.client ? p.client === filters.client : true))
    .filter((p) => (filters.team ? p.team.includes(filters.team) : true))
    .filter((p) => {
      if (filters.status === "inProgress") {
        return p.progress > 0 && p.progress < 100;
      }
      if (filters.status === "onHold") {
        return p.progress === 0;
      }
      if (filters.status === "completed") {
        return p.progress === 100;
      }
      return true;
    })
    .filter((p) => (filters.tags ? p.tags.includes(filters.tags) : true))
    .filter((p) => {
      if (filters.startDate) {
        const projectStart = dayjs(p.start, "MM-DD-YYYY");
        return projectStart.isSame(filters.startDate, "day");
      }
      return true;
    })
    .filter((p) => {
      if (filters.dueDate) {
        if (p.due === "---") return false;
        const projectDue = dayjs(p.due, "MM-DD-YYYY");
        return projectDue.isSame(filters.dueDate, "day");
      }
      return true;
    })

    .sort((a, b) => {
      if (a.pinned === b.pinned) return 0;
      return a.pinned ? -1 : 1;
    });


  const rowSelection = {
    selectedRowKeys: onSelect,
    onChange: (selectedKeys) => {
      setOnSelect(selectedKeys);
    },
  };

  const handlePinClick = (id) => {
    setProjectSD((prev) =>
      prev.map((c) => (c.id === id ? { ...c, pinned: !c.pinned } : c))
    );
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Title",
      dataIndex: "title",
      render: (text) => <span className="project-title-link">{text}</span>,
    },
    {
      title: "Client",
      dataIndex: "client",
    },
    {
      title: "Start Date",
      dataIndex: "start",
    },
    {
      title: "Due Date",
      dataIndex: "due",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      render: (tags) =>
        tags.map((tag) => (
          <Tag color="default" key={tag} className="custom-tag">
            {tag}
          </Tag>
        )),
    },
    {
      title: "Progress",
      dataIndex: "progress",
      render: (value) => (
        <Progress percent={value} size="small" showInfo={false} />
      ),
    },
    {
      title: "Team",
      dataIndex: "team",
      render: (team) => (
        <Avatar.Group max={{ count: 3 }}>
          {team.map((m, i) => (
            <Avatar key={i} style={{ backgroundColor: "#2563eb" }}>
              {m.charAt(0).toUpperCase()}
            </Avatar>
          ))}
        </Avatar.Group>
      ),
    },
    {
      title: "Action",
      render: (_, record) => (
        <Space>
          <Button type="text" icon={<DeleteOutlined />} />
          <Button type="text" icon={<EditOutlined />} />
          <Button type="text" icon={<UserOutlined />} />
          <Button
            type="text"
            icon={<TfiPin2 />}
            className={`action-btn ping ${record.pinned ? "pinned" : ""}`}
            onClick={() => handlePinClick(record.id)}
          />
          <Button
            type="text"
            icon={starred[record.id] ? <StarFilled /> : <StarOutlined />}
            onClick={() =>
              setStarred({ ...starred, [record.id]: !starred[record.id] })
            }
          />
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu
      onClick={(e) => setViewMode(e.key)}
      items={[
        {
          key: "list",
          label: "List View",
          icon: <TfiViewListAlt />,
        },
        {
          key: "card",
          label: "Card View",
          icon: <GoNote />,
        },
      ]}
    />
  );

  return (
    <div className="page">
      <div className="container">
        {/* <h2 className="page-title">Projects</h2> */}
        <div className="client-header">
          <h1 className="page-title">Projects</h1>
          <p className="breadcrumb">APP &gt; PROJECTS</p>
        </div>

        <div className="project-actions">
          <div className="search-bar">
            <SearchOutlined size={25} />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button>
            <TfiArchive
              size={25}
              style={{ marginLeft: "-3px" }}
              className="icon"
            />
            <span className="tooltip">Show Archieved Projects</span>
          </button>
          <button>
            <SlUser size={25} style={{ marginLeft: "-3px" }} className="icon" />
            <span className="tooltip">My Projects</span>
          </button>
          <Dropdown overlay={menu} trigger={["click"]}>
            <button>
              <TfiLayoutGrid2
                size={25}
                style={{ marginLeft: "-4px" }}
                className="icon"
              />
              <span className="tooltip">View Layout</span>
            </button>
          </Dropdown>
          <button onClick={() => setShowStats(!showStats)}>
            <IoTrendingUpSharp
              size={30}
              style={{ marginLeft: "-8px" }}
              className="icon"
            />
            <span className="tooltip">Quick Stats</span>
          </button>
          <button onClick={() => setFilterOpen(true)}>
            <VscFilter
              size={25}
              style={{ marginLeft: "-4px" }}
              className="icon"
            />
            <span className="tooltip">Filter</span>
          </button>
          <button>
            <BsUpload
              size={25}
              style={{ marginLeft: "-4px" }}
              className="icon"
            />
            <span className="tooltip">Export Projects</span>
          </button>
          <button>
            <SlPrinter
              size={25}
              style={{ marginLeft: "-3px" }}
              className="icon"
            />
            <span className="tooltip">Print</span>
          </button>
          <div className="plus-btn" onClick={() => setShowAddProject(true)}>
            <FiPlus size={28} />
            <span className="tooltip">Add New Project</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      {showStats && (
        <div className="stats-row">
          <div className="stat-box">
            <p className="value">{projects.length}</p>
            <p className="label">All</p>
            <div className="card-line blue"></div>
          </div>
          <div className="stat-box">
            <p className="value">
              {
                projects.filter((p) => p.progress > 0 && p.progress < 100)
                  .length
              }
            </p>
            <p className="label">In Progress</p>
            <div className="card-line purple"></div>
          </div>
          <div className="stat-box">
            <p className="value">
              {projects.filter((p) => p.progress === 0).length}
            </p>
            <p className="label">On Hold</p>
            <div className="card-line red"></div>
          </div>
          <div className="stat-box">
            <p className="value">
              {projects.filter((p) => p.progress === 100).length}
            </p>
            <p className="label">Completed</p>
            <div className="card-line green"></div>
          </div>
        </div>
      )}

      {onSelect.length > 0 && (
        <div className="toolbar-box">
          <Button danger>Delete</Button>
          <Button>Change Category</Button>
          <Button>Change Status</Button>
          <Button>Update Progress</Button>
          <Button>Assign Users</Button>
          <Button>Archive</Button>
          <Button>Restore</Button>
          <Button>Stop All Timers</Button>
        </div>
      )}

      {filteredClients.length > 0 ? (
        viewMode === "list" ? (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={filteredClients}
            rowKey="id"
            pagination={false}
            bordered={false}
          />
        ) : (
          <div className="card-view">
            {filteredClients.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>
                  <strong>Client:</strong> {project.client}
                </p>
                <p>
                  <strong>Start:</strong> {project.start}
                </p>
                <p>
                  <strong>Due:</strong> {project.due}
                </p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <Progress percent={project.progress} size="small" />
                <Avatar.Group max={{ count: 3 }}>
                  {project.team.map((m, i) => (
                    <Avatar key={i} style={{ backgroundColor: "#2563eb" }}>
                      {m}
                    </Avatar>
                  ))}
                </Avatar.Group>
                <div className="actions">
                  <Button
                    type="text"
                    className={`action-btn ping ${
                      project.pinned ? "pinned" : ""
                    }`}
                    onClick={() => handlePinClick(project.id)}
                    icon={<TfiPin2 />}
                  />
                  <Button type="text" icon={<EditOutlined />} />
                  <Button type="text" icon={<UserOutlined />} />
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No results found
        </div>
      )}

      <FilterProjects
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        projects={projects}
        filters={filters}
        setFilters={setFilters}
      />

      <AddProjectModal
        visible={showAddProject}
        onClose={() => setShowAddProject(false)}
        onAdd={handleAddProject}
        clients={[...new Set(projects.map((p) => p.client))]} 
      />
    </div>
  );
};

export default ProjectsPage;
