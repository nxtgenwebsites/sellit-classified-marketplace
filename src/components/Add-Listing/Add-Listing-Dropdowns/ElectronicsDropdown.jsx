import React, { useRef } from "react";

export default function ElectronicsDropdown() {
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
        <option value="1">Computer & Accessories</option>
        <option value="2">Games & Entertainment</option>
        <option value="3">Cameras & Accessories</option>
        <option value="4">Television & Accessories</option>
        <option value="5">Video-Audios</option>
        <option value="6">AC & Coolers</option>
        <option value="7">Fans</option>
        <option value="8">Heaters & Geysers</option>
        <option value="9">Air Purifiers & Humidifiers</option>
        <option value="10">Washing Machines & Dryers</option>
        <option value="11">Irons & Steamers</option>
        <option value="12">Generators, UPS & Power Solutions</option>
        <option value="13">Other Applications</option>
        <option value="14">Refrigerators & Freezers</option>
        <option value="15">Water Dispensers</option>
        <option value="16">Microwaves & Ovens</option>
        <option value="17">Kitchen Applications</option>
      </select>
    </div>
  );
}
