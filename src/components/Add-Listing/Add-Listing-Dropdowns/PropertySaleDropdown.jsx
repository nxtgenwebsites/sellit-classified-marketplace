import React from "react";

export default function PropertySaleDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="" disabled selected>
          Select Sub-Category
        </option>
        <option value="lands">Lands & Plots</option>
        <option value="houses">Houses</option>
        <option value="apartments">Apartments</option>
      </select>
    </div>
  );
}
