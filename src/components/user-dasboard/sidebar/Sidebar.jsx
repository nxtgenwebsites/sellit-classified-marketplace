import { Nav } from "react-bootstrap";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Heart,
  CreditCard,
  MessageSquare,
  User,
  LogOut,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon">C</span>
          </div>
          {isOpen && <span className="logo-text">Classea</span>}
        </div>
      </div>

      <Nav className="sidebar-nav flex-column">
        <Nav.Link className="sidebar-link active">
          <LayoutDashboard size={20} />
          {isOpen && <span>Dashboard</span>}
        </Nav.Link>

        <Nav.Link className="sidebar-link">
          <FileText size={20} />
          {isOpen && <span>My Ads</span>}
        </Nav.Link>

        <Nav.Link className="sidebar-link">
          <PlusCircle size={20} />
          {isOpen && <span>Add New Ads</span>}
        </Nav.Link>

        <Nav.Link className="sidebar-link">
          <Heart size={20} />
          {isOpen && <span>My Favorites</span>}
        </Nav.Link>

        <Nav.Link className="sidebar-link">
          <CreditCard size={20} />
          {isOpen && <span>Payments</span>}
        </Nav.Link>

        <Nav.Link className="sidebar-link">
          <MessageSquare size={20} />
          {isOpen && <span>Messages</span>}
        </Nav.Link>

        <Nav.Link className="sidebar-link">
          <User size={20} />
          {isOpen && <span>Profile Settings</span>}
        </Nav.Link>
      </Nav>

      <div className="sidebar-footer">
        <Nav.Link className="sidebar-link">
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </Nav.Link>
      </div>
    </div>
  );
};

export default Sidebar;
