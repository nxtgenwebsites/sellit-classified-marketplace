"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);

  const favoriteItems = [
    {
      id: "#954",
      title: "Apple Watch 9 Series",
      location: "New York, USA",
      category: "Laptops & PCs",
      price: "$200",
      image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-r861nzkamea/gallery/pk-galaxy-watch-fe-r861-sm-r861nzkamea-543385293?$684_547_PNG$",
    },
    {
      id: "#54",
      title: "Amazing Villa For Sale",
      location: "New York, USA",
      category: "Real Estate",
      price: "$200",
      image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-r861nzkamea/gallery/pk-galaxy-watch-fe-r861-sm-r861nzkamea-543385293?$684_547_PNG$",
    },
    {
      id: "#676",
      title: "Audi Q7 35 TFSI",
      location: "New York, USA",
      category: "Cars",
      price: "$200",
      image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-r861nzkamea/gallery/pk-galaxy-watch-fe-r861-sm-r861nzkamea-543385293?$684_547_PNG$",
    },
    {
      id: "#878",
      title: "2024 Luxury Boat",
      location: "New York, USA",
      category: "Yachting",
      price: "$200",
      image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-r861nzkamea/gallery/pk-galaxy-watch-fe-r861-sm-r861nzkamea-543385293?$684_547_PNG$",
    },
    {
      id: "#123",
      title: "Riding Quad Bike",
      location: "New York, USA",
      category: "Fashion",
      price: "$200",
      image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-r861nzkamea/gallery/pk-galaxy-watch-fe-r861-sm-r861nzkamea-543385293?$684_547_PNG$",
    },
    {
      id: "#003",
      title: "Joyful Dog",
      location: "New York, USA",
      category: "Pets",
      price: "$200",
      image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-r861nzkamea/gallery/pk-galaxy-watch-fe-r861-sm-r861nzkamea-543385293?$684_547_PNG$",
    },
  ];

  const filteredItems = favoriteItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="favorites-container">
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="favorites-content">
              <div className="page-header mb-4">
                <h2 className="page-title">My Favorites</h2>
                <p className="page-subtitle text-muted">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>

              <div className="favorites-table-container">
                <div className="table-responsive">
                  <table className="table favorites-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItems.map((item, index) => (
                        <tr key={index}>
                          <td className="id-cell">{item.id}</td>
                          <td className="title-cell">
                            <div className="d-flex align-items-center">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                className="item-thumbnail me-3"
                              />
                              <div>
                                <div className="item-title">{item.title}</div>
                                <div className="item-location">
                                  <i className="bi bi-geo-alt text-muted me-1"></i>
                                  {item.location}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="category-cell">{item.category}</td>
                          <td className="price-cell">{item.price}</td>
                          <td className="action-cell">
                            <button className="btn btn-sm btn-outline-secondary me-2">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <i className="bi bi-heart-fill"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination */}
              <nav className="pagination-nav mt-4">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>
                  </li>
                  <li className="page-item active">
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">2</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">3</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">4</button>
                  </li>
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                  <li className="page-item">
                    <button className="page-link">20</button>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-5 py-4 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-muted">
                © 2024 Polygon Theme. All Right Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/terms" className="text-muted me-3">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-muted">
                Privacy Notice
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Favorites;
