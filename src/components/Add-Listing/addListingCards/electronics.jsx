"use client";

import { useState, useEffect } from "react";

export default function Electronics({ selectedSubCategory }) {
  const [formData, setFormData] = useState({
    sub_category: selectedSubCategory || "", // Pre-fill with selected sub-category
    ad_title: "",
    description: "",
    type: "",
    brand: "",
    condition: "",
    model: "",
    warranty: "",
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
    console.log("Electronics Form Data:", formData);
    console.log("Image File:", imageFile);
    console.log("Attachment File:", attachmentFile);

    // Simulate API call
    setTimeout(() => {
      alert("Electronics ad data logged to console!");
      setIsSubmitting(false);
      // Optionally reset form
      setFormData({
        sub_category: selectedSubCategory || "",
        ad_title: "",
        description: "",
        type: "",
        brand: "",
        condition: "",
        model: "",
        warranty: "",
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
    <div className="w-100 property-sale-form-card mt-3">
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
                  Select Electronics Category
                </option>
                <option value="Computers & Accessories">
                  Computers & Accessories
                </option>
                <option value="TV - Home Audio & Video">
                  TV - Home Audio & Video
                </option>
                <option value="Cameras & Accessories">
                  Cameras & Accessories
                </option>
                <option value="Games & Entertainment">
                  Games & Entertainment
                </option>
                <option value="Other Home Appliances">
                  Other Home Appliances
                </option>
                <option value="Kitchen Appliances">Kitchen Appliances</option>
                <option value="AC & Coolers">AC & Coolers</option>
                <option value="Washing Machines & Dryers">
                  Washing Machines & Dryers
                </option>
                <option value="Generators, UPS & Power Solutions">
                  Generators, UPS & Power Solutions
                </option>
                <option value="Solar Panels & Inverters">
                  Solar Panels & Inverters
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
                placeholder="e.g., Samsung 55 inch Smart TV"
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
              placeholder="Describe the electronics item, its features, and condition..."
              required
            ></textarea>
          </div>

          {/* Electronics Specific Fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <input
                type="text"
                className="form-control"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="e.g., Smart TV, Laptop, Refrigerator"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="brand" className="form-label">
                Brand
              </label>
              <select
                name="brand"
                id="brand"
                className="form-select"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Brand
                </option>
                <option value="Samsung">Samsung</option>
                <option value="LG">LG</option>
                <option value="Sony">Sony</option>
                <option value="Apple">Apple</option>
                <option value="Dell">Dell</option>
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
                <option value="Panasonic">Panasonic</option>
                <option value="Philips">Philips</option>
                <option value="Haier">Haier</option>
                <option value="Dawlance">Dawlance</option>
                <option value="Orient">Orient</option>
                <option value="Gree">Gree</option>
                <option value="TCL">TCL</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Canon">Canon</option>
                <option value="Nikon">Nikon</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="model" className="form-label">
                Model
              </label>
              <input
                type="text"
                className="form-control"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g., Galaxy S23, MacBook Pro M2"
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
                <option value="Refurbished">Refurbished</option>
                <option value="Open Box">Open Box</option>
                <option value="For Parts">For Parts</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="warranty" className="form-label">
              Warranty
            </label>
            <select
              name="warranty"
              id="warranty"
              className="form-select"
              value={formData.warranty}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Warranty Status
              </option>
              <option value="Under Warranty">Under Warranty</option>
              <option value="Warranty Expired">Warranty Expired</option>
              <option value="No Warranty">No Warranty</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <div className="row">
              {[
                "WiFi Enabled",
                "Bluetooth",
                "4K Resolution",
                "Smart Features",
                "Energy Efficient",
                "Remote Control",
                "USB Ports",
                "HDMI Ports",
                "Touch Screen",
                "Voice Control",
                "Fast Charging",
                "Wireless Charging",
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
                Product Image Upload
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
                Attachments (Manual, Receipt, etc.)
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
              {isSubmitting ? "Submitting..." : "Submit Electronics Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
