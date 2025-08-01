import { Link, useLocation } from "react-router-dom";
import { BsBell, BsHeart, BsChatDots } from "react-icons/bs";
import "./TopNavbar.css";

const TopNavbar = () => {
  const location = useLocation();

  const isActive = () => {
    // return location.pathname === path ? "active" : "";
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <nav className="top-navbar py-3 navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm">
      <div className="container-fluid px-4">
        {/* Mobile toggle button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link nav-link-custom ${isActive("/")}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-link-custom ${isActive("/listings")}`}
                to="/listings"
              >
                Listings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-link-custom ${isActive("/pricing")}`}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-link-custom ${isActive("/pages")}`}
                to="/pages"
              >
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-link-custom ${isActive("/blog")}`}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-link-custom ${isActive("/contact")}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right side actions */}
          <div className="d-flex align-items-center gap-3">
            {/* Add Listings Button */}
            <Link
              to="/add-listing"
              className="btn btn-primary btn-add-listing px-4 py-2 fw-medium"
            >
              Add Listings
            </Link>

            {/* Action Icons */}
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-icon position-relative"
                title="Messages"
              >
                <BsChatDots size={18} />
                {/* <span className="notification-badge">3</span> */}
              </button>

              <button className="btn btn-icon" title="Favorites">
                <BsHeart size={18} />
              </button>

              <button
                className="btn btn-icon position-relative"
                title="Notifications"
              >
                <BsBell size={18} color="black" />
                {/* <span className="notification-badge">2</span> */}
              </button>
            </div>

            {/* User Avatar */}
            <div className="dropdown">
              <button
                className="btn p-0 border-0 bg-transparent dropdown-toggle-no-caret"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="avatar-container">
                  <img
                    src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                    className="avatar-img"
                    alt="User Avatar"
                  />
                  <div className="avatar-status"></div>
                </div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 mt-2">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li onClick={handleLogout}>
                  <Link className="dropdown-item text-danger" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
