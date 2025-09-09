import React from "react";
import "./Sidebar.css"; // We can reuse the same CSS
import logo_grow from "../Assets/Logo/logo.png";
import {
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineFileText,
  AiOutlineUser,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { TfiFolder } from "react-icons/tfi";
import { Link } from "react-router-dom";

const ClientSidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "" : "close_sidebar"}`}>
      <div className="sidebar-logo">
        <img src={isOpen ? logo_grow : ""} alt="App Logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="link menu-item">
            <AiOutlineHome size={22} /> {isOpen && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link to="/clients" className="link menu-item">
            <TfiFolder size={22} /> {isOpen && "Projects"}
          </Link>
        </li>
        <li>
          <div className="menu-item">
            <AiOutlineCreditCard size={22} /> {isOpen && "Billing"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <AiOutlineFileText size={22} /> {isOpen && "Proposals"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <AiOutlineFileText size={22} /> {isOpen && "Contracts"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <AiOutlineUser size={22} /> {isOpen && "Users"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <AiOutlineQuestionCircle size={22} /> {isOpen && "Support"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <AiOutlineQuestionCircle size={22} /> {isOpen && "Knowledgebase"}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ClientSidebar;
