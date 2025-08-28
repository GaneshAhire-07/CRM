import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="layout">
    <Sidebar isOpen={isSidebarOpen} />
    <div className="layout-body" style={{ marginLeft: isSidebarOpen ? "220px" : "70px" }}>
      <NavBar toggleSidebar={toggleSidebar} />
      <main className="layout-content">
        <Outlet /> 
      </main>
    </div>
  </div>
);
}

export default Layout;