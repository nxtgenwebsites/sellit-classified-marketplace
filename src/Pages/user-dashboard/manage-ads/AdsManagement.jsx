"use client";

import { useState } from "react";
import {
  BsSearch,
  BsThreeDotsVertical,
  BsPencil,
  BsTrash,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import "./AdsManagement.css";

const adsData = [
  {
    id: "#954",
    title: "Apple Watch 9 Series",
    image: "/placeholder.svg?height=60&width=60",
    location: "New York, USA",
    category: "Laptops & PCs",
    status: "Active",
    price: "$200",
    expiry: "4 weeks left",
  },
  {
    id: "#54",
    title: "Amazing Villa For Sale",
    image: "/placeholder.svg?height=60&width=60",
    location: "New York, USA",
    category: "Real Estate",
    status: "Inactive",
    price: "$200",
    expiry: "4 weeks left",
  },
  {
    id: "#676",
    title: "Audi Q7 35 TFSI",
    image: "/placeholder.svg?height=60&width=60",
    location: "New York, USA",
    category: "Cars",
    status: "Sold",
    price: "$200",
    expiry: "4 weeks left",
  },
  {
    id: "#878",
    title: "2024 Luxury Boat",
    image: "/placeholder.svg?height=60&width=60",
    location: "New York, USA",
    category: "Yachting",
    status: "Inactive",
    price: "$200",
    expiry: "4 weeks left",
  },
  {
    id: "#123",
    title: "Riding Quad Bike",
    image: "/placeholder.svg?height=60&width=60",
    location: "New York, USA",
    category: "Fashion",
    status: "Active",
    price: "$200",
    expiry: "4 weeks left",
  },
  {
    id: "#003",
    title: "Joyful Dog",
    image: "/placeholder.svg?height=60&width=60",
    location: "New York, USA",
    category: "Pets",
    status: "Active",
    price: "$200",
    expiry: "4 weeks left",
  },
];

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

  return (
    <div className="ads-management">
      <div className="section-header">
        <h2 className="section-title">My Ads</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
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
              onChange={(e) => setSearchTerm(e.target.value)}
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
                  {tab.label} {tab.count && `(${tab.count})`}
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
          <table className="ads-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th className="hide-sm">Category</th>
                <th>Status</th>
                <th>Price</th>
                <th className="hide-md">Expiry</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adsData.map((ad, index) => (
                <tr key={index}>
                  <td>{ad.id}</td>
                  <td>
                    <div className="ad-info">
                      <img
                        src={
                          "https://as-images.apple.com/is/refurb-45-nc-alum-midnight-sport-band-midnight-s9?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1709325333040"
                        }
                        alt={ad.title}
                        className="ad-image"
                      />
                      <div className="ad-details">
                        <div className="ad-title">{ad.title}</div>
                        <div className="ad-location">{ad.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="hide-sm">{ad.category}</td>
                  <td>
                    <span className={`status-badge ${ad.status.toLowerCase()}`}>
                      {ad.status}
                    </span>
                  </td>
                  <td>{ad.price}</td>
                  <td className="hide-md">{ad.expiry}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn">
                        <BsThreeDotsVertical />
                      </button>
                      <button className="action-btn">
                        <BsPencil />
                      </button>
                      <button className="action-btn">
                        <BsTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="pagination-btn">
            <BsChevronLeft />
          </button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <span className="pagination-ellipsis">...</span>
          <button className="pagination-btn">20</button>
          <button className="pagination-btn">
            <BsChevronRight />
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="copyright">
          © 2024 Polygon Theme. All Right Reserved.
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
