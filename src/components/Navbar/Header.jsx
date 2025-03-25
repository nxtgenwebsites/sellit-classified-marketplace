import React from "react";
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

export default function Header() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Link to={"/"}>
            <img src="/assets/icons/Navbar-logo.png" alt="IMG" width={150} />
          </Link>
          <Navbar.Toggle aria-controls="Header" />
          <Navbar.Collapse id="Header" className="mt-3 mt-lg-0">
            <div className="search-items d-lg-flex align-items-center justify-content-center">
              <div className="dropdown-section mt-3 rounded-2">
                <div className="second-dropdown dropdown mt-3 w-100">
                  <button
                    type="button"
                    className="rounded-3 bg-transparent d-flex justify-content-between align-items-center dropdown-nav-btn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h5 className="fw-normal mb-0">Pakistan</h5>
                    <p className="nav-dropdown-btn mb-0">
                      <BsChevronDown />
                    </p>
                  </button>
                  <div className="dropdown-menu nav-menu">
                    <a
                      href="#"
                      className="text-decoration-none text-black location-item"
                    >
                      <li className="dropdown-item d-flex w-100 px-3 py-2">
                        <div className="location-s-icon">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="location-content">
                          <p>See ads in all Pakistan</p>
                        </div>
                      </li>
                    </a>
                    <hr className="menu-divider" />
                    <li className="dropdown-item region-heading">
                      <p className="ps-3">Choose Region</p>
                    </li>
                    <a
                      href="#"
                      className="text-decoration-none text-black location-item"
                    >
                      <li className="dropdown-item d-flex w-100 px-3 py-2">
                        <div className="location-s-icon">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="location-content">
                          <p>Azad Kashmir, Pakistan</p>
                        </div>
                      </li>
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none text-black location-item"
                    >
                      <li className="dropdown-item d-flex w-100 px-3 py-2">
                        <div className="location-s-icon">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="location-content">
                          <p>Balochistan, Pakistan</p>
                        </div>
                      </li>
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none text-black location-item"
                    >
                      <li className="dropdown-item d-flex w-100 px-3 py-2">
                        <div className="location-s-icon">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="location-content">
                          <p>Islamabad, Pakistan</p>
                        </div>
                      </li>
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none text-black location-item"
                    >
                      <li className="dropdown-item d-flex w-100 px-3 py-2">
                        <div className="location-s-icon">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="location-content">
                          <p className="d-lg-block d-none">
                            Kyber Pakhtunkhwa,
                            <br />
                            Pakistan
                          </p>
                          <p className="d-lg-none d-sm-block d-none">
                            Kyber Pakhtunkhwa, Pakistan
                          </p>
                          <p className="d-sm-none d-block">
                            Kyber Pakhtunkhwa,
                            <br /> Pakistan
                          </p>
                        </div>
                      </li>
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none text-black location-item"
                    >
                      <li className="dropdown-item d-flex w-100 px-3 py-2">
                        <div className="location-s-icon">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="location-content">
                          <p>Punjab, Pakistan</p>
                        </div>
                      </li>
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none text-black location-item"
                    >
                      <li className="dropdown-item d-flex w-100 px-3 py-2">
                        <div className="location-s-icon">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="location-content">
                          <p>Sindh, Pakistan</p>
                        </div>
                      </li>
                    </a>
                  </div>
                </div>
              </div>
              <div className="search-bar position-relative">
                <input
                  type="text"
                  className="rounded-2"
                  placeholder="Search Here"
                />
                <div className="search-icon-div rounded-end-1">
                  <FaSearch className="search-icon" />
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
