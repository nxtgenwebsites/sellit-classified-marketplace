import { useState, useEffect } from "react";
import "./manage-team.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [errors, setErrors] = useState({});

  const uid = localStorage.getItem("uid");



  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullName: "",
    phone: "",
    type: "User",
    state: "",
    password: "",
    confirmPassword: "",
  });

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      type: "User",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    if (showAddModal || formData.password) {
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    axios
      .post(`https://sellit-backend-u8bz.onrender.com/api/team/add-team`, {
        username: formData.username,
        identifier: formData.email,
        state: formData.state.toLowerCase(),
        password: formData.password,
      })
      .then((res) => {
        setShowAddModal(false);
        toast.success("User added successfully");
        resetForm();
        getData();
      })
      .catch((err) => {
        setShowAddModal(false);
        toast.error(err.response?.data?.message || "Error adding member");
        console.log(err);
      });
  };

  const handleEditUser = (user) => {
    console.log("Edit user clicked:", user);
    setSelectedUser(user);
    setFormData({
      username: user.username,
      email: user.identifier,
      fullName: user.fullName || "",
      phone: user.phone || "",
      type: user.type || "User",
      state: user.state,
      password: "",
      confirmPassword: "",
    });
    setShowEditModal(true);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const updateData = {
      username: formData.username,
      identifier: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      state: formData.state.toLowerCase(),
    };

    if (formData.password) {
      updateData.password = formData.password;
    }

    axios
      .put(
        `https://sellit-backend-u8bz.onrender.com/api/team/edit-team/${selectedUser.id}`,
        updateData
      )
      .then((res) => {
        toast.success("User updated successfully");
        setShowEditModal(false);
        resetForm();
        setSelectedUser(null);
        getData();
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Error updating user");
        console.log(err);
      });
  };

  const viewUserDetails = (user) => {
    console.log("View user clicked:", user);
    setSelectedUser({
      ...user,
      fullName: user.fullName || user.username,
      email: user.identifier,
      phone: user.phone || "Not provided",
      status: user.isBlocked ? "Blocked" : "Active",
      type: user.type || "User",
      joinDate: new Date(user.createdAt || Date.now()).toLocaleDateString(),
      lastLogin: "Recently",
      totalPosts: 0,
      totalComments: 0,
      avatar: "/placeholder.svg",
    });
    setShowViewModal(true);
  };

  const handleBlock = (id) => {
    console.log(id);
    
    axios
      .put(`https://sellit-backend-u8bz.onrender.com/api/users/block-user/${uid}`, {
        userId: id,
      })
      .then((res) => {
        toast.success(res.data.message);
        console.log(res.data);
        getData();
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Error blocking user");
        console.log(err);
      });
  };

  const handleUnblock = (id) => {
    console.log(id);
    
    axios
      .put(`https://sellit-backend-u8bz.onrender.com/api/users/unblock-user/${uid}`, {
        userId: id,
      })
      .then((res) => {
        toast.success(res.data.message);
        console.log(res.data);
        getData();
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Error unblocking user");
        console.log(err);
      });
  };

  const getData = () => {
    axios
      .get(`https://sellit-backend-u8bz.onrender.com/api/team/get-team/${uid}`)
      .then((res) => {
        setUsers(res.data.teamMembers);
        console.log(res.data);
      })
      .catch((err) => {
        if (err) {
          location.href = '/';
        }
        console.log(err);
      });
  };

  const deleteUser = (id) => {
    console.log(id);
    
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`https://sellit-backend-u8bz.onrender.com/api/users/delete-user/${id}`)
        .then((res) => {
          toast.success("User deleted successfully");
          getData();
        })
        .catch((err) => {
          toast.error("Error deleting user");
          console.log(err);
        });
    }
  };

  const toggleUserStatus = (id) => {
    const user = users.find((u) => u.id === id);
    if (user.isBlocked) {
      handleUnblock(id);
    } else {
      handleBlock(id);
    }
  };

  useEffect(() => {
    getData();
    // if (!uid) {
    //   location.href = "/";
    // }
  }, []);

  return (
    <>
      <ToastContainer />
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
              onClick={() => {
                console.log("Add user button clicked");
                setShowAddModal(true);
              }}
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
              <h3>{users.filter((u) => u.isBlocked === true).length}</h3>
              <p>Blocked Users</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon admin">
              <i className="fas fa-user-shield"></i>
            </div>
            <div className="stat-info">
              <h3>{users.filter((u) => u.role === "admin").length}</h3>
              <p>Administrators</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon total">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-info">
              <h3>{users.length}</h3>
              <p>Total Members</p>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="table-section">
          <div className="table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Contact</th>
                  <th>Region</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-cell">
                        <div className="user-info">
                          <div className="username">{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <span>{user.identifier}</span>
                      </div>
                    </td>
                    <td>
                      <div class="type-role">
                        <span class="user-type user">{user.state}</span>
                      </div>
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
                        {user.isBlocked ? (
                          <button
                            className="action-btn unblock"
                            onClick={() => handleUnblock(user.id)}
                            title="Unblock User"
                          >
                            <i className="fas fa-check-circle"></i>
                          </button>
                        ) : (
                          <button
                            className="action-btn block"
                            onClick={() => handleBlock(user.id)}
                            title="Block User"
                          >
                            <i className="fas fa-ban"></i>
                          </button>
                        )}
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
            {users.length === 0 && (
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
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
          onClick={() => setShowAddModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              maxWidth: "800px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
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
              <div className="form-section mb-0">
                <h3>Personal Information</h3>
                <div className="form-row">
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
              </div>
              <div className="">
                <div className="form-group w-100">
                  <label>State</label>
                  <select
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  >
                    <option value="">Select State</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Sindh">Sindh</option>
                    <option value="Khyber Pakhtunkhwa">
                      Khyber Pakhtunkhwa
                    </option>
                    <option value="Balochistan">Balochistan</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                    <option value="Kashmir">Kashmir</option>
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
                  />
                  {errors.confirmPassword && (
                    <span className="error-text">{errors.confirmPassword}</span>
                  )}
                </div>
              </div>
              <div className="">
                <button type="submit" className="submit-btn mt-0">
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
        <div
          // className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
          onClick={() => setShowEditModal(false)}
        >
          <div
            // className="modal edit-user-modal"
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              maxWidth: "800px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
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
              <div className="form-section mb-0">
                <h3>Personal Information</h3>
                <div className="form-row">
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
              </div>
              <div className="">
                <div className="form-group w-100">
                  <label>State</label>
                  <select
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  >
                    <option value="">Select State</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Sindh">Sindh</option>
                    <option value="Khyber Pakhtunkhwa">
                      Khyber Pakhtunkhwa
                    </option>
                    <option value="Balochistan">Balochistan</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                    <option value="Kashmir">Kashmir</option>
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
                    <span className="error-text">{errors.confirmPassword}</span>
                  )}
                </div>
              </div>
              <div className="mt-0">
                <button type="submit" className="submit-btn mt-0">
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
        <div
          // className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
          onClick={() => setShowViewModal(false)}
        >
          <div
            // className="modal view-user-modal"
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              maxWidth: "800px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
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
                <div className="profile-info">
                  <p>@{selectedUser.username}</p>
                  <div className="profile-badges">
                    <span
                      className={`status-badge ${selectedUser.status.toLowerCase()}`}
                    >
                      {selectedUser.state}
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
                        <label>Contact</label>
                        <span>{selectedUser.email}</span>
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
                  className={`status-btn ms-3 ${
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
    </>
  );
}
