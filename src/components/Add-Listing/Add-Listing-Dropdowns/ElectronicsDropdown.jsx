import React from "react";

export default function ElectronicsDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2 w-100">
        <option value="select-subcategory" defaultValue disabled>
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
