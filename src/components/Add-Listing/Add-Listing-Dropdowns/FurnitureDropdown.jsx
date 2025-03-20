import React, { useRef } from "react";

export default function FurnitureDropdown() {
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
