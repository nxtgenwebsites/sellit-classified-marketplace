import { useState } from "react";
// import "./App.css";

function Preview() {
  const [activeTab, setActiveTab] = useState("product"); // "product" or "review"

  return (
    <div className="app-container">
      {/* Simple Navigation */}
      <div className="simple-nav">
        <div className="logo">BoatMarketplace</div>
        <div className="nav-buttons">
          <button
            className={`nav-btn ${activeTab === "product" ? "active" : ""}`}
            onClick={() => setActiveTab("product")}
          >
            Product
          </button>
          <button
            className={`nav-btn ${activeTab === "review" ? "active" : ""}`}
            onClick={() => setActiveTab("review")}
          >
            Reviews
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeTab === "product" ? <ProductPage /> : <ReviewPage />}
      </div>
    </div>
  );
}

// Product Page Component
function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-header">
        <div className="product-title">
          <h1>Selling Sun Odyssey 380</h1>
          <div className="product-tags">
            <span className="tag">Yacht</span>
            <span className="tag">Sailboat</span>
            <span className="tag">Luxury</span>
          </div>
        </div>
        <div className="product-price">
          <h2>$45,900</h2>
          <span className="price-tag">Fixed</span>
        </div>
      </div>

      <div className="product-content">
        <div className="product-main">
          {/* Product Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img
                src="https://media.fraseryachts.com/Yachts/Y280_NF_MC/images/website/01_KHALILAH_Main+running+shot_LR-BD6fccJ1.jpg?vh=b362d5&w=1440&h=900&p=yacht-thumbnail"
                alt="Main boat view"
              />
            </div>
            <div className="thumbnail-container">
              <div className="thumbnail">
                <img
                  src="https://siyachts.imgix.net/photos/pages/correct/used-sunseeker-yachts-for-sale-header1.jpg?auto=format&w=1050&fit=clip&lossless=1"
                  alt="Thumbnail 1"
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://cdn.yachtbroker.org/images/highdef/2827225_5420f842_40.jpg"
                  alt="Thumbnail 2"
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://cdn.yachtbroker.org/images/highdef/2827225_5420f842_40.jpg"
                  alt="Thumbnail 3"
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://cdn.yachtbroker.org/images/highdef/2827225_5420f842_40.jpg"
                  alt="Thumbnail 4"
                />
              </div>
            </div>
          </div>

          {/* Product Overview */}
          <div className="product-section">
            <h3>Overview</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Condition:</span>
                <span className="spec-value">Used</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Make:</span>
                <span className="spec-value">Used</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Length:</span>
                <span className="spec-value">18.45</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Width:</span>
                <span className="spec-value">4.78</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Weight:</span>
                <span className="spec-value">9420</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Depth:</span>
                <span className="spec-value">99</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Engine Performance:</span>
                <span className="spec-value">430</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Year Built:</span>
                <span className="spec-value">2024</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Certified nr. of persons:</span>
                <span className="spec-value">7</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Material:</span>
                <span className="spec-value">GRP</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Propulsion:</span>
                <span className="spec-value">Sterndrive</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Fuel Type:</span>
                <span className="spec-value">Diesel</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Fuel Capacity:</span>
                <span className="spec-value">746</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Keel Type:</span>
                <span className="spec-value">Any</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Steering:</span>
                <span className="spec-value">Any</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Beds:</span>
                <span className="spec-value">6</span>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="product-section">
            <h3>Description</h3>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          {/* Product Features */}
          <div className="product-section">
            <h3>Features</h3>
            <div className="features-grid">
              <div className="feature-item">
                <span>✓ Air Conditioning</span>
              </div>
              <div className="feature-item">
                <span>✓ Refrigerator</span>
              </div>
              <div className="feature-item">
                <span>✓ Shower</span>
              </div>
              <div className="feature-item">
                <span>✓ Navigation System</span>
              </div>
              <div className="feature-item">
                <span>✓ Autopilot</span>
              </div>
              <div className="feature-item">
                <span>✓ Radar</span>
              </div>
              <div className="feature-item">
                <span>✓ Solar Panels</span>
              </div>
              <div className="feature-item">
                <span>✓ Satellite Phone</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-sidebar">
          {/* Seller Info */}
          <div className="sidebar-card">
            <div className="seller-info">
              <img
                src="https://images.ctfassets.net/4cd45et68cgf/564owNzMKj6UGjvTEZkKSJ/c853cf640796fcd532d60c23fc57f6b6/Rowan_Atkinson_credit__Alastair_Muir.jpg?w=2000"
                alt="Seller"
                className="seller-avatar"
              />
              <div className="seller-details">
                <h4>Ali Tufan</h4>
                <p>Member since Nov 24, 2024</p>
              </div>
            </div>
            <div className="seller-location">
              <p>
                <span className="icon"></span> New York, NY, USA
              </p>
              <p>
                <span className="icon">📞</span> +90 5743 84 xxxx
              </p>
            </div>
            <div className="seller-buttons">
              <button className="btn primary-btn bg-primary text-white">
                Let's Chat →
              </button>
              <button className="btn bg-primary text-white">
                Send Email →
              </button>
            </div>
            <div className="safety-tips">
              <h5>Safety Tips</h5>
              <p>Always meet in public places!</p>
              <a href="#" className="safety-link">
                Read our Safety Tips →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Review Page Component
