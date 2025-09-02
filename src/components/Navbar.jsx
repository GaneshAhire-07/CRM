import React, { useState } from "react";
import "./Navbar.css";
import { TfiTimer } from "react-icons/tfi";
import { GrAddCircle } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa6";
import { IoNotificationsOutline, IoClose } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { PiChatsCircle } from "react-icons/pi";
import { LuAlarmClock, LuMenu } from "react-icons/lu";
import { SearchOutlined } from "@ant-design/icons";
import ChatWindow from "./ChatWindow"; // ChatWindow component import केला आहे
import { FaRegFolder } from "react-icons/fa"; // Projects
import { PiUsersLight } from "react-icons/pi"; // Clients
import { MdOutlineListAlt } from "react-icons/md"; // Tasks
import { BiCommentDetail } from "react-icons/bi"; // Project Comments
import { LuNotebook } from "react-icons/lu"; // Notes
import { LuPhoneCall } from "react-icons/lu"; // Lead
import { TbReceipt } from "react-icons/tb"; // Expense
import { BiMessageDetail } from "react-icons/bi"; // Ticket
const profileDetails = {
  name: "Steven",
  image: "https://i.pravatar.cc/40",
};

const NavBar = ({ toggleSidebar, onProfileClick }) => {
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isTimeTrackerOpen, setIsTimeTrackerOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  // Chat window साठी state जोडले आहे
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [activeReminderTab, setActiveReminderTab] = useState("due");
  const [activeNotificationTab, setActiveNotificationTab] = useState("unread");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarView, setCalendarView] = useState("Month");

  // Currently logged-in user
  const currentUser = { id: 1, name: "Steven" };

  // Calendar helper functions
  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Previous month's trailing days
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    const prevMonthDays = prevMonth.getDate();

    const firstDayIndex = firstDay === 0 ? 6 : firstDay - 1;
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${prevMonthDays - i}`}
          className="calendar-day prev-month"
        >
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`calendar-day ${isToday(day) ? "today" : ""}`}
        >
          {day}
        </div>
      );
    }

    // Next month's leading days
    const totalCells = days.length;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div key={`next-${day}`} className="calendar-day next-month">
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="navbar">
      {/* Left section */}
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <LuMenu />
        </button>
        <div className="search-bar">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* Right section */}
      <div className="navbar-right">
        {/* Bookmark dropdown */}
        <div className="bookmark-container">
          <button
            onClick={() => setIsBookmarkOpen(!isBookmarkOpen)}
            className="icon-btn"
          >
            <FaRegStar />
          </button>
          {isBookmarkOpen && (
            <div className="bookmark-dropdown">
              <div className="dropdown-header"></div>
              <ul className="bookmark-list">
                <li>
                  <a href="/starred-projects">
                    <FaRegFolder className="bookmark-icon" /> Projects
                  </a>
                </li>
                <li>
                  <a href="/clients">
                    <PiUsersLight className="bookmark-icon" /> Clients
                  </a>
                </li>
                <li>
                  <a href="/tasks">
                    <MdOutlineListAlt className="bookmark-icon" /> Tasks
                  </a>
                </li>
                <li>
                  <a href="/comments">
                    <BiCommentDetail className="bookmark-icon" /> Project
                    Comments
                  </a>
                </li>
                <li>
                  <a href="/notes">
                    <LuNotebook className="bookmark-icon" /> Notes
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Timer/Reminders dropdown */}
        <div className="timer-container">
          <button
            onClick={() => setIsTimerOpen(!isTimerOpen)}
            className="icon-btn"
          >
            <LuAlarmClock />
          </button>
          {isTimerOpen && (
            <div className="reminders-dropdown">
              {/* Header */}
              <div className="reminders-header">
                <div className="header-left">
                  <LuAlarmClock className="reminder-icon" />
                  <h3>Reminders</h3>
                </div>
                <button
                  className="close-btn"
                  onClick={() => setIsTimerOpen(false)}
                >
                  <IoClose />
                </button>
              </div>

              {/* Tabs */}
              <div className="reminders-tabs">
                <button
                  className={`tab ${
                    activeReminderTab === "due" ? "active" : ""
                  }`}
                  onClick={() => setActiveReminderTab("due")}
                >
                  Due Reminders
                </button>
                <button
                  className={`tab ${
                    activeReminderTab === "pending" ? "active" : ""
                  }`}
                  onClick={() => setActiveReminderTab("pending")}
                >
                  Pending Reminders
                </button>
              </div>

              {/* Content */}
              <div className="reminders-content">
                <div className="empty-state">
                  <div className="empty-illustration">
                    <svg
                      width="200"
                      height="150"
                      viewBox="0 0 200 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 130C20 130 50 100 100 110C150 120 180 130 180 130V20C180 20 150 30 100 25C50 20 20 20 20 20V130Z"
                        fill="#E8E5FF"
                      />
                      <circle cx="80" cy="45" r="12" fill="#4A5568" />
                      <rect
                        x="70"
                        y="55"
                        width="20"
                        height="35"
                        rx="10"
                        fill="#E2E8F0"
                      />
                      <rect
                        x="65"
                        y="85"
                        width="10"
                        height="25"
                        rx="5"
                        fill="#4A5568"
                      />
                      <rect
                        x="85"
                        y="85"
                        width="10"
                        height="25"
                        rx="5"
                        fill="#4A5568"
                      />
                      <rect
                        x="95"
                        y="65"
                        width="25"
                        height="20"
                        rx="3"
                        fill="#6366F1"
                      />
                      <rect
                        x="98"
                        y="68"
                        width="19"
                        height="3"
                        fill="#8B5CF6"
                      />
                      <rect
                        x="98"
                        y="74"
                        width="15"
                        height="2"
                        fill="#8B5CF6"
                      />
                      <circle cx="130" cy="35" r="3" fill="#8B5CF6" />
                      <circle cx="145" cy="50" r="2" fill="#6366F1" />
                      <circle cx="160" cy="40" r="2.5" fill="#A855F7" />
                    </svg>
                  </div>
                  <p className="empty-message">
                    {activeReminderTab === "due"
                      ? "No due reminders at the moment"
                      : "No pending reminders to show"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Notifications dropdown */}
        <div className="notifications-container">
          <button
            className="icon-btn"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <IoNotificationsOutline />
          </button>
          {isNotificationOpen && (
            <div className="notifications-dropdown">
              {/* Header */}
              <div className="notifications-header">
                <div className="header-left">
                  <IoNotificationsOutline className="notification-icon" />
                  <h3>Notifications</h3>
                </div>
                <button
                  className="close-btn"
                  onClick={() => setIsNotificationOpen(false)}
                >
                  <IoClose />
                </button>
              </div>

              {/* Tabs */}
              <div className="notifications-tabs">
                <button
                  className={`tab ${
                    activeNotificationTab === "unread" ? "active" : ""
                  }`}
                  onClick={() => setActiveNotificationTab("unread")}
                >
                  Unread
                </button>
                <button
                  className={`tab ${
                    activeNotificationTab === "all" ? "active" : ""
                  }`}
                  onClick={() => setActiveNotificationTab("all")}
                >
                  All
                </button>
              </div>

              {/* Content */}
              <div className="notifications-content">
                <div className="notification-item">
                  <img
                    src="https://i.pravatar.cc/40?img=1"
                    alt="Steven"
                    className="notification-avatar"
                  />
                  <div className="notification-details">
                    <div className="notification-header">
                      <span className="notification-user">Steven</span>
                      <span className="notification-time">2 hours ago</span>
                      <div className="notification-status unread"></div>
                    </div>
                    <div className="notification-action">
                      Posted a new comment
                    </div>
                    <div className="notification-target">
                      (Lead #14) - New Coming Soon Page
                    </div>
                    <div className="notification-message">
                      Peter, Can we schedule a Zoom meeting next week to discuss
                      this lead?
                    </div>
                  </div>
                </div>

                <div className="notification-item">
                  <img
                    src="https://i.pravatar.cc/40?img=3"
                    alt="Mike"
                    className="notification-avatar"
                  />
                  <div className="notification-details">
                    <div className="notification-header">
                      <span className="notification-user">Mike</span>
                      <span className="notification-time">2 hours ago</span>
                      <div className="notification-status unread"></div>
                    </div>
                    <div className="notification-action">
                      Opened a new support ticket
                    </div>
                    <div className="notification-target link">
                      New content is missing images
                    </div>
                  </div>
                </div>

                <div className="notification-item">
                  <img
                    src="https://i.pravatar.cc/40?img=1"
                    alt="Steven"
                    className="notification-avatar"
                  />
                  <div className="notification-details">
                    <div className="notification-header">
                      <span className="notification-user">Steven</span>
                      <span className="notification-time">2 hours ago</span>
                      <div className="notification-status unread"></div>
                    </div>
                    <div className="notification-action">
                      Changed project status
                    </div>
                    <div className="notification-status-change">
                      <span className="status-label">New Status:</span>
                      <span className="status-value">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Time Tracker dropdown */}
        <div className="time-tracker-container">
          <button
            className="icon-btn"
            onClick={() => setIsTimeTrackerOpen(!isTimeTrackerOpen)}
          >
            <TfiTimer />
          </button>
          {isTimeTrackerOpen && (
            <div className="time-tracker-dropdown">
              {/* Header */}
              <div className="time-tracker-header">
                <h3>Record your work time</h3>
                <button
                  className="close-btn-simple"
                  onClick={() => setIsTimeTrackerOpen(false)}
                >
                  <IoClose />
                </button>
              </div>

              <div className="time-tracker-content">
                <div className="form-group">
                  <label className="form-label">My Projects</label>
                  <select className="form-select">
                    <option value="">Select a project</option>
                    <option value="project1">Project Alpha</option>
                    <option value="project2">Project Beta</option>
                    <option value="project3">Project Gamma</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">My Tasks</label>
                  <select className="form-select">
                    <option value="">Select a task</option>
                    <option value="task1">Frontend Development</option>
                    <option value="task2">Backend API</option>
                    <option value="task3">UI Design</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-input"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="time-inputs">
                  <div className="form-group time-group">
                    <input
                      type="number"
                      placeholder="Hrs"
                      className="form-input time-input"
                      min="0"
                      max="23"
                    />
                  </div>
                  <div className="form-group time-group">
                    <input
                      type="number"
                      placeholder="Mins"
                      className="form-input time-input"
                      min="0"
                      max="59"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    className="btn-close"
                    onClick={() => setIsTimeTrackerOpen(false)}
                  >
                    Close
                  </button>
                  <button className="btn-submit">Submit</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Calendar dropdown */}
        <div className="calendar-container">
          <button
            className="icon-btn"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            <MdOutlineCalendarToday />
          </button>
          {isCalendarOpen && (
            <div className="calendar-dropdown">
              <div className="calendar-header">
                <div className="calendar-nav">
                  <button className="nav-btn" onClick={() => navigateMonth(-1)}>
                    ‹
                  </button>
                  <button
                    className="today-btn"
                    onClick={() => setCurrentDate(new Date())}
                  >
                    Today
                  </button>
                  <button className="nav-btn" onClick={() => navigateMonth(1)}>
                    ›
                  </button>
                </div>

                <div className="calendar-title">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </div>

                <div className="calendar-controls">
                  <div className="view-buttons">
                    {["Month", "Week", "Day", "List"].map((view) => (
                      <button
                        key={view}
                        className={`view-btn ${
                          calendarView === view ? "active" : ""
                        }`}
                        onClick={() => setCalendarView(view)}
                      >
                        {view}
                      </button>
                    ))}
                  </div>

                  <button className="add-btn">
                    <GrAddCircle />
                  </button>
                </div>
              </div>

              <div className="calendar-grid">
                <div className="day-headers">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <div key={day} className="day-header">
                        {day}
                      </div>
                    )
                  )}
                </div>

                <div className="calendar-days">{renderCalendarDays()}</div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Button */}
        <button className="icon-btn" onClick={() => setIsChatOpen(true)}>
          <PiChatsCircle />
        </button>

        {/* "Add" dropdown menu */}
        <div className="add-menu-container">
          <button
            className="icon-btn"
            onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}
          >
            <GrAddCircle />
          </button>
          {isAddMenuOpen && (
            <div className="add-menu-dropdown">
              <ul className="bookmark-list">
                <li>
                  <a href="/task">
                    <MdOutlineListAlt className="bookmark-icon" /> Task
                  </a>
                </li>
                <li>
                  <a href="/lead">
                    <LuPhoneCall className="bookmark-icon" /> Lead
                  </a>
                </li>
                <li>
                  <a href="/expense">
                    <TbReceipt className="bookmark-icon" /> Expense
                  </a>
                </li>
                <li>
                  <a href="/ticket">
                    <BiMessageDetail className="bookmark-icon" /> Ticket
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="profile"
          onClick={onProfileClick}
          style={{ cursor: "pointer" }}
        >
          <img
            src={profileDetails.image || "https://via.placeholder.com/40"}
            alt="profile"
            className="profile-img"
          />
          <span>{profileDetails.name}</span>
        </div>
      </div>

      {/* Conditionally render ChatWindow */}
      {isChatOpen && (
        <ChatWindow
          currentUser={currentUser}
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </div>
  );
};

export default NavBar;
