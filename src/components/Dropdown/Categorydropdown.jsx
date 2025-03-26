import React, { useState } from "react";
import "./dropdown.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Row } from "react-bootstrap";
// Category Cards start
import MobileCard from "./Cards/MobileCard";
import BikesCard from "./Cards/BikesCard";
import JobCard from "./Cards/JobCard";
import FurnitureCard from "./Cards/FurnitureCard";
import VehiclesCard from "./Cards/VehiclesCard";
import BuisnessCard from "./Cards/BuisnessCard";
import PropertySaleCard from "./Cards/PropertySaleCard";
import PropertyRentCard from "./Cards/PropertyRentCard";
import ServicesCard from "./Cards/ServicesCard";
import KidsCard from "./Cards/KidsCard";
import ElectronicsCard from "./Cards/ElectronicsCard";
import AnimalCard from "./Cards/AnimalCard";
import FashionCard from "./Cards/FashionCard";
import BooksCard from "./Cards/BooksCard";
// Category Cards end
// Other Categories start
import SubCategoryDropdowns from "./SubCategoryDropdowns";
// Other Categories end

export default function Categorydropdown() {
  return (
    <div>
      <div className="d-block-dropdown mt-3">
        <div className="container">
          <div className="dropdown-first d-flex w-100 gap-3">
            <Dropdown className="category-dropdown">
              <Dropdown.Toggle
                type="button"
                className="btn main-heading bg-transparent text-black border-0 w-100 d-xl-block d-none"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                ALL CATEGORIES{" "}
                <span className="ms-1 dropdown-btn">
                  <img src="assets/icons/chevron.svg" alt="IMG" />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="category-menu rounded-4 shadow bg-white border-0">
                <Row className="row-gap-3 text-center">
                  {/* Category Cards start */}
                  <MobileCard />
                  <BikesCard />
                  <JobCard />
                  <FurnitureCard />
                  <VehiclesCard />
                  <BuisnessCard />
                  <PropertySaleCard />
                  <PropertyRentCard />
                  <ServicesCard />
                  <ElectronicsCard />
                  <AnimalCard />
                  <FashionCard />
                  <BooksCard />
                  <KidsCard />
                  {/* Category Cards end */}
                </Row>
              </Dropdown.Menu>
            </Dropdown>
            {/* Other Dropdowns start */}
            <SubCategoryDropdowns />
            {/* Other Dropdowns end */}
          </div>
        </div>
      </div>
    </div>
  );
}
