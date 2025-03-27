import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiAnimalplanet } from "react-icons/si";

export default function AnimalCard() {
  return (
    <Col lg={3} md={6}>
      <div className="popular-category-card p-3 rounded-4 popular-category-content-height">
        <div className="popular-category-heading d-flex gap-3 align-items-center">
          <div className="title-icon">
            <SiAnimalplanet />
          </div>
          <div className="title-content">
            <h5>Animals</h5>
          </div>
        </div>
        <div className="popular-category-content d-flex flex-wrap gap-1 mt-3 w-100">
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Hens
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Cats
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Parrots
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Pet Food & Accessories
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Livestock
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Pigeons
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Rabbits
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Finches
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Fish
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Fertile Eggs
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Other Birds
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Ducks
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Other Animals
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Doves
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Peacocks
            </Link>
          </div>
          <div className="seperator">/</div>
          <div className="sub-item">
            <Link to={"/"} className="text-decoration-none sub-category">
              Horses
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
