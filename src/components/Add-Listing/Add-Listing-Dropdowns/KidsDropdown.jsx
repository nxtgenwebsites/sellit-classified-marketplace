import React, { useRef } from "react";

export default function KidsDropdown() {
  const categories = {
    mobiles: useRef(),
    motors: useRef(),
    "property-sale": useRef(),
    "property-rent": useRef(),
    "find-business": useRef(),
    "find-service": useRef(),
    "find-job": useRef(),
    electronics: useRef(),
    bikes: useRef(),
    animals: useRef(),
    furniture: useRef(),
    fashion: useRef(),
    books: useRef(),
    kids: useRef(),
  };
  // Form section references
  const forms = {
    mobiles: useRef(),
    motors: useRef(),
    "property-sale": useRef(),
    "property-rent": useRef(),
    "find-business": useRef(),
    "find-service": useRef(),
    "find-job": useRef(),
    electronics: useRef(),
    bikes: useRef(),
    animals: useRef(),
    furniture: useRef(),
    fashion: useRef(),
    books: useRef(),
    kids: useRef(),
  };
  function handleCategory() {
    const selectedCategory = mainCategory.current?.value;
    // Hide all categories and forms
    Object.values(categories).forEach((categoryRef) => {
      if (categoryRef.current) {
        categoryRef.current.classList.remove("d-block");
        categoryRef.current.classList.add("d-none");
      }
    });

    Object.values(forms).forEach((headingRef) => {
      if (headingRef.current) {
        headingRef.current.classList.add("d-none");
      }
    });

    // Show selected category and form
    if (categories[selectedCategory]?.current) {
      categories[selectedCategory].current.classList.add("d-block");
      categories[selectedCategory].current.classList.remove("d-none");
    }

    if (forms[selectedCategory]?.current) {
      forms[selectedCategory].current.classList.remove("d-none");
    }
  }
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
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
  );
}
