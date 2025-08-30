  // Profile.jsx
  import React from "react";
  import {
    User,
    Clock,
    FileText,
    Bell,
    Palette,
    Lock,
    LogOut,
  } from "lucide-react";
  import "./ProfilePage.css";

  export default function Profile() {
    return (
      <div className="page-wrapper">
        <div className="card">
          {/* Profile Header */}
          <header className="profile-header">
            <img
              src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
              alt="Faith Hamilton"
              className="avatar"
            />
            <div className="header-info">
              <h2 className="name">Faith Hamilton</h2>
              <p className="email">faith@example.com</p>
              <button className="btn btn-danger">Update Avatar</button>
            </div>
          </header>

          {/* Menu Items */}
          <nav className="menu">
            <ul>
              <li className="menu-item">
                <User className="icon" size={18} />
                <span>Update My Profile</span>
              </li>
              <li className="menu-item">
                <Clock className="icon" size={18} />
                <span>My Time Sheets</span>
              </li>
              <li className="menu-item">
                <FileText className="icon" size={18} />
                <span>My Notes</span>
              </li>
              <li className="menu-item">
                <Bell className="icon" size={18} />
                <span>Notification Settings</span>
              </li>
              <li className="menu-item">
                <Palette className="icon" size={18} />
                <span>Change Theme</span>
              </li>
              <li className="menu-item">
                <Lock className="icon" size={18} />
                <span>Update Password</span>
              </li>

              {/* Separator */}
              <li className="separator" aria-hidden="true"></li>

              <li className="menu-item logout">
                <LogOut className="icon" size={18} />
                <span>Logout</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
