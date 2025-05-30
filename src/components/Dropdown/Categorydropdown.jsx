


import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";
import { Dropdown, Row } from "react-bootstrap";
import { CgOptions } from "react-icons/cg";

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
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div>
      <div className="d-block-dropdown mt-3">
        <div className="container">
          <div className="dropdown-first d-flex w-100 gap-3">
            <div className="category-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="btn main-heading bg-transparent text-black border-0 w-100 d-xl-flex d-none"
                onClick={toggleDropdown}
              >
                <div className="me-1">
                  <CgOptions size={18} />
                </div>
                ALL CATEGORIES
                <span className="ms-2 dropdown-btn">
                  <img src="assets/icons/chevron.svg" width={12} alt="IMG" />
                </span>
              </button>

              {showDropdown && (
                <div className="mega-menu rounded-4 shadow bg-white border-0 position-absolute mt-2 w-100 z-3 p-3">
                  <Row className="row-gap-3 text-center">
                    {/* Category Cards start */}
                    <VehiclesCard />
                    <BikesCard />
                    <PropertySaleCard />
                    <PropertyRentCard />
                    <ElectronicsCard />
                    <MobileCard />
                    <FashionCard />
                    <ServicesCard />
                    <JobCard />
                    <FurnitureCard />
                    <BuisnessCard />
                    <AnimalCard />
                    <BooksCard />
                    <KidsCard />
                    {/* Category Cards end */}
                  </Row>
                </div>
              )}
            </div>

            {/* Other Dropdowns start */}
            <SubCategoryDropdowns />
            {/* Other Dropdowns end */}
          </div>
        </div>
      </div>
    </div>
  );
}
