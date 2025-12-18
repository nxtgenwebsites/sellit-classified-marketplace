import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Featured_succesful_listing_page() {
  const navigate = useNavigate();
  const { tableName, adId } = useParams();
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      id: 1,
      title: "Feature 1 Ad for 7 days",
      reach: "Reach up to 4 times more buyers",
      price: 1714,
      originalPrice: null,
      discount: null,
      recommended: false,
    },
    {
      id: 2,
      title: "Feature 1 Ad for 15 days",
      reach: "Reach up to 7 times more buyers",
      price: 2499,
      originalPrice: 3999,
      discount: 38,
      recommended: true,
    },
    {
      id: 3,
      title: "Feature 1 Ad for 30 days",
      reach: "Reach up to 10 times more buyers",
      price: 3999,
      originalPrice: 5999,
      discount: 33,
      recommended: true,
    },
    {
      id: 4,
      title: "Feature 1 Ad for 60 days",
      reach: "Reach up to 15 times more buyers",
      price: 6999,
      originalPrice: 9999,
      discount: 30,
      recommended: false,
    },
  ];

  const handlePayNow = () => {
    if (!selectedOffer) {
      alert("Please select an offer");
      return;
    }

    localStorage.setItem(
      "featured_ad_payment",
      JSON.stringify({
        tableName,
        adId,
        offer: selectedOffer,
      })
    );

    navigate(`/payment/${tableName}/${adId}`);
  };

  return (
    <div>
      <Container>
        {/* SUCCESS MESSAGE */}
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

        {/* STATIC CONTENT (UNCHANGED) */}
        <div className="second-successful-section px-2 py-5">
          <Row className="gap-lg-5 row-gap-lg-0 row-gap-5">
            <Col lg={5}>
              <div className="second-successful-card text-lg-start text-center">
                <h5 className="fw-bold">
                  Reach More Buyers and Sell Faster and Upgrade your Ad to a top
                  position
                </h5>
              </div>
            </Col>
            <Col lg={5}>
              <div className="second-successful-card text-lg-end text-center">
                <img src="/assets/img/featured-img.svg" alt="IMG" />
              </div>
            </Col>
          </Row>

          {/* OFFERS (UI SAME, DATA DYNAMIC) */}
          <div className="third-sub-section mt-2">
            {offers.map((offer) => (
              <div key={offer.id} className="radio-div py-4 px-3 mt-2">
                <div className="d-flex justify-content-between">
                  <div className="radio-content d-flex gap-3 align-items-center">
                    <input
                      type="radio"
                      name="featured_offer"
                      onChange={() => setSelectedOffer(offer)}
                    />
                    <div className="description">
                      <div className="d-flex gap-2">
                        <h5 className="fw-bold">{offer.title}</h5>
                        {offer.recommended && (
                          <p className="description-span">Recommended</p>
                        )}
                      </div>
                      <p className="desc">{offer.reach}</p>
                    </div>
                  </div>

                  <div className="price">
                    {offer.discount && (
                      <div className="discount-banner position-relative">
                        <img src="/assets/icons/Discount_icon.webp" alt="" />
                        <h6 className="fw-bold position-absolute top-0">
                          -{offer.discount}%
                        </h6>
                      </div>
                    )}
                    <div className="price-content">
                      {offer.originalPrice && (
                        <h5 className="fw-medium original-price text-decoration-line-through">
                          PKR {offer.originalPrice}
                        </h5>
                      )}
                      <h5 className="fw-medium discount-price">
                        PKR {offer.price}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAY NOW */}
          <button
            type="button"
            onClick={handlePayNow}
            className="rounded-3 primary-button btn btn-primary mt-3 pay-now-btn text-white"
          >
            Pay Now
          </button>
        </div>
      </Container>
    </div>
  );
}
