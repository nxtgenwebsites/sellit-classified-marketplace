"use client";

import { useState, useEffect } from "react";

export default function Books({ selectedSubCategory }) {
  const [formData, setFormData] = useState({
    sub_category: selectedSubCategory || "", // Pre-fill with selected sub-category
    ad_title: "",
    description: "",
    type: "", // e.g., Book, Music Instrument, Sports Equipment
    genre: "", // For books/music
    author_artist: "", // For books/music
    condition: "",
    language: "", // For books
    format: "", // For books/music (e.g., Paperback, Hardcover, CD, Vinyl)
    brand: "", // For sports/hobby items
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
    console.log("Books, Sports & Hobbies Form Data:", formData);
    console.log("Image File:", imageFile);
    console.log("Attachment File:", attachmentFile);

    // Simulate API call
    setTimeout(() => {
      alert("Books, Sports & Hobbies ad data logged to console!");
      setIsSubmitting(false);
      // Optionally reset form
      setFormData({
        sub_category: selectedSubCategory || "",
        ad_title: "",
        description: "",
        type: "",
        genre: "",
        author_artist: "",
        condition: "",
        language: "",
        format: "",
        brand: "",
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
                  Select Category
                </option>
                <option value="Books & Magazines">Books & Magazines</option>
                <option value="Musical Instruments">Musical Instruments</option>
                <option value="Sports Equipment">Sports Equipment</option>
                <option value="Gym & Fitness">Gym & Fitness</option>
                <option value="Other Hobbies">Other Hobbies</option>
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
                placeholder="e.g., The Lord of the Rings Book Set"
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
              placeholder="Describe the item, its condition, and any special details..."
              required
            ></textarea>
          </div>

          {/* Books, Sports & Hobbies Specific Fields */}
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
                <optgroup label="Books & Magazines">
                  <option value="Novel">Novel</option>
                  <option value="Textbook">Textbook</option>
                  <option value="Magazine">Magazine</option>
                  <option value="Comic Book">Comic Book</option>
                  <option value="Children's Book">Children's Book</option>
                  <option value="Reference Book">Reference Book</option>
                </optgroup>
                <optgroup label="Musical Instruments">
                  <option value="Guitar">Guitar</option>
                  <option value="Keyboard">Keyboard</option>
                  <option value="Drums">Drums</option>
                  <option value="Violin">Violin</option>
                  <option value="Flute">Flute</option>
                </optgroup>
                <optgroup label="Sports Equipment">
                  <option value="Cricket Bat">Cricket Bat</option>
                  <option value="Football">Football</option>
                  <option value="Tennis Racket">Tennis Racket</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Cycling Gear">Cycling Gear</option>
                </optgroup>
                <optgroup label="Gym & Fitness">
                  <option value="Dumbbells">Dumbbells</option>
                  <option value="Treadmill">Treadmill</option>
                  <option value="Exercise Bike">Exercise Bike</option>
                  <option value="Yoga Mat">Yoga Mat</option>
                </optgroup>
                <optgroup label="Other Hobbies">
                  <option value="Collectibles">Collectibles</option>
                  <option value="Art Supplies">Art Supplies</option>
                  <option value="Craft Supplies">Craft Supplies</option>
                  <option value="Board Games">Board Games</option>
                </optgroup>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="genre" className="form-label">
                Genre/Category
              </label>
              <input
                type="text"
                className="form-control"
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="e.g., Fiction, Rock, Cricket, Home Gym"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="author_artist" className="form-label">
                Author/Artist/Brand
              </label>
              <input
                type="text"
                className="form-control"
                id="author_artist"
                name="author_artist"
                value={formData.author_artist}
                onChange={handleChange}
                placeholder="e.g., J.R.R. Tolkien, Atif Aslam, Adidas"
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

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="language" className="form-label">
                Language (for Books)
              </label>
              <select
                name="language"
                id="language"
                className="form-select"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Language
                </option>
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
                <option value="Arabic">Arabic</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="format" className="form-label">
                Format
              </label>
              <select
                name="format"
                id="format"
                className="form-select"
                value={formData.format}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Format
                </option>
                <optgroup label="Books">
                  <option value="Paperback">Paperback</option>
                  <option value="Hardcover">Hardcover</option>
                  <option value="E-book">E-book</option>
                </optgroup>
                <optgroup label="Music">
                  <option value="CD">CD</option>
                  <option value="Vinyl">Vinyl</option>
                  <option value="Cassette">Cassette</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Physical">Physical</option>
                  <option value="Digital">Digital</option>
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
                "Original",
                "Reprint",
                "Signed Edition",
                "Collector's Item",
                "New with Tags",
                "Used - Good Condition",
                "Complete Set",
                "With Accessories",
                "Portable",
                "Durable",
                "Adjustable",
                "Foldable",
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
              {isSubmitting ? "Submitting..." : "Submit Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
