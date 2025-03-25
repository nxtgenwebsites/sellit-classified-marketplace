import React, { useState } from "react";
import "./dropdown.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa6";
import { BsHouseDoor } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa6";
import { Row } from "react-bootstrap";
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
                  <MobileCard />
                  <BikesCard />
                  <JobCard />
                  <FurnitureCard />
                  <VehiclesCard />
                  <BuisnessCard />
                  <PropertySaleCard />
                  <PropertyRentCard />
                  <ServicesCard />
                  <KidsCard />
                </Row>
              </Dropdown.Menu>
            </Dropdown>
            <div className="category-wrapper d-lg-flex align-items-center gap-3">
              <Dropdown className="category-item">
                <Dropdown.Toggle className="bg-transparent border-0">
                  <h6 className="fw-medium text-black">
                    Motors
                    <span>
                      <img
                        src="/assets/icons/chevron.svg"
                        alt="IMG"
                        className="ms-2"
                      />
                    </span>
                  </h6>
                </Dropdown.Toggle>
                <Dropdown.Menu className="mt-n1 p-0 menu-ca">
                  <Dropdown.Item className="dropdown-item category_item p-2 rounded-top-2">
                    <Link
                      to={"/cars-category"}
                      className="category_link d-flex align-items-center gap-2"
                    >
                      <IoCarSportOutline className="category-icon" /> Cars
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item category_item p-2 rounded-bottom-2">
                    <Link
                      to={"/motorcycle-category"}
                      className="category_link d-flex align-items-center gap-2"
                    >
                      <FaMotorcycle className="category-icon" /> Motorcycles
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="category-item">
                <Dropdown.Toggle className="bg-transparent border-0">
                  <h6 className="fw-medium text-black">
                    Property
                    <span>
                      <img
                        src="/assets/icons/chevron.svg"
                        alt="IMG"
                        className="ms-2"
                      />
                    </span>
                  </h6>
                </Dropdown.Toggle>
                <Dropdown.Menu className="mt-n1 p-0 menu-ca">
                  <Dropdown.Item className="dropdown-item category_item p-2 rounded-top-2">
                    <Link
                      to={"/property-sale"}
                      className="category_link d-flex align-items-center gap-2"
                    >
                      <BsHouseDoor className="category-icon" /> Property For
                      Sale
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item category_item p-2 rounded-bottom-2">
                    <Link
                      to={"/property-rent"}
                      className="category_link d-flex align-items-center gap-2"
                    >
                      <BsHouseDoor className="category-icon" /> Property For
                      Rent
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="category-item">
                <Dropdown.Toggle className="bg-transparent border-0">
                  <h6 className="fw-medium text-black">
                    Buisnesses
                    <span>
                      <img
                        src="/assets/icons/chevron.svg"
                        alt="IMG"
                        className="ms-2"
                      />
                    </span>
                  </h6>
                </Dropdown.Toggle>
                <Dropdown.Menu className="mt-n1 p-0 menu-ca">
                  <Dropdown.Item className="dropdown-item category_item p-2 rounded-top-2">
                    <Link
                      to={"/buisness-category"}
                      className="category_link d-flex align-items-center gap-2"
                    >
                      <IoBriefcaseOutline className="category-icon" /> Find A
                      Buisness
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item category_item p-2">
                    <Link
                      to={"/service-category"}
                      className="category_link d-flex align-items-center gap-2"
                    >
                      <FaHeadset className="category-icon" /> Find a Service
                      Provider
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item category_item p-2 rounded-bottom-2">
                    <Link
                      to={"/job-category"}
                      className="category_link d-flex align-items-center gap-2"
                    >
                      <IoBriefcaseOutline className="category-icon" /> Find a
                      Job
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="category-item">
                <Dropdown.Toggle className="bg-transparent border-0">
                  <h6 className="fw-medium text-black">
                    Electronics
                    <span>
                      <img
                        src="/assets/icons/chevron.svg"
                        alt="IMG"
                        className="ms-2"
                      />
                    </span>
                  </h6>
                </Dropdown.Toggle>
                <Dropdown.Menu className="mt-n1 p-0">
                  <Dropdown.Item className="dropdown-item category_item p-2 rounded-2">
                    <Link
                      to={"/mobiles-category"}
                      className="category_link d-flex align-items-center gap-2"
                    >
                      <CiMobile3 className="category-icon" /> Mobiles
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
