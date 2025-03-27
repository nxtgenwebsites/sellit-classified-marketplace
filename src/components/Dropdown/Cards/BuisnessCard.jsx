import React from "react";
import { Col } from "react-bootstrap";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function BuisnessCard() {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 popular-category-content-height">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <IoBriefcaseOutline />
          </div>
          <div className="title-content">
            <h5>Buisness</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex flex-wrap gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Other Buisnesses
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Foods & Restraunts
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Medical & Pharma
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Trade & Industrial Machinery
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Construction & Heavy Machinery
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Buisness For Sale
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Agriculture
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
