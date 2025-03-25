import React from "react";
import { Col } from "react-bootstrap";
import { RiMotorbikeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function BikesCard() {
  return (
    <Col lg={4} md={6}>
      <div className="popular-category-card p-3 rounded-4">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <RiMotorbikeFill />
          </div>
          <div className="title-content">
            <h5>Motorcycles</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Motorcycles
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Bicycles
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
              Scooters
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-1 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              ATVs & Quads
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
