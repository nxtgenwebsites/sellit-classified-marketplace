import React, { useRef, useState } from "react";

export default function Job() {
  const [checked12, setChecked12] = useState({
    checkTwentyFour: false,
    checkTwentyFive: false,
    checkTwentySix: false,
  });
  const [checked13, setChecked13] = useState({
    checkTwentySeven: false,
    checkTwentyEight: false,
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
  const handleChange12 = (name) =>
    setChecked12({
      checkTwentyFour: name === "checkTwentyFour",
      checkTwentyFive: name === "checkTwentyFive",
      checkTwentySix: name === "checkTwentySix",
    });
  const handleChange13 = (name) =>
    setChecked13({
      checkTwentySeven: name === "checkTwentySeven",
      checkTwentyEight: name === "checkTwentyEight",
    });
  return (
    <div>
      <div
        ref={forms["find-job"]}
        className="form-sixth-group w-100 p-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex justify-content-between w-100">
          <div className="label w-100">
            <label htmlFor="Hiring Person/Company">Hiring Person/Company</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkTwentyFour"
              className="checkTwentyFour"
              checked={checked12.checkTwentyFour}
              onChange={() => handleChange12("checkTwentyFour")}
            />
            <input
              type="checkbox"
              name="checkTwentyFive"
              className="checkTwentyFive"
              checked={checked12.checkTwentyFive}
              onChange={() => handleChange12("checkTwentyFive")}
            />
            <input
              type="checkbox"
              name="checkTwentySix"
              className="checkTwentySix"
              checked={checked12.checkTwentySix}
              onChange={() => handleChange12("checkTwentySix")}
            />
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Company Name">Company Name</label>
          </div>
          <div className="input w-100">
            <input
              type="text"
              name="Company Name"
              id="Company Name"
              className="input-text py-2 px-3 rounded-2"
              placeholder="Enter Company Name"
            />
          </div>
        </div>
        <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Type Of Ad">Type Of Ad</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkTwentySeven"
              className="checkTwentySeven"
              checked={checked13.checkTwentySeven}
              onChange={() => handleChange13("checkTwentySeven")}
            />
            <input
              type="checkbox"
              name="checkTwentyEight"
              className="checkTwentyEight"
              checked={checked13.checkTwentyEight}
              onChange={() => handleChange13("checkTwentyEight")}
            />
          </div>
        </div>
        <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Salary from">Salary from</label>
          </div>
          <div className="input w-100">
            <input
              type="number"
              name="Salary from"
              id="Salary from"
              className="input-number py-2 px-3 rounded-2"
              placeholder="Enter Salary from"
            />
          </div>
        </div>
        <div className="fifth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Salary to">Salary to</label>
          </div>
          <div className="input w-100">
            <input
              type="number"
              name="Salary to"
              id="Salary to"
              className="input-number py-2 px-3 rounded-2"
              placeholder="Enter Salary to"
            />
          </div>
        </div>
        <div className="sixth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Career Level">Career Level</label>
          </div>
          <div className="select w-100">
            <select
              name="Career Level"
              id="Career Level"
              className="w-100 form-select py-2 px-3"
            >
              <option value="" disabled selected>
                Select Career Level
              </option>
              <option value="1">Entry Level</option>
              <option value="2">Associate</option>
              <option value="3">Mid-Senior Level</option>
              <option value="4">Director</option>
              <option value="5">Executive</option>
            </select>
          </div>
        </div>
        <div className="seventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Salary Period">Salary Period</label>
          </div>
          <div className="select w-100">
            <select
              name="Salary Period"
              id="Salary Period"
              className="w-100 form-select py-2 px-3"
            >
              <option value="" disabled selected>
                Select Salary Period
              </option>
              <option value="1">Monthly</option>
              <option value="2">Hourly</option>
              <option value="3">Weekly</option>
              <option value="4">Yearly</option>
            </select>
          </div>
        </div>
        <div className="eighth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Position Type">Position Type</label>
          </div>
          <div className="select w-100">
            <select
              name="Position Type"
              id="Position Type"
              className="w-100 form-select py-2 px-3"
            >
              <option value="" disabled selected>
                Select Position Type
              </option>
              <option value="1">Full-time</option>
              <option value="2">Part-time</option>
              <option value="3">Contract</option>
              <option value="4">Temporary</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
