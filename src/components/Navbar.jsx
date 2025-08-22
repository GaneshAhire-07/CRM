import React from "react";
import { FaSearch, FaBell, FaCog, FaCalendar, FaStar } from "react-icons/fa";
import "./Navbar.css";
import { GiAlarmClock } from "react-icons/gi";
import { TfiTimer } from "react-icons/tfi";
import { GrAddCircle } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { PiChatsCircle } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { LuAlarmClock } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { SearchOutlined } from "@ant-design/icons";

const profileDetails = {
  name: "Steven",
  image: "https://i.pravatar.cc/40"
};

const NavBar = ({ toggleSidebar }) => {

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}><LuMenu /></button>
        <div className="search-bar">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="navbar-right">
        <a href="#"><FaRegStar /></a>
        <a href="#"><LuAlarmClock/></a>
        <a href="#features"><IoNotificationsOutline /></a>
        <a href="#reminder"><TfiTimer /></a>
        <a href="#cal"><MdOutlineCalendarToday /></a>
        <a href="#"><PiChatsCircle /></a>
        <a href="#settings"><SlSettings /></a>
        <a href="#"><GrAddCircle/></a>
        <div className="profile">
          <img
            src={profileDetails.image}
            alt="profile"
            className="profile-img"
          />
          <span>{profileDetails.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
