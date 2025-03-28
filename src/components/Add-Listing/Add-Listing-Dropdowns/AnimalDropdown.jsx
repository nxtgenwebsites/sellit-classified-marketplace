import React from "react";

export default function AnimalDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="select-subcategory" defaultValue disabled>
          Select Sub-Category
        </option>
        <option value="1">Cats</option>
        <option value="2">Dogs</option>
        <option value="3">Horses</option>
        <option value="4">Rabbits</option>
        <option value="5">Other Animals</option>
        <option value="6">Hens</option>
        <option value="7">Parrots</option>
        <option value="8">Pigeons</option>
        <option value="9">Finches</option>
        <option value="10">Doves</option>
        <option value="11">Peacocks</option>
        <option value="12">Ducks</option>
        <option value="13">Other Birds</option>
        <option value="14">Fertile Eggs</option>
        <option value="15">Fish</option>
        <option value="16">Livestock</option>
        <option value="17">Pet Food & Accessories</option>
      </select>
    </div>
  );
}
