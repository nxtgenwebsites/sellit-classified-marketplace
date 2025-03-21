import React from "react";

export default function FashionDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="select-subcategory" selected disabled>
          Select Sub-Category
        </option>
        <option value="1">Fashion Accessories</option>
        <option value="2">Clothes</option>
        <option value="3">Footwear</option>
        <option value="4">Bags</option>
        <option value="5">Jewellery</option>
        <option value="6">Makeup</option>
        <option value="7">Skin & Hair</option>
        <option value="8">Watches</option>
        <option value="9">Fragrance</option>
        <option value="10">Wedding</option>
        <option value="11">Other Fashion</option>
      </select>
    </div>
  );
}
