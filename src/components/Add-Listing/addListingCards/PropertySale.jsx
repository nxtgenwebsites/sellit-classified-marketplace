import React, { useRef } from "react";

export default function PropertySale() {
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
        ref={forms["property-sale"]}
        className="form-third-group w-100 p-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex justify-content-between w-100">
          <div className="label">
            <label htmlFor="Type" className="w-75">
              Type
            </label>
          </div>
          <div className="select w-100">
            <select
              name="Type"
              id="Type"
              className="py-2 px-3 form-select w-100"
            >
              <option value="" selected disabled>
                Select Type
              </option>
              <option value="1">Agricultural Land</option>
              <option value="2">Commercial Plots</option>
              <option value="3">Files</option>
              <option value="4">Industrial Land</option>
              <option value="5">Residential Plots</option>
              <option value="6">Plot Form</option>
            </select>
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Features" className="w-75">
              Features
            </label>
          </div>
          <div className="input">
            <div className="input-1 d-flex align-items-center gap-2">
              <div className="input-1-checkbox-1">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox-2">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox-3">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox-4">
                <input type="checkbox" />
              </div>
            </div>
            <div className="input-2 d-flex align-items-center gap-2 mt-2">
              <div className="input-1-checkbox-5">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox-6">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox-7">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox-8">
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
        <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Area Unit" className="w-75">
              Area Unit
            </label>
          </div>
          <div className="select w-100">
            <select
              name="Area Unit"
              id="Area Unit"
              className="px-3 py-2 form-select w-100"
            >
              <option value="" selected disabled>
                Select Area Unit
              </option>
              <option value="1">Kanal</option>
              <option value="2">Marla</option>
              <option value="3">Square Feet</option>
              <option value="4">Square Meter</option>
              <option value="5">Square Yards</option>
            </select>
          </div>
        </div>
        <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Area">Area</label>
          </div>
          <div className="input w-100">
            <input
              type="number"
              name="Area"
              id="Area"
              className="px-3 py-2 rounded-2 w-100 input-number"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
