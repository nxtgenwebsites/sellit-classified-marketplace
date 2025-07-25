import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/home.css";
import FeaturedAdsData from "./data/FeaturedAdsData.json";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { BsGeoAlt } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Featured_slider() {
  const [favStates, setFavStates] = useState(FeaturedAdsData.map(() => false));

  const toggleFav = (index) => {
    setFavStates((prevFavStates) => {
      const newFavStates = [...prevFavStates];
      newFavStates[index] = !newFavStates[index];
      return newFavStates;
    });
  };

  return (
    <div>
      <Swiper
        modules={[A11y, Pagination, Autoplay]}
        spaceBetween={0}
        loop={true}
        slidesPerView={4}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="featured-ads"
      >
        {FeaturedAdsData.map((card, i) => (
          <SwiperSlide className="featured-slide" key={i}>
            <Link to={"/add"} className="add-card-link">
              <div className="featured-card shadow position-relative p-2 rounded-3 w-100">
                <div className="featured-label mx-3 my-2">
                  <span>Featured</span>
                </div>
                <div className="fav-and-watch d-flex gap-3">
                  <div
                    className={`fav-icon heart ${
                      favStates[i] ? "bg-change" : ""
                    }`}
                    onClick={() => toggleFav(i)}
                  >
                    <BsHeart />
                  </div>
                </div>
                <div className="featured-img position-relative">
                  <img
                    src={card.img}
                    alt="IMG"
                    className="img-fluid w-100 rounded-3"
                  />
                </div>
                <div className="featured-content mt-3 px-3">
                  <h6 className="fw-medium my-2 category">{card.tag}</h6>
                  <h5 className="fw-medium product-name">{card.name}</h5>
                  <div className="rating-and-icons gap-2 text-center d-flex mt-3 align-items-center">
                    <div className="location d-flex gap-2 align-items-center w-100">
                      <div className="location-icon rounded-circle">
                        <BsGeoAlt className="locate-icon" />
                      </div>
                      <div className="location-content">
                        <h6 className="fw-medium mb-0">
                          Pakistan, Punjab, Islamabad
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured-ad-details mt-3 border-top px-2">
                  <div className="account-card mt-3 text-center">
                    <div className="user-content">
                      <h2>PKR 100,000</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
