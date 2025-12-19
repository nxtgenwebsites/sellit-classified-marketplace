"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  BsSearch,
  BsThreeDotsVertical,
  BsPencil,
  BsTrash,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import "./AdsManagement.css";
import { Link } from "react-router-dom";

const filterTabs = [
  { id: "all", label: "All Ads", count: null, active: true },
  { id: "featured", label: "Featured", count: 22, active: false },
  { id: "active", label: "Active", count: 42, active: false },
  { id: "inactive", label: "Inactive", count: 3, active: false },
  { id: "sold", label: "Sold", count: 2, active: false },
  { id: "expired", label: "Expired", count: 1, active: false },
];

const AdsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [adsData, setAdsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalAds, setTotalAds] = useState(0);
  const [deleting, setDeleting] = useState(null);
  const adsPerPage = 6;
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    fetchUserAds();
  }, [currentPage]);

  const fetchUserAds = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://sellit-backend-u8bz.onrender.com/api/manage-ads/get-ads/${uid}`
      );

      if (response.data.success) {
        setAdsData(response.data.ads);
        setTotalAds(response.data.ads.length);
      }
    } catch (error) {
      console.error("Error fetching ads:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAds = adsData.filter((ad) => {
    const matchesSearch =
      ad.ad_title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.location?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredAds.length / adsPerPage);
  const startIndex = (currentPage - 1) * adsPerPage;
  const currentAds = filteredAds.slice(startIndex, startIndex + adsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (ad) => {

    try {
      setDeleting(ad.id);
      const response = await axios.delete(
        `https://sellit-backend-u8bz.onrender.com/api/manage-ads/delete/${ad.sub_category}/${ad.id}`
      );

      if (response.data.success) {
        // Remove the deleted ad from state
        setAdsData(adsData.filter((item) => item.id !== ad.id));
        setTotalAds(totalAds - 1);
        alert("Ad deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting ad:", error);
      alert("Failed to delete ad. Please try again.");
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="ads-management">
      <div className="section-header">
        <h2 className="section-title">My Ads</h2>
        <p className="section-description">Manage all your listings here</p>
      </div>

      <div className="content-card">
        <div className="card-header">
          <div className="search-container">
            <BsSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search Listing"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="filter-container">
            <div className="filter-tabs">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`filter-tab ${
                    tab.id === activeTab ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="sort-dropdown">
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        <div className="table-container">
          {loading ? (
            <div style={{ padding: "20px", textAlign: "center" }}>
              Loading...
            </div>
          ) : currentAds.length === 0 ? (
            <div style={{ padding: "20px", textAlign: "center" }}>
              {searchTerm
                ? "No ads found matching your search."
                : "No ads available."}
            </div>
          ) : (
            <table className="ads-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th className="hide-sm">Category</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th className="hide-md">Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentAds.map((ad, index) => (
                  <tr key={ad.id || index}>
                    <td>
                      <div className="ad-info">
                        <img
                          src={
                            ad.thumbnail_url ||
                            "/placeholder.svg?height=60&width=60" ||
                            "/placeholder.svg"
                          }
                          alt={ad.ad_title}
                          className="ad-image"
                        />
                        <div className="ad-details">
                          <div className="ad-title">
                            {ad.ad_title?.length > 10
                              ? ad.ad_title.slice(0, 10) + "..."
                              : ad.ad_title}
                          </div>

                          <div className="ad-location">
                            {ad.location || "N/A"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="hide-sm">{ad.sub_category}</td>
                    <td>
                      <span className="status-badge active">Active</span>
                    </td>
                    <td>Rs {ad.price}</td>
                    <td className="hide-md">{formatDate(ad.created_at)}</td>
                    <td>
                      <div className="action-buttons">
                        <Link to={`${ad.source}/${ad.id}`}>
                          <button className="action-btn">
                            <FaRegEye />
                          </button>
                        </Link>
                        <button
                          className="action-btn"
                          onClick={() => handleDelete(ad)}
                          disabled={deleting === ad.id}
                          title="Delete ad"
                        >
                          {deleting === ad.id ? "..." : <BsTrash />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <BsChevronLeft />
          </button>

          {[...Array(Math.min(5, totalPages))].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                className={`pagination-btn ${
                  currentPage === pageNum ? "active" : ""
                }`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}

          {totalPages > 5 && (
            <>
              <span className="pagination-ellipsis">...</span>
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <BsChevronRight />
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="copyright">
          © 2025 Sellit Pakistan. All Right Reserved.
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Terms & Conditions
          </a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">
            Privacy Notice
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AdsManagement;
