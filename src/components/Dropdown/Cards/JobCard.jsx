import React from "react";
import { Col } from "react-bootstrap";
import { PiSuitcaseSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function JobCard() {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 popular-category-content-height">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <PiSuitcaseSimple />
          </div>
          <div className="title-content">
            <h5>Jobs</h5>
          </div>
        </div>
        {/* <div className="popular-category-content d-flex gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Others
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Online
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Part Time
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Sales
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Customer Service
            </Link>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-1 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Marketing
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Restraunts
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Hospitality
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Domestic Staff
            </Link>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-1 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Graphic Design
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Delivery Riders
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              IT & Networking
            </Link>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-1 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Hotels & Tourism
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Clerical & Administration
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Security
            </Link>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-1 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Content Writing
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Engineering
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Manufacturing
            </Link>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-1 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Human Resources
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Advertising & PR
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Real Estate
            </Link>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-1 mt-1 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Internships
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Architecture & Interior Design
            </Link>
          </div>
        </div> */}
        <div className="popular-category-content d-flex flex-wrap gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Online
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              IT & Networking
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Sales
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Marketing
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Graphic Design
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Content Writing
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Engineering
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Advertising & PR
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Real Estate
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Internships
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
