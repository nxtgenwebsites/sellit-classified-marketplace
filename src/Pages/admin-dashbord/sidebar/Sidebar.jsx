import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  BsGrid1X2,
  BsMegaphone,
  BsPlusSquare,
  BsHeart,
  BsCreditCard,
  BsChat,
  BsPerson,
  BsBoxArrowRight,
} from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import "./sidebar.css";
import { IoCashOutline } from 'react-icons/io5';
const SidebarAdmin = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: "/admin/overview",
      icon: BsGrid1X2,
      label: "Dashboard",
    },
    {
      path: "/dashboard/manage-users",
      icon: BsPerson,
      label: "Manage Users",
    },
    {
      path: "/dashboard/manage-team",
      icon: RiTeamLine,
      label: "Manage Team",
    },
    {
      path: "/dashboard/manage-payments",
      icon: IoCashOutline,
      label: "Manage Payments",
    },
  ];

  return (
    <div className="professional-sidebar">
      {/* Logo Section */}
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-wrapper">
            <Link to={"/"}>
              <img src="/assets/icons/Navbar-logo.png" alt="" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <div className="nav-section">
          <ul className="nav-list">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <li key={index} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    <div className="nav-content">
                      <div className="icon-container">
                        <IconComponent className="nav-icon" />
                      </div>
                      <span className="nav-label">{item.label}</span>
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* User Section */}
      <div className="sidebar-footer">
        <button className="logout-btn">
          <BsBoxArrowRight className="logout-icon" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SidebarAdmin