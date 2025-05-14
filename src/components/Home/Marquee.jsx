import React, { useState } from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import PartnersCards from "./PartnersCards";

const Marquee = () => {
  return (
    <div>
      <section className="carousel-section py-5">
        <div className="container">
          <div className="marquee-heading text-center">
            <h1 className="fw-semibold mb-0">Trusted Sellit Partners</h1>
          </div>
          <div className="container">
            <div className="row row-gap-4">
              <div className="col-3">
                <PartnersCards />
              </div>
              <div className="col-3">
                <PartnersCards />
              </div>
              <div className="col-3">
                <PartnersCards />
              </div>
              <div className="col-3">
                <PartnersCards />
              </div>
              <div className="col-3">
                <PartnersCards />
              </div>
              <div className="col-3">
                <PartnersCards />
              </div>
              <div className="col-3">
                <PartnersCards />
              </div>
              <div className="col-3">
                <PartnersCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marquee;
