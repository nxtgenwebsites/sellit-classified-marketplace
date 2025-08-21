"use client"

import { useState, useEffect } from "react"

const uid = localStorage.getItem("uid")

export default function JobAdsForm({ selectedSubCategory }) {
  const [formData, setFormData] = useState({
    sub_category: selectedSubCategory || "",
    job_title: "",
    description: "",
    hiring_type: "",
    company_name: "",
    type_of_ad: "",
    salary_from: "",
    salary_to: "",
    career_level: "",
    salary_period: "",
    position_type: "",
    location: "",
    seller_name: "",
    seller_contact: "",
  })

  const [images, setImages] = useState([])
  const [imagePreviewUrls, setImagePreviewUrls] = useState([])
  const [selectedThumbnail, setSelectedThumbnail] = useState(null)
  const [attachments, setAttachments] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Update sub_category in form data if it changes from parent
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      sub_category: selectedSubCategory || "",
    }))
  }, [selectedSubCategory])

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
        data.append(key, formData[key])
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

      console.log("[v0] Submitting job ad form data to API...")

      const response = await fetch(`https://sellit-backend-u8bz.onrender.com/api/ads/job-add/${uid}`, {
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
      console.log("✅ Job ad created:", result)

      // Reset form on success
      if (response.ok) {
        setFormData({
          sub_category: selectedSubCategory || "",
          job_title: "",
          description: "",
          hiring_type: "",
          company_name: "",
          type_of_ad: "",
          salary_from: "",
          salary_to: "",
          career_level: "",
          salary_period: "",
          position_type: "",
          location: "",
          seller_name: "",
          seller_contact: "",
        })
        setImages([])
        setImagePreviewUrls([])
        setSelectedThumbnail(null)
        setAttachments([])
        alert("Job ad submitted successfully!")
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
        alert(`Error submitting job ad: ${err.message}`)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-100 mobile-form-card mt-3">
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
                  Select Job Category
                </option>
                <option value="Accounting & Finance">Accounting & Finance</option>
                <option value="Administration">Administration</option>
                <option value="Advertising & PR">Advertising & PR</option>
                <option value="Architecture & Design">Architecture & Design</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Education">Education</option>
                <option value="Engineering">Engineering</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Human Resources">Human Resources</option>
                <option value="IT & Telecom">IT & Telecom</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Marketing & Communications">Marketing & Communications</option>
                <option value="Sales">Sales</option>
                <option value="Other Jobs">Other Jobs</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="job_title" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                id="job_title"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                placeholder="e.g., Software Engineer"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Job Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the job requirements, responsibilities, and qualifications..."
              required
            ></textarea>
          </div>

          {/* Job Specific Fields */}
          <div className="mb-3">
            <label className="form-label">Hiring Person/Company</label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hiring_type"
                  id="individual"
                  value="Individual"
                  checked={formData.hiring_type === "Individual"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="individual">
                  Individual
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hiring_type"
                  id="company"
                  value="Company"
                  checked={formData.hiring_type === "Company"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="company">
                  Company
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hiring_type"
                  id="consultant"
                  value="Consultant"
                  checked={formData.hiring_type === "Consultant"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="consultant">
                  Consultant
                </label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="company_name" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Enter Company Name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Type Of Ad</label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type_of_ad"
                  id="job_wanted"
                  value="Job Wanted"
                  checked={formData.type_of_ad === "Job Wanted"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="job_wanted">
                  Job Wanted
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type_of_ad"
                  id="job_offered"
                  value="Job Offered"
                  checked={formData.type_of_ad === "Job Offered"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="job_offered">
                  Job Offered
                </label>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="salary_from" className="form-label">
                Salary From
              </label>
              <input
                type="number"
                className="form-control"
                id="salary_from"
                name="salary_from"
                value={formData.salary_from}
                onChange={handleChange}
                placeholder="Enter minimum salary"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="salary_to" className="form-label">
                Salary To
              </label>
              <input
                type="number"
                className="form-control"
                id="salary_to"
                name="salary_to"
                value={formData.salary_to}
                onChange={handleChange}
                placeholder="Enter maximum salary"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="career_level" className="form-label">
                Career Level
              </label>
              <select
                name="career_level"
                id="career_level"
                className="form-select"
                value={formData.career_level}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Career Level
                </option>
                <option value="Entry Level">Entry Level</option>
                <option value="Associate">Associate</option>
                <option value="Mid-Senior Level">Mid-Senior Level</option>
                <option value="Director">Director</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="salary_period" className="form-label">
                Salary Period
              </label>
              <select
                name="salary_period"
                id="salary_period"
                className="form-select"
                value={formData.salary_period}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Salary Period
                </option>
                <option value="Monthly">Monthly</option>
                <option value="Hourly">Hourly</option>
                <option value="Weekly">Weekly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="position_type" className="form-label">
                Position Type
              </label>
              <select
                name="position_type"
                id="position_type"
                className="form-select"
                value={formData.position_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Position Type
                </option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
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
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="seller_name" className="form-label">
                Contact Person Name
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
                Contact Number
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
            <small className="text-muted">Select up to 5 images. You can choose one as thumbnail.</small>

            {images.length > 0 && (
              <div className="mt-3">
                <h6>Selected Images - Choose Thumbnail:</h6>
                <div className="row">
                  {images.map((image, index) => (
                    <div key={index} className="col-md-3 mb-3">
                      <div className={`card ${selectedThumbnail === index ? "border-primary" : ""}`}>
                        <img
                          src={imagePreviewUrls[index] || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="card-img-top"
                          style={{ height: "120px", objectFit: "cover" }}
                        />
                        <div className="card-body p-2">
                          <small className="d-block text-truncate mb-2">{image.name}</small>
                          <button
                            type="button"
                            className={`btn btn-sm w-100 ${
                              selectedThumbnail === index ? "btn-primary" : "btn-outline-primary"
                            }`}
                            onClick={() => selectThumbnail(index)}
                          >
                            {selectedThumbnail === index ? "Thumbnail ✓" : "Set as Thumbnail"}
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
            <small className="text-muted">Upload PDF, Word documents, or text files.</small>

            {attachments.length > 0 && (
              <div className="mt-2">
                <h6>Selected Attachments:</h6>
                <ul className="list-group">
                  {attachments.map((file, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="text-truncate">{file.name}</span>
                      <span className="badge bg-secondary">{(file.size / 1024).toFixed(1)} KB</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="">
            <button type="submit" className="rounded-3 nav-btn secondary-button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Job Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
