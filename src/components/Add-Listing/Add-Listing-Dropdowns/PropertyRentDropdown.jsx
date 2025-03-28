import React from "react";

export default function PropertyRentDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="select-subcategory" defaultValue disabled>
          Select Sub-Category
        </option>
        <option value="1">Houses</option>
        <option value="2">Apartements & Flats</option>
        <option value="3">Portions & Floors</option>
        <option value="4">Shops - Offices - Commercial Space</option>
        <option value="5">Rooms</option>
        <option value="6">Roomates & Paying Guests</option>
        <option value="7">Vacation Rentals - Guest Houses</option>
        <option value="8">Land & Plots</option>
      </select>
    </div>
  );
}
