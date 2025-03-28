import React from "react";
import "./css/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PopularCategoryCard from "./PopularCategoryCard";
import PopularCategory from "./data/PopularCardData.json";
function PopularCategories() {
  return (
    <div>
      <section className="popular-category-section py-5">
        <Container>
          <div className="left-title mb-4">
            <h1 className="fw-semibold">Popular Categories</h1>
          </div>
          <Row className="row-gap-3">
            {PopularCategory.map((category, i) => (
              <PopularCategoryCard category={category} key={i} />
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default PopularCategories;
