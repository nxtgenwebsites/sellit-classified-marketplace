import React, { useRef, useState } from "react";

export default function Animals() {
  const handleChange14 = (name) =>
    setChecked14({
      checkTwentyNine: name === "checkTwentyNine",
      checkThirty: name === "checkThirty",
      checkThirtyOne: name === "checkThirtyOne",
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
  const [checked14, setChecked14] = useState({
    checkTwentyNine: false,
    checkThirty: false,
    checkThirtyOne: false,
  });
  return (
    <div>
      <div
        ref={forms.animals}
        className="form-seventh-group w-100 p-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex justify-content-between w-100">
          <div className="label">
            <label htmlFor="Breed">Breed</label>
          </div>
          <div className="input w-100">
            <input
              type="text"
              name="Breed"
              id="Breed"
              placeholder="Enter Breed"
              className="input-text w-100 py-2 px-3 rounded-2"
            />
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Sex">Sex</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkTwentyNine"
              className="checkTwentyNine"
              checked={checked14.checkTwentyNine}
              onChange={() => handleChange14("checkTwentyNine")}
            />
            <input
              type="checkbox"
              name="checkThirty"
              className="checkThirty"
              checked={checked14.checkThirty}
              onChange={() => handleChange14("checkThirty")}
            />
            <input
              type="checkbox"
              name="checkThirtyOne"
              className="checkThirtyOne"
              checked={checked14.checkThirtyOne}
              onChange={() => handleChange14("checkThirtyOne")}
            />
          </div>
        </div>
        <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Age">Age</label>
          </div>
          <div className="input w-100">
            <input
              type="number"
              name="Age"
              id="Age"
              placeholder="Enter Age"
              className="input-number py-2 px-3 w-100 rounded-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
