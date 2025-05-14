"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Sector,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./InspectionReport.css";

const InspectionReport = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Enhanced inspection data with more details
  const inspectionData = [
    {
      name: "Exterior & Body",
      value: 68,
      color: "#FF6384",
      icon: "bi-car-front",
      details: "Minor scratches on rear bumper, good paint condition",
    },
    {
      name: "Engine/Transmission",
      value: 97,
      color: "#36A2EB",
      icon: "bi-gear",
      details: "Excellent engine condition, smooth transmission",
    },
    {
      name: "Suspension/Steering",
      value: 92,
      color: "#FFCE56",
      icon: "bi-wrench",
      details: "Responsive steering, well-maintained suspension",
    },
    {
      name: "Interior",
      value: 95,
      color: "#4BC0C0",
      icon: "bi-car-front-fill",
      details: "Clean upholstery, all electronics working properly",
    },
    {
      name: "AC/Heater",
      value: 100,
      color: "#9966FF",
      icon: "bi-thermometer-half",
      details: "Perfect cooling and heating performance",
    },
  ];

  // Custom active shape for the pie chart
  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;

    return (
      <g>
        <text
          x={cx}
          y={cy - 20}
          dy={8}
          textAnchor="middle"
          fill="#333"
          className="chart-center-text"
        >
          {/* {payload.name} */}
        </text>
        <text
          x={cx}
          y={cy + 10}
          dy={8}
          textAnchor="middle"
          fill={fill}
          className="chart-center-value"
        >
          {`${value}%`}
        </text>
        <text
          x={cx}
          y={cy + 30}
          dy={8}
          textAnchor="middle"
          fill="#666"
          fontSize={12}
        >
          {`(${(percent * 100).toFixed(0)}% of total)`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 15}
          outerRadius={outerRadius + 20}
          fill={fill}
        />
      </g>
    );
  };

  // Custom legend that shows the percentage
  const renderCustomizedLegend = (props) => {
    const { payload } = props;

    return (
      <div className="custom-legend">
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            className={`legend-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className="legend-icon"
              style={{ backgroundColor: entry.color }}
            ></div>
            <div className="legend-content">
              <div className="legend-title">{entry.value}</div>
              <div className="legend-value">{inspectionData[index].value}%</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="inspection-report-container">
      <div className="card inspection-card">
        <div className="card-header inspection-header">
          <div className="header-content">
            <div className="header-text">
              <h2 className="mb-0 text-white"> Inspection Report</h2>
              <p className="mb-0 text-white">Inspected Date: 04/13/25</p>
            </div>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="row g-0">
            {/* Left Column - Car Image & Overall Rating */}
            <div className="col-md-5 left-column px-3">
              <div className="car-image-container">
                <div className="car-image-wrapper">
                  <img
                    src="https://media.istockphoto.com/id/1505840199/video/luxury-black-car-on-highway-very-fast-driving.jpg?b=1&s=640x640&k=20&c=ev1MqpUNWTWPbGU4qFvysfjQdln41FBaIHvszdi9WXY="
                    alt="Car"
                    className="img-fluid"
                  />
                  <div className="car-badge">
                    <i className="bi bi-patch-check-fill me-1"></i>
                    Verified
                  </div>
                </div>
              </div>

              <div className="overall-rating-card">
                <div className="rating-circle">
                  <div className="rating-number">8.8</div>
                  {/* <div className="rating-max">/10</div> */}
                </div>
                <div className="rating-details">
                  <div className="rating-title">Overall Rating</div>
                  <div className="rating-stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <div className="rating-label">Excellent Condition</div>
                </div>
              </div>

              <div className="inspection-details">
                <div className="detail-item">
                  <i className="bi bi-person-check detail-icon"></i>
                  <div className="detail-content">
                    <div className="detail-label">Inspector</div>
                    <div className="detail-value">Muhammad Ali</div>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="bi bi-geo-alt detail-icon"></i>
                  <div className="detail-content">
                    <div className="detail-label">Location</div>
                    <div className="detail-value">Lahore, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Pie Chart & Details */}
            <div className="col-md-7 right-column px-3">
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={inspectionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                      paddingAngle={3}
                    >
                      {inspectionData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="#fff"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Legend
                      content={renderCustomizedLegend}
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                      wrapperStyle={{ paddingLeft: "20px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="component-details">
                <div className="component-detail-header">
                  <i
                    className={`bi ${inspectionData[activeIndex].icon} me-2`}
                  ></i>
                  {inspectionData[activeIndex].name} Details
                </div>
                <div className="component-detail-content">
                  {inspectionData[activeIndex].details}
                </div>
                <div className="component-detail-rating">
                  <div className="detail-rating-label">Rating</div>
                  <div
                    className="detail-rating-value"
                    style={{ color: inspectionData[activeIndex].color }}
                  >
                    {inspectionData[activeIndex].value}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer inspection-footer">
          <div className="row g-2">
            <div className="col-6">
              <button className="btn btn-outline-primary w-100">
                <i className="bi bi-file-earmark-text me-2"></i>
                Learn More
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary w-100">
                <i className="bi bi-eye me-2"></i>
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionReport;
