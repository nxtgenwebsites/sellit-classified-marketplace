"use client";

import { useState, useEffect } from "react";

const uid = localStorage.getItem("uid");

export default function Motors() {
  const [formData, setFormData] = useState({
    sub_category: "",
    ad_title: "",
    description: "",
    make: "",
    car_condition: "",
    year: "",
    fuel: "",
    transmission: "",
    body_type: "",
    color: "#000000",
    number_of_seats: "",
    features: [],
    number_of_owners: "",
    car_documents: "",
    assembly: "",
    location: "",
    price: "",
    seller_name: "",
    seller_contact: "",
  });

  const [images, setImages] = useState([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      imagePreviewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagePreviewUrls]);

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
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    setImages(imageFiles);

    const previewUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setImagePreviewUrls(previewUrls);

    // Auto-select first image as thumbnail if none selected
    if (imageFiles.length > 0 && !selectedThumbnail) {
      setSelectedThumbnail(0);
    }
  };

  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = [
      "application/pdf",
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const validFiles = files.filter(
      (file) =>
        allowedTypes.includes(file.type) ||
        file.name.toLowerCase().endsWith(".txt") ||
        file.name.toLowerCase().endsWith(".doc") ||
        file.name.toLowerCase().endsWith(".docx")
    );

    setAttachments(validFiles);
  };

  const selectThumbnail = (index) => {
    setSelectedThumbnail(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();

      // Append text fields
      Object.keys(formData).forEach((key) => {
        if (key === "features") {
          data.append(key, JSON.stringify(formData[key]));
        } else {
          data.append(key, formData[key]);
        }
      });

      if (selectedThumbnail !== null && images[selectedThumbnail]) {
        data.append("thumbnail", images[selectedThumbnail]);
      }

      // Append images
      images.forEach((image) => {
        data.append("images", image);
      });

      // Append attachments
      attachments.forEach((attachment) => {
        data.append("attachments", attachment);
      });

      console.log("[v0] Submitting motor form data to API...");

      const response = await fetch(
        `https://sellit-backend-u8bz.onrender.com/api/ads/motor-add/${uid}`,
        {
          method: "POST",
          body: data,
        }
      );

      console.log("[v0] Response status:", response.status);
      console.log(
        "[v0] Response headers:",
        response.headers.get("content-type")
      );

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(
          `Server returned ${response.status}: Expected JSON but got ${contentType}. The API endpoint might not exist.`
        );
      }

      const result = await response.json();
      console.log("✅ Motor ad created:", result);

      // Reset form on success
      if (response.ok) {
        setFormData({
          sub_category: "",
          ad_title: "",
          description: "",
          make: "",
          car_condition: "",
          year: "",
          fuel: "",
          transmission: "",
          body_type: "",
          color: "#000000",
          number_of_seats: "",
          features: [],
          number_of_owners: "",
          car_documents: "",
          assembly: "",
          location: "",
          price: "",
          seller_name: "",
          seller_contact: "",
        });
        setImages([]);
        setImagePreviewUrls([]);
        setSelectedThumbnail(null);
        setAttachments([]);
       location.href = `/successful/motors_ads/${result.ad_id}`;
      } else {
        throw new Error(result.message || `Server error: ${response.status}`);
      }
    } catch (err) {
      console.error("❌ Error:", err);
      if (err.message.includes("fetch")) {
        alert(
          "Network error: Could not connect to server. Please check if the API server is running."
        );
      } else if (err.message.includes("JSON")) {
        alert(
          "API Error: The server endpoint may not exist or is returning invalid data."
        );
      } else {
        alert(`Error submitting motor ad: ${err.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-100 motors-form-card mt-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
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
                  Sub Category
                </option>
                <option value="Cars">Cars</option>
                <option value="Cars Accessories">Cars Accessories</option>
                <option value="Spare Parts">Spare Parts</option>
                <option value="Buses, Vans & Trucks">
                  Buses, Vans & Trucks
                </option>
                <option value="Rickshaw & Chingchi">Rickshaw & Chingchi</option>
                <option value="Tractors & Trailers">Tractors & Trailers</option>
                <option value="Boats">Boats</option>
                <option value="Other Vehicles">Other Vehicles</option>
              </select>
            </div>
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
                <option value="Suzuki">Suzuki</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="Nissan">Nissan</option>
                <option value="Adam">Adam</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Ford">Ford</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Kia">Kia</option>
                <option value="MG">MG</option>
                <option value="Proton">Proton</option>
                <option value="Changan">Changan</option>
                <option value="FAW">FAW</option>
                <option value="Prince">Prince</option>
                <option value="United">United</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Other Brands">Other Brands</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
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

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="car_condition" className="form-label">
                Condition
              </label>
              <select
                className="form-select"
                id="car_condition"
                name="car_condition"
                value={formData.car_condition}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Condition
                </option>
                <option value="New">New</option>
                <option value="Used">Used</option>
                <option value="Reconditioned">Reconditioned</option>
                <option value="For Parts">For Parts</option>
              </select>
            </div>
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
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="fuel" className="form-label">
                Fuel
              </label>
              <select
                name="fuel"
                id="fuel"
                className="form-select"
                value={formData.fuel}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Fuel
                </option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="LPG">LPG</option>
                <option value="CNG">CNG</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="transmission" className="form-label">
                Transmission
              </label>
              <select
                name="transmission"
                id="transmission"
                className="form-select"
                value={formData.transmission}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Transmission
                </option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="body_type" className="form-label">
                Body Type
              </label>
              <select
                name="body_type"
                id="body_type"
                className="form-select"
                value={formData.body_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Body Type
                </option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="SUV">SUV</option>
                <option value="Coupe">Sports / Coupe</option>
                <option value="Convertible">Convertible</option>
                <option value="Estate">Estate</option>
                <option value="MPV">MPV</option>
                <option value="Pickup">Pickup</option>
                <option value="Van / Bus">Van / Bus</option>
                <option value="Small city car">Small city car</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input
                type="color"
                className="form-control form-control-color"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                title="Choose your color"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="number_of_seats" className="form-label">
                Number Of Seats
              </label>
              <input
                type="number"
                className="form-control"
                id="number_of_seats"
                name="number_of_seats"
                value={formData.number_of_seats}
                onChange={handleChange}
                placeholder="e.g., 5"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="number_of_owners" className="form-label">
                Number Of Owners
              </label>
              <input
                type="number"
                className="form-control"
                id="number_of_owners"
                name="number_of_owners"
                value={formData.number_of_owners}
                onChange={handleChange}
                placeholder="e.g., 1"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <div className="row">
              {[
                "ABS",
                "Airbags",
                "Premium Wheels",
                "AM/FM Radio",
                "Air Conditioning",
                "Power Steering",
                "Power Windows",
                "Keyless Entry",
                "Navigation System",
                "Sunroof",
                "Leather Seats",
                "Rear Camera",
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
              <label htmlFor="car_documents" className="form-label">
                Car Documents
              </label>
              <select
                name="car_documents"
                id="car_documents"
                className="form-select"
                value={formData.car_documents}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Document Status
                </option>
                <option value="Original">Original</option>
                <option value="Duplicate">Duplicate</option>
                <option value="Lost">Lost</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="assembly" className="form-label">
                Assembly
              </label>
              <select
                name="assembly"
                id="assembly"
                className="form-select"
                value={formData.assembly}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Assembly
                </option>
                <option value="Local">Local</option>
                <option value="Imported">Imported</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <select
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="">Select Location</option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                <option value="Kashmir">Kashmir</option>
              </select>
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

          {/* Enhanced Image Upload Section - Same as Mobile Form */}
          <div className="mb-4">
            <label htmlFor="images" className="form-label">
              Images Upload (Max 5)
            </label>
            <input
              type="file"
              className="form-control"
              id="images"
              name="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <small className="text-muted">
              Select up to 5 images. You can choose one as thumbnail.
            </small>

            {images.length > 0 && (
              <div className="mt-3">
                <h6>Selected Images - Choose Thumbnail:</h6>
                <div className="row">
                  {images.map((image, index) => (
                    <div key={index} className="col-md-3 mb-3">
                      <div
                        className={`card ${
                          selectedThumbnail === index ? "border-primary" : ""
                        }`}
                      >
                        <img
                          src={imagePreviewUrls[index] || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="card-img-top"
                          style={{ height: "120px", objectFit: "cover" }}
                        />
                        <div className="card-body p-2">
                          <small className="d-block text-truncate mb-2">
                            {image.name}
                          </small>
                          <button
                            type="button"
                            className={`btn btn-sm w-100 ${
                              selectedThumbnail === index
                                ? "btn-primary"
                                : "btn-outline-primary"
                            }`}
                            onClick={() => selectThumbnail(index)}
                          >
                            {selectedThumbnail === index
                              ? "Thumbnail ✓"
                              : "Set as Thumbnail"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Attachments Section - Same as Mobile Form */}
          <div className="mb-4">
            <label htmlFor="attachments" className="form-label">
              Attachments (PDF, DOC, TXT)
            </label>
            <input
              type="file"
              className="form-control"
              id="attachments"
              name="attachments"
              accept=".pdf,.doc,.docx,.txt"
              multiple
              onChange={handleAttachmentChange}
            />
            <small className="text-muted">
              Upload PDF, Word documents, or text files.
            </small>

            {attachments.length > 0 && (
              <div className="mt-2">
                <h6>Selected Attachments:</h6>
                <ul className="list-group">
                  {attachments.map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span className="text-truncate">{file.name}</span>
                      <span className="badge bg-secondary">
                        {(file.size / 1024).toFixed(1)} KB
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="">
            <button
              type="submit"
              className="rounded-3 nav-btn secondary-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Motor Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
