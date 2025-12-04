"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import SearchCard from "./SearchCard";
// import Card from "../Categories/CategoryCards/Mobile/Card";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryParam = searchParams.get("query") || "";
  const locationParam = searchParams.get("location") || "";

  // State management
  const [searchText, setSearchText] = useState(queryParam);
  const [selectedLocation, setSelectedLocation] = useState(locationParam);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [sortBy, setSortBy] = useState("Sort by");
  const [currentPage, setCurrentPage] = useState(1);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalAds, setTotalAds] = useState(0);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalAds / itemsPerPage);

  // Locations list
  const locations = [
    "All Pakistan",
    "Azad Kashmir",
    "Balochistan",
    "Islamabad",
    "Kyber Pakhtunkhwa",
    "Punjab",
    "Sindh",
    "Faisalabad",
    "Karachi",
    "Lahore",
    "Rawalpindi",
  ];

  const fetchAds = async (page = 1) => {
    setLoading(true);
    try {
      let url = `https://sellit-backend-u8bz.onrender.com/api/manage-ads/search?text=${searchText}&page=${page}`;

      // Add location if selected and not "All Pakistan"
      if (selectedLocation && selectedLocation !== "All Pakistan") {
        url += `&location=${selectedLocation}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      // Filter by price if specified
      let filteredAds = data.ads || [];
      if (priceFrom || priceTo) {
        filteredAds = filteredAds.filter((ad) => {
          const price = ad.price || 0;
          const from = priceFrom ? Number.parseInt(priceFrom) : 0;
          const to = priceTo
            ? Number.parseInt(priceTo)
            : Number.POSITIVE_INFINITY;
          return price >= from && price <= to;
        });
      }

      // Sort ads based on selected option
      if (sortBy !== "Sort by") {
        if (sortBy === "Most Viewed") {
          filteredAds.sort((a, b) => (b.views || 0) - (a.views || 0));
        } else if (sortBy === "Recently Posted") {
          filteredAds.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        } else if (sortBy === "Price: Low to High") {
          filteredAds.sort((a, b) => (a.price || 0) - (b.price || 0));
        } else if (sortBy === "Price: High to Low") {
          filteredAds.sort((a, b) => (b.price || 0) - (a.price || 0));
        }
      }

      setTotalAds(filteredAds.length);
      const firstItem = (page - 1) * itemsPerPage;
      const lastItem = firstItem + itemsPerPage;
      setAds(filteredAds.slice(firstItem, lastItem));
    } catch (error) {
      console.error("Error fetching ads:", error);
      setAds([]);
      setTotalAds(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchText) params.set("query", searchText);
    if (selectedLocation && selectedLocation !== "All Pakistan") {
      params.set("location", selectedLocation);
    }
    const newUrl = params.toString() ? `?${params.toString()}` : "";
    navigate(newUrl || "/search", { replace: true });
  }, [searchText, selectedLocation, navigate]);

  // Fetch ads when search, location, price, or sort changes
  useEffect(() => {
    if (searchText) {
      setCurrentPage(1);
      fetchAds(1);
    }
  }, [searchText, selectedLocation, priceFrom, priceTo, sortBy]);

  // Fetch ads when page changes
  useEffect(() => {
    if (searchText) {
      fetchAds(currentPage);
    }
  }, [currentPage]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchText.trim()) {
      setCurrentPage(1);
      fetchAds(1);
    }
  };

  // Handle Enter key in search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Container>

        <div className="layout-container d-lg-flex gap-4">
          {/* Sidebar Filters */}
          <section className="sidebar py-5" style={{ minWidth: "250px" }}>
            {/* Location Filter */}
            <div className="second-section mt-3 rounded-2">
              <div className="second-heading">
                <h6 className="second-title fw-semibold">Location</h6>
              </div>
              <div className="second-dropdown dropdown mt-3">
                <button
                  type="button"
                  className="px-3 py-3 rounded-3 bg-transparent d-flex justify-content-between w-100 dropdown-main-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5 className="fw-normal mb-0">
                    {selectedLocation || "Pakistan"}
                  </h5>
                  <p className="dropdown-btn mb-0">
                    <img src="assets/icons/chevron.svg" alt="IMG" />
                  </p>
                </button>
                <div className="dropdown-menu second-menu">
                  <button
                    type="button"
                    className="dropdown-item d-flex w-100 px-3 py-2 text-start border-0 bg-transparent"
                    onClick={() => setSelectedLocation("All Pakistan")}
                  >
                    <div className="location-s-icon d-xl-block d-none">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="location-content">
                      <p>See ads in all Pakistan</p>
                    </div>
                  </button>
                  <hr className="menu-divider" />
                  <li className="dropdown-item region-heading">
                    <p className="ps-3">Choose Region</p>
                  </li>
                  {locations.map((location) => (
                    <button
                      key={location}
                      type="button"
                      className="dropdown-item d-flex w-100 px-3 py-2 text-start border-0 bg-transparent"
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="location-s-icon d-xl-block d-none">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div className="location-content">
                        <p>{location}, Pakistan</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Filter */}
            <div className="third-section mt-3 rounded-2">
              <div className="third-heading">
                <h6 className="third-title fw-semibold">Price Range</h6>
              </div>
              <div className="price-inputs d-flex w-100 gap-3 align-items-center">
                <div className="price-from w-100">
                  <input
                    type="number"
                    className="p-2 w-100 form-control"
                    placeholder="Min price"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                  />
                </div>
                <h6 className="fw-semibold">to</h6>
                <div className="price-to w-100">
                  <input
                    type="number"
                    className="p-2 w-100 form-control"
                    placeholder="Max price"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="page-wrapper flex-grow-1">
            {/* Header with Sort */}
            <div className="mobile-heading mb-3 d-flex w-100 justify-content-between">
              <div className="left-heading rounded-1">
                <h6 className="left-title m-0 mt-1">
                  {totalAds.toLocaleString()} ads
                </h6>
              </div>
              <div className="right-heading d-flex align-items-center gap-3">
                <div className="second-mobile-heading">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="sortButton"
                      aria-expanded="false"
                      className="btn right-button"
                      data-bs-toggle="dropdown"
                    >
                      {sortBy}
                      <span className="dropdown-btn">
                        <img
                          src="assets/icons/chevron.svg"
                          alt="IMG"
                          className="ms-1"
                        />
                      </span>
                    </button>
                    <div className="dropdown-menu right-menu">
                      <button
                        type="button"
                        className="dropdown-item p-2 sort-item"
                        onClick={() => setSortBy("Most Viewed")}
                      >
                        Most Viewed
                      </button>
                      <button
                        type="button"
                        className="dropdown-item p-2 sort-item"
                        onClick={() => setSortBy("Recently Posted")}
                      >
                        Recently Posted
                      </button>
                      <button
                        type="button"
                        className="dropdown-item p-2 sort-item"
                        onClick={() => setSortBy("Price: Low to High")}
                      >
                        Price: Low to High
                      </button>
                      <button
                        type="button"
                        className="dropdown-item p-2 sort-item"
                        onClick={() => setSortBy("Price: High to Low")}
                      >
                        Price: High to Low
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {/* Ads Grid */}
            {!loading && ads.length > 0 && (
              <Row className="row-gap-2">
                {ads.map((ad, i) => (
                  <SearchCard key={ad.id || i} mobile={ad} />
                ))}
              </Row>
            )}

            {/* No Results */}
            {!loading && ads.length === 0 && searchText && (
              <div className="text-center py-5">
                <p className="text-muted">
                  No ads found for "{searchText}"
                  {selectedLocation && selectedLocation !== "All Pakistan"
                    ? ` in ${selectedLocation}`
                    : ""}
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-section my-3">
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button
                    className={`btn border-0 me-2 arrow-btn ${
                      currentPage === 1 ? "arrow-disabled" : "arrow-active"
                    }`}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <BsArrowLeft />
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    return (
                      <button
                        key={pageNum}
                        className={`btn mx-1 ${
                          currentPage === pageNum
                            ? "btn-active"
                            : "btn-unactive"
                        }`}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    className={`btn ms-2 arrow-btn ${
                      currentPage === totalPages
                        ? "arrow-disabled"
                        : "arrow-active"
                    }`}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
