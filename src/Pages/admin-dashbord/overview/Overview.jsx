"use client";

import { useState, useEffect } from "react";
import "./overview.css";

export default function DirectoryDashboard() {
  const [activeTab, setActiveTab] = useState("Monthly");
  const [chartData, setChartData] = useState([]);

  const monthlyData = [
    { month: "Jan", value: 25, income: 15000 },
    { month: "Feb", value: 35, income: 22000 },
    { month: "Mar", value: 28, income: 18000 },
    { month: "Apr", value: 40, income: 28000 },
    { month: "May", value: 32, income: 24000 },
    { month: "Jun", value: 38, income: 26000 },
    { month: "Jul", value: 22, income: 16000 },
    { month: "Aug", value: 30, income: 20000 },
    { month: "Sep", value: 35, income: 23000 },
    { month: "Oct", value: 28, income: 19000 },
    { month: "Nov", value: 25, income: 17000 },
    { month: "Dec", value: 20, income: 14000 },
  ];

  const weeklyData = [
    { month: "Week 1", value: 45, income: 8000 },
    { month: "Week 2", value: 35, income: 6000 },
    { month: "Week 3", value: 55, income: 9500 },
    { month: "Week 4", value: 40, income: 7200 },
  ];

  const todayData = [
    { month: "6AM", value: 15, income: 500 },
    { month: "9AM", value: 25, income: 800 },
    { month: "12PM", value: 35, income: 1200 },
    { month: "3PM", value: 45, income: 1500 },
    { month: "6PM", value: 30, income: 1000 },
    { month: "9PM", value: 20, income: 600 },
  ];

  useEffect(() => {
    switch (activeTab) {
      case "Today":
        setChartData(todayData);
        break;
      case "Weekly":
        setChartData(weeklyData);
        break;
      case "Monthly":
      default:
        setChartData(monthlyData);
        break;
    }
  }, [activeTab]);

  const packageData = [
    { name: "Free package", users: 2568, color: "#3a4fc4" },
    { name: "Basic package", users: 1890, color: "#10b981" },
    { name: "Premium package", users: 1245, color: "#f59e0b" },
    { name: "Enterprise package", users: 567, color: "#ef4444" },
  ];

  const trafficData = [
    { country: "USA", percentage: 40.1, color: "#22d3ee" },
    { country: "India", percentage: 30.0, color: "#10b981" },
    { country: "Australia", percentage: 20.0, color: "#f97316" },
    { country: "Brazil", percentage: 10.0, color: "#eab308" },
  ];

  const totalIncome = chartData.reduce((sum, item) => sum + item.income, 0);
  const avgIncome = chartData.length > 0 ? totalIncome / chartData.length : 0;

  return (
    <div className="dashboard-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <h1>Admin Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">800 +</div>
          <div className="stat-label">Numbers of Ads</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">600 +</div>
          <div className="stat-label">Free Ads</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">200 +</div>
          <div className="stat-label">Featured Ads</div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <div className="left-section">
          {/* Monthly Income Chart with Working Filters */}
          <div className="chart-container">
            <div className="chart-header">
              <h3>Income stats for November 2020</h3>
              <div className="chart-tabs">
                <span
                  className={`tab ${activeTab === "Today" ? "active" : ""}`}
                  onClick={() => setActiveTab("Today")}
                >
                  Today
                </span>
                <span
                  className={`tab ${activeTab === "Weekly" ? "active" : ""}`}
                  onClick={() => setActiveTab("Weekly")}
                >
                  Weekly
                </span>
                <span
                  className={`tab ${activeTab === "Monthly" ? "active" : ""}`}
                  onClick={() => setActiveTab("Monthly")}
                >
                  Monthly
                </span>
              </div>
            </div>

            <div className="chart-content">
              <div className="chart-wrapper">
                <svg className="chart-svg" viewBox="0 0 800 300">
                  {/* Grid Lines */}
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="30"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 30"
                        fill="none"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Bars */}
                  {chartData.map((data, index) => {
                    const barHeight = (data.value / 60) * 200;
                    const x = 60 + index * (680 / chartData.length);
                    const y = 250 - barHeight;

                    return (
                      <g key={index}>
                        <rect
                          x={x}
                          y={y}
                          width="30"
                          height={barHeight}
                          fill="#3a4fc4"
                          rx="4"
                          className="chart-bar-animated"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        />
                        <text
                          x={x + 15}
                          y="270"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#64748b"
                        >
                          {data.month}
                        </text>
                      </g>
                    );
                  })}

                  {/* Line Chart */}
                  <polyline
                    points={chartData
                      .map((data, index) => {
                        const x = 75 + index * (680 / chartData.length);
                        const y = 250 - (data.value / 60) * 200;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    className="chart-line-animated"
                  />

                  {/* Data Points */}
                  {chartData.map((data, index) => {
                    const x = 75 + index * (680 / chartData.length);
                    const y = 250 - (data.value / 60) * 200;

                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#10b981"
                        className="chart-point"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            <div className="chart-stats">
              <div className="stat-item">
                <span className="amount">${totalIncome.toLocaleString()}</span>
                <span className="change positive">+ 2.5 %</span>
                <span className="period">Total {activeTab}</span>
              </div>
              <div className="stat-item">
                <span className="amount">${avgIncome.toLocaleString()}</span>
                <span className="change positive">+ 8.1 %</span>
                <span className="period">Average</span>
              </div>
              <div className="stat-item">
                <span className="amount">
                  ${(totalIncome * 0.85).toLocaleString()}
                </span>
                <span className="period">Previous Period</span>
              </div>
            </div>
          </div>

          {/* Users according to packages */}
          <div className="table-container">
            <h3>Users according to packages</h3>
            <div className="package-chart">
              {packageData.map((pkg, index) => (
                <div key={index} className="package-item">
                  <div className="package-info">
                    <div
                      className="package-color"
                      style={{ backgroundColor: pkg.color }}
                    ></div>
                    <span className="package-name">{pkg.name}</span>
                  </div>
                  <div className="package-users">
                    {pkg.users.toLocaleString()}
                  </div>
                  <div className="package-bar">
                    <div
                      className="package-fill"
                      style={{
                        backgroundColor: pkg.color,
                        width: `${(pkg.users / 3000) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-section">
          {/* Additional Stats Card */}
          <div className="additional-stats">
            <h3>Quick Stats</h3>
            <div className="quick-stat-item">
              <div className="quick-stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="quick-stat-info">
                <div className="quick-stat-number">6,270</div>
                <div className="quick-stat-label">Total Users</div>
              </div>
            </div>
            <div className="quick-stat-item">
              <div className="quick-stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="quick-stat-info">
                <div className="quick-stat-number">4170</div>
                <div className="quick-stat-label">Free Users</div>
              </div>
            </div>
            <div className="quick-stat-item">
              <div className="quick-stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="quick-stat-info">
                <div className="quick-stat-number">2100</div>
                <div className="quick-stat-label">Paid Users</div>
              </div>
            </div>
          </div>

          {/* Promotional Card */}
          <div className="promo-card">
            <div className="promo-content">
              <h4>2400 + New Users</h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="promo-illustration">
              <div className="rocket">🚀</div>
            </div>
          </div>

          {/* Web Visitor and Traffic - Working Pie Chart */}
          <div className="chart-container">
            <h3>Web Visitor and traffic</h3>
            <div className="pie-chart-container">
              <div className="pie-chart-wrapper">
                <svg className="pie-chart-svg" viewBox="0 0 200 200">
                  {trafficData.map((data, index) => {
                    let cumulativePercentage = 0;
                    for (let i = 0; i < index; i++) {
                      cumulativePercentage += trafficData[i].percentage;
                    }

                    const startAngle = (cumulativePercentage / 100) * 360;
                    const endAngle =
                      ((cumulativePercentage + data.percentage) / 100) * 360;
                    const largeArcFlag = data.percentage > 50 ? 1 : 0;

                    const startAngleRad = (startAngle * Math.PI) / 180;
                    const endAngleRad = (endAngle * Math.PI) / 180;

                    const x1 = 100 + 80 * Math.cos(startAngleRad);
                    const y1 = 100 + 80 * Math.sin(startAngleRad);
                    const x2 = 100 + 80 * Math.cos(endAngleRad);
                    const y2 = 100 + 80 * Math.sin(endAngleRad);

                    const pathData = [
                      "M",
                      100,
                      100,
                      "L",
                      x1,
                      y1,
                      "A",
                      80,
                      80,
                      0,
                      largeArcFlag,
                      1,
                      x2,
                      y2,
                      "Z",
                    ].join(" ");

                    return (
                      <path
                        key={index}
                        d={pathData}
                        fill={data.color}
                        stroke="white"
                        strokeWidth="2"
                        className="pie-slice"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    );
                  })}
                  <circle cx="100" cy="100" r="40" fill="white" />
                </svg>
              </div>

              <div className="pie-legend">
                {trafficData.map((data, index) => (
                  <div key={index} className="legend-item">
                    <div
                      className="legend-color"
                      style={{ backgroundColor: data.color }}
                    ></div>
                    <span>
                      {data.country} {data.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
