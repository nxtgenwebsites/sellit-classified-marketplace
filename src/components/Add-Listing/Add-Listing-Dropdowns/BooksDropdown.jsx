import React from 'react'

export default function BooksDropdown() {
  return (
    <div>
      <select
        className="form-select px-3 py-2"
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
  )
}
