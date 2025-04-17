import React from "react";
import "./css/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card1 from "./RecentAdsCards/Card1";
import Card2 from "./RecentAdsCards/Card2";
import RecentCardData from "./data/RecentCardData.json";
import { FaArrowRight } from "react-icons/fa6";

function RecentlyAds() {
  return (
    <div>
      <section className="buy-ans-sell-section py-5">
        <Container>
          <div className="buy-sell-heading">
            <div className="left-title">
              <h1 className="fw-semibold">Recently Posted Ads</h1>
            </div>
          </div>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <ul
              className="nav nav-tabs tabs w-50 mx-0 "
              id="myTab"
              role="tablist"
            >
              <li className="nav-item buy-tabs" role="presentation">
                <button
                  className="nav-link active tab-btn"
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
              <li className="nav-item buy-tabs" role="presentation">
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
              <li className="nav-item buy-tabs" role="presentation">
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
              <li className="nav-item buy-tabs" role="presentation">
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
              <li className="nav-item buy-tabs" role="presentation">
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
              <li className="nav-item buy-tabs" role="presentation">
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
          <div className="tab-content mt-4" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="Raw"
              role="tabpanel"
              aria-labelledby="raw-tab"
            >
              <Row className="row-gap-3 gx-3">
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
              </Row>
            </div>
            <div
              className="tab-pane fade"
              id="Isl"
              role="tabpanel"
              aria-labelledby="isl-tab"
            >
              <Row className="row-gap-3 gx-3">
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
              </Row>
            </div>
            <div
              className="tab-pane fade"
              id="Lah"
              role="tabpanel"
              aria-labelledby="lah-tab"
            >
              <Row className="row-gap-3 gx-3">
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
              </Row>
            </div>
            <div
              className="tab-pane fade"
              id="Mul"
              role="tabpanel"
              aria-labelledby="mul-tab"
            >
              <Row className="row-gap-3 gx-3">
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
              </Row>
            </div>
            <div
              className="tab-pane fade"
              id="Kar"
              role="tabpanel"
              aria-labelledby="kar-tab"
            >
              <Row className="row-gap-3 gx-3">
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
              </Row>
            </div>
            <div
              className="tab-pane fade"
              id="KPK"
              role="tabpanel"
              aria-labelledby="kpk-tab"
            >
              <Row className="row-gap-3 gx-3">
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
                {RecentCardData.recentAds.map((ads, i) => (
                  <Card1 ads={ads} key={i} />
                ))}
                {RecentCardData.advertisement.map((advertise, i) => (
                  <Card2 advertise={advertise} key={i} />
                ))}
              </Row>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="secondary-button mt-4">
              Load More
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default RecentlyAds;
