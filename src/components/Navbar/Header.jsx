import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Search } from "lucide-react";

export default function Header() {
    const [location, setLocation] = useState("All Pakistan");
    const [searchQuery, setSearchQuery] = useState("");

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

    const handleSearch = (e) => {
      e.preventDefault();
      console.log("Searching for:", searchQuery, "in", location);
      // Implement your search functionality here
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
            <div className="container py-4  search-box">
              <div
                className="card shadow border-0"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <div className="card-body p-0">
                  <form onSubmit={handleSearch}>
                    <div className="row g-0">
                      <div className="col-md-3 position-relative">
                        <div
                          className="position-absolute h-100 d-flex align-items-center"
                          style={{ left: "15px", pointerEvents: "none" }}
                        >
                        </div>
                        <select
                          className="form-select border-0 h-100 py-3 ps-4 border-0"
                          style={{
                            backgroundColor: "#f8f9fa",
                            // borderRight: "1px solid #e9ecef",
                            boxShadow: "none",
                            fontSize: "15px",
                          }}
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          aria-label="Select location"
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
                          aria-label="Search query"
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
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "#3a56d4")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "#4361ee")
                          }
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
              <Nav.Link href="#">
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
