"use client";

import { useState, useEffect } from "react";
import "./adds-manage-team.css"
import { Link } from "react-router-dom";

export default function AdManagementPage() {
  const [ads, setAds] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [adsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
//   const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [errors, setErrors] = useState({});

  // Mock user data - replace with actual user context
  const currentUser = {
    id: "user123",
    name: "Ahmad Ali",
    region: "Punjab",
    role: "team_member",
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    region: currentUser.region,
    category: "",
    price: "",
    contactInfo: "",
    imageUrl: "",
    googleLink: "https://google.com",
    status: "active",
  });

  // Sample ads data
  const sampleAds = [
    {
      id: "1",
      title: "iPhone 14 Pro Max",
      description: "Brand new iPhone 14 Pro Max 256GB",
      region: "Punjab",
      category: "Electronics",
      price: "Rs 280,000",
      contactInfo: "+92 300 1234567",
      imageUrl:
        "https://regen.pk/cdn/shop/products/Regen-iPhone-13-Blue.jpg?v=1674906995",
      googleLink: "https://google.com",
      status: "active",
      createdAt: "2024-01-15",
      views: 245,
      createdBy: "user123",
    },
    {
      id: "2",
      title: "Honda Civic 2020",
      description: "Well maintained Honda Civic 2020 model",
      region: "Punjab",
      category: "Vehicles",
      price: "Rs 4,500,000",
      contactInfo: "+92 301 9876543",
      imageUrl:
        "https://regen.pk/cdn/shop/products/Regen-iPhone-13-Blue.jpg?v=1674906995",
      googleLink: "https://google.com",
      status: "active",
      createdAt: "2024-01-14",
      views: 189,
      createdBy: "user456",
    },
    {
      id: "3",
      title: "2 Bedroom Apartment",
      description: "Spacious 2 bedroom apartment in DHA",
      region: "Punjab",
      category: "Real Estate",
      price: "Rs 25,000/month",
      contactInfo: "+92 302 5555555",
      imageUrl:
        "https://regen.pk/cdn/shop/products/Regen-iPhone-13-Blue.jpg?v=1674906995",
      googleLink: "https://google.com",
      status: "inactive",
      createdAt: "2024-01-13",
      views: 156,
      createdBy: "user789",
    },
  ];

  useEffect(() => {
    setAds(sampleAds);
  }, []);

  // Filter ads based on search and filters
  const filteredAds = ads.filter((ad) => {
    const matchesSearch =
      ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.description.toLowerCase().includes(searchTerm.toLowerCase());
    // const matchesRegion =
    //   selectedRegion === "all" || ad.region === selectedRegion;
    const matchesStatus =
      selectedStatus === "all" || ad.status === selectedStatus;

    // Team members can only see ads from their region
    const matchesUserRegion =
      currentUser.role === "admin" || ad.region === currentUser.region;

    return matchesSearch && matchesStatus && matchesUserRegion;
  });

  // Pagination logic
  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = filteredAds.slice(indexOfFirstAd, indexOfLastAd);
  const totalPages = Math.ceil(filteredAds.length / adsPerPage);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      region: currentUser.region,
      category: "",
      price: "",
      contactInfo: "",
      imageUrl: "",
      googleLink: "https://google.com",
      status: "active",
    });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.price.trim()) newErrors.price = "Price is required";
    if (!formData.contactInfo.trim())
      newErrors.contactInfo = "Contact info is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddAd = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newAd = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString().split("T")[0],
      views: 0,
      createdBy: currentUser.id,
    };

    setAds([newAd, ...ads]);
    setShowAddModal(false);
    resetForm();
  };

  const handleEditAd = (ad) => {
    setSelectedAd(ad);
    setFormData({
      title: ad.title,
      description: ad.description,
      region: ad.region,
      category: ad.category,
      price: ad.price,
      contactInfo: ad.contactInfo,
      imageUrl: ad.imageUrl,
      googleLink: ad.googleLink,
      status: ad.status,
    });
    setShowEditModal(true);
  };

  const handleUpdateAd = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const updatedAds = ads.map((ad) =>
      ad.id === selectedAd.id ? { ...ad, ...formData } : ad
    );

    setAds(updatedAds);
    setShowEditModal(false);
    resetForm();
    setSelectedAd(null);
  };

  const viewAdDetails = (ad) => {
    setSelectedAd(ad);
    setShowViewModal(true);
  };

  const deleteAd = (id) => {
    if (window.confirm("Are you sure you want to delete this ad?")) {
      setAds(ads.filter((ad) => ad.id !== id));
    }
  };

  const openGoogleLink = (link) => {
    window.open(link || "https://google.com", "_blank");
  };

  const toggleAdStatus = (id) => {
    const updatedAds = ads.map((ad) =>
      ad.id === id
        ? { ...ad, status: ad.status === "active" ? "inactive" : "active" }
        : ad
    );
    setAds(updatedAds);
  };

  const regions = ["Punjab", "Sindh", "KPK", "Balochistan", "Islamabad"];
  const categories = [
    "Electronics",
    "Vehicles",
    "Real Estate",
    "Fashion",
    "Home & Garden",
    "Services",
  ];

  return (
    <div className="page-container">
      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="d-flex align-items-center">
            <div className="stat-icon active">
              <i className="fas fa-check-circle"></i>
            </div>
            <div>
              <div className="stat-number">
                {ads.filter((ad) => ad.status === "active").length}
              </div>
              <div className="stat-label">Active Ads</div>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="d-flex align-items-center">
            <div className="stat-icon inactive">
              <i className="fas fa-pause-circle"></i>
            </div>
            <div>
              <div className="stat-number">
                {ads.filter((ad) => ad.status === "inactive").length}
              </div>
              <div className="stat-label">Inactive Ads</div>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="d-flex align-items-center">
            <div className="stat-icon total">
              <i className="fas fa-bullhorn"></i>
            </div>
            <div>
              <div className="stat-number">{ads.length}</div>
              <div className="stat-label">Total Ads</div>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="d-flex align-items-center">
            <div className="stat-icon views">
              <i className="fas fa-eye"></i>
            </div>
            <div>
              <div className="stat-number">
                {ads.reduce((sum, ad) => sum + ad.views, 0)}
              </div>
              <div className="stat-label">Total Views</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-card">
        <div className="d-flex flex-column flex-lg-row gap-3 align-items-center">
          <div className="search-container flex-fill">
            <i className="fas fa-search"></i>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search ads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="d-flex gap-3">
            <select
              className="form-select filter-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="results-info">{filteredAds.length} ads found</div>
        </div>
      </div>

      {/* Ads Table */}
      <div className="table-card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Ad Details</th>
                <th>Category & Price</th>
                <th>Status & Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentAds.map((ad) => (
                <tr key={ad.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={ad.imageUrl || "/placeholder.svg"}
                        alt={ad.title}
                        className="ad-image me-3"
                      />
                      <div>
                        <div className="ad-title">{ad.title}</div>
                        <div className="ad-description">
                          {ad.description.substring(0, 50)}...
                        </div>
                        <div className="ad-region">{ad.region}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span className="category-badge">{ad.category}</span>
                      <div className="price-text">{ad.price}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span className={`status-badge ${ad.status}`}>
                        {ad.status === "active" ? "Active" : "Inactive"}
                      </span>
                      <div className="views-text mt-2">
                        <i className="fas fa-eye"></i>
                        <span>{ad.views} views</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <Link to={"/add"}>
                        <button
                          onClick={() => viewAdDetails(ad)}
                          className="action-btn view"
                          title="View Details"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                      </Link>
                      <Link to={"/add-listing"}>
                        <button
                          onClick={() => handleEditAd(ad)}
                          className="action-btn edit no"
                          title="Edit Ad"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                      </Link>
                      <button
                        onClick={() => toggleAdStatus(ad.id)}
                        className="action-btn toggle"
                        title={
                          ad.status === "active" ? "Deactivate" : "Activate"
                        }
                      >
                        <i
                          className={`fas ${
                            ad.status === "active" ? "fa-pause" : "fa-play"
                          }`}
                        ></i>
                      </button>
                      <button
                        onClick={() => deleteAd(ad.id)}
                        className="action-btn delete"
                        title="Delete Ad"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredAds.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3 className="empty-title">No ads found</h3>
              <p className="empty-text">
                Try adjusting your search criteria or add a new ad
              </p>
              <button
                onClick={() => setShowAddModal(true)}
                className="btn add-btn"
              >
                <i className="fas fa-plus me-2"></i>
                Add First Ad
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="page-btn"
            >
              <i className="fas fa-chevron-left"></i>
              Previous
            </button>

            <div className="page-numbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`page-btn ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="page-btn"
            >
              Next
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
