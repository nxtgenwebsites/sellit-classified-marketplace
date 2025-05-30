import { useState } from "react";
import { Link } from "react-router-dom";
import "./UserPayments.css";

const UserPayments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample payment data
  const payments = [
    {
      id: "#954",
      type: "Direct Bank Transfer",
      amount: "$90",
      status: "Pending",
      date: "April 06, 2024",
    },
    {
      id: "#954",
      type: "Direct Bank Transfer",
      amount: "$90",
      status: "Pending",
      date: "April 06, 2024",
    },
    {
      id: "#954",
      type: "Direct Bank Transfer",
      amount: "$90",
      status: "Pending",
      date: "April 06, 2024",
    },
    {
      id: "#954",
      type: "Direct Bank Transfer",
      amount: "$90",
      status: "Pending",
      date: "April 06, 2024",
    },
    {
      id: "#954",
      type: "Direct Bank Transfer",
      amount: "$90",
      status: "Pending",
      date: "April 06, 2024",
    },
  ];

  const totalPages = 20;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const items = [];

    // Previous button
    items.push(
      <li
        key="prev"
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      </li>
    );

    // Page numbers
    for (let i = 1; i <= Math.min(4, totalPages); i++) {
      items.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    // Ellipsis
    if (totalPages > 4) {
      items.push(
        <li key="ellipsis" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );

      // Last page
      items.push(
        <li
          key={totalPages}
          className={`page-item ${currentPage === totalPages ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    // Next button
    items.push(
      <li
        key="next"
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </li>
    );

    return items;
  };

  return (
    <div className="user-payments-container">
      {/* Header */}
      <div className="payments-header mb-4">
        <h2 className="payments-title">Payments</h2>
        <p className="payments-subtitle text-muted">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      {/* Search and Sort Controls */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search Listing"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="sort-container">
            <select
              className="form-select sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Sort By Date</option>
              <option value="amount">Sort By Amount</option>
              <option value="status">Sort By Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="table-responsive">
        <table className="table payments-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td className="payment-id">{payment.id}</td>
                <td className="payment-type">{payment.type}</td>
                <td className="payment-amount">{payment.amount}</td>
                <td>
                  <span className="badge status-badge status-pending">
                    {payment.status}
                  </span>
                </td>
                <td className="payment-date">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Payments pagination">
          <ul className="pagination custom-pagination">
            {renderPaginationItems()}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <footer className="payments-footer mt-5 pt-4">
        <div className="row">
          <div className="col-md-6">
            <p className="footer-text mb-0">
              © 2024 Polygon Theme. All Right Reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/terms" className="footer-link me-3">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="footer-link">
              Privacy Notice
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserPayments;
