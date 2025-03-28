import React from "react";

export default function BuisnessDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2">
        <option value="select-subcategory" defaultValue disabled>
          Select Sub-Category
        </option>
        <option value="1">Buisness For Sale</option>
        <option value="2">Food & Restraunt</option>
        <option value="3">Construction & Heavy Machinery</option>
        <option value="4">Agriculture</option>
        <option value="5">Medical & Pharma</option>
        <option value="6">Trade & Industrial Machinery</option>
        <option value="7">Other Buisness & Industry</option>
      </select>
    </div>
  );
}
