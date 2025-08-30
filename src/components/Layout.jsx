import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ProfilePage from "../pages/profile/ProfilePage"; // ProfilePage येथे इम्पोर्ट करा

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileCardVisible, setProfileCardVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileCard = () => {
    // फक्त स्टाफ पेजवर असतानाच प्रोफाइल कार्ड टॉगल करा
    if (location.pathname === '/staff') {
      setProfileCardVisible(prev => !prev);
    }
  };

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="layout-body" style={{ marginLeft: isSidebarOpen ? "220px" : "70px", position: 'relative' }}>
        <NavBar toggleSidebar={toggleSidebar} onProfileClick={toggleProfileCard} />
        <main className="layout-content">
          <Outlet />
        </main>
        {/* जर स्टाफ पेज असेल आणि प्रोफाइल कार्ड दिसायला हवे असेल, तरच ते दाखवा */}
        {isProfileCardVisible && location.pathname === '/staff' && (
          <ProfilePage onClose={toggleProfileCard} />
        )}
      </div>
    </div>
  );
}

export default Layout;