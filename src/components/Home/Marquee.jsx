import React, { useState } from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PartnersCards from "./PartnersCards";

const Marquee = () => {
const data = [
  {
    name: "Pakwheels",
    logo: "https://play-lh.googleusercontent.com/Q_3vIq94Bs2_QYFiFw4vQhobVioxzaKEq-XDuW0OEugD--iGQNLYktO2PgEcAED53v0",
    profileLink: "https://www.pakwheels.com/",
    location: "Islamabad",
  },
  {
    name: "Zameen.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSRFLJVTFcyD_h0MA7vY20e8kjq7zKpSEXA&s",
    profileLink: "https://www.zameen.com/",
    location: "Lahore",
  },
  {
    name: "QMobile",
    logo: "https://logosandtypes.com/wp-content/uploads/2023/02/QMobile.png",
    profileLink: "https://www.qmobile.com.pk/",
    location: "Karachi",
  },
  {
    name: "Khurshid Fans",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsqrDvl0XwuuZwEda4ZINFay684zd_dfbxg&s",
    profileLink: "https://khursheedfans.com/",
    location: "Gujrat",
  },
  {
    name: "Metro Motorcycles",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQg--lZFkqzR_eP360T2d3oZLFXNLxM46Cf-gW8A0mIEtW41qO6zDQVRPL6zmfyW-C2OU&usqp=CAU",
    profileLink: "https://metromotorcycle.com.pk/",
    location: "Lahore",
  },
  {
    name: "Daraz.pk",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yLwT8TQ8aF0dMJfuD-LEC3WfUMeZHfzrZw&s",
    profileLink: "https://www.daraz.pk/",
    location: "Karachi",
  },
  {
    name: "Nestle Pakistan",
    logo: "https://crystalpng.com/wp-content/uploads/2025/03/nestle_logo.png",
    profileLink: "https://www.nestle.pk/",
    location: "Lahore",
  },
  {
    name: "Pakwheels",
    logo: "https://play-lh.googleusercontent.com/Q_3vIq94Bs2_QYFiFw4vQhobVioxzaKEq-XDuW0OEugD--iGQNLYktO2PgEcAED53v0",
    profileLink: "https://www.pakwheels.com/",
    location: "Islamabad",
  },
  {
    name: "Zameen.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSRFLJVTFcyD_h0MA7vY20e8kjq7zKpSEXA&s",
    profileLink: "https://www.zameen.com/",
    location: "Lahore",
  },
  {
    name: "QMobile",
    logo: "https://logosandtypes.com/wp-content/uploads/2023/02/QMobile.png",
    profileLink: "https://www.qmobile.com.pk/",
    location: "Karachi",
  },
  {
    name: "Khurshid Fans",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsqrDvl0XwuuZwEda4ZINFay684zd_dfbxg&s",
    profileLink: "https://khursheedfans.com/",
    location: "Gujrat",
  },
  {
    name: "Metro Motorcycles",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQg--lZFkqzR_eP360T2d3oZLFXNLxM46Cf-gW8A0mIEtW41qO6zDQVRPL6zmfyW-C2OU&usqp=CAU",
    profileLink: "https://metromotorcycle.com.pk/",
    location: "Lahore",
  },
  {
    name: "Daraz.pk",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yLwT8TQ8aF0dMJfuD-LEC3WfUMeZHfzrZw&s",
    profileLink: "https://www.daraz.pk/",
    location: "Karachi",
  },
  {
    name: "Nestle Pakistan",
    logo: "https://crystalpng.com/wp-content/uploads/2025/03/nestle_logo.png",
    profileLink: "https://www.nestle.pk/",
    location: "Lahore",
  },
];

  return (
    <div>
      <section className="carousel-section py-5">
        <div className="container">
          <div className="marquee-heading text-center mb-4">
            <h1 className="fw-semibold mb-0">FEATURED BUSINESSES</h1>
          </div>

          <Swiper
            modules={[A11y, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            slidesPerView={7}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
              1400: { slidesPerView: 6 },
              1600: { slidesPerView: 7 },
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <PartnersCards data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Marquee;
