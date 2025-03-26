import React from "react";
import { Col } from "react-bootstrap";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ServicesCard() {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 popular-category-content-height">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <MdOutlineHeadsetMic />
          </div>
          <div className="title-content">
            <h5>Services</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex flex-wrap gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Home & Office Repair
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Electronics & Computer Repair
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Car Rental
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Domestics Help
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Web Development
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Construction Services
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Health & Beauty
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Consultancy Services
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Insurance Services
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
