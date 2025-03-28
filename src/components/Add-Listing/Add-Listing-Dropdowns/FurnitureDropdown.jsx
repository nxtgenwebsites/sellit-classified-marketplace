import React from "react";

export default function FurnitureDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="select-subcategory" defaultValue disabled>
          Select Sub-Category
        </option>
        <option value="1">Sofa & Chairs</option>
        <option value="2">Beds & Wardrobes</option>
        <option value="3">Tables & Dining</option>
        <option value="4">Bathroom Accessories</option>
        <option value="5">Garden & Outdoor</option>
        <option value="6">Painting & Mirrors</option>
        <option value="7">Rugs & Carpets</option>
        <option value="8">Curtains & Blinds</option>
        <option value="9">Office Furniture</option>
        <option value="10">Home Decoration</option>
        <option value="11">Other Household Items</option>
      </select>
    </div>
  );
}
