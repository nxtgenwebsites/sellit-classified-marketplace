"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

const PartnersCards = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      href="https://www.google.co.uk/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      <div
        // className="card h-100 shadow-sm partners-card"
        style={{
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          // transform: isHovered ? "translateY(-8px)" : "none",
          // boxShadow: isHovered
          //   ? "0 20px 40px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08)"
          //   : "0 4px 6px rgba(0,0,0,0.05)",
          // border: "none",
          // borderRadius: "20px",
          maxWidth: "200px",
          minHeight: "200px",
          maxHeight: "200px",
        }}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="card-body text-center d-flex flex-column justify-content-between h-100"
        >
          {/* Logo Circle */}
          <div className="position-relative mb-3 d-inline-block align-self-center">
            <div
              className="logo-circle d-flex align-items-center justify-content-center bg-white border position-relative overflow-hidden"
              style={{
                width: "85px",
                height: "85px",
                borderRadius: "50%",
                transition: "all 0.4s ease",
                boxShadow: isHovered
                  ? "0 8px 25px rgba(0,123,255,0.15)"
                  : "0 4px 15px rgba(0,0,0,0.08)",
                borderColor: isHovered ? "#007bff" : "#e9ecef",
                borderWidth: "2px",
              }}
            >
              {/* Chart Icon */}
              <img src={data.logo} alt="LOGO" />

              {/* Color Overlay on Hover */}
              {isHovered && (
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(0,123,255,0.5)",
                    borderRadius: "50%",
                    animation: "fadeInOverlay 0.3s ease",
                    zIndex: 1,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="white"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                      animation: "bounceIn 0.4s ease",
                    }}
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
              )}
            </div>
          </div>

          {/* Company Info - Fixed Height */}
          <div className="company-info flex-grow-1 d-flex flex-column justify-content-center">
            <div
              style={{ minHeight: "70px", maxHeight: "70px" }}
              className="d-flex flex-column justify-content-center"
            >
              {!isHovered ? (
                <div className="default-content">
                  <h6
                    className="mb-2 fw-bold text-dark"
                    style={{ fontSize: "16px", lineHeight: "1.3" }}
                  >
                    {data.name}
                  </h6>
                  <div className="d-flex align-items-center justify-content-center text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill me-2 text-success"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span style={{ fontSize: "14px" }}>{data.location}</span>
                  </div>
                </div>
              ) : (
                <div
                  className="hover-content"
                  style={{ animation: "slideUpContent 0.4s ease" }}
                >
                  <div className="d-flex align-items-center justify-content-center text-muted mb-2">
                    <h6
                      className="fw-bold text-dark"
                      style={{ fontSize: "16px", lineHeight: "1.3" }}
                    >
                      {data.name}
                    </h6>
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      marginTop: '-10px'
                    }}
                  >
                    View Company Profile
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PartnersCards;
