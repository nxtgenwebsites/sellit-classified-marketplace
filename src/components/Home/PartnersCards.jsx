import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const PartnersCards = () => {
        const [isHovered, setIsHovered] = useState(false);

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);
  return (
    <Link
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      <div
        className="card h-100 shadow-sm transition patners-card"
        style={{
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: isHovered ? "translateY(-3px)" : "none",
          boxShadow: isHovered
            ? "0 10px 20px rgba(0,0,0,0.1)"
            : "0 4px 6px rgba(0,0,0,0.05)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-body p-3">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <div
                className="position-relative border rounded d-flex align-items-center justify-content-center bg-white"
                style={{ width: "50px", height: "50px" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="position-relative"
                    style={{ width: "30px", height: "30px" }}
                  >
                    <div
                      className="position-absolute bottom-0 bg-primary"
                      style={{ width: "5px", height: "24px", left: "0px" }}
                    ></div>
                    <div
                      className="position-absolute bottom-0 bg-danger"
                      style={{ width: "5px", height: "18px", left: "6px" }}
                    ></div>
                    <div
                      className="position-absolute bottom-0 bg-success"
                      style={{ width: "5px", height: "28px", left: "12px" }}
                    ></div>
                    <div
                      className="position-absolute bottom-0 bg-warning"
                      style={{ width: "5px", height: "20px", left: "18px" }}
                    ></div>
                    <div
                      className="position-absolute bottom-0 bg-info"
                      style={{ width: "5px", height: "25px", left: "24px" }}
                    ></div>
                  </div>
                </div>
                <div
                  className="position-absolute bottom-0 start-0 end-0 text-center fw-bold pb-1"
                  style={{ fontSize: "4px" }}
                >
                  CURRENTAGE ASSOCIATES
                </div>
              </div>
            </div>

            <div>
              <h6 className="mb-1 fw-medium">Currentage Associates</h6>
              {isHovered ? (
                <div className="d-flex align-items-center text-primary small">
                  Visit Profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right ms-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </div>
              ) : (
                <div className="d-flex align-items-center text-muted small">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill me-1 text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  Islamabad
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PartnersCards