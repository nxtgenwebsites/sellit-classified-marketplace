import React from "react";
import Col from "react-bootstrap/Col";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function PopularCategoryCard({ category }) {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 shadow">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <i className={category.icon}></i>
          </div>
          <div className="title-content">
            <h6>15 ads</h6>
            <h5>{category.name}</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex gap-2 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              {category.sub1}
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              {category.sub2}
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              {category.sub3}
            </Link>
          </div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              {category.sub4}
            </Link>
          </div>
        </div>
        <div className="popular-category-btn">
          <Link className="menu_link text-decoration-none" to={"#"}>
            See More{" "}
            <span className="arrow">
              <BsArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default PopularCategoryCard;
