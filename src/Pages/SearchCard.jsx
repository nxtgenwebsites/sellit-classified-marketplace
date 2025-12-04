import { Link } from "react-router-dom";

export default function SearchCard({ mobile }) {
  if (!mobile) return null;

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <Link
        to={`/${mobile.source}/${mobile.id}`}
        className="text-decoration-none text-dark"
      >
        <div className="ad-card rounded-2">
          <div className="ad-image-section">
            <img
              src={
                mobile.thumbnail_url || "/placeholder.svg?height=200&width=200"
              }
              alt={mobile.title || "Ad"}
              className="img-fluid rounded-2"
              style={{ height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="ad-content p-3">
            <span className="ad-badge py-2">{mobile.sub_category || "Category"}</span>
            <h5 className="ad-title mb-2 text-truncate">
              {mobile.ad_title || "Untitled"}
            </h5>
            <p className="ad-description text-muted text-truncate">
              {mobile.description || "No description"}
            </p>
            <small className="text-muted">
              {mobile.location || "Pakistan"}
            </small>
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="ad-price fw-bold mb-0">
                {mobile.price?.toLocaleString() || "N/A"} PKR
              </h6>
            </div>
            <small className="d-block text-muted mt-2">
              {mobile.createdAt
                ? new Date(mobile.createdAt).toLocaleDateString()
                : ""}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}
