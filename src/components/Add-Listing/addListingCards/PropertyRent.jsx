"use client";

import { useState, useEffect } from "react";

export default function PropertyRent({ selectedSubCategory }) {
  const [formData, setFormData] = useState({
    sub_category: selectedSubCategory || "", // Pre-fill with selected sub-category
    ad_title: "",
    description: "",
    property_type: selectedSubCategory || "", // Will be same as sub_category for this form
    furnished: "",
    bedrooms: "",
    bathrooms: "",
    number_of_storeys: "",
    construction_state: "",
    features: [], // Array to store selected features
    area_unit: "",
    area_size: "",
    location: "",
    price: "",
    seller_name: "",
    seller_contact: "",
    thumbnail_url: "https://via.placeholder.com/300x300.png?text=Image2", // Default placeholder
  });
  const [imageFile, setImageFile] = useState(null);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update sub_category and property_type in form data if it changes from parent
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      sub_category: selectedSubCategory || "",
      property_type: selectedSubCategory || "",
    }));
  }, [selectedSubCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const currentFeatures = prevData.features;
      if (checked) {
        return { ...prevData, features: [...currentFeatures, name] };
      } else {
        return {
          ...prevData,
          features: currentFeatures.filter((feature) => feature !== name),
        };
      }
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAttachmentChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachmentFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log form data to console as requested
    console.log("Property for Rent Form Data:", formData);
    console.log("Image File:", imageFile);
    console.log("Attachment File:", attachmentFile);

    // Simulate API call
    setTimeout(() => {
      alert("Property for Rent ad data logged to console!");
      setIsSubmitting(false);
      // Optionally reset form
      setFormData({
        sub_category: selectedSubCategory || "",
        ad_title: "",
        description: "",
        property_type: selectedSubCategory || "",
        furnished: "",
        bedrooms: "",
        bathrooms: "",
        number_of_storeys: "",
        construction_state: "",
        features: [],
        area_unit: "",
        area_size: "",
        location: "",
        price: "",
        seller_name: "",
        seller_contact: "",
        thumbnail_url: "https://via.placeholder.com/300x300.png?text=Image2",
      });
      setImageFile(null);
      setAttachmentFile(null);
    }, 1000);
  };

  return (
    <div className="w-100 property-rent-form-card mt-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Common Fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="sub_category" className="form-label">
                Sub Category
              </label>
              <select
                className="form-select"
                id="sub_category"
                name="sub_category"
                value={formData.sub_category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Property Type
                </option>
                <option value="Houses for Rent">Houses for Rent</option>
                <option value="Flats for Rent">Flats for Rent</option>
                <option value="Commercial for Rent">Commercial for Rent</option>
                <option value="Rooms for Rent">Rooms for Rent</option>
                <option value="Portions & Floors for Rent">
                  Portions & Floors for Rent
                </option>
                <option value="Vacation Rentals">Vacation Rentals</option>
                <option value="Other Property for Rent">
                  Other Property for Rent
                </option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="ad_title" className="form-label">
                Ad Title
              </label>
              <input
                type="text"
                className="form-control"
                id="ad_title"
                name="ad_title"
                value={formData.ad_title}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          {/* Property Rent Specific Fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="furnished" className="form-label">
                Furnished
              </label>
              <select
                name="furnished"
                id="furnished"
                className="form-select"
                value={formData.furnished}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Furnished Status
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="bedrooms" className="form-label">
                Bedrooms
              </label>
              <select
                name="bedrooms"
                id="bedrooms"
                className="form-select"
                value={formData.bedrooms}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Bedrooms
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
                <option value="Studio">Studio</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="bathrooms" className="form-label">
                Bathrooms
              </label>
              <select
                name="bathrooms"
                id="bathrooms"
                className="form-select"
                value={formData.bathrooms}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Bathrooms
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7+">7+</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="number_of_storeys" className="form-label">
                No. of Storeys
              </label>
              <select
                name="number_of_storeys"
                id="number_of_storeys"
                className="form-select"
                value={formData.number_of_storeys}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select No. of Storeys
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="construction_state" className="form-label">
              Construction State
            </label>
            <select
              name="construction_state"
              id="construction_state"
              className="form-select"
              value={formData.construction_state}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Construction State
              </option>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Under Construction">Under Construction</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <div className="row">
              {[
                "Electricity Backup",
                "Waste Disposal",
                "Sewerage",
                "Water Supply",
                "Broadband Internet Access",
                "Satellite/Cable TV Ready",
                "Intercom",
                "Lawn",
                "Balcony",
                "Parking Space",
                "Swimming Pool",
                "Gym",
                "Kids Play Area",
                "Mosque",
                "Community Center",
                "Security Staff",
              ].map((feature) => (
                <div className="col-md-4 col-sm-6" key={feature}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={feature}
                      id={`feature-${feature.replace(/\s/g, "")}`}
                      checked={formData.features.includes(feature)}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`feature-${feature.replace(/\s/g, "")}`}
                    >
                      {feature}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="area_unit" className="form-label">
                Area Unit
              </label>
              <select
                name="area_unit"
                id="area_unit"
                className="form-select"
                value={formData.area_unit}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Area Unit
                </option>
                <option value="Square Feet">Square Feet</option>
                <option value="Square Yards">Square Yards</option>
                <option value="Marla">Marla</option>
                <option value="Kanal">Kanal</option>
                <option value="Acre">Acre</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="area_size" className="form-label">
                Area Size
              </label>
              <input
                type="number"
                className="form-control"
                id="area_size"
                name="area_size"
                value={formData.area_size}
                onChange={handleChange}
                placeholder="e.g., 120"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="seller_name" className="form-label">
                Seller Name
              </label>
              <input
                type="text"
                className="form-control"
                id="seller_name"
                name="seller_name"
                value={formData.seller_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="seller_contact" className="form-label">
                Seller Contact
              </label>
              <input
                type="text"
                className="form-control"
                id="seller_contact"
                name="seller_contact"
                value={formData.seller_contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="image_upload" className="form-label">
                Image Upload
              </label>
              <input
                type="file"
                className="form-control"
                id="image_upload"
                name="image_upload"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imageFile && (
                <small className="text-muted mt-1 d-block">
                  Selected: {imageFile.name}
                </small>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="attachments" className="form-label">
                Attachments
              </label>
              <input
                type="file"
                className="form-control"
                id="attachments"
                name="attachments"
                onChange={handleAttachmentChange}
              />
              {attachmentFile && (
                <small className="text-muted mt-1 d-block">
                  Selected: {attachmentFile.name}
                </small>
              )}
            </div>
          </div>

          <div className="mt-3">
            <button
              type="submit"
              className="rounded-3 nav-btn secondary-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Property Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
