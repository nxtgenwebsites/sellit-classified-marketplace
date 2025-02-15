import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../CSS/Home_CSS/featured-ads.css";
import FeaturedAdsData from "../data/FeaturedAdsData.json";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { BsGeoAlt } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

export default function Featured_slider() {
    const [favStates, setFavStates] = useState(
        FeaturedAdsData.map(() => false)
    );

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
                        spaceBetween: 0,
                    },
                }}
                className="featured-ads"
            >
                {FeaturedAdsData.map((card, i) => (
                    <SwiperSlide className="featured-slide" key={i}>
                        <div className="featured-card position-relative p-2 rounded-3 w-100">
                            <div className="featured-label px-2 py-1 rounded-2">
                                <h6 className="fw-bold text-white">
                                    <MdOutlineStarPurple500 className="featured-icon" />
                                </h6>
                            </div>
                            <div className="fav-and-watch d-flex gap-3">
                                <div className={`fav-icon heart ${favStates[i] ? "bg-change" : ""}`}
                                    onClick={() => toggleFav(i)}>
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
                            <div className="featured-content mt-3">
                                <h6 className="fw-medium my-2 category">{card.tag}</h6>
                                <h5 className="fw-semibold product-name">{card.name}</h5>
                                <div className="rating-and-icons gap-4 text-center d-flex mt-3 align-items-center">
                                    <div className="location d-flex gap-3 align-items-center">
                                        <div className="locate rounded-circle">
                                            <BsGeoAlt className="location-icon" />
                                        </div>
                                        <div className="location-content">
                                            <h6 className="fw-medium">New York, USA</h6>
                                        </div>
                                    </div>
                                    <div className="rating d-flex gap-3 align-items-center">
                                        <div className="rating-icon rounded-circle">
                                            <IoTimeOutline />
                                        </div>
                                        <div className="rating-content">
                                            <h6 className="fw-medium">5 days ago</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-ad-details mt-3 border-top px-2">
                                <div className="account-card mt-3 text-center">
                                    <div className="user-content">
                                        <h2>PKR 10 Lacs</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
