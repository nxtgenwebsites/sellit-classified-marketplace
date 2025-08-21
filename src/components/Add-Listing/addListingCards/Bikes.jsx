"use client";

import { useState, useEffect } from "react";

export default function Bikes({ selectedSubCategory }) {
  const [formData, setFormData] = useState({
    sub_category: selectedSubCategory || "", // Pre-fill with selected sub-category
    ad_title: "",
    description: "",
    make: "",
    model: "",
    year: "",
    engine_type: "",
    engine_capacity: "",
    kms_driven: "",
    ignition_type: "",
    origin: "",
    condition: "",
    registration_city: "",
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
    console.log("Bikes Form Data:", formData);
    console.log("Image File:", imageFile);
    console.log("Attachment File:", attachmentFile);

    // Simulate API call
    setTimeout(() => {
      alert("Bikes ad data logged to console!");
      setIsSubmitting(false);
      // Optionally reset form
      setFormData({
        sub_category: selectedSubCategory || "",
        ad_title: "",
        description: "",
        make: "",
        model: "",
        year: "",
        engine_type: "",
        engine_capacity: "",
        kms_driven: "",
        ignition_type: "",
        origin: "",
        condition: "",
        registration_city: "",
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
                Bike Category
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
                  Sub Category
                </option>
                <option value="Motorcycles">Motorcycles</option>
                <option value="Scooters">Scooters</option>
                <option value="Spare Parts">Spare Parts</option>
                <option value="Bicycles">Bicycles</option>
                <option value="ATV & Quads">ATV & Quads</option>
                <option value="Other Bikes">Other Bikes</option>
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
                placeholder="e.g., Honda CD 70 2020 Model"
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
              placeholder="Describe the bike condition, features, and any additional details..."
              required
            ></textarea>
          </div>

          {/* Bike Specific Fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="make" className="form-label">
                Make
              </label>
              <select
                name="make"
                id="make"
                className="form-select"
                value={formData.make}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Make
                </option>
                <optgroup label="Popular Makes">
                  <option value="Honda">Honda</option>
                  <option value="Yamaha">Yamaha</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="United">United</option>
                  <option value="Road Prince">Road Prince</option>
                </optgroup>
                <optgroup label="Others">
                  <option value="Unique">Unique</option>
                  <option value="Super Power">Super Power</option>
                  <option value="Super Star">Super Star</option>
                  <option value="Metro">Metro</option>
                  <option value="Crown">Crown</option>
                  <option value="Kawasaki">Kawasaki</option>
                  <option value="Power">Power</option>
                  <option value="Ravi">Ravi</option>
                  <option value="Eagle">Eagle</option>
                  <option value="Habib">Habib</option>
                  <option value="Ghani">Ghani</option>
                  <option value="Sohrab">Sohrab</option>
                  <option value="Beneli">Beneli</option>
                  <option value="Derbi">Derbi</option>
                  <option value="Zongshen">Zongshen</option>
                  <option value="CF Moto">CF Moto</option>
                  <option value="Hero">Hero</option>
                  <option value="Lifan">Lifan</option>
                  <option value="Other">Other</option>
                </optgroup>
              </select>
            </div>
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
                placeholder="e.g., CD 70, YBR 125"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="number"
                className="form-control"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="e.g., 2020"
                min="1990"
                max="2024"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="engine_type" className="form-label">
                Engine Type
              </label>
              <select
                name="engine_type"
                id="engine_type"
                className="form-select"
                value={formData.engine_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Engine Type
                </option>
                <option value="2 Stroke">2 Stroke</option>
                <option value="4 Stroke">4 Stroke</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="engine_capacity" className="form-label">
                Engine Capacity
              </label>
              <select
                name="engine_capacity"
                id="engine_capacity"
                className="form-select"
                value={formData.engine_capacity}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Engine Capacity
                </option>
                <optgroup label="Popular Engine Capacity">
                  <option value="100cc - 149cc">100cc - 149cc</option>
                  <option value="70cc">70cc</option>
                  <option value="150cc - 199cc">150cc - 199cc</option>
                  <option value="200cc - 249cc">200cc - 249cc</option>
                  <option value="50cc">50cc</option>
                </optgroup>
                <optgroup label="Others">
                  <option value="250cc - 299cc">250cc - 299cc</option>
                  <option value="300cc - 499cc">300cc - 499cc</option>
                  <option value="500cc - 699cc">500cc - 699cc</option>
                  <option value="700cc - 999cc">700cc - 999cc</option>
                  <option value="1000cc">1000cc</option>
                  <option value="Above 1000cc">Above 1000cc</option>
                </optgroup>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="kms_driven" className="form-label">
                KM's Driven
              </label>
              <input
                type="number"
                className="form-control"
                id="kms_driven"
                name="kms_driven"
                value={formData.kms_driven}
                onChange={handleChange}
                placeholder="Enter kilometers driven"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="ignition_type" className="form-label">
                Ignition Type
              </label>
              <select
                name="ignition_type"
                id="ignition_type"
                className="form-select"
                value={formData.ignition_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Ignition Type
                </option>
                <option value="Kick Start">Kick Start</option>
                <option value="Self Start">Self Start</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="origin" className="form-label">
                Origin
              </label>
              <select
                name="origin"
                id="origin"
                className="form-select"
                value={formData.origin}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Origin
                </option>
                <option value="Local">Local</option>
                <option value="Imported">Imported</option>
                <option value="Reconditioned">Reconditioned</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
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
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="registration_city" className="form-label">
                Registration City
              </label>
              <select
                name="registration_city"
                id="registration_city"
                className="form-select"
                value={formData.registration_city}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Registration City
                </option>
                <optgroup label="Popular Cities">
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                </optgroup>
                <optgroup label="Others">
                  <option value="Unregistered">Unregistered</option>
                  <option value="Abbottabad">Abbottabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Sialkot">Sialkot</option>
                  <option value="Sargodha">Sargodha</option>
                  <option value="Other">Other</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <div className="row">
              {[
                "Electric Start",
                "Kick Start",
                "Disc Brakes",
                "Alloy Rims",
                "Digital Meter",
                "LED Lights",
                "USB Charging Port",
                "Anti-Theft Alarm",
                "Fuel Gauge",
                "Speedometer",
                "Side Mirrors",
                "Tool Kit",
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
                Bike Image Upload
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
                Attachments (Documents, etc.)
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
              {isSubmitting ? "Submitting..." : "Submit Bike Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
