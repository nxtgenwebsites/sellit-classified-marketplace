import React from "react";
import { Col } from "react-bootstrap";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function MobileCard() {
  return (
    <Col lg={4} md={6}>
      <div className="popular-category-card p-3 rounded-4">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <HiOutlineDevicePhoneMobile />
          </div>
          <div className="title-content">
            <h5>Mobiles</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Phones
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Accessories
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Spare Parts
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Tablets
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
