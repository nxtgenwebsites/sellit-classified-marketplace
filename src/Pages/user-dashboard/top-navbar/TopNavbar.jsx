import { BsBell, BsHeart } from "react-icons/bs";

const TopNavbar = () => {
  return (
    <nav className="navbar user-navbar navbar-expand-lg navbar-light bg-white border-bottom py-2">
      <div className="container-fluid px-4">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Listings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-3 rounded-pill px-3 py-1">
              Add Listings
            </button>
            <a href="#" className="text-decoration-none text-dark me-3">
              <BsHeart className="fs-5" />
              <span className="ms-1">Favorites</span>
            </a>
            <div className="avatar">
              <img
                src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                className="rounded-circle"
                width="32"
                height="32"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
