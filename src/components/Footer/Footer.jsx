import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <footer className="footer-section mt-3">
        <Container>
          <Row className="footer-row row-gap-5">
            <Col lg={4} md={6}>
              <div className="footer-card">
                <div className="footer-img">
                  <img src="assets/icons/Navbar-logo.png" alt="IMG" />
                </div>
                <div className="footer-content text-md-start text-center mt-4">
                  <p>
                    Explore Sellit Pakistan, the first choice for posting free
                    classified ads throughout Pakistan. Sell anything, anywhere
                    with ease on our nation-wide marketplace.
                  </p>
                  <div className="hashtags-wrapper d-md-flex gap-2">
                    <p className="hastags">#SellitPakistan</p>
                    <p className="hastags">#Classified</p>
                    <p className="hastags">#Ads</p>
                    <p className="hastags">#Pakistan</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={2} md={6} className="text-md-start text-center">
              <div className="footer-heading">
                <h6 className="fw-semibold">Top Categories</h6>
              </div>
              <div className="footer-list">
                <ul className="navbar-nav">
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Properties for Sale
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Properties for Rent
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      New Cars for Sale
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Used Cars for Sale
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Mobile Phones
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Electronics
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Fashion / Clothing
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Travel & Tours Deals
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Fitness / Gym
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} className="text-md-start text-center">
              <div className="footer-heading">
                <h6 className="fw-semibold">Useful Links</h6>
              </div>
              <div className="footer-list">
                <ul className="navbar-nav">
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Post a Free Classified Ad
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <Link
                      to={"/footer-grow-page"}
                      className="nav-link footer-link footer-hover"
                    >
                      Grow with Sellit Pakistan
                    </Link>
                  </li>
                  <li className="nav-item footer-item">
                    <Link
                      to={"/footer-advertise-page"}
                      className="nav-link footer-link footer-hover"
                    >
                      Advertise with Sellit Pakistan
                    </Link>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Sellit Support Center
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Latest News from Sellit
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Website Analytics
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Sitemap
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Terms of Use
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a href="#" className="nav-link footer-link footer-hover">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={6} className="text-md-start text-center">
              <div className="footer-heading mb-3">
                <h6 className="fw-semibold">Subscribe to Our Newsletter</h6>
              </div>
              <form className="subscribe-div position-relative">
                <div className="form-group">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-100"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-2 border-0"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="footer-heading">
                <h6 className="semibold my-3">Follow Us</h6>
              </div>
              <div className="footer-list">
                <ul className="d-flex gap-4 list-unstyled">
                  <li className="nav-item footer-item">
                    <a
                      href="https://www.facebook.com/SellitPakistan"
                      target="_blank"
                      className="nav-link footer-link social-icons facebook"
                    >
                      <BsFacebook />
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a
                      href="#"
                      target="_blank"
                      className="nav-link footer-link social-icons instagram"
                    >
                      <BsInstagram />
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a
                      href="https://www.linkedin.com/company/sellit-pakistan/"
                      target="_blank"
                      className="nav-link footer-link social-icons linkedin"
                    >
                      <BsLinkedin />
                    </a>
                  </li>
                  <li className="nav-item footer-item">
                    <a
                      href="https://www.youtube.com/@SellitPakistan"
                      target="_blank"
                      className="nav-link footer-link social-icons youtube"
                    >
                      <BsYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
