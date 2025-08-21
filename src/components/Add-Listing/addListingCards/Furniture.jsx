"use client";

import { useState, useEffect } from "react";

export default function Furniture({ selectedSubCategory }) {
  const [formData, setFormData] = useState({
    sub_category: selectedSubCategory || "", // Pre-fill with selected sub-category
    ad_title: "",
    description: "",
    type: "", // e.g., Sofa, Bed, Dining Table
    material: "",
    brand: "",
    condition: "",
    dimensions: "", // Text field for dimensions
    features: [], // Array to store selected features
    location: "",
    price: "",
    seller_name: "",
    seller_contact: "",
    thumbnail_url: "https://via.placeholder.com/300x300.png?text=Image2", // Default placeholder
  });
  const [imageFile, setImageFile] = useState(null);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update sub_category in form data if it changes from parent
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      sub_category: selectedSubCategory || "",
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
    console.log("Furniture & Home Decor Form Data:", formData);
    console.log("Image File:", imageFile);
    console.log("Attachment File:", attachmentFile);

    // Simulate API call
    setTimeout(() => {
      alert("Furniture & Home Decor ad data logged to console!");
      setIsSubmitting(false);
      // Optionally reset form
      setFormData({
        sub_category: selectedSubCategory || "",
        ad_title: "",
        description: "",
        type: "",
        material: "",
        brand: "",
        condition: "",
        dimensions: "",
        features: [],
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
    <div className="w-100 property-sale-form-card mt-4">
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
                  Select Category
                </option>
                <option value="Sofa & Chairs">Sofa & Chairs</option>
                <option value="Beds & Wardrobes">Beds & Wardrobes</option>
                <option value="Home Decoration">Home Decoration</option>
                <option value="Tables & Dining">Tables & Dining</option>
                <option value="Office Furniture">Office Furniture</option>
                <option value="Other Household Items">
                  Other Household Items
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
                placeholder="e.g., Modern Sofa Set"
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
              placeholder="Describe the furniture/decor item, its condition, and any special features..."
              required
            ></textarea>
          </div>

          {/* Furniture Specific Fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="type" className="form-label">
                Item Type
              </label>
              <select
                name="type"
                id="type"
                className="form-select"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Item Type
                </option>
                <optgroup label="Furniture">
                  <option value="Sofa">Sofa</option>
                  <option value="Chair">Chair</option>
                  <option value="Bed">Bed</option>
                  <option value="Wardrobe">Wardrobe</option>
                  <option value="Dining Table">Dining Table</option>
                  <option value="Coffee Table">Coffee Table</option>
                  <option value="Desk">Desk</option>
                  <option value="Bookcase">Bookcase</option>
                </optgroup>
                <optgroup label="Home Decor">
                  <option value="Painting">Painting</option>
                  <option value="Vase">Vase</option>
                  <option value="Lamp">Lamp</option>
                  <option value="Carpet">Carpet</option>
                  <option value="Curtains">Curtains</option>
                  <option value="Mirror">Mirror</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Outdoor Furniture">Outdoor Furniture</option>
                  <option value="Kids Furniture">Kids Furniture</option>
                </optgroup>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="material" className="form-label">
                Material
              </label>
              <select
                name="material"
                id="material"
                className="form-select"
                value={formData.material}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Material
                </option>
                <option value="Wood">Wood</option>
                <option value="Metal">Metal</option>
                <option value="Fabric">Fabric</option>
                <option value="Leather">Leather</option>
                <option value="Plastic">Plastic</option>
                <option value="Glass">Glass</option>
                <option value="Marble">Marble</option>
                <option value="Rattan">Rattan</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="brand" className="form-label">
                Brand
              </label>
              <input
                type="text"
                className="form-control"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="e.g., IKEA, Interwood, ChenOne"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="condition" className="form-label">
                Condition
              </label>
              <select
                name="condition"
                id="condition"
                className="form-select"
                value={formData.condition}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Condition
                </option>
                <option value="New">New</option>
                <option value="Used">Used</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="dimensions" className="form-label">
              Dimensions (L x W x H)
            </label>
            <input
              type="text"
              className="form-control"
              id="dimensions"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleChange}
              placeholder="e.g., 200cm x 90cm x 75cm"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <div className="row">
              {[
                "Durable",
                "Comfortable",
                "Modern Design",
                "Classic Design",
                "Handmade",
                "Adjustable",
                "Foldable",
                "Storage Space",
                "Water Resistant",
                "Scratch Resistant",
                "Easy to Assemble",
                "Customizable",
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
                placeholder="e.g., Karachi, Lahore"
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
                placeholder="Enter price in PKR"
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
                Item Image Upload
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
                Attachments (Additional Photos, etc.)
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

          <div className="mt-4">
            <button
              type="submit"
              className="rounded-3 nav-btn secondary-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Furniture Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
