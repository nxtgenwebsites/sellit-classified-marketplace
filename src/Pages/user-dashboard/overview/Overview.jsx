import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  FiGrid,
  FiUnlock,
  FiClock,
  FiLock,
  FiEye,
  FiMessageCircle,
  FiHeart,
  FiPackage,
  FiCheckCircle,
} from "react-icons/fi";
import "./Overview.css";

const Overview = () => {
  // Sample data for the analytics chart
  const analyticsData = [
    { month: "Jan", value: 150 },
    { month: "Feb", value: 120 },
    { month: "Mar", value: 210 },
    { month: "Apr", value: 180 },
    { month: "May", value: 160 },
    { month: "Jun", value: 170 },
    { month: "Jul", value: 180 },
    { month: "Aug", value: 150 },
    { month: "Sep", value: 190 },
    { month: "Oct", value: 240 },
    { month: "Nov", value: 200 },
    { month: "Dec", value: 250 },
  ];

  const recentActivities = [
    {
      id: 1,
      icon: <FiEye />,
      text: "Your listing Audi Q3 3.5 Sportpack has been approved",
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: <FiMessageCircle />,
      text: "Ali Tufan left a messages on Apple Watch 9 Series",
      time: "4 hours ago",
    },
    {
      id: 3,
      icon: <FiHeart />,
      text: "Someone favorites your Samsung Galaxy listing",
      time: "6 hours ago",
    },
    {
      id: 4,
      icon: <FiPackage />,
      text: "You Subscribed Pro Package",
      time: "1 day ago",
    },
    {
      id: 5,
      icon: <FiCheckCircle />,
      text: "Your listing Villa Garden has been approved",
      time: "2 days ago",
    },
    {
      id: 6,
      icon: <FiEye />,
      text: "Your listing Selling Sun Odyssey 380 has been approved",
      time: "3 days ago",
    },
  ];

  return (
    <div className="overview-container">
      {/* Dashboard Header */}
      <div className="dashboard-header mb-4">
        <h2 className="dashboard-title">Dashboard</h2>
        <p className="dashboard-subtitle">
          Welcome To Your Dashboard Ali Tufan
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="row g-4 mb-5">
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-label">Total Listing</p>
                <h3 className="stat-number">43,279</h3>
              </div>
              <div className="stat-icon stat-icon-dark">
                <FiGrid size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-label">Active Listing</p>
                <h3 className="stat-number">19</h3>
              </div>
              <div className="stat-icon stat-icon-blue">
                <FiUnlock size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-label">Expired Listing</p>
                <h3 className="stat-number">15</h3>
              </div>
              <div className="stat-icon stat-icon-red">
                <FiClock size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-label">Pending Approval</p>
                <h3 className="stat-number">22,786</h3>
              </div>
              <div className="stat-icon stat-icon-gray">
                <FiLock size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics and Recent Activities Row */}
      <div className="row g-4 mb-4">
        {/* Analytics Chart */}
        <div className="col-lg-8">
          <div className="analytics-card">
            <div className="analytics-header">
              <h4 className="analytics-title">Analytics</h4>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Last 15 days
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Last 7 days
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Last 15 days
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Last 30 days
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={analyticsData}>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6c757d" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6c757d" }}
                    domain={[0, 300]}
                    ticks={[0, 50, 100, 150, 200, 250, 300]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e9ecef",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, fill: "#4f46e5" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="col-lg-4">
          <div className="activities-card">
            <h4 className="activities-title">Recent Activities</h4>
            <div className="activities-list">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <p className="activity-text">{activity.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-more-container">
              <button className="btn btn-outline-primary view-more-btn">
                View More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="dashboard-footer">
        <div className="row">
          <div className="col-md-6">
            <p className="footer-text">
              © 2025 Sellit Pakistan. All Right Reserved.
            </p>
          </div>
          <div className="col-md-6 text-end">
            <p className="footer-links">
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="footer-link">
                Privacy Notice
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
