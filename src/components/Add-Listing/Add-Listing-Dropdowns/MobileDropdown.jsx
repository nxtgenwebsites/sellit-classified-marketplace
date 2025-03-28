import React from "react";

export default function MobileDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="" disabled defaultValue>
          Select Sub-Category
        </option>
        <option value="tablets">Tablets</option>
        <option value="accessories">Accessories</option>
        <option value="phones">Mobile Phones</option>
        <option value="watches">Smart Watches</option>
      </select>
    </div>
  );
}
