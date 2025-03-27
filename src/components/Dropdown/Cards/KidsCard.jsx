import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineChildCare } from "react-icons/md";

export default function KidsCard() {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 popular-category-content-height">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <MdOutlineChildCare />
          </div>
          <div className="title-content">
            <h5>Kids</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex flex-wrap gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Toys
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Baby Gear
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Kids Vehicles
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Swings & Slides
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Furniture
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Clothing
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Accessories
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Bath & Diapers
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
