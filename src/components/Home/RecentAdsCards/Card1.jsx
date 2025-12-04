import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { IoTimeOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

function Card1({ ads }) {
  const [isFav, setIsFav] = useState(false);

  const bgChange = () => {
    setIsFav((prev) => !prev);
  };

  return (
    <Col lg={3} md={6} className="h-full">
      <Link
        to={`${ads.source}/${ads.id}`}
        className="add-card-link"
        style={{ height: "100% !important" }}
      >
        <div className="tab-card p-2 rounded-3 shadow">
          <div className="tab-img">
            <img
              src={ads.thumbnail_url}
              alt="IMG"
              style={{ height: "170px", objectFit: "cover" }}
              className="w-100 rounded-3"
            />
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
            <div className="buy-sell-content mt-3 px-3">
              <h6 className="fw-medium my-2 category">{ads.sub_category}</h6>
              <h5 className="fw-medium product-name">
                {ads.ad_title.length > 50
                  ? ads.ad_title.slice(0, 50) + "..."
                  : ads.ad_title}
              </h5>
              <div className="rating-and-icons gap-3 text-center d-flex mt-3 align-items-center">
                <div className="location d-flex gap-2 align-items-center">
                  <div className="location-icon rounded-circle">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="location-content">
                    <h6 className="fw-medium mb-0">
                      Pakistan , {ads.location}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-sell-ad-details mt-3 border-top px-2">
              <div className="account-card mt-3 text-center">
                <div className="user-content">
                  <h2>{`PKR ${Number(ads.price).toLocaleString("en-US", {
                    maximumFractionDigits: 0,
                  })}`}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default Card1;
