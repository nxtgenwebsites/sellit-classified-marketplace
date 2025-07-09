"use client";
import { useState } from "react";
import "./manage-team.css";

const pakistanRegions = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Azad Kashmir",
  "Gilgit-Baltistan",
];

export default function TeamManagementPage() {
  const [teamMembers, setTeamMembers] = useState([
    {
      _id: "1",
      name: "Ahmed Ali Khan",
      email: "ahmed.ali@sellit.pk",
      phone: "+92-300-1234567",
      region: "Punjab",
      role: "admin",
      isBlocked: false,
      createdAt: new Date().toISOString(),
    },
    {
      _id: "2",
      name: "Fatima Sheikh",
      email: "fatima.sheikh@sellit.pk",
      phone: "+92-321-9876543",
      region: "Sindh",
      role: "manager",
      isBlocked: false,
      createdAt: new Date().toISOString(),
    },
    {
      _id: "3",
      name: "Muhammad Hassan",
      email: "hassan.m@sellit.pk",
      phone: "+92-333-5555555",
      region: "Khyber Pakhtunkhwa",
      role: "user",
      isBlocked: true,
      createdAt: new Date().toISOString(),
    },
    {
      _id: "4",
      name: "Ayesha Malik",
      email: "ayesha.malik@sellit.pk",
      phone: "+92-345-7777777",
      region: "Balochistan",
      role: "manager",
      isBlocked: false,
      createdAt: new Date().toISOString(),
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(10);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    role: "user",
  });

  // Pagination logic
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = teamMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      region: "",
      role: "user",
    });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.region.trim()) newErrors.region = "Region is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newMember = {
      _id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      region: formData.region,
      role: formData.role,
      isBlocked: false,
      createdAt: new Date().toISOString(),
    };

    setTeamMembers([...teamMembers, newMember]);
    setShowAddModal(false);
    resetForm();
  };

  const handleEditMember = (member) => {
    setSelectedMember(member);
    setFormData({
      name: member.name,
      email: member.email,
      phone: member.phone,
      region: member.region,
      role: member.role,
    });
    setShowEditModal(true);
  };

  const handleUpdateMember = (e) => {
    e.preventDefault();
    if (!validateForm() || !selectedMember) return;

    const updatedMembers = teamMembers.map((member) =>
      member._id === selectedMember._id ? { ...member, ...formData } : member
    );

    setTeamMembers(updatedMembers);
    setShowEditModal(false);
    resetForm();
    setSelectedMember(null);
  };

  const viewMemberDetails = (member) => {
    setSelectedMember({
      ...member,
      fullName: member.name,
      status: member.isBlocked ? "Blocked" : "Active",
      joinDate: new Date(member.createdAt).toLocaleDateString(),
      lastLogin: "Recently",
      totalAds: Math.floor(Math.random() * 100),
      totalViews: Math.floor(Math.random() * 1000),
      avatar: "/placeholder.svg",
    });
    setShowViewModal(true);
  };

  const handleBlock = (id) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member._id === id ? { ...member, isBlocked: true } : member
      )
    );
  };

  const handleUnblock = (id) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member._id === id ? { ...member, isBlocked: false } : member
      )
    );
  };

  const deleteMember = (id) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      setTeamMembers(teamMembers.filter((member) => member._id !== id));
    }
  };

  const toggleMemberStatus = (id) => {
    const member = teamMembers.find((m) => m._id === id);
    if (member.isBlocked) {
      handleUnblock(id);
    } else {
      handleBlock(id);
    }
  };

  return (
    <>
      <div className="manage-users-page">
        {/* Header */}
        <div className="page-header w-100">
          <div className="header-content w-100">
            <div className="header-left">
              <h1>
                <i className="fas fa-users"></i>
                Team Management
              </h1>
              <p>Manage ads team members across Pakistan regions</p>
            </div>
            <button
              className="add-user-btn"
              onClick={() => setShowAddModal(true)}
            >
              <i className="fas fa-plus"></i>
              Add New Member
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon blocked">
              <i className="fas fa-user-slash"></i>
            </div>
            <div className="stat-info">
              <h3>{teamMembers.filter((m) => m.isBlocked === true).length}</h3>
              <p>Blocked Members</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon admin">
              <i className="fas fa-user-shield"></i>
            </div>
            <div className="stat-info">
              <h3>{teamMembers.filter((m) => m.role === "admin").length}</h3>
              <p>Administrators</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon total">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-info">
              <h3>{teamMembers.length}</h3>
              <p>Total Members</p>
            </div>
          </div>
        </div>

        {/* Team Members Table */}
        <div className="table-section">
          <div className="table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Contact</th>
                  <th>Region</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentMembers.map((member) => (
                  <tr key={member._id}>
                    <td>
                      <div className="user-cell">
                        <div className="user-info">
                          <div className="user-name">{member.name}</div>
                  </div>
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <div className="email">
                          <i className="fas fa-envelope"></i>
                          {member.email}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="type-role">
                        <span className="user-type user">{member.region}</span>
                      </div>
                    </td>
                    <td>
                      <div className="type-role">
                        <span className={`user-type ${member.role}`}>
                          {member.role}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="actions-menu">
                        <button
                          className="action-btn view"
                          onClick={() => viewMemberDetails(member)}
                          title="View Details"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button
                          className="action-btn edit"
                          onClick={() => handleEditMember(member)}
                          title="Edit Member"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        {member.isBlocked ? (
                          <button
                            className="action-btn unblock"
                            onClick={() => handleUnblock(member._id)}
                            title="Unblock Member"
                          >
                            <i className="fas fa-check-circle"></i>
                          </button>
                        ) : (
                          <button
                            className="action-btn block"
                            onClick={() => handleBlock(member._id)}
                            title="Block Member"
                          >
                            <i className="fas fa-ban"></i>
                          </button>
                        )}
                        <button
                          className="action-btn delete"
                          onClick={() => deleteMember(member._id)}
                          title="Delete Member"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {teamMembers.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>No team members found</h3>
                <p>Add your first team member to get started</p>
                <button
                  className="add-user-btn"
                  onClick={() => setShowAddModal(true)}
                >
                  <i className="fas fa-plus"></i>
                  Add First Member
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="page-btn prev"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <i className="fas fa-chevron-left"></i>
                Previous
              </button>
              <div className="page-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`page-btn ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                className="page-btn next"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="modal-overlay " onClick={() => setShowAddModal(false)}>
          <div
            className="modal add-user-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>
                <i className="fas fa-user-plus"></i>
                Add New Team Member
              </h2>
              <button
                className="close-btn"
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleAddMember} className="modal-form">
              <div className="form-section">
                <h3>Member Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={errors.name ? "error" : ""}
                      placeholder="Enter full name"
                    />
                    {errors.name && (
                      <span className="error-text">{errors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={errors.email ? "error" : ""}
                      placeholder="Enter email address"
                    />
                    {errors.email && (
                      <span className="error-text">{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={errors.phone ? "error" : ""}
                      placeholder="+92-XXX-XXXXXXX"
                    />
                    {errors.phone && (
                      <span className="error-text">{errors.phone}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Pakistan Region <span className="required">*</span>
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) =>
                        setFormData({ ...formData, region: e.target.value })
                      }
                      className={errors.region ? "error" : ""}
                    >
                      <option value="">Select Region</option>
                      {pakistanRegions.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                    {errors.region && (
                      <span className="error-text">{errors.region}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-section">
                <h3>Role Settings</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                    >
                      <option value="user">User</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                >
                  <i className="fas fa-times"></i>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-plus"></i>
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Member Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div
            className="modal edit-user-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>
                <i className="fas fa-user-edit"></i>
                Edit Team Member
              </h2>
              <button
                className="close-btn"
                onClick={() => {
                  setShowEditModal(false);
                  resetForm();
                }}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleUpdateMember} className="modal-form">
              <div className="form-section">
                <h3>Member Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && (
                      <span className="error-text">{errors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <span className="error-text">{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && (
                      <span className="error-text">{errors.phone}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Pakistan Region <span className="required">*</span>
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) =>
                        setFormData({ ...formData, region: e.target.value })
                      }
                      className={errors.region ? "error" : ""}
                    >
                      <option value="">Select Region</option>
                      {pakistanRegions.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                    {errors.region && (
                      <span className="error-text">{errors.region}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-section">
                <h3>Role Settings</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                    >
                      <option value="user">User</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowEditModal(false);
                    resetForm();
                  }}
                >
                  <i className="fas fa-times"></i>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-save"></i>
                  Update Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Member Details Modal */}
      {showViewModal && selectedMember && (
        <div className="modal-overlay" onClick={() => setShowViewModal(false)}>
          <div
            className="modal view-user-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>
                <i className="fas fa-user"></i>
                Member Details
              </h2>
              <button
                className="close-btn"
                onClick={() => setShowViewModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="user-profile-section">
              <div className="profile-header">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt={selectedMember.name}
                  className="profile-avatar"
                />
                <div className="profile-info">
                  <h3>{selectedMember.name}</h3>
                  <p>Manages ads in {selectedMember.region}</p>
                  <div className="profile-badges">
                    <span
                      className={`status-badge ${
                        selectedMember.isBlocked ? "blocked" : "active"
                      }`}
                    >
                      {selectedMember.isBlocked ? "Blocked" : "Active"}
                    </span>
                    <span className={`user-type ${selectedMember.role}`}>
                      {selectedMember.role}
                    </span>
                  </div>
                </div>
              </div>
              <div className="profile-details">
                <div className="details-grid">
                  <div className="detail-group">
                    <h4>Contact Information</h4>
                    <div className="detail-item">
                      <i className="fas fa-envelope"></i>
                      <div>
                        <label>Email</label>
                        <span>{selectedMember.email}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-phone"></i>
                      <div>
                        <label>Phone</label>
                        <span>{selectedMember.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-group">
                    <h4>Assignment Information</h4>
                    <div className="detail-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <div>
                        <label>Pakistan Region</label>
                        <span>{selectedMember.region}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-user-tag"></i>
                      <div>
                        <label>Role</label>
                        <span>{selectedMember.role}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-calendar-alt"></i>
                      <div>
                        <label>Join Date</label>
                        <span>{selectedMember.joinDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-group">
                    <h4>Performance Stats</h4>
                    <div className="stats-row">
                      <div className="stat-item">
                        <div className="stat-number">
                          {selectedMember.totalAds || 0}
                        </div>
                        <div className="stat-label">Ads Managed</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">
                          {selectedMember.totalViews || 0}
                        </div>
                        <div className="stat-label">Total Views</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button
                  className="edit-btn"
                  onClick={() => {
                    setShowViewModal(false);
                    handleEditMember(selectedMember);
                  }}
                >
                  <i className="fas fa-edit"></i>
                  Edit Member
                </button>
                <button
                  className={`status-btn ${
                    selectedMember.isBlocked ? "unblock" : "block"
                  }`}
                  onClick={() => {
                    toggleMemberStatus(selectedMember._id);
                    setShowViewModal(false);
                  }}
                >
                  <i
                    className={`fas ${
                      selectedMember.isBlocked ? "fa-check-circle" : "fa-ban"
                    }`}
                  ></i>
                  {selectedMember.isBlocked ? "Unblock Member" : "Block Member"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
