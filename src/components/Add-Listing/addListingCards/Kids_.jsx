"use client"

import { useState, useEffect } from "react"

const uid = localStorage.getItem("uid")

export default function KidsForm() {
  const [formData, setFormData] = useState({
    sub_category: "",
    ad_title: "",
    description: "",
    item_type: "", // renamed from 'type' to match API
    age_group: "",
    brand: "",
    item_condition: "",
    features: [], // Array to store selected features
    location: "",
    price: "",
    seller_name: "",
    seller_contact: "",
  });

  const [images, setImages] = useState([])
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]) // Added for image previews like mobile form
  const [selectedThumbnail, setSelectedThumbnail] = useState(null) // Added thumbnail selection
  const [attachments, setAttachments] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    return () => {
      imagePreviewUrls.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [imagePreviewUrls])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData((prevData) => {
      const currentFeatures = prevData.features
      if (checked) {
        return { ...prevData, features: [...currentFeatures, name] }
      } else {
        return {
          ...prevData,
          features: currentFeatures.filter((feature) => feature !== name),
        }
      }
    })
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 5) {
      alert("Maximum 5 images allowed")
      return
    }

    const imageFiles = files.filter((file) => file.type.startsWith("image/"))
    setImages(imageFiles)

    const previewUrls = imageFiles.map((file) => URL.createObjectURL(file))
    setImagePreviewUrls(previewUrls)

    // Auto-select first image as thumbnail if none selected
    if (imageFiles.length > 0 && !selectedThumbnail) {
      setSelectedThumbnail(0)
    }
  }

  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files)
    const allowedTypes = [
      "application/pdf",
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    const validFiles = files.filter(
      (file) =>
        allowedTypes.includes(file.type) ||
        file.name.toLowerCase().endsWith(".txt") ||
        file.name.toLowerCase().endsWith(".doc") ||
        file.name.toLowerCase().endsWith(".docx"),
    )

    setAttachments(validFiles)
  }

  const selectThumbnail = (index) => {
    setSelectedThumbnail(index)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const data = new FormData()

      // Append text fields
      Object.keys(formData).forEach((key) => {
        if (key === "features") {
          data.append(key, JSON.stringify(formData[key]))
        } else {
          data.append(key, formData[key])
        }
      })

      if (selectedThumbnail !== null && images[selectedThumbnail]) {
        data.append("thumbnail", images[selectedThumbnail])
      }

      // Append images
      images.forEach((image) => {
        data.append("images", image)
      })

      // Append attachments
      attachments.forEach((attachment) => {
        data.append("attachments", attachment)
      })

      console.log("[v0] Submitting kids ad form data to API...")

      const response = await fetch(`https://sellit-backend-u8bz.onrender.com/api/ads/kids-add/${uid}`, {
        method: "POST",
        body: data,
      })

      console.log("[v0] Response status:", response.status)
      console.log("[v0] Response headers:", response.headers.get("content-type"))

      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(
          `Server returned ${response.status}: Expected JSON but got ${contentType}. The API endpoint might not exist.`,
        )
      }

      const result = await response.json()
      console.log("✅ Kids ad created:", result)

      // Reset form on success
      if (response.ok) {
        setFormData({
          sub_category: "",
          ad_title: "",
          description: "",
          item_type: "",
          age_group: "",
          brand: "",
          condition: "",
          features: [],
          location: "",
          price: "",
          seller_name: "",
          seller_contact: "",
        })
        setImages([])
        setImagePreviewUrls([])
        setSelectedThumbnail(null)
        setAttachments([])
        alert("Kids ad submitted successfully!")
      } else {
        throw new Error(result.message || `Server error: ${response.status}`)
      }
    } catch (err) {
      console.error("❌ Error:", err)
      if (err.message.includes("fetch")) {
        alert("Network error: Could not connect to server. Please check if the API server is running.")
      } else if (err.message.includes("JSON")) {
        alert("API Error: The server endpoint may not exist or is returning invalid data.")
      } else {
        alert(`Error submitting kids ad: ${err.message}`)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

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
                  Select Kids Category
                </option>
                <option value="Kids Furniture">Kids Furniture</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Prams & Walkers">Prams & Walkers</option>
                <option value="Swings & Bouncers">Swings & Bouncers</option>
                <option value="Car Seats">Car Seats</option>
                <option value="Kids Bikes & Scooters">
                  Kids Bikes & Scooters
                </option>
                <option value="Kids Accessories">Kids Accessories</option>
                <option value="Kids Clothing">Kids Clothing</option>
                <option value="Other Kids Items">Other Kids Items</option>
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
                placeholder="e.g., Baby Stroller with Canopy"
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
              placeholder="Describe the item, its condition, and any special features..."
              required
            ></textarea>
          </div>

          {/* Kids Specific Fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="item_type" className="form-label">
                Item Type
              </label>
              <select
                name="item_type"
                id="item_type"
                className="form-select"
                value={formData.item_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Item Type
                </option>
                <optgroup label="Furniture">
                  <option value="Crib">Crib</option>
                  <option value="Changing Table">Changing Table</option>
                  <option value="High Chair">High Chair</option>
                  <option value="Kids Bed">Kids Bed</option>
                </optgroup>
                <optgroup label="Toys & Games">
                  <option value="Educational Toy">Educational Toy</option>
                  <option value="Action Figure">Action Figure</option>
                  <option value="Board Game">Board Game</option>
                  <option value="Stuffed Animal">Stuffed Animal</option>
                </optgroup>
                <optgroup label="Gear">
                  <option value="Stroller">Stroller</option>
                  <option value="Walker">Walker</option>
                  <option value="Bouncer">Bouncer</option>
                  <option value="Car Seat">Car Seat</option>
                </optgroup>
                <optgroup label="Clothing">
                  <option value="Baby Clothes">Baby Clothes</option>
                  <option value="Kids Clothes">Kids Clothes</option>
                  <option value="Footwear">Footwear</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Bike">Bike</option>
                  <option value="Scooter">Scooter</option>
                  <option value="Accessories">Accessories</option>
                </optgroup>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="age_group" className="form-label">
                Age Group
              </label>
              <select
                name="age_group"
                id="age_group"
                className="form-select"
                value={formData.age_group}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Age Group
                </option>
                <option value="0-6 Months">0-6 Months</option>
                <option value="6-12 Months">6-12 Months</option>
                <option value="1-2 Years">1-2 Years</option>
                <option value="2-4 Years">2-4 Years</option>
                <option value="4-6 Years">4-6 Years</option>
                <option value="6-8 Years">6-8 Years</option>
                <option value="8-12 Years">8-12 Years</option>
                <option value="12+ Years">12+ Years</option>
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
                placeholder="e.g., Fisher-Price, Pampers, Chicco"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="item_condition" className="form-label">
                Condition
              </label>
              <select
                name="item_condition"
                id="item_condition"
                className="form-select"
                value={formData.item_condition}
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
            <label htmlFor="features" className="form-label">
              Features
            </label>
            <div className="row">
              {[
                "Adjustable",
                "Foldable",
                "Portable",
                "Musical",
                "Lights",
                "Interactive",
                "Safety Harness",
                "Washable Fabric",
                "Durable",
                "Eco-Friendly",
                "Battery Operated",
                "Remote Control",
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

          <div className="mb-4">
            <label htmlFor="attachments" className="form-label">
              Attachments (Manuals, Certifications, etc.)
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

          <div className="mt-4">
            <button
              type="submit"
              className="rounded-3 nav-btn secondary-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Kids Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}