"use client";

import { useState, useEffect } from "react";

const uid = localStorage.getItem("uid");

export default function FashionForm() {
  const [formData, setFormData] = useState({
    sub_category: "",
    ad_title: "",
    description: "",
    sex: "",
    brand: "",
    size: "",
    color: "",
    material: "",
    condition: "",
    type: "",
    features: [], // Array to store selected features
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

      console.log("[v0] Submitting fashion form data to API...");

      const response = await fetch(
        `https://sellit-backend-u8bz.onrender.com/api/ads/fashion/${uid}`,
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
      console.log("✅ Fashion ad created:", result);

      // Reset form on success
      if (response.ok) {
        setFormData({
          sub_category: "",
          ad_title: "",
          description: "",
          sex: "",
          brand: "",
          size: "",
          color: "",
          material: "",
          condition: "",
          type: "",
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
        alert("Fashion ad submitted successfully!");
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
        alert(`Error submitting fashion ad: ${err.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-100 mobile-form-card mt-3">
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
                  Select Fashion Category
                </option>
                <option value="Clothes">Clothes</option>
                <option value="Footwear">Footwear</option>
                <option value="Watches">Watches</option>
                <option value="Jewellery">Jewellery</option>
                <option value="Sunglasses">Sunglasses</option>
                <option value="Bags & Luggage">Bags & Luggage</option>
                <option value="Wedding">Wedding</option>
                <option value="Skin & Hair">Skin & Hair</option>
                <option value="Makeup">Makeup</option>
                <option value="Perfumes">Perfumes</option>
                <option value="Other Fashion">Other Fashion</option>
              </select>
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
                <option value="Zara">Zara</option>
                <option value="H&M">H&M</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Gucci">Gucci</option>
                <option value="Prada">Prada</option>
                <option value="Chanel">Chanel</option>
                <option value="Louis Vuitton">Louis Vuitton</option>
                <option value="Khaadi">Khaadi</option>
                <option value="Gul Ahmed">Gul Ahmed</option>
                <option value="Sana Safinaz">Sana Safinaz</option>
                <option value="Maria B">Maria B</option>
                <option value="Alkaram">Alkaram</option>
                <option value="Junaid Jamshed">Junaid Jamshed</option>
                <option value="Bata">Bata</option>
                <option value="Service">Service</option>
                <option value="Unbranded">Unbranded</option>
                <option value="Other">Other</option>
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
              placeholder="e.g., Designer Dress for Women"
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
              placeholder="Describe the fashion item, its style, condition, and any special features..."
              required
            ></textarea>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="sex" className="form-label">
                Sex/Gender
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
                  Select Sex/Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unisex">Unisex</option>
                <option value="Boy">Boy</option>
                <option value="Girl">Girl</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="size" className="form-label">
                Size
              </label>
              <select
                name="size"
                id="size"
                className="form-select"
                value={formData.size}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Size
                </option>
                <optgroup label="General Sizes">
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </optgroup>
                <optgroup label="Shoe Sizes">
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Free Size">Free Size</option>
                  <option value="Custom">Custom</option>
                </optgroup>
              </select>
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
                placeholder="e.g., Red, Blue, Black, Multi-color"
                required
              />
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
              >
                <option value="" disabled>
                  Select Material
                </option>
                <option value="Cotton">Cotton</option>
                <option value="Silk">Silk</option>
                <option value="Wool">Wool</option>
                <option value="Polyester">Polyester</option>
                <option value="Denim">Denim</option>
                <option value="Leather">Leather</option>
                <option value="Chiffon">Chiffon</option>
                <option value="Linen">Linen</option>
                <option value="Velvet">Velvet</option>
                <option value="Satin">Satin</option>
                <option value="Lawn">Lawn</option>
                <option value="Khaddar">Khaddar</option>
                <option value="Mixed">Mixed</option>
                <option value="Other">Other</option>
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
              <label htmlFor="type" className="form-label">
                Type
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
                  Select Type
                </option>
                <optgroup label="Clothing">
                  <option value="Shirt">Shirt</option>
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="Dress">Dress</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Trousers">Trousers</option>
                  <option value="Suit">Suit</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Sweater">Sweater</option>
                  <option value="Kurta">Kurta</option>
                  <option value="Shalwar Kameez">Shalwar Kameez</option>
                  <option value="Saree">Saree</option>
                  <option value="Lehenga">Lehenga</option>
                </optgroup>
                <optgroup label="Footwear">
                  <option value="Sneakers">Sneakers</option>
                  <option value="Formal Shoes">Formal Shoes</option>
                  <option value="Sandals">Sandals</option>
                  <option value="Heels">Heels</option>
                  <option value="Boots">Boots</option>
                  <option value="Slippers">Slippers</option>
                </optgroup>
                <optgroup label="Accessories">
                  <option value="Watch">Watch</option>
                  <option value="Bag">Bag</option>
                  <option value="Belt">Belt</option>
                  <option value="Sunglasses">Sunglasses</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Perfume">Perfume</option>
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
                "Designer",
                "Branded",
                "Handmade",
                "Embroidered",
                "Printed",
                "Plain",
                "Formal",
                "Casual",
                "Party Wear",
                "Wedding Wear",
                "Summer Collection",
                "Winter Collection",
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

          {/* Enhanced Image Upload Section */}
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

          {/* Attachments Section */}
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
              {isSubmitting ? "Submitting..." : "Submit Fashion Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
