import React from "react";
import "./sidebar.css";

export default function sidebar() {
  return (
    <section className="sidebar">
      <div className="first-section rounded-2">
        <div className="first-heading">
          <h6 className="fw-semibold first-title">Categories</h6>
        </div>
        <ul className="list-unstyled">
          <a href="#" className="text-decoration-none first-list-item">
            <li className="mb-2 hover-span">Parent Category</li>
          </a>
          <a href="#" className="text-decoration-none first-list-item">
            <li className="mb-2 hover-span fw-bold">Current Category</li>
          </a>
          <a href="#" className="text-decoration-none first-list-item">
            <li className="mb-2 hover-span">Sub Categories</li>
          </a>
        </ul>
      </div>
      <div className="second-section mt-3 rounded-2">
        <div className="second-heading">
          <h6 className="second-title fw-semibold">Location</h6>
        </div>
        <div className="second-dropdown dropdown mt-3">
          <button
            type="button"
            className="px-3 py-3 rounded-3 bg-transparent d-flex justify-content-between w-100 dropdown-main-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <h5 className="fw-normal mb-0">Pakistan</h5>
            <p className="dropdown-btn mb-0">
              <img src="assets/icons/chevron.svg" alt="IMG" />
            </p>
          </button>
          <div className="dropdown-menu second-menu">
            <a
              href="#"
              className="text-decoration-none text-black location-item"
            >
              <li className="dropdown-item d-flex w-100 px-3 py-2">
                <div className="location-s-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="location-content">
                  <p>See ads in all Pakistan</p>
                </div>
              </li>
            </a>
            <hr className="menu-divider" />
            <li className="dropdown-item region-heading">
              <p className="ps-3">Choose Region</p>
            </li>
            <a
              href="#"
              className="text-decoration-none text-black location-item"
            >
              <li className="dropdown-item d-flex w-100 px-3 py-2">
                <div className="location-s-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="location-content">
                  <p>Azad Kashmir, Pakistan</p>
                </div>
              </li>
            </a>
            <a
              href="#"
              className="text-decoration-none text-black location-item"
            >
              <li className="dropdown-item d-flex w-100 px-3 py-2">
                <div className="location-s-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="location-content">
                  <p>Balochistan, Pakistan</p>
                </div>
              </li>
            </a>
            <a
              href="#"
              className="text-decoration-none text-black location-item"
            >
              <li className="dropdown-item d-flex w-100 px-3 py-2">
                <div className="location-s-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="location-content">
                  <p>Islamabad, Pakistan</p>
                </div>
              </li>
            </a>
            <a
              href="#"
              className="text-decoration-none text-black location-item"
            >
              <li className="dropdown-item d-flex w-100 px-3 py-2">
                <div className="location-s-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="location-content">
                  <p className="d-md-block d-none">
                    Kyber Pakhtunkhwa,
                    <br />
                    Pakistan
                  </p>
                  <p className="d-md-none d-block">
                    Kyber Pakhtunkhwa, Pakistan
                  </p>
                </div>
              </li>
            </a>
            <a
              href="#"
              className="text-decoration-none text-black location-item"
            >
              <li className="dropdown-item d-flex w-100 px-3 py-2">
                <div className="location-s-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="location-content">
                  <p>Punjab, Pakistan</p>
                </div>
              </li>
            </a>
            <a
              href="#"
              className="text-decoration-none text-black location-item"
            >
              <li className="dropdown-item d-flex w-100 px-3 py-2">
                <div className="location-s-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="location-content">
                  <p>Sindh, Pakistan</p>
                </div>
              </li>
            </a>
          </div>
        </div>
        <div className="places-section mt-3">
          <div className="second-heading">
            <h6 className="second-title fw-semibold">Pakistan</h6>
          </div>
          <ul className="list-unstyled">
            <a href="#" className="text-decoration-none first-list-item">
              <li className="mb-2">
                <span className="hover-span">Punjab</span> (134935)
              </li>
            </a>
            <a href="#" className="text-decoration-none first-list-item">
              <li className="mb-2">
                <span className="hover-span">Sindh</span> (43689)
              </li>
            </a>
            <a href="#" className="text-decoration-none first-list-item">
              <li className="mb-2">
                <span className="hover-span">Islamabad</span> (12426)
              </li>
            </a>
            <a href="#" className="text-decoration-none first-list-item">
              <li className="mb-2">
                <span className="hover-span">Khyber Pakhtunkhwa</span> (11264)
              </li>
            </a>
            <a href="#" className="text-decoration-none first-list-item">
              <li className="mb-2">
                <span className="hover-span">Balochistan</span> (1349)
              </li>
            </a>
            <a href="#" className="text-decoration-none first-list-item">
              <li className="mb-2">
                <span className="hover-span">Azad Kashmir</span> (1008)
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="third-section mt-3 rounded-2">
        <div className="third-heading">
          <h6 className="third-title fw-semibold">Price</h6>
        </div>
        <div className="price-inputs d-flex w-100 gap-3 align-items-center">
          <div className="price-from w-100">
            <select className="p-2 w-100 form-select">
              <option value="1000">1000</option>
              <option value="50,001">50,001</option>
              <option value="100,001">100,001</option>
              <option value="500,001">500,001</option>
              <option value="500,001">1,000,001</option>
            </select>
          </div>
          <h6 className="fw-semibold">to</h6>
          <div className="price-to w-100">
            <select className="p-2 w-100 form-select">
              <option value="50,000">50,000</option>
              <option value="500,000">500,000</option>
              <option value="1,000,000">1,000,000</option>
              <option value="above 1,000,000">above 1,000,000</option>
            </select>
          </div>
        </div>
      </div>
      <div className="fourth-section mt-3 rounded-2">
        <select className="brands p-2 w-100 form-select">
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Nokia">Nokia</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Sony">Sony</option>
          <option value="Hier">Hier</option>
        </select>
      </div>
      <div className="fifth-section mt-3 rounded-2">
        <select className="brands p-2 w-100 form-select">
          <option value="Used">Used</option>
          <option value="New">New</option>
        </select>
      </div>
      <div className="sixth-section mt-3 rounded-2">
        <img
          src="assets/img/Post Free Classified Ads to Sell Anything Anywhere in Pakistan.jpg"
          alt="IMG"
          className="img-fluid"
        />
      </div>
      <div className="seventh-section mt-3 rounded-2">
        <img
          src="assets/img/Promote Your Business with Sellit Pakistan.jpg"
          alt="IMG"
          className="w-100"
        />
      </div>
    </section>
  );
}
