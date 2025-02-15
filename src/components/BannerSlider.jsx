import React from "react";
import "../CSS/Home_CSS/Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Container from "react-bootstrap/Container";

function BannerSlider() {
    return (
        <div>
            <section className="banner-section">
                <Container>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        modules={[Autoplay]}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="banner"
                    >
                        <SwiperSlide className="banner-slider">
                            <img src="assets/img/Slider-img.webp" alt="IMG" />
                        </SwiperSlide>
                        <SwiperSlide className="banner-slider">
                            <img src="assets/img/Slider-img.webp" alt="IMG" />
                        </SwiperSlide>
                        <SwiperSlide className="banner-slider">
                            <img src="assets/img/Slider-img.webp" alt="IMG" />
                        </SwiperSlide>
                    </Swiper>
                </Container>
                <div className="google-banner text-center ">
                    <img src="assets/img/Google Banner dummy.png" alt="IMG" />
                </div>
            </section>
        </div>
    );
}

export default BannerSlider;
