import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Featured_succesful_listing_page() {
  return (
    <div>
      <Container>
        <div className="first-successful-section p-5 d-lg-flex w-100 rounded-1">
          <div className="successful-section-img">
            <img src="/assets/img/handshake.svg" alt="IMG" width={75} />
          </div>
          <div className="success-content text-lg-start text-center mt-lg-0 mt-3">
            <h5 className="fw-bold">Your Ad has been uploaded successfully!</h5>
            <p>
              Your Ad will soon be reachable to{" "}
              <span className="fw-bold">millions</span> of buyers
            </p>
          </div>
        </div>
        <div className="second-successful-section px-2 py-5">
          <Row className="gap-lg-5 row-gap-lg-0 row-gap-5">
            <Col lg={5}>
              <div className="second-successful-card text-lg-start text-center">
                <div className="first-sub-section">
                  <div className="second-successful-content">
                    <h5 className="fw-bold">
                      Reach More Buyers and Sell Faster and Upgrade your Ad to a
                      top position
                    </h5>
                    <p className="mt-5 fw-bold question">
                      What is Featured Ads ?
                    </p>
                    <ul className="first-sub-successful-list list-unstyled">
                      <li className="second-successful-item d-flex gap-3">
                        <div className="check">
                          <img
                            src="/assets/icons/green_tick.svg"
                            alt=""
                            width={20}
                          />
                        </div>
                        <div className="_content">
                          Get noticed with{" "}
                          <span className="fw-bold">"FEATURED"</span> tag in a
                          top position
                        </div>
                      </li>
                      <li className="second-successful-item d-flex gap-3 mt-2">
                        <div className="check">
                          <img
                            src="/assets/icons/green_tick.svg"
                            alt=""
                            width={20}
                          />
                        </div>
                        <div className="_content">
                          Ad will be highlighted to top position
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="second-sub-section mt-4">
                  <h5 className="fw-bold mb-5">FEATURE YOUR AD</h5>
                  <ul className="second-sub-successful-list list-unstyled">
                    <li className="second-successful-item d-flex gap-3">
                      <div className="check">
                        <img
                          src="/assets/icons/orange_tick.svg"
                          alt=""
                          width={20}
                        />
                      </div>
                      <div className="_content">
                        Get noticed with{" "}
                        <span className="fw-bold">"FEATURED"</span> tag in a top
                        position
                      </div>
                    </li>
                    <li className="second-successful-item d-flex gap-3 mt-2">
                      <div className="check">
                        <img
                          src="/assets/icons/orange_tick.svg"
                          alt=""
                          width={20}
                        />
                      </div>
                      <div className="_content">
                        Ad will be highlighted to top position
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="second-successful-card text-lg-end text-center">
                <div className="second-successful-img">
                  <img src="/assets/img/featured-img.svg" alt="IMG" />
                </div>
                <div className="second-successful-btn me-3">
                  <Link to={"/example"}>
                    <button
                      type="button"
                      className="px-3 py-2 rounded-1 secondary-button"
                    >
                      See Example
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <div className="third-sub-section mt-2">
            <div className="radio-div py-4 px-3">
              <div className="d-flex justify-content-between">
                <div className="radio-content d-flex gap-3 align-items-center">
                  <input type="radio" name="a" id="a" />
                  <div className="description">
                    <h5 className="fw-bold">Feature 1 Ad for 7 days</h5>
                    <p className="desc">Reach up to 4 times more buyers</p>
                  </div>
                </div>
                <div className="price">
                  <h5 className="fw-medium discount-price">PKR 1,714</h5>
                </div>
              </div>
            </div>
            <div className="radio-div py-4 px-3 mt-2">
              <div className="d-flex justify-content-between">
                <div className="radio-content d-flex gap-3 align-items-center">
                  <input type="radio" id="a" name="a" />
                  <div className="description">
                    <div className="d-flex gap-2">
                      <h5 className="fw-bold">Feature 1 Ad for 7 days </h5>
                      <p className="description-span">Recommended</p>
                    </div>
                    <p className="desc">Reach up to 4 times more buyers</p>
                  </div>
                </div>
                <div className="price">
                  <div className="discount-banner position-relative">
                    <img src="/assets/icons/Discount_icon.webp" alt="" />
                    <h6 className="fw-bold position-absolute top-0">-38%</h6>
                  </div>
                  <div className="price-content">
                    <h5 className="fw-medium original-price text-decoration-line-through">
                      PKR 1,714
                    </h5>
                    <h5 className="fw-medium discount-price">PKR 1,714</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="radio-div py-4 px-3 mt-2">
              <div className="d-flex justify-content-between">
                <div className="radio-content d-flex gap-3 align-items-center">
                  <input type="radio" id="a" name="a" />
                  <div className="description">
                    <div className="d-flex gap-2">
                      <h5 className="fw-bold">Feature 1 Ad for 7 days </h5>
                      <p className="description-span">Recommended</p>
                    </div>
                    <p className="desc">Reach up to 4 times more buyers</p>
                  </div>
                </div>
                <div className="price">
                  <div className="discount-banner position-relative">
                    <img src="/assets/icons/Discount_icon.webp" alt="" />
                    <h6 className="fw-bold position-absolute top-0">-38%</h6>
                  </div>
                  <div className="price-content">
                    <h5 className="fw-medium original-price text-decoration-line-through">
                      PKR 1,714
                    </h5>
                    <h5 className="fw-medium discount-price">PKR 1,714</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="radio-div py-4 px-3 mt-2">
              <div className="d-flex justify-content-between">
                <div className="radio-content d-flex gap-3 align-items-center">
                  <input type="radio" id="a" name="a" />
                  <div className="description">
                    <h5 className="fw-bold">Feature 1 Ad for 7 days</h5>
                    <p className="desc">Reach up to 4 times more buyers</p>
                  </div>
                </div>
                <div className="price">
                  <div className="discount-banner position-relative">
                    <img src="/assets/icons/Discount_icon.webp" alt="" />
                    <h6 className="fw-bold position-absolute top-0">-38%</h6>
                  </div>
                  <div className="price-content">
                    <h5 className="fw-medium original-price text-decoration-line-through">
                      PKR 1,714
                    </h5>
                    <h5 className="fw-medium discount-price">PKR 1,714</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to={'/payment'}>
          <button
            type="button"
            class="rounded-3 primary-button btn btn-primary mt-3 pay-now-btn text-white"
          >
            Pay Now
          </button>
          </Link>
          <Link to={'/payment'}>
          </Link>
        </div>
      </Container>
    </div>
  );
}
