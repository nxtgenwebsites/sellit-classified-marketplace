import React, { useRef } from "react";

export default function BooksDropdown() {
  const booksMainCategory = useRef();
  const Books = useRef();
  const Music = useRef();
  const Sports = useRef();
  const Gym = useRef();
  function booksCategoriesHandler() {
    if (booksMainCategory.current.value === "Books") {
      Books.current.classList.remove("d-none");
      Books.current.classList.add("d-lg-flex");
      Music.current.classList.add("d-none");
      Music.current.classList.remove("d-lg-flex");
      Sports.current.classList.add("d-none");
      Sports.current.classList.remove("d-lg-flex");
      Gym.current.classList.add("d-none");
      Gym.current.classList.remove("d-lg-flex");
    } else if (booksMainCategory.current.value === "Music") {
      Books.current.classList.add("d-none");
      Books.current.classList.remove("d-lg-flex");
      Sports.current.classList.remove("d-lg-flex");
      Sports.current.classList.add("d-none");
      Music.current.classList.remove("d-none");
      Music.current.classList.add("d-lg-flex");
      Gym.current.classList.remove("d-lg-flex");
      Gym.current.classList.add("d-none");
    } else if (booksMainCategory.current.value === "Sports") {
      Books.current.classList.add("d-none");
      Books.current.classList.remove("d-lg-flex");
      Music.current.classList.add("d-none");
      Music.current.classList.remove("d-lg-flex");
      Sports.current.classList.remove("d-none");
      Sports.current.classList.add("d-lg-flex");
      Gym.current.classList.add("d-none");
      Gym.current.classList.remove("d-lg-flex");
    } else if (booksMainCategory.current.value === "Gym") {
      Books.current.classList.add("d-none");
      Books.current.classList.remove("d-lg-flex");
      Music.current.classList.add("d-none");
      Music.current.classList.remove("d-lg-flex");
      Sports.current.classList.add("d-none");
      Sports.current.classList.remove("d-lg-flex");
      Gym.current.classList.remove("d-none");
      Gym.current.classList.add("d-lg-flex");
    } else if (booksMainCategory.current.value === "Other Hobbies") {
      Books.current.classList.add("d-none");
      Books.current.classList.remove("d-lg-flex");
      Music.current.classList.add("d-none");
      Music.current.classList.remove("d-lg-flex");
      Sports.current.classList.add("d-none");
      Sports.current.classList.remove("d-lg-flex");
      Gym.current.classList.add("d-none");
      Gym.current.classList.remove("d-lg-flex");
    } else {
      Books.current.classList.add("d-none");
      Books.current.classList.remove("d-lg-flex");
      Music.current.classList.add("d-none");
      Music.current.classList.remove("d-lg-flex");
      Sports.current.classList.add("d-none");
      Sports.current.classList.remove("d-lg-flex");
      Gym.current.classList.add("d-none");
      Gym.current.classList.remove("d-lg-flex");
    }
  }
  return (
    <div>
      <select
        className="form-select px-3 py-2 w-100"
        ref={booksMainCategory}
        onChange={booksCategoriesHandler}
      >
        <option value="select-subcategory" selected disabled>
          Select Sub-Category
        </option>
        <option value="Books">Books & Magazines</option>
        <option value="Music">Musical Instruments</option>
        <option value="Sports">Sports Equipment</option>
        <option value="Gym">Gym & Fitness</option>
        <option value="Other Hobbies">Other Hobbies</option>
      </select>
    </div>
  );
}
