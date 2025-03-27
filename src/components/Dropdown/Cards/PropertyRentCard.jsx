import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

export default function PropertyRentCard() {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 popular-category-content-height">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <HiOutlineHome />
          </div>
          <div className="title-content">
            <h5>Property For Rent</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex flex-wrap gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Houses
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Portions & Floors
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Apartements & Flats
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Shops - Offices - Commercial Space
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Rooms
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Roomates & Paying Guests
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Vacation Rentals - Guest Houses
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Land & Plots
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
