"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function JobAdsView() {
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNumber, setShowNumber] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchAd();
  }, []);

  const fetchAd = async () => {
    try {
      setLoading(true);
      const path = window.location.pathname;
      const adId = path.split("/")[2];

      const response = await axios.get(
        `https://sellit-backend-u8bz.onrender.com/api/manage-ads/get-ad/jobs/${adId}`
      );
      if (response.data.success) {
        setAd(response.data.ad);
      } else {
        setError("Failed to fetch ad data");
      }
    } catch (err) {
      console.error("Error fetching ad:", err);
      setError(err.message || "Error fetching ad data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Loading ad details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!ad) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">No ad found</p>
      </div>
    );
  }

  const images = Array.isArray(ad.image_urls)
    ? ad.image_urls
    : JSON.parse(ad.image_urls || "[]");
  const mainImage = images[0] || ad.thumbnail_url;

  return (
    <div className="app-container max-w-7xl mx-auto px-4 py-6">
      <div className="simple-nav text-sm text-gray-500 mb-4">
        <p>Home / Jobs / {ad.job_category}</p>
      </div>

      <div className="main-content">
        <div className="product-page">
          <div className="product-header flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
            <div className="product-title">
              <h1 className="text-2xl md:text-3xl font-bold">{ad.job_title}</h1>
              <div className="product-tags flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                <span className="tag inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded">
                  {ad.type_of_ad}
                </span>
                <span className="tag flex items-center">
                  <CiLocationOn className="text-gray-500" />
                  <span className="mx-2">{ad.location}</span>
                </span>
                <span className="tag flex items-center">
                  <MdOutlineDateRange className="text-gray-500" />
                  <span className="mx-2">
                    {new Date(ad.created_at).toLocaleDateString()}
                  </span>
                </span>
              </div>
            </div>
            {(ad.salary_from || ad.salary_to) && (
              <div className="product-price text-right">
                <h2 className="text-2xl md:text-3xl font-bold text-green-600">
                  Rs. {Number(ad.salary_from || 0).toLocaleString()} -{" "}
                  {Number(ad.salary_to || 0).toLocaleString()}
                </h2>
                <p className="text-gray-500 text-sm">Per {ad.salary_period}</p>
              </div>
            )}
          </div>

          <div className="product-content flex flex-col lg:flex-row gap-6">
            <div className="product-main lg:w-2/3">
              {mainImage && (
                <div className="product-gallery mb-8 border rounded-lg overflow-hidden">
                  <div className="main-image w-full h-[300px] overflow-hidden">
                    <img
                      src={mainImage || "/placeholder.svg"}
                      alt={ad.job_title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="product-section mb-8 p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Job Details</h3>
                <div className="specs-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">
                      Job Category:
                    </span>
                    <span className="spec-value font-medium ml-2">
                      {ad.job_category}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">
                      Hiring Type:
                    </span>
                    <span className="spec-value font-medium ml-2">
                      {ad.hiring_type}
                    </span>
                  </div>
                  {ad.company_name && (
                    <div className="spec-item">
                      <span className="spec-label text-gray-500">Company:</span>
                      <span className="spec-value font-medium ml-2">
                        {ad.company_name}
                      </span>
                    </div>
                  )}
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">
                      Position Type:
                    </span>
                    <span className="spec-value font-medium ml-2">
                      {ad.position_type}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">
                      Career Level:
                    </span>
                    <span className="spec-value font-medium ml-2">
                      {ad.career_level}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">Location:</span>
                    <span className="spec-value font-medium ml-2">
                      {ad.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="product-section mb-8 p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {ad.description}
                </p>
              </div>
            </div>

            <div className="product-sidebar lg:w-1/3">
              <div className="sidebar-card p-6 border rounded-lg sticky top-4 space-y-4">
                <div className="seller-info">
                  <h4 className="font-semibold text-lg">{ad.seller_name}</h4>
                  <p className="text-sm text-gray-500">
                    Posted on {new Date(ad.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="seller-location space-y-3">
                  <p className="flex items-center gap-2 text-gray-700">
                    <FaMapMarkerAlt className="text-gray-500 flex-shrink-0" />
                    {ad.location}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <FaPhone className="text-gray-500 flex-shrink-0" />
                    {showNumber ? ad.seller_contact : "***********"}
                  </p>
                  <button
                    className="btn show-number-btn w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition font-medium"
                    onClick={() => setShowNumber(true)}
                  >
                    Show Number
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobAdsView;
