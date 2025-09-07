"use client";

import { useState, useEffect } from "react";

const uid = localStorage.getItem("uid");

export default function Animals({ selectedSubCategory }) {
  const [formData, setFormData] = useState({
    sub_category: selectedSubCategory || "",
    ad_title: "",
    description: "",
    type_of_animal: "", // Changed from 'type' to match API
    breed: "",
    sex: "",
    age: "",
    color: "",
    vaccination_status: "",
    features: [], // Will be converted to JSON string for API
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

  // Update sub_category in form data if it changes from parent
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      sub_category: selectedSubCategory || "",
    }));
  }, [selectedSubCategory]);

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
          // Convert features array to JSON string for API
          data.append(key, JSON.stringify(formData[key]));
        } else {
          data.append(key, formData[key]);
        }
      });

      // Append thumbnail if selected
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

      console.log("[v0] Submitting animal form data to API...");

      const response = await fetch(
        `https://sellit-backend-u8bz.onrender.com/api/ads/animals/${uid}`,
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
      console.log("✅ Animal ad created:", result);

      // Reset form on success
      if (response.ok) {
        setFormData({
          sub_category: selectedSubCategory || "",
          ad_title: "",
          description: "",
          type_of_animal: "",
          breed: "",
          sex: "",
          age: "",
          color: "",
          vaccination_status: "",
          features: [],
          location: "",
          price: "",
          seller_name: "",
          seller_contact: "",
        });
        setImages([]);
        setImagePreviewUrls([]);
        setSelectedThumbnail(null);
        setAttachments([]);
        alert("Animal ad submitted successfully!");
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
        alert(`Error submitting animal ad: ${err.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
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
                  Select Animal Category
                </option>
                <option value="Birds">Birds</option>
                <option value="Cats">Cats</option>
                <option value="Dogs">Dogs</option>
                <option value="Fish & Aquariums">Fish & Aquariums</option>
                <option value="Horses">Horses</option>
                <option value="Livestock">Livestock</option>
                <option value="Other Animals">Other Animals</option>
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
                placeholder="e.g., Pure Breed German Shepherd Puppy"
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
              placeholder="Describe the animal, its characteristics, health, and any special details..."
              required
            ></textarea>
          </div>

          {/* Animals Specific Fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="type_of_animal" className="form-label">
                Type of Animal
              </label>
              <select
                name="type_of_animal"
                id="type_of_animal"
                className="form-select"
                value={formData.type_of_animal}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="Pet">Pet</option>
                <option value="Livestock">Livestock</option>
                <option value="Farm Animal">Farm Animal</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="breed" className="form-label">
                Breed
              </label>
              <input
                type="text"
                className="form-control"
                id="breed"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="e.g., German Shepherd, Persian Cat, Parrot"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="sex" className="form-label">
                Sex
              </label>
              <select
                name="sex"
                id="sex"
                className="form-select"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Sex
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Pair">Pair</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">
                Age (in months/years)
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="e.g., 6 months, 2 years"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="e.g., Brown, White, Black"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="vaccination_status" className="form-label">
                Vaccination Status
              </label>
              <select
                name="vaccination_status"
                id="vaccination_status"
                className="form-select"
                value={formData.vaccination_status}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="Vaccinated">Vaccinated</option>
                <option value="Partially Vaccinated">
                  Partially Vaccinated
                </option>
                <option value="Not Vaccinated">Not Vaccinated</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <div className="row">
              {[
                "Trained",
                "Friendly",
                "Playful",
                "Healthy",
                "Pure Breed",
                "Registered",
                "Microchipped",
                "Neutered/Spayed",
                "Good with Kids",
                "Good with Other Pets",
                "Show Quality",
                "Farm Raised",
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

          <div className="mb-4">
            <label htmlFor="images" className="form-label">
              Animal Images Upload (Max 5)
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

          <div className="mb-4">
            <label htmlFor="attachments" className="form-label">
              Attachments (Health Records, Pedigree, etc.)
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
              Upload PDF, Word documents, or text files for health records,
              pedigree certificates, etc.
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

          <div className="mt-4">
            <button
              type="submit"
              className="rounded-3 nav-btn secondary-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Animal Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
