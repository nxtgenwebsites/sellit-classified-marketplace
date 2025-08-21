"use client";

import { useState, useEffect } from "react";

export default function Fashion({ selectedSubCategory }) {
  const [formData, setFormData] = useState({
    sub_category: selectedSubCategory || "", // Pre-fill with selected sub-category
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
    console.log("Fashion Form Data:", formData);
    console.log("Image File:", imageFile);
    console.log("Attachment File:", attachmentFile);

    // Simulate API call
    setTimeout(() => {
      alert("Fashion ad data logged to console!");
      setIsSubmitting(false);
      // Optionally reset form
      setFormData({
        sub_category: selectedSubCategory || "",
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

          {/* Fashion Specific Fields */}
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

          <div className="row mb-3">
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
          </div>

          <div className="row mb-3">
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
          </div>

          <div className="mb-3">
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
                Fashion Item Image Upload
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
                Attachments (Additional Images, etc.)
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
              {isSubmitting ? "Submitting..." : "Submit Fashion Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
