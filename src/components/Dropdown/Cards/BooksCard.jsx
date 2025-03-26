import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoShirtOutline } from "react-icons/io5";

export default function BooksCard() {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 popular-category-content-height">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <IoShirtOutline />
          </div>
          <div className="title-content">
            <h5>Books & Sports</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex flex-wrap gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Gym & Fitness
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Other Hobbies
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Sports Equipments
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Books & Magazines
            </Link>
          </div>
          <div className="seperator">
            /
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Musical Instruments
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
