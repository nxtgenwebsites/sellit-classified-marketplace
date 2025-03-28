import React from "react";

export default function ServiceDropdown() {
  return (
    <div>
      <select className="form-select px-3 py-2">
        <option value="select-subcategory" defaultValue disabled>
          Select Sub-Category
        </option>
        <option value="1">Agriculture & Interior Design</option>
        <option value="2">Camera Installments</option>
        <option value="3">Car Rental</option>
        <option value="4">Car Services</option>
        <option value="5">Catering & Restraunt</option>
        <option value="6">Contruction Services</option>
        <option value="7">Consultancy Services</option>
        <option value="8">Domestic Help</option>
        <option value="9">Drivers & Taxi</option>
        <option value="10">Tuitions & Academics</option>
        <option value="11">Electronics & Computer Repair</option>
        <option value="12">Event Services</option>
        <option value="13">Farm & Fresh Food</option>
        <option value="14">Health & Beauty</option>
        <option value="15">Home & Office Repair</option>
        <option value="16">Insurance Service</option>
        <option value="17">Movers & Packers</option>
        <option value="18">Renting Services</option>
        <option value="19">Tailor Services</option>
        <option value="20">Travel & Visa</option>
        <option value="21">Video & Photography</option>
        <option value="22">Web Development</option>
        <option value="23">Other Services</option>
      </select>
    </div>
  );
}
