import { NavLink, useLocation } from "react-router-dom";
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
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: "/dashboard/overview",
      icon: BsGrid1X2,
      label: "Dashboard",
    },
    {
      path: "/dashboard/ads-management",
      icon: BsMegaphone,
      label: "My Ads",
    },
    {
      path: "/add-new-ads",
      icon: BsPlusSquare,
      label: "Add New Ads",
    },
    {
      path: "/dashboard/favorites",
      icon: BsHeart,
      label: "My Favorites",
    },
    {
      path: "/dashboard/payments",
      icon: BsCreditCard,
      label: "Payments",
    },
    {
      path: "/messages",
      icon: BsChat,
      label: "Messages",
    },
    {
      path: "/profile-settings",
      icon: BsPerson,
      label: "Profile Settings",
    },
  ];

  return (
    <div className="professional-sidebar">
      {/* Logo Section */}
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-wrapper">
            <img src="/assets/icons/Navbar-logo.png" alt="" />
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
};

export default Sidebar;
