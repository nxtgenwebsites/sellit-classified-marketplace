import React, { useRef } from "react";

export default function Mobiles() {
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
        <option value="" disabled selected>
          Select Sub-Category
        </option>
        <option value="tablets">Tablets</option>
        <option value="accessories">Accessories</option>
        <option value="phones">Mobile Phones</option>
        <option value="watches">Smart Watches</option>
      </select>
      <div
        ref={forms.mobiles}
        className="form-first-group w-100 p-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex align-items-center justify-content-between w-100">
          <div className="label">
            <label htmlFor="brand" className="w-75">
              Brand
            </label>
          </div>
          <div className="select w-100">
            <select
              name="brand"
              id="brand"
              className="py-2 px-3 form-select w-100"
            >
              <option value="" selected disabled>
                Select Brands
              </option>
              <option value="" disabled className="disabled">
                Popular Brands
              </option>
              <option value="1">Apple</option>
              <option value="2">Samsung</option>
              <option value="3">Other Tablets</option>
              <option value="4">Lenovo</option>
              <option value="5">Amazon</option>
              <option value="" disabled className="disabled">
                Others
              </option>
              <option value="6">Apple</option>
              <option value="7">Dany Tabs</option>
              <option value="8">Huawei</option>
              <option value="9">Lenovo</option>
              <option value="10">Amazon</option>
              <option value="11">Asus</option>
              <option value="12">Dell</option>
              <option value="13">Alcatel</option>
              <option value="14">Huion</option>
              <option value="15">Wacom</option>
              <option value="16">Acer</option>
              <option value="17">Honor</option>
              <option value="18">RCA</option>
              <option value="19">Mione</option>
              <option value="20">Q Tabs</option>
              <option value="21">Samsung</option>
              <option value="22">Other Tablets</option>
            </select>
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="brand" className="w-75">
              Condition
            </label>
          </div>
          <div className="select w-100">
            <select
              name="brand"
              id="brand"
              className="py-2 px-3 form-select w-100"
            >
              <option value="" selected disabled>
                Select Condition
              </option>
              <option value="1">New</option>
              <option value="2">Open Box</option>
              <option value="3">Used</option>
              <option value="4">Refurbished</option>
              <option value="5">For Parts</option>
              <option value="6">Not Working</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
