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
      <select className="form-select px-3 py-2">
        <option value="select-subcategory" selected disabled>
          Select Sub-Category
        </option>
        <option value="1">Cats</option>
        <option value="2">Dogs</option>
        <option value="3">Horses</option>
        <option value="4">Rabbits</option>
        <option value="5">Other Animals</option>
        <option value="6">Hens</option>
        <option value="7">Parrots</option>
        <option value="8">Pigeons</option>
        <option value="9">Finches</option>
        <option value="10">Doves</option>
        <option value="11">Peacocks</option>
        <option value="12">Ducks</option>
        <option value="13">Other Birds</option>
        <option value="14">Fertile Eggs</option>
        <option value="15">Fish</option>
        <option value="16">Livestock</option>
        <option value="17">Pet Food & Accessories</option>
      </select>
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
