import React, { useRef, useState } from "react";

export default function PropertyRent() {
  const [checked5, setChecked5] = useState({
    checkNine: false,
    checkTen: false,
  });
  const [checked6, setChecked6] = useState({
    checkEleven: false,
    checkTwelve: false,
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
  const handleChange5 = (name) =>
    setChecked5({
      checkNine: name === "checkNine",
      checkTen: name === "checkTen",
    });
  const handleChange6 = (name) =>
    setChecked6({
      checkEleven: name === "checkEleven",
      checkTwelve: name === "checkTwelve",
    });
  return (
    <div>
      <div
        ref={forms["property-rent"]}
        className="form-fourth-group w-100 py-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Furnished" className="w-75">
              Furnished
            </label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkNine"
              className="checkNine"
              checked={checked5.checkNine}
              onChange={() => handleChange5("checkNine")}
            />
            <input
              type="checkbox"
              name="checkTen"
              className="checkTen"
              checked={checked5.checkTen}
              onChange={() => handleChange5("checkTen")}
            />
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Bedrooms">Bedrooms</label>
          </div>
          <div className="select w-100">
            <select
              name="Bedrooms"
              id="Bedrooms"
              className="px-3 py-2 form-select w-100"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6+</option>
              <option value="7">Studio</option>
            </select>
          </div>
        </div>
        <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Bathrooms">Bathrooms</label>
          </div>
          <div className="select w-100">
            <select
              name="Bathrooms"
              id="Bathrooms"
              className="px-3 py-2 form-select w-100"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7+</option>
            </select>
          </div>
        </div>
        <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="No of storeys">No of storeys</label>
          </div>
          <div className="select w-100">
            <select
              name="No of storeys"
              id="No of storeys"
              className="px-3 py-2 form-select w-100"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
        <div className="fifth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Construction State" className="w-75">
              Construction State
            </label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkEleven"
              className="checkEleven"
              checked={checked6.checkEleven}
              onChange={() => handleChange6("checkEleven")}
            />
            <input
              type="checkbox"
              name="checkTwelve"
              className="checkTwelve"
              checked={checked6.checkTwelve}
              onChange={() => handleChange6("checkTwelve")}
            />
          </div>
        </div>
        <div className="sixth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Features" className="w-75">
              Features
            </label>
          </div>
          <div className="input">
            <div className="input-1 d-flex align-items-center gap-2">
              <div className="input-1-checkbox_1">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_2">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_3">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_4">
                <input type="checkbox" />
              </div>
            </div>
            <div className="input-2 d-flex align-items-center gap-2 mt-2">
              <div className="input-1-checkbox_5">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_6">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_7">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_8">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_9">
                <input type="checkbox" />
              </div>
            </div>
            <div className="input-3 d-flex align-items-center gap-2 mt-2">
              <div className="input-1-checkbox_10">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_11">
                <input type="checkbox" />
              </div>
              <div className="input-1-checkbox_12">
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
        <div className="seventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
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
              <option value="" defaultValue disabled>
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
        <div className="eighth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
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
