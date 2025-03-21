import React from "react";

export default function MotorsDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="" disabled selected>
          Select Sub-Category
        </option>
        <option value="cars">Cars</option>
        <option value="installments">Cars on Installments</option>
        <option value="accessories">Car Accessories</option>
        <option value="spare-parts">Spare Parts</option>
      </select>
    </div>
  );
}
