import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { IoTimeOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";

function Card1({ ads }) {
  const [isFav, setIsFav] = useState(false);

  const bgChange = () => {
    setIsFav((prev) => !prev);
  };

  return (
    <Col lg={3} md={6}>
      <div className="tab-card p-2 rounded-3">
        <div className="tab-img">
          <img src={ads.img} alt="IMG" className="w-100 rounded-3" />
        </div>
        <div className="tab-content mt-3">
          <div className="fav-and-watch-img d-flex gap-3">
            <div
              className={`fav-img heart ${isFav ? "bg-change" : ""}`}
              onClick={bgChange}
            >
              <BsHeart />
            </div>
          </div>
          <div className="buy-sell-content mt-3">
            <h6 className="fw-medium my-2 category">{ads.tag}</h6>
            <h5 className="fw-semibold product-name">{ads.name}</h5>
            <div className="rating-and-icons gap-3 text-center d-flex mt-3 align-items-center">
              <div className="location d-flex gap-2 align-items-center">
                <div className="location-icon rounded-circle">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="location-content">
                  <h6 className="fw-medium">New York, USA</h6>
                </div>
              </div>
              <div className="rating d-flex gap-2 align-items-center">
                <div className="rating-icon rounded-circle">
                  <IoTimeOutline />
                </div>
                <div className="rating-content">
                  <h6 className="fw-medium">5 days ago</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="buy-sell-ad-details mt-3 border-top px-2">
            <div className="account-card mt-3 text-center">
              <div className="user-content">
                <h2>PKR 10 Lacs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Card1;
