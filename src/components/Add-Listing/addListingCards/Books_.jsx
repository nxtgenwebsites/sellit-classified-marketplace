import React, { useRef, useState } from "react";

export default function Books_() {
  const handleChange15 = (name) =>
    setChecked15({
      checkThirtyTwo: name === "checkThirtyTwo",
      checkThirtyThree: name === "checkThirtyThree",
    });
  const [checked15, setChecked15] = useState({
    checkThirtyTwo: false,
    checkThirtyThree: false,
  });

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
      <div
        ref={forms.books}
        className="form-tenth-group w-100 py-3 my-3 rounded-2"
      >
        <div className="second-form-dropdown d-lg-flex w-100 justify-content-between my-3">
          <div className="label">
            <label htmlFor="Condition">Condition</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkThirtyTwo"
              className="checkThirtyTwo"
              checked={checked15.checkThirtyTwo}
              onChange={() => handleChange15("checkThirtyTwo")}
            />
            <input
              type="checkbox"
              name="checkThirtyThree"
              className="checkThirtyThree"
              checked={checked15.checkThirtyThree}
              onChange={() => handleChange15("checkThirtyThree")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