function ReviewPage() {
  return (
    <div className="review-page">
      <div className="review-content">
        <div className="review-main">
          <h2>Customer Reviews</h2>

          {/* Review Item */}
          <div className="review-card">
            <div className="review-header">
              <img
                src="https://images.ctfassets.net/4cd45et68cgf/564owNzMKj6UGjvTEZkKSJ/c853cf640796fcd532d60c23fc57f6b6/Rowan_Atkinson_credit__Alastair_Muir.jpg?w=2000"
                alt="Reviewer"
                className="reviewer-avatar"
              />
              <div className="reviewer-info">
                <h4>Ali Tufan</h4>
                <p>April 08, 2024</p>
              </div>
            </div>
            <div className="review-rating">★★★★★</div>
            <p className="review-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="review-actions">
              <button className="action-btn">Helpful</button>
              <button className="action-btn">Not helpful</button>
            </div>
          </div>

          {/* Review Item */}
          <div className="review-card">
            <div className="review-header">
              <img
                src="https://images.ctfassets.net/4cd45et68cgf/564owNzMKj6UGjvTEZkKSJ/c853cf640796fcd532d60c23fc57f6b6/Rowan_Atkinson_credit__Alastair_Muir.jpg?w=2000"
                alt="Reviewer"
                className="reviewer-avatar"
              />
              <div className="reviewer-info">
                <h4>John Smith</h4>
                <p>April 05, 2024</p>
              </div>
            </div>
            <div className="review-rating">★★★★☆</div>
            <p className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="review-actions">
              <button className="action-btn">Helpful</button>
              <button className="action-btn">Not helpful</button>
            </div>
          </div>

          <div className="show-all">
            <button className="btn outline-btn">Show All Reviews →</button>
          </div>

          {/* Review Form */}
          <div className="review-form-container">
            <h3>Leave a Reply</h3>
            <p className="form-note">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <form className="review-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  id="comment"
                  className="form-textarea"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn primary-btn bg-primary text-white">
                Submit a Review →
              </button>
            </form>
          </div>
        </div>

        <div className="review-sidebar">
          <div className="sidebar-card">
            <h3>Review Summary</h3>
            <div className="rating-summary">
              <div className="overall-rating">
                <span className="rating-number">4.8</span>
                <span className="rating-stars">★★★★★</span>
              </div>
              <p>Based on 3 reviews</p>
            </div>

            <div className="rating-bars">
              <div className="rating-bar-item">
                <span>5 ★</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
                <span>80%</span>
              </div>
              <div className="rating-bar-item">
                <span>4 ★</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "20%" }}></div>
                </div>
                <span>20%</span>
              </div>
              <div className="rating-bar-item">
                <span>3 ★</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "0%" }}></div>
                </div>
                <span>0%</span>
              </div>
              <div className="rating-bar-item">
                <span>2 ★</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "0%" }}></div>
                </div>
                <span>0%</span>
              </div>
              <div className="rating-bar-item">
                <span>1 ★</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "0%" }}></div>
                </div>
                <span>0%</span>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Write a Review</h3>
            <p>Share your experience to help others make better decisions.</p>
            <button className="btn primary-btn">Write a Review ✏️</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
