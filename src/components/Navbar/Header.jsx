import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  BsChatLeftTextFill,
  BsHeartFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Search } from "lucide-react";

const uid = localStorage.getItem("uid");

export default function Header() {
  const navigate = useNavigate();
  const { search } = useLocation();

  // URL Params read
  const params = new URLSearchParams(search);
  const urlQuery = params.get("query") || "";
  const urlLocation = params.get("location") || "All Pakistan";

  const [location, setLocation] = useState(urlLocation);
  const [searchQuery, setSearchQuery] = useState(urlQuery);

  const locations = [
    "All Pakistan",
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
  ];

  // URL change → Inputs auto update
  useEffect(() => {
    setSearchQuery(urlQuery);
    setLocation(urlLocation);
  }, [urlQuery, urlLocation]);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    let url = `/search?query=${encodeURIComponent(query)}`;

    if (location !== "All Pakistan") {
      url += `&location=${encodeURIComponent(location)}`;
    }

    window.location.href = url; // full reload + navigate
  };

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Link to={"/"}>
            <img src="/assets/icons/Navbar-logo.png" alt="IMG" width={120} />
          </Link>
          <Navbar.Toggle aria-controls="Header" />
          <Navbar.Collapse id="Header" className="mt-3 mt-lg-0">
            <div className="container py-4 search-box">
              <div
                className="card shadow border-0"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <div className="card-body p-0">
                  <form onSubmit={handleSearch}>
                    <div className="row g-0">
                      <div className="col-md-3 position-relative">
                        <select
                          className="form-select border-0 h-100 py-3 ps-4"
                          style={{
                            backgroundColor: "#f8f9fa",
                            boxShadow: "none",
                            fontSize: "15px",
                          }}
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        >
                          {locations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-7">
                        <input
                          type="text"
                          className="form-control border-0 py-3 shadow-none"
                          style={{
                            fontSize: "15px",
                            backgroundColor: "#ffffff",
                          }}
                          placeholder="What are you looking for?"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>

                      <div className="col-md-2 position-relative">
                        <button
                          type="submit"
                          className="btn w-100 h-100 d-flex align-items-center justify-content-center search-btn"
                          style={{
                            backgroundColor: "#4361ee",
                            color: "white",
                            transition: "all 0.3s ease",
                            borderRadius: "0 12px 12px 0",
                          }}
                        >
                          <Search size={22} />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <Nav className="mb-2 mb-lg-0 gap-2 navbar-list mx-lg-auto align-items-lg-baseline">
              <Nav.Link href="#">
                <BsChatLeftTextFill className="nav-icon" />
              </Nav.Link>
              <Nav.Link href="#">
                <BsHeartFill className="nav-icon" />
              </Nav.Link>
              <Nav.Link href={uid ? "/dashboard/overview" : "/login"}>
                <BsFillPersonFill className="nav-icon" />
              </Nav.Link>
            </Nav>

            <Link to={"/add-listing"}>
              <Button type="button" className="rounded-3 primary-button">
                Add Listings
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
