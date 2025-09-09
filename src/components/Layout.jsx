import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import ClientSidebar from "./ClientSidebar"; // नवीन फाइल इम्पोर्ट करा
import ClientNavbar from "./ClientNavbar"; // नवीन फाइल इम्पोर्ट करा
import { useState } from "react";
import ProfilePage from "../pages/profile/ProfilePage";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileCardVisible, setProfileCardVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileCard = () => {
    if (location.pathname === "/staff" || location.pathname === "/clients") {
      setProfileCardVisible((prev) => !prev);
    }
  };

  // कोणत्या पेजवर कोणता साइडबार आणि नॅव्हबार दाखवायचा हे ठरवा
  const isClientsPage = location.pathname === "/clients";

  return (
    <div className="layout">
      {isClientsPage ? (
        <ClientSidebar isOpen={isSidebarOpen} />
      ) : (
        <Sidebar isOpen={isSidebarOpen} />
      )}
      <div
        className="layout-body"
        style={{
          marginLeft: isSidebarOpen ? "220px" : "70px",
          position: "relative",
        }}
      >
        {isClientsPage ? (
          <ClientNavbar
            toggleSidebar={toggleSidebar}
            onProfileClick={toggleProfileCard}
          />
        ) : (
          <NavBar
            toggleSidebar={toggleSidebar}
            onProfileClick={toggleProfileCard}
          />
        )}
        <main className="layout-content">
          <Outlet />
        </main>
        {isProfileCardVisible && <ProfilePage onClose={toggleProfileCard} />}
      </div>
    </div>
  );
};

export default Layout;
