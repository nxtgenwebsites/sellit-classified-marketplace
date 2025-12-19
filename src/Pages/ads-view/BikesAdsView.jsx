"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function BikesAdsView() {
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
        `https://sellit-backend-u8bz.onrender.com/api/manage-ads/get-ad/bike_ads/${adId}`
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
  const features = Array.isArray(ad.features)
    ? ad.features
    : JSON.parse(ad.features || "[]");
  const mainImage = images[currentImageIndex] || ad.thumbnail_url;

  return (
    <div className="app-container max-w-7xl mx-auto px-4 py-6">
      <div className="simple-nav text-sm text-gray-500 mb-4">
        <p>Home / Bikes / {ad.sub_category}</p>
      </div>

      <div className="main-content">
        <div className="product-page">
          <div className="product-header flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
            <div className="product-title">
              <h1 className="text-2xl md:text-3xl font-bold">{ad.ad_title}</h1>
              <div className="product-tags flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
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
            <div className="product-price text-right">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-500">
                Rs. {Number.parseInt(ad.price).toLocaleString()}
              </h2>
            </div>
          </div>

          <div className="product-content flex flex-col lg:flex-row gap-6">
            <div className="product-main lg:w-2/3">
              <div className="product-gallery mb-8 border rounded-lg overflow-hidden">
                <div className="main-image w-full h-[300px] md:h-[400px] overflow-hidden">
                  <img
                    src={mainImage || "/placeholder.svg"}
                    alt={ad.ad_title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {images.length > 1 && (
                  <div
                    className="thumbnail-container grid gap-2 p-2"
                    style={{
                      gridTemplateColumns: `repeat(${Math.min(
                        4,
                        images.length
                      )}, 1fr)`,
                    }}
                  >
                    {images.map((img, idx) => (
                      <div
                        key={idx}
                        className="thumbnail h-20 overflow-hidden rounded cursor-pointer hover:opacity-70"
                        onClick={() => setCurrentImageIndex(idx)}
                      >
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="product-section mb-8 p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="specs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">Make:</span>
                    <span className="spec-value font-medium ml-2">
                      {ad.make}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">Model:</span>
                    <span className="spec-value font-medium ml-2">
                      {ad.model}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">Year:</span>
                    <span className="spec-value font-medium ml-2">
                      {ad.year}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">
                      Engine Type:
                    </span>
                    <span className="spec-value font-medium ml-2">
                      {ad.engine_type}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">
                      Engine Capacity:
                    </span>
                    <span className="spec-value font-medium ml-2">
                      {ad.engine_capacity}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">
                      Kilometers Driven:
                    </span>
                    <span className="spec-value font-medium ml-2">
                      {ad.kms_driven}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">
                      Ignition Type:
                    </span>
                    <span className="spec-value font-medium ml-2">
                      {ad.ignition_type}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">Origin:</span>
                    <span className="spec-value font-medium ml-2">
                      {ad.origin}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label text-gray-500">Condition:</span>
                    <span className="spec-value font-medium ml-2">
                      {ad.bike_condition}
                    </span>
                  </div>
                </div>
              </div>

              {features.length > 0 && (
                <div className="product-section mb-8 p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="feature-item flex items-center gap-2"
                      >
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="product-section mb-8 p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {ad.description}
                </p>
              </div>
            </div>

            <div className="product-sidebar lg:w-1/3">
              <div className="position-sticky top-0">
                <div className="sidebar-card p-6 border rounded-lg position-relative">
                  <div className="seller-info mb-4">
                    <h4 className="font-semibold text-lg">{ad.seller_name}</h4>
                    <p className="text-sm text-gray-500">
                      Posted on {new Date(ad.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="seller-location space-y-3 mb-4">
                    <p className="flex items-center gap-2 text-gray-700">
                      <FaMapMarkerAlt className="text-gray-500" />
                      {ad.location}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <FaPhone className="text-gray-500" />
                      {showNumber ? ad.seller_contact : "***********"}
                    </p>

                    <button
                      className="btn show-number-btn w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
                      onClick={() => setShowNumber(!showNumber)}
                    >
                      {showNumber ? "Hide Number" : "Show Number"}
                    </button>
                  </div>
                </div>
                <div className="pt-3">
                  <img src="/public/assets/img/sellit-ad.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikesAdsView;
