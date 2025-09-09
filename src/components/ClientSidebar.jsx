import React from "react";
import "./Sidebar.css";
import logo_grow from "../Assets/Logo/logo.png";
import logo from "../Assets/Logo/apple-touch-icon-60x60.png";
import {
  Home,
  CreditCard,
  FileSignature,
  FileCheck,
  User,
  LifeBuoy,
  Folder,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const ClientSidebar = ({ isOpen }) => {
  return (
    <div
      style={{ height: "100%", width: "218px" }}
      className={isOpen ? "sidebar" : "close_sidebar"}
    >
      <div className="sidebar-logo">
        <img src={isOpen ? logo_grow : logo} alt="App Logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/clients" className="link menu-item">
            <Home size={22} /> {isOpen && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link to="/clients" className="link menu-item">
            <Folder size={22} /> {isOpen && "Projects"}
          </Link>
        </li>
        <li>
          <div className="menu-item">
            <CreditCard size={22} /> {isOpen && "Billing"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <FileSignature size={22} /> {isOpen && "Proposals"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <FileCheck size={22} /> {isOpen && "Contracts"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <User size={22} /> {isOpen && "Users"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <LifeBuoy size={22} /> {isOpen && "Support"}
          </div>
        </li>
        <li>
          <div className="menu-item">
            <BookOpen size={22} /> {isOpen && "Knowledgebase"}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ClientSidebar;
