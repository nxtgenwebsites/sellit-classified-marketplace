import React from "react";

export default function JobDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="select-subcategory" selected disabled>
          Select Sub-Category
        </option>
        <option value="1">Accounting & Finance</option>
        <option value="2">Advertising & PR</option>
        <option value="3">Architecture & Interior Design</option>
        <option value="4">Clerical & Administration</option>
        <option value="5">Content Writing</option>
        <option value="6">Customer Service</option>
        <option value="7">Delivery Riders</option>
        <option value="8">Domestic Staff</option>
        <option value="9">Education</option>
        <option value="10">Engineering</option>
        <option value="11">Graphic Design</option>
        <option value="12">Hotels & Tourism</option>
        <option value="13">Human Resources</option>
        <option value="14">Internships</option>
        <option value="15">IT & Networking</option>
        <option value="16">Manufacturing</option>
        <option value="17">Marketing</option>
        <option value="18">Medical</option>
        <option value="19">Online</option>
        <option value="20">Other Jobs</option>
        <option value="21">Part Time</option>
        <option value="22">Real Estate</option>
        <option value="23">Restraunt & Hospitality</option>
        <option value="24">Sales</option>
        <option value="25">Security</option>
      </select>
    </div>
  );
}
