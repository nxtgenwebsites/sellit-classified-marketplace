import React, { useRef, useState } from "react";

export default function Fashion() {
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
      <div
        ref={forms.fashion}
        className="form-nineth-group w-100 p-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex w-100 justify-content-between">
          <div className="label">
            <label htmlFor="Sex">Sex</label>
          </div>
          <div className="select w-100">
            <select name="Sex" id="Sex" className="form-select py-2 px-3">
              <option value="" disabled selected>
                Select Sex
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Unisex</option>
              <option value="4">Boy</option>
              <option value="5">Girl</option>
            </select>
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
