"use client";

import { useState } from "react";
import "../manage-team/manage-team.css";

export default function ManagePayments() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      firstName: "Ahmed",
      lastName: "Khan",
      email: "ahmed.khan@example.com",
      city: "Karachi",
      state: "Sindh",
      country: "Pakistan",
      paymentMethod: "JazzCash",
      accountName: "Ahmed Khan",
      accountNumber: "03001234567",
      amount: 2999,
      status: "pending",
      screenshot:
        "https://via.placeholder.com/400x600/4CAF50/FFFFFF?text=Payment+Screenshot",
      submittedDate: new Date().toLocaleDateString(),
      adTitle: "Toyota Corolla 2020 for Sale",
    },
  ]);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paymentsPerPage] = useState(10);

  // Pagination logic
  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = payments.slice(
    indexOfFirstPayment,
    indexOfLastPayment
  );
  const totalPages = Math.ceil(payments.length / paymentsPerPage);

  const viewPaymentDetails = (payment) => {
    setSelectedPayment(payment);
    setShowViewModal(true);
  };

  const handleApprove = (id) => {
    if (
      window.confirm(
        "Are you sure you want to approve this payment and feature the ad?"
      )
    ) {
      setPayments(
        payments.map((p) => (p.id === id ? { ...p, status: "approved" } : p))
      );
      alert("Payment approved! Ad is now featured.");
      setShowViewModal(false);
    }
  };

  const handleReject = (id) => {
    if (window.confirm("Are you sure you want to reject this payment?")) {
      setPayments(
        payments.map((p) => (p.id === id ? { ...p, status: "rejected" } : p))
      );
      alert("Payment rejected.");
      setShowViewModal(false);
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
                <i className="fas fa-credit-card"></i>
                Payment Management
              </h1>
              <p>Review and approve payment submissions for featured ads</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: "#ffc107" }}>
              <i className="fas fa-clock"></i>
            </div>
            <div className="stat-info">
              <h3>{payments.filter((p) => p.status === "pending").length}</h3>
              <p>Pending Payments</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: "#4CAF50" }}>
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="stat-info">
              <h3>{payments.filter((p) => p.status === "approved").length}</h3>
              <p>Approved Payments</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon total">
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <div className="stat-info">
              <h3>
                Rs{" "}
                {payments
                  .reduce((sum, p) => sum + p.amount, 0)
                  .toLocaleString()}
              </h3>
              <p>Total Revenue</p>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="table-section">
          <div className="table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>User Details</th>
                  <th>Payment Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td>
                      <div className="user-cell">
                        <div className="user-info">
                          <div className="username">
                            {payment.firstName} {payment.lastName}
                          </div>
                          <div className="user-email">{payment.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <span style={{ fontWeight: "600", color: "#2c3e50" }}>
                          {payment.paymentMethod}
                        </span>
                        <small style={{ color: "#7f8c8d" }}>
                          {payment.accountNumber}
                        </small>
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#27ae60",
                        }}
                      >
                        Rs {payment.amount.toLocaleString()}
                      </span>
                    </td>
                    <td>
                      <div className="type-role">
                        <span
                          className="user-type"
                          style={{
                            backgroundColor:
                              payment.status === "pending"
                                ? "#ffc107"
                                : payment.status === "approved"
                                ? "#09c20f"
                                : "#dc3545",
                            color: "white",
                          }}
                        >
                          {payment.status.charAt(0).toUpperCase() +
                            payment.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="actions-menu">
                        <button
                          className="action-btn view"
                          onClick={() => viewPaymentDetails(payment)}
                          title="View Details"
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        {payment.status === "pending" && (
                          <>
                            <button
                              className="action-btn"
                              style={{ backgroundColor: "#4CAF50" }}
                              onClick={() => handleApprove(payment.id)}
                              title="Approve Payment"
                            >
                              <i className="fas fa-check"></i>
                            </button>
                            <button
                              className="action-btn delete"
                              onClick={() => handleReject(payment.id)}
                              title="Reject Payment"
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {payments.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">
                  <i className="fas fa-credit-card"></i>
                </div>
                <h3>No payments found</h3>
                <p>Payment submissions will appear here</p>
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

      {/* View Payment Modal */}
      {showViewModal && selectedPayment && (
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
          onClick={() => setShowViewModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              maxWidth: "900px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>
                <i className="fas fa-receipt"></i>
                Payment Details
              </h2>
              <button
                className="close-btn"
                onClick={() => setShowViewModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="modal-form">
              {/* User Information */}
              <div className="form-section">
                <h3>User Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={selectedPayment.firstName}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={selectedPayment.lastName}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" value={selectedPayment.email} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Submitted Date</label>
                    <input
                      type="text"
                      value={selectedPayment.submittedDate}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="form-section">
                <h3>Address</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" value={selectedPayment.city} readOnly />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" value={selectedPayment.state} readOnly />
                  </div>
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" value={selectedPayment.country} readOnly />
                </div>
              </div>

              {/* Payment Information */}
              <div className="form-section">
                <h3>Payment Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Payment Method</label>
                    <input
                      type="text"
                      value={selectedPayment.paymentMethod}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>Amount</label>
                    <input
                      type="text"
                      value={`Rs ${selectedPayment.amount.toLocaleString()}`}
                      readOnly
                      style={{ fontWeight: "600", color: "#27ae60" }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Account Name</label>
                    <input
                      type="text"
                      value={selectedPayment.accountName}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>Account Number</label>
                    <input
                      type="text"
                      value={selectedPayment.accountNumber}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Ad Title</label>
                  <input type="text" value={selectedPayment.adTitle} readOnly />
                </div>
              </div>

              {/* Payment Screenshot */}
              <div className="form-section">
                <h3>Payment Screenshot</h3>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <img
                    src={selectedPayment.screenshot || "/placeholder.svg"}
                    alt="Payment Screenshot"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "500px",
                      border: "2px solid #e0e0e0",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              {selectedPayment.status === "pending" && (
                <div className="form-row" style={{ marginTop: "30px" }}>
                  <button
                    className="submit-btn"
                    style={{ backgroundColor: "#4CAF50", flex: 1 }}
                    onClick={() => handleApprove(selectedPayment.id)}
                  >
                    <i className="fas fa-check"></i>
                    Approve & Feature Ad
                  </button>
                  <button
                    className="submit-btn"
                    style={{ backgroundColor: "#dc3545", flex: 1 }}
                    onClick={() => handleReject(selectedPayment.id)}
                  >
                    <i className="fas fa-times"></i>
                    Reject Payment
                  </button>
                </div>
              )}

              {selectedPayment.status !== "pending" && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor:
                      selectedPayment.status === "approved"
                        ? "#d4edda"
                        : "#f8d7da",
                    borderRadius: "8px",
                    marginTop: "20px",
                  }}
                >
                  <h3
                    style={{
                      color:
                        selectedPayment.status === "approved"
                          ? "#155724"
                          : "#721c24",
                      margin: 0,
                    }}
                  >
                    <i
                      className={`fas fa-${
                        selectedPayment.status === "approved"
                          ? "check-circle"
                          : "times-circle"
                      }`}
                    ></i>{" "}
                    Payment{" "}
                    {selectedPayment.status === "approved"
                      ? "Approved"
                      : "Rejected"}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
