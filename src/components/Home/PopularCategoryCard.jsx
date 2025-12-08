import React from "react";
import Col from "react-bootstrap/Col";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function PopularCategoryCard({ category }) {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 shadow">
        {/* Header */}
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <i className={category.icon}></i>
          </div>

          <div className="title-content">
            <h6>{category.adsCount || "15 ads"}</h6>
            <h5>{category.name}</h5>
          </div>
        </div>

        {/* Sub Categories */}
        <div className="popular-category-content d-flex gap-2 mt-3 w-100 flex-wrap">
          {category.sub_categories?.map((sub, index) => (
            <div className="sub-item" key={index}>
              <Link
                to={`/search?query=${category.sub_categories[index]}`}
                className="text-decoration-none sub-category"
              >
                / {sub}
              </Link>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="popular-category-btn mt-3">
          <Link className="menu_link text-decoration-none" to={category.link}>
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
