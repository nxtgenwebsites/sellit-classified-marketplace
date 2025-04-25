import {
  BsGrid1X2,
  BsMegaphone,
  BsPlusSquare,
  BsHeart,
  BsCreditCard,
  BsChat,
  BsGear,
  BsBoxArrowRight,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <div
      className="sidebar bg-dark text-white"
      style={{ minHeight: "100vh", width: "250px" }}
    >
      <div className="d-flex align-items-center p-3 pt-4 mb-3">
        <img src="/assets/icons/Navbar-logo.png" className="w-75 mx-auto" alt="" />
      </div>

      <ul className="nav flex-column">
        <li className="nav-item mt-2">
          <a
            className="nav-link text-white d-flex align-items-center py-2"
            href="#"
          >
            <BsGrid1X2 className="me-3" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <a
            className="nav-link text-white d-flex align-items-center py-2 bg-primary bg-opacity-25"
            href="#"
          >
            <BsMegaphone className="me-3" />
            <span>My Ads</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <a
            className="nav-link text-white d-flex align-items-center py-2"
            href="#"
          >
            <BsPlusSquare className="me-3" />
            <span>Add New Ads</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <a
            className="nav-link text-white d-flex align-items-center py-2"
            href="#"
          >
            <BsHeart className="me-3" />
            <span>My Favorites</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <a
            className="nav-link text-white d-flex align-items-center py-2"
            href="#"
          >
            <BsCreditCard className="me-3" />
            <span>Payments</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <a
            className="nav-link text-white d-flex align-items-center py-2"
            href="#"
          >
            <BsChat className="me-3" />
            <span>Messages</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <a
            className="nav-link text-white d-flex align-items-center py-2"
            href="#"
          >
            <BsGear className="me-3" />
            <span>Profile Settings</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <a
            className="nav-link text-white d-flex align-items-center py-2"
            href="#"
          >
            <BsBoxArrowRight className="me-3" />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
