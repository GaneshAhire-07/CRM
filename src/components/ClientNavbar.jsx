import React from "react";
import "./Navbar.css";
import { FaRegStar } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuAlarmClock, LuMenu } from "react-icons/lu";

const profileDetails = {
  name: "Steven",
  image: "https://i.pravatar.cc/40",
};

const ClientNavbar = ({ toggleSidebar, onProfileClick }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <LuMenu />
        </button>
      </div>
      <div className="navbar-right">
        <button className="icon-btn">
          <FaRegStar />
        </button>
        <button className="icon-btn">
          <LuAlarmClock />
        </button>
        <button className="icon-btn">
          <IoNotificationsOutline />
        </button>
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
    </div>
  );
};

export default ClientNavbar;
