import React from "react";

export default function BikesDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="select-subcategory" defaultValue disabled>
          Select Sub-Category
        </option>
        <option value="1">Motorcycles</option>
        <option value="2">Spare Parts</option>
        <option value="3">Bike Accessories</option>
        <option value="4">Bicycles</option>
        <option value="5">ATV & Quads</option>
        <option value="6">Scooters</option>
      </select>
    </div>
  );
}
