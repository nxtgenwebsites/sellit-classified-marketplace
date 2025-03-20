import React, { useRef, useState } from "react";

export default function Electronics() {
  const [checked7, setChecked7] = useState({
    checkThirteen: false,
    checkFourteen: false,
  });
  // Form section references
  const forms = {
    mobiles: useRef(),
    motors: useRef(),
    "property-sale": useRef(),
    "property-rent": useRef(),
    "find-business": useRef(),
    "find-service": useRef(),
    "find-job": useRef(),
    electronics: useRef(),
    bikes: useRef(),
    animals: useRef(),
    furniture: useRef(),
    fashion: useRef(),
    books: useRef(),
    kids: useRef(),
  };

  const handleChange7 = (name) =>
    setChecked7({
      checkThirteen: name === "checkThirteen",
      checkFourteen: name === "checkFourteen",
    });
  return (
    <div>
      <select className="form-select px-3 py-2">
        <option value="select-subcategory" selected disabled>
          Select Sub-Category
        </option>
        <option value="1">Computer & Accessories</option>
        <option value="2">Games & Entertainment</option>
        <option value="3">Cameras & Accessories</option>
        <option value="4">Television & Accessories</option>
        <option value="5">Video-Audios</option>
        <option value="6">AC & Coolers</option>
        <option value="7">Fans</option>
        <option value="8">Heaters & Geysers</option>
        <option value="9">Air Purifiers & Humidifiers</option>
        <option value="10">Washing Machines & Dryers</option>
        <option value="11">Irons & Steamers</option>
        <option value="12">Generators, UPS & Power Solutions</option>
        <option value="13">Other Applications</option>
        <option value="14">Refrigerators & Freezers</option>
        <option value="15">Water Dispensers</option>
        <option value="16">Microwaves & Ovens</option>
        <option value="17">Kitchen Applications</option>
      </select>
      <div
        ref={forms.electronics}
        className="form-fifth-group w-100 p-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Type">Type</label>
          </div>
          <div className="input w-100">
            <input
              type="text"
              name="Type"
              id="Type"
              placeholder="Enter Type"
              className="input-text py-2 px-3 rounded-2"
            />
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Brand">Brand</label>
          </div>
          <div className="input w-100">
            <input
              type="text"
              name="Brand"
              id="Brand"
              placeholder="Enter Brand"
              className="input-text py-2 px-3 rounded-2"
            />
          </div>
        </div>
        <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Condition">Condition</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkThirteen"
              className="checkThirteen"
              checked={checked7.checkThirteen}
              onChange={() => handleChange7("checkThirteen")}
            />
            <input
              type="checkbox"
              name="checkFourteen"
              className="checkFourteen"
              checked={checked7.checkFourteen}
              onChange={() => handleChange7("checkFourteen")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
