import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card1 from "./RecentAdsCards/Card1";
import Card2 from "./RecentAdsCards/Card2";
import { FaArrowRight } from "react-icons/fa6";

function RecentlyAds() {
  const [ads, setAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch ads from API
  useEffect(() => {
    fetchAds(currentPage);
  }, [currentPage]);

  const fetchAds = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://sellit-backend-u8bz.onrender.com/api/manage-ads/recent-ads?page=${page}`
      );

      if (response.data.success) {
        setAds(response.data.ads);
        setTotalPages(response.data.total_pages);
      }
    } catch (error) {
      console.error("Error fetching ads:", error);
    } finally {
      setLoading(false);
    }
  };

  // Insert Card2 after every 10 cards
  const getCardsWithAdvertisement = () => {
    const cardsWithAds = [];
    ads.forEach((ad, index) => {
      cardsWithAds.push(<Card1 ads={ad} key={`ad-${index}`} />);

      // Add Card2 after every 10 cards
      if ((index + 1) % 10 === 0) {
        cardsWithAds.push(
          <Card2 advertise={{ id: `ad-${index}` }} key={`ad2-${index}`} />
        );
      }
    });
    return cardsWithAds;
  };

  return (
    <div>
      <section className="buy-ans-sell-section py-5 h-full">
        <Container>
          <div className="buy-sell-heading">
            <div className="">
              <h1 className="text-main-heading">Recently Posted Ads</h1>
            </div>
          </div>

          <div className="d-flex w-100 flex-column justify-content-between align-items-md-center flex-md-row gap-4">
            <ul
              className="nav nav-tabs tabs w-auto mx-0"
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

          <div className="tab-content mt-4" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              {loading ? (
                <div className="text-center py-5">
                  <p>Loading ads...</p>
                </div>
              ) : ads.length > 0 ? (
                <Row className="row-gap-3 gx-3">
                  {getCardsWithAdvertisement()}
                </Row>
              ) : (
                <div className="text-center py-5">
                  <p>No ads found</p>
                </div>
              )}
            </div>
          </div>

          {/* <div className="d-flex justify-content-between align-items-center mt-5 w-25 mx-auto">
            <button
              type="button"
              className="secondary-button"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <div className="pagination-info">
              <span>
                Page {currentPage} of {totalPages}
              </span>
            </div>

            <button
              type="button"
              className="secondary-button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div> */}
        </Container>
      </section>
    </div>
  );
}

export default RecentlyAds;



