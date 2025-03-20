import React, { useRef, useState } from "react";

export default function Furniture() {
  const handleChange15 = (name) =>
    setChecked15({
      checkThirtyTwo: name === "checkThirtyTwo",
      checkThirtyThree: name === "checkThirtyThree",
    });
  const [checked15, setChecked15] = useState({
    checkThirtyTwo: false,
    checkThirtyThree: false,
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
  return (
    <div>
      <select className="form-select px-3 py-2">
        <option value="select-subcategory" selected disabled>
          Select Sub-Category
        </option>
        <option value="1">Sofa & Chairs</option>
        <option value="2">Beds & Wardrobes</option>
        <option value="3">Tables & Dining</option>
        <option value="4">Bathroom Accessories</option>
        <option value="5">Garden & Outdoor</option>
        <option value="6">Painting & Mirrors</option>
        <option value="7">Rugs & Carpets</option>
        <option value="8">Curtains & Blinds</option>
        <option value="9">Office Furniture</option>
        <option value="10">Home Decoration</option>
        <option value="11">Other Household Items</option>
      </select>
      <div
        ref={forms.furniture}
        className="form-eighth-group w-100 p-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex w-100 justify-content-between">
          <div className="label">
            <label htmlFor="Type">Type</label>
          </div>
          <div className="input w-100">
            <input
              type="text"
              name="Type"
              id="Type"
              placeholder="Enter Type"
              className="input-text py-2 px-3 rounded-2 w-100"
            />
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex w-100 justify-content-between my-3">
          <div className="label">
            <label htmlFor="Condition">Condition</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkThirtyTwo"
              className="checkThirtyTwo"
              checked={checked15.checkThirtyTwo}
              onChange={() => handleChange15("checkThirtyTwo")}
            />
            <input
              type="checkbox"
              name="checkThirtyThree"
              className="checkThirtyThree"
              checked={checked15.checkThirtyThree}
              onChange={() => handleChange15("checkThirtyThree")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
