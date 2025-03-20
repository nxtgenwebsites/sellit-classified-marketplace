import React, { useRef, useState } from "react";
import { CiCamera } from "react-icons/ci";

export default function MainCategory() {
  // Image handling
  const [image, setImage] = useState();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const imageHandler = () => document.getElementById("IMG").click();
  const cameraIcon = () =>
    document.getElementById("cameraIcon").classList.add("z-n1");
  return (
    <div>
      <div className="form-first-group w-100 p-3 my-3 rounded-2">
        <div
          className="img-div"
          style={{
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100px",
            height: "100px",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={imageHandler}
          onChange={cameraIcon}
        >
          <CiCamera className="camera-icon" id="cameraIcon" />
          <input
            type="file"
            accept="image/*"
            id="IMG"
            className="d-none"
            onChange={handleImageChange}
          />
        </div>
        <div className="first-form_group d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Ad Title">Ad Title</label>
          </div>
          <div className="input title-input w-100">
            <input
              type="text"
              name="Ad Title"
              id="Ad Title"
              className="w-100 px-3 py-2 rounded-2 year-input"
              required
            />
            <small>
              Mention the key features of your item (e.g. brand, model, age,
              type)
            </small>
          </div>
        </div>
        <div className="second-form_group d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Description">Description</label>
          </div>
          <div className="input description-input w-100">
            <textarea
              name="Description"
              id="Description"
              className="w-100 px-3 py-2 rounded-2 year-input"
              required
            ></textarea>
            <small>Include condition, features and reason for selling</small>
          </div>
        </div>
        <div className="third-form_group d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Location">Location</label>
          </div>
          <div className="select location-input w-100">
            <select
              name="Location"
              id="Location"
              className="form-select"
              required
            >
              <option value="" disabled selected>
                Select Location
              </option>
              <option value="" disabled className="disabled-heading">
                Choose Region
              </option>
              <option value="1">Azad Kashmir, Pakistan</option>
              <option value="2">Balochistan, Pakistan</option>
              <option value="3">Islamabad, Pakistan</option>
              <option value="4">Kyber Pakhtunkhwa, Pakistan</option>
              <option value="5">Punjab, Pakistan</option>
              <option value="6">Sindh, Pakistan</option>
            </select>
          </div>
        </div>
        <div className="fourth-form_group d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Price">Price</label>
          </div>
          <div className="input price-input w-100">
            <input
              type="number"
              placeholder="Enter Price"
              className="px-3 py-2 rounded-2 input-number w-100"
              required
            />
          </div>
        </div>
        <div className="fifth-form_group d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Name">Name</label>
          </div>
          <div className="input name-input w-100">
            <input
              type="text"
              placeholder="Enter Name"
              className="px-3 py-2 rounded-2 w-100 input-text"
              required
            />
          </div>
        </div>
        <div className="fourth-form_group d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Mobile Number">Mobile Number</label>
          </div>
          <div className="input number-input w-100">
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="px-3 py-2 rounded-2 w-100 input-number"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
