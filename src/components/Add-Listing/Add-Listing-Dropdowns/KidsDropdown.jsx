import React from 'react'

export default function KidsDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2">
        <option value="select-subcategory" selected disabled>
          Select Sub-Category
        </option>
        <option value="1">Kids Furniture</option>
        <option value="2">Kids Vehicles</option>
        <option value="3">Toys</option>
        <option value="4">Baby Gear</option>
        <option value="5">Bath & Diapers</option>
        <option value="6">Swings & Sildes</option>
        <option value="7">Kids Clothing</option>
        <option value="8">Kids Accessories</option>
      </select>
    </div>
  )
}
