"use client";

import { useState, useEffect } from "react";
import "./manage-users.css";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullName: "",
    phone: "",
    type: "User",
    role: "Member",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const initialUsers = [
    {
      id: 1,
      username: "john_doe",
      email: "john@example.com",
      fullName: "John Doe",
      phone: "+1234567890",
      type: "Admin",
      role: "Super Admin",
      status: "Active",
      joinDate: "2024-01-15",
      lastLogin: "2024-12-29 10:30 AM",
      avatar: "/placeholder.svg?height=50&width=50",
      totalPosts: 45,
      totalComments: 128,
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane@example.com",
      fullName: "Jane Smith",
      phone: "+1234567891",
      type: "User",
      role: "Premium Member",
      status: "Active",
      joinDate: "2024-02-20",
      lastLogin: "2024-12-28 02:15 PM",
      avatar: "/placeholder.svg?height=50&width=50",
      totalPosts: 23,
      totalComments: 67,
    },
    {
      id: 3,
      username: "mike_wilson",
      email: "mike@example.com",
      fullName: "Mike Wilson",
      phone: "+1234567892",
      type: "Moderator",
      role: "Content Moderator",
      status: "Blocked",
      joinDate: "2024-03-10",
      lastLogin: "2024-12-25 08:45 AM",
      avatar: "/placeholder.svg?height=50&width=50",
      totalPosts: 12,
      totalComments: 34,
    },
    {
      id: 4,
      username: "sarah_jones",
      email: "sarah@example.com",
      fullName: "Sarah Jones",
      phone: "+1234567893",
      type: "User",
      role: "Member",
      status: "Active",
      joinDate: "2024-04-05",
      lastLogin: "2024-12-29 04:20 PM",
      avatar: "/placeholder.svg?height=50&width=50",
      totalPosts: 8,
      totalComments: 19,
    },
    {
      id: 5,
      username: "david_brown",
      email: "david@example.com",
      fullName: "David Brown",
      phone: "+1234567894",
      type: "User",
      role: "Member",
      status: "Inactive",
      joinDate: "2024-05-12",
      lastLogin: "2024-12-20 11:30 AM",
      avatar: "/placeholder.svg?height=50&width=50",
      totalPosts: 3,
      totalComments: 7,
    },
    {
      id: 6,
      username: "emma_davis",
      email: "emma@example.com",
      fullName: "Emma Davis",
      phone: "+1234567895",
      type: "User",
      role: "Premium Member",
      status: "Active",
      joinDate: "2024-06-18",
      lastLogin: "2024-12-29 09:15 AM",
      avatar: "/placeholder.svg?height=50&width=50",
      totalPosts: 31,
      totalComments: 89,
    },
  ];

  useEffect(() => {
    setUsers(initialUsers);
    setFilteredUsers(initialUsers);
  }, []);

  // Filter and search functionality
  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchesSearch =
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm);

      const matchesType = filterType === "all" || user.type === filterType;
      const matchesStatus =
        filterStatus === "all" || user.status === filterStatus;

      return matchesSearch && matchesType && matchesStatus;
    });

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, filterType, filterStatus, users]);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-()]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newUser = {
      id: users.length + 1,
      ...formData,
      status: "Active",
      joinDate: new Date().toISOString().split("T")[0],
      lastLogin: "Never",
      avatar: "/placeholder.svg?height=50&width=50",
      totalPosts: 0,
      totalComments: 0,
    };

    setUsers([...users, newUser]);
    setFormData({
      username: "",
      email: "",
      fullName: "",
      phone: "",
      type: "User",
      role: "Member",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setShowAddModal(false);
  };

  // Edit user
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      phone: user.phone,
      type: user.type,
      role: user.role,
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setShowEditModal(true);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (formData.password && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id
        ? {
            ...user,
            ...formData,
            password: formData.password || user.password,
          }
        : user
    );

    setUsers(updatedUsers);
    setShowEditModal(false);
    setSelectedUser(null);
    setErrors({});
  };

  // Block/Unblock user
  const toggleUserStatus = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId
        ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
        : user
    );
    setUsers(updatedUsers);
  };

  // Delete user
  const deleteUser = (userId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this user? This action cannot be undone."
      )
    ) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    }
  };

  // View user details
  const viewUserDetails = (user) => {
    setSelectedUser(user);
    setShowViewModal(true);
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      fullName: "",
      phone: "",
      type: "User",
      role: "Member",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="manage-users-page">
      {/* Header */}
      <div className="page-header w-100">
        <div className="header-content w-100">
          <div className="header-left">
            <h1>
              <i className="fas fa-users"></i>
              Manage Users
            </h1>
            <p>Add, edit, and manage all users in your system</p>
          </div>
          <button
            className="add-user-btn"
            onClick={() => setShowAddModal(true)}
          >
            <i className="fas fa-plus"></i>
            Add New User
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
            <h3>{users.filter((u) => u.status === "Blocked").length}</h3>
            <p>Blocked Users</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon admin">
            <i className="fas fa-user-shield"></i>
          </div>
          <div className="stat-info">
            <h3>{users.filter((u) => u.type === "Admin").length}</h3>
            <p>Administrators</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon total">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-info">
            <h3>{users.length}</h3>
            <p>Total Users</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-container mt-4">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search by username, email, name, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filters-group">
          <div className="filter-item">
            <label>Type</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
              <option value="User">User</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Blocked">Blocked</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="results-info">
          <span>
            Showing {currentUsers.length} of {filteredUsers.length} users
          </span>
        </div>
      </div>

      {/* Users Table */}
      <div className="table-section">
        <div className="table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Contact</th>
                <th>Type & Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-cell">
                      <div className="user-info">
                        <div className="user-name">{user.fullName}</div>
                        <div className="username">@{user.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-info">
                      <div className="email">
                        <i className="fas fa-envelope"></i>
                        {user.email}
                      </div>
                      <div className="phone">
                        <i className="fas fa-phone"></i>
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="type-role">
                      <span className={`user-type ${user.type.toLowerCase()}`}>
                        {user.type}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`status-badge ${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="actions-menu">
                      <button
                        className="action-btn view"
                        onClick={() => viewUserDetails(user)}
                        title="View Details"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button
                        className="action-btn edit"
                        onClick={() => handleEditUser(user)}
                        title="Edit User"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className={`action-btn ${
                          user.status === "Active" ? "block" : "unblock"
                        }`}
                        onClick={() => toggleUserStatus(user.id)}
                        title={
                          user.status === "Active"
                            ? "Block User"
                            : "Unblock User"
                        }
                      >
                        <i
                          className={`fas ${
                            user.status === "Active"
                              ? "fa-ban"
                              : "fa-check-circle"
                          }`}
                        ></i>
                      </button>
                      <button
                        className="action-btn delete"
                        onClick={() => deleteUser(user.id)}
                        title="Delete User"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {currentUsers.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>No users found</h3>
              <p>Try adjusting your search criteria or add a new user</p>
              <button
                className="add-user-btn"
                onClick={() => setShowAddModal(true)}
              >
                <i className="fas fa-plus"></i>
                Add First User
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

      {/* Add User Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div
            className="modal add-user-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>
                <i className="fas fa-user-plus"></i>
                Add New User
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

            <form onSubmit={handleAddUser} className="modal-form">
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={errors.fullName ? "error" : ""}
                      placeholder="Enter full name"
                    />
                    {errors.fullName && (
                      <span className="error-text">{errors.fullName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Username <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      className={errors.username ? "error" : ""}
                      placeholder="Enter username"
                    />
                    {errors.username && (
                      <span className="error-text">{errors.username}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
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
                      placeholder="Enter phone number"
                    />
                    {errors.phone && (
                      <span className="error-text">{errors.phone}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Account Settings</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>User Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                    >
                      <option value="User">User</option>
                      <option value="Moderator">Moderator</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                    >
                      <option value="Member">Member</option>
                      <option value="Premium Member">Premium Member</option>
                      <option value="Content Moderator">
                        Content Moderator
                      </option>
                      <option value="Super Admin">Super Admin</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Password <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className={errors.password ? "error" : ""}
                      placeholder="Enter password"
                    />
                    {errors.password && (
                      <span className="error-text">{errors.password}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Confirm Password <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className={errors.confirmPassword ? "error" : ""}
                      placeholder="Confirm password"
                    />
                    {errors.confirmPassword && (
                      <span className="error-text">
                        {errors.confirmPassword}
                      </span>
                    )}
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
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div
            className="modal edit-user-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>
                <i className="fas fa-user-edit"></i>
                Edit User
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

            <form onSubmit={handleUpdateUser} className="modal-form">
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={errors.fullName ? "error" : ""}
                    />
                    {errors.fullName && (
                      <span className="error-text">{errors.fullName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Username <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      className={errors.username ? "error" : ""}
                    />
                    {errors.username && (
                      <span className="error-text">{errors.username}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
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
                </div>
              </div>

              <div className="form-section">
                <h3>Account Settings</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>User Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                    >
                      <option value="User">User</option>
                      <option value="Moderator">Moderator</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                    >
                      <option value="Member">Member</option>
                      <option value="Premium Member">Premium Member</option>
                      <option value="Content Moderator">
                        Content Moderator
                      </option>
                      <option value="Super Admin">Super Admin</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>New Password (leave blank to keep current)</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className={errors.confirmPassword ? "error" : ""}
                      placeholder="Confirm new password"
                    />
                    {errors.confirmPassword && (
                      <span className="error-text">
                        {errors.confirmPassword}
                      </span>
                    )}
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
                  Update User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View User Details Modal */}
      {showViewModal && selectedUser && (
        <div className="modal-overlay" onClick={() => setShowViewModal(false)}>
          <div
            className="modal view-user-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>
                <i className="fas fa-user"></i>
                User Details
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
                  src={selectedUser.avatar || "/placeholder.svg"}
                  alt={selectedUser.fullName}
                  className="profile-avatar"
                />
                <div className="profile-info">
                  <h3>{selectedUser.fullName}</h3>
                  <p>@{selectedUser.username}</p>
                  <div className="profile-badges">
                    <span
                      className={`status-badge ${selectedUser.status.toLowerCase()}`}
                    >
                      {selectedUser.status}
                    </span>
                    <span
                      className={`user-type ${selectedUser.type.toLowerCase()}`}
                    >
                      {selectedUser.type}
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
                        <span>{selectedUser.email}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-phone"></i>
                      <div>
                        <label>Phone</label>
                        <span>{selectedUser.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-group">
                    <h4>Account Information</h4>
                    <div className="detail-item">
                      <i className="fas fa-user-tag"></i>
                      <div>
                        <label>Role</label>
                        <span>{selectedUser.role}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-calendar-alt"></i>
                      <div>
                        <label>Join Date</label>
                        <span>{selectedUser.joinDate}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-clock"></i>
                      <div>
                        <label>Last Login</label>
                        <span>{selectedUser.lastLogin}</span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-group">
                    <h4>Activity Stats</h4>
                    <div className="stats-row">
                      <div className="stat-item">
                        <div className="stat-number">
                          {selectedUser.totalPosts}
                        </div>
                        <div className="stat-label">Posts</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">
                          {selectedUser.totalComments}
                        </div>
                        <div className="stat-label">Comments</div>
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
                    handleEditUser(selectedUser);
                  }}
                >
                  <i className="fas fa-edit"></i>
                  Edit User
                </button>
                <button
                  className={`status-btn ${
                    selectedUser.status === "Active" ? "block" : "unblock"
                  }`}
                  onClick={() => {
                    toggleUserStatus(selectedUser.id);
                    setShowViewModal(false);
                  }}
                >
                  <i
                    className={`fas ${
                      selectedUser.status === "Active"
                        ? "fa-ban"
                        : "fa-check-circle"
                    }`}
                  ></i>
                  {selectedUser.status === "Active"
                    ? "Block User"
                    : "Unblock User"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
