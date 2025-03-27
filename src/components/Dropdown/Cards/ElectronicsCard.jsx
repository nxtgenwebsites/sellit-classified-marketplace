import React from "react";
import { Col } from "react-bootstrap";
import { IoHardwareChipOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ElectronicsCard() {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 popular-category-content-height">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <IoHardwareChipOutline />
          </div>
          <div className="title-content">
            <h5>Electronics</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex flex-wrap gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Generators & Power Solutions
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Ac & Coolers
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Kitchen Appliances
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Washing Machines & Dryers
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Fans
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Heaters & Geysers
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Microwaves
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Sewing Machines
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Irons & Steamers
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Water Dispensers
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Air Purifiers & Humidifiers
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
