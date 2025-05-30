import React from "react";
import { Col } from "react-bootstrap";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi2";
import { BsGeoAlt } from "react-icons/bs";

export default function Card({ property }) {
  return (
    <div>
      <Col
        lg={12}
        className="page-card rounded-3 d-lg-flex w-100 gap-2 position-relative p-2"
      >
        <div className="featured-icon rounded-4">
          <h2 className="fw-semibold">
            {property.featured && <MdOutlineStarPurple500 />}
          </h2>
        </div>
        <div className="page-img">
          <img src={property.img} alt="IMG" className="rounded-1" />
        </div>
        <div className="page-1-sect d-lg-flex">
          <div className="page-content p-2 mt-sm-0 mt-3">
            <div className="page-category d-flex justify-content-between w-100">
              <h6 className="fw-bold">{property.tag}</h6>
            </div>
            <h5 className="fw-medium heading">{property.heading}</h5>
            <div className="rating-and-icons gap-4 text-center d-flex my-3 align-items-center">
              <div className="location d-flex gap-3 align-items-center">
                <div className="location-icon rounded-circle">
                  <BsGeoAlt />
                </div>
                <div className="location-content">
                  <h6 className="fw-medium">{property.location}</h6>
                </div>
              </div>
              <div className="rating d-flex gap-3 align-items-center">
                <div className="rating-icon rounded-circle">
                  <IoTimeOutline />
                </div>
                <div className="rating-content">
                  <h6 className="fw-medium">{property.time}</h6>
                </div>
              </div>
            </div>
            <h5 className="description">{property.description}</h5>
          </div>
        </div>
        <div className="card-divider"></div>
        <div className="page-2-sect text-lg-end text-start">
          <div className="icons ms-lg-auto ms-0">
            <HiOutlineHeart className="favorite-icon" />
          </div>
          <div className="content mt-3">
            <div className="price">
              <h3 className="fw-semibold">{property.price}</h3>
            </div>
            <div className="views">
              <h6 className="fw-normal">{property.views} views</h6>
            </div>
            <div className="content-btn my-4">
              <button className="cta">
                <span className="hover-underline-animation"> Shop now </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}
