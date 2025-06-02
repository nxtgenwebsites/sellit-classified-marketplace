"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserProfileSettings.css";

const UserProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    country: "US",
    city: "New York",
    address: "123 Main Street",
    companyName: "Tech Solutions Inc",
    description: "Professional software developer with 5+ years experience",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  });

  const [stats] = useState({
    totalListings: 24,
    activeListings: 18,
    totalViews: 1250,
    totalMessages: 89,
    memberSince: "2022",
  });

  const countries = [
    { code: "US", name: "United States" },
    { code: "UK", name: "United Kingdom" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "IN", name: "India" },
    { code: "PK", name: "Pakistan" },
    { code: "BD", name: "Bangladesh" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-settings-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* Main Content */}
            <div className="row">
              <div className="col-lg-3 mb-4">
                {/* Profile Card */}
                <div className="profile-card">
                  <div className="profile-avatar">
                    <img
                      src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                      alt="Profile"
                      className="avatar-img2"
                    />
                    <div className="avatar-overlay">
                      <i className="fas fa-camera"></i>
                    </div>
                  </div>
                  <h4 className="profile-name">
                    {formData.firstName} {formData.lastName}
                  </h4>
                  <p className="profile-email">{formData.email}</p>
                  <div className="profile-badge">
                    <span className="badge bg-success">Verified</span>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="settings-nav">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "personal" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("personal")}
                      >
                        <i className="fas fa-user me-2"></i>
                        Personal Info
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "business" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("business")}
                      >
                        <i className="fas fa-building me-2"></i>
                        Business Info
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "security" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("security")}
                      >
                        <i className="fas fa-shield-alt me-2"></i>
                        Security
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "notifications" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("notifications")}
                      >
                        <i className="fas fa-bell me-2"></i>
                        Notifications
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="settings-content">
                  <form onSubmit={handleSubmit}>
                    {/* Personal Information Tab */}
                    {activeTab === "personal" && (
                      <div className="tab-content">
                        <div className="content-header">
                          <h3>Personal Information</h3>
                          <p>
                            Update your personal details and contact information
                          </p>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">First Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Last Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Mobile Number *
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Country *</label>
                            <select
                              className="form-select"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Select Country</option>
                              {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">City</label>
                            <input
                              type="text"
                              className="form-control"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Address</label>
                          <textarea
                            className="form-control"
                            name="address"
                            rows="3"
                            value={formData.address}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {/* Business Information Tab */}
                    {activeTab === "business" && (
                      <div className="tab-content">
                        <div className="content-header">
                          <h3>Business Information</h3>
                          <p>
                            Manage your business profile and listing preferences
                          </p>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Company/Business Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Business Description
                          </label>
                          <textarea
                            className="form-control"
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Describe your business or services..."
                          ></textarea>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Business Category
                            </label>
                            <select className="form-select">
                              <option>Select Category</option>
                              <option>Electronics</option>
                              <option>Automotive</option>
                              <option>Real Estate</option>
                              <option>Services</option>
                              <option>Fashion</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Business Type</label>
                            <select className="form-select">
                              <option>Individual</option>
                              <option>Small Business</option>
                              <option>Corporation</option>
                              <option>Non-Profit</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === "security" && (
                      <div className="tab-content">
                        <div className="content-header">
                          <h3>Security Settings</h3>
                          <p>Manage your password and security preferences</p>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Current Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter current password"
                          />
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Enter new password"
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Confirm new password"
                            />
                          </div>
                        </div>

                        <div className="security-options">
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="twoFactor"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="twoFactor"
                            >
                              Enable Two-Factor Authentication
                            </label>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="loginAlerts"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="loginAlerts"
                            >
                              Send login alerts to email
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Notifications Tab */}
                    {activeTab === "notifications" && (
                      <div className="tab-content">
                        <div className="content-header">
                          <h3>Notification Preferences</h3>
                          <p>Choose how you want to receive notifications</p>
                        </div>

                        <div className="notification-group">
                          <h5>Email Notifications</h5>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="emailNotif"
                              name="notifications.email"
                              checked={formData.notifications.email}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="emailNotif"
                            >
                              Receive email notifications
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="newMessages"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="newMessages"
                            >
                              New messages from buyers
                            </label>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="listingUpdates"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="listingUpdates"
                            >
                              Listing status updates
                            </label>
                          </div>
                        </div>

                        <div className="notification-group">
                          <h5>SMS Notifications</h5>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="smsNotif"
                              name="notifications.sms"
                              checked={formData.notifications.sms}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="smsNotif"
                            >
                              Receive SMS notifications
                            </label>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="urgentSms"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="urgentSms"
                            >
                              Urgent messages only
                            </label>
                          </div>
                        </div>

                        <div className="notification-group">
                          <h5>Push Notifications</h5>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="pushNotif"
                              name="notifications.push"
                              checked={formData.notifications.push}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="pushNotif"
                            >
                              Enable push notifications
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="form-actions">
                      <button type="submit" className="btn btn-primary me-3">
                        <i className="fas fa-save me-2"></i>
                        Save Changes
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fas fa-undo me-2"></i>
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettings;
