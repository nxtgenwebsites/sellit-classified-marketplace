import React from "react";
import "./css/home.css";
import Featured_slider from "./Featured_slider";
import { FaArrowRight } from "react-icons/fa6";

export default function FeaturedAds() {
  return (
    <section className="featured-ads-section py-5">
      <div className="container">
        <div className="featured-heading">
          <div className="heading">
            <div className="">
              <h1 className="text-main-heading">Featured Ads</h1>
            </div>
            <div className="d-flex w-100 flex-column justify-content-between align-items-md-center flex-md-row gap-4">
              <ul
                className="nav nav-tabs tabs w-auto mx-0 "
                id="myTab"
                role="tablist"
              >
                <li className="nav-item buy-tabs mx-1" role="presentation">
                  <button
                    className="nav-link active tab-btn"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item buy-tabs ms-1" role="presentation">
                  <button
                    className="nav-link tab-btn"
                    id="pindi-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Rawalpindi"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Rawalpindi
                  </button>
                </li>
                <li className="nav-item buy-tabs ms-1" role="presentation">
                  <button
                    className="nav-link tab-btn"
                    id="islamabad-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Islamabad"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Islamabad
                  </button>
                </li>
                <li className="nav-item buy-tabs ms-1" role="presentation">
                  <button
                    className="nav-link tab-btn"
                    id="lahore-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Lahore"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Lahore
                  </button>
                </li>
                <li className="nav-item buy-tabs ms-1" role="presentation">
                  <button
                    className="nav-link tab-btn"
                    id="multan-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Multan"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Multan
                  </button>
                </li>
                <li className="nav-item buy-tabs ms-1" role="presentation">
                  <button
                    className="nav-link tab-btn"
                    id="karachi-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Karachi"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Karachi
                  </button>
                </li>
                <li className="nav-item buy-tabs mx-1" role="presentation">
                  <button
                    className="nav-link tab-btn"
                    id="Peshawar-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Peshawar"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Peshawar
                  </button>
                </li>
              </ul>
              <button className="d-flex align-items-center gap-2 view-all-btn">
                <span>View All</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="tab-content mt-4" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="Rawalpindi"
            role="tabpanel"
            aria-labelledby="pindi-tab"
          >
            <Featured_slider />
          </div>
          <div
            className="tab-pane fade"
            id="Islamabad"
            role="tabpanel"
            aria-labelledby="islamabad-tab"
          >
            <Featured_slider />
          </div>
          <div
            className="tab-pane fade"
            id="Lahore"
            role="tabpanel"
            aria-labelledby="lahore-tab"
          >
            <Featured_slider />
          </div>
          <div
            className="tab-pane fade"
            id="Multan"
            role="tabpanel"
            aria-labelledby="multan-tab"
          >
            <Featured_slider />
          </div>
          <div
            className="tab-pane fade"
            id="Karachi"
            role="tabpanel"
            aria-labelledby="karachi-tab"
          >
            <Featured_slider />
          </div>
          <div
            className="tab-pane fade"
            id="Peshawar"
            role="tabpanel"
            aria-labelledby="peshawar-tab"
          >
            <Featured_slider />
          </div>
        </div>
      </div>
    </section>
  );
}
