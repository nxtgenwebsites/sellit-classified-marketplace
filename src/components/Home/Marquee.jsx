import React from "react";
import "./css/home.css";

const Marquee = () => {
  return (
    <div>
      <section className="carousel-section py-5">
        <div className="container">
          <div className="marquee-heading text-center">
            <h1 className="fw-semibold mb-0">Trusted by Sellit Pakistan</h1>
          </div>
          <div className="marquee">
            <div className="infinte-carousel d-flex gap-5 align-items-center">
              <div className="infinte-carousel-item">
                <img src="assets/icons/Amazon.png" alt="IMG" />
              </div>
              <div className="infinte-carousel-item">
                <img src="assets/icons/Nike.png" alt="IMG" />
              </div>
              <div className="infinte-carousel-item">
                <img src="assets/icons/Spotify.png" alt="IMG" />
              </div>
              <div className="infinte-carousel-item">
                <img src="assets/icons/Vevo.png" alt="IMG" />
              </div>
              <div className="infinte-carousel-item">
                <img src="assets/icons/Amazon.png" alt="IMG" />
              </div>
              <div className="infinte-carousel-item">
                <img src="assets/icons/Nike.png" alt="IMG" />
              </div>
              <div className="infinte-carousel-item">
                <img src="assets/icons/Spotify.png" alt="IMG" />
              </div>
              <div className="infinte-carousel-item">
                <img src="assets/icons/Vevo.png" alt="IMG" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marquee;
