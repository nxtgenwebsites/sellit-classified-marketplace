import React from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Card2({ advertise }) {
  return (
    <Col lg={3} md={6}>
      <Link to="/add" className="text-decoration-none">
        <div className="tab-card p-2 rounded-3 shadow h-100">
          <div className="sell-card-content rounded-3 h-100 d-flex flex-column justify-content-between align-items-center p-4 text-white">
            <div className="text-center mt-4">
              <h2 className="fw-bold mb-2">Sell Anything</h2>
              <h2 className="fw-bold mb-2">Sell Anywhere</h2>
              <h2 className="fw-bold">in Pakistan</h2>
            </div>
            <div className="mb-4 mt-4">
              <button className="btn btn-outline-light px-4 py-2">
                Post a Free Ad
              </button>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default Card2;
