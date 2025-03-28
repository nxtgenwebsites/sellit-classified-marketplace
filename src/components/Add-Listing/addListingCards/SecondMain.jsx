import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

export default function SecondMain() {
  // <!-- Display Phone Card start -->
  const firstInp = useRef();
  const numberInp = useRef();
  const cardMain = useRef();

  function dBlockNumber(e) {
    e.preventDefault();
    cardMain.current.classList.add("d-block");
    cardMain.current.classList.remove("d-none");
  }
  function dNoneNumber(e) {
    e.preventDefault();
    cardMain.current.classList.add("d-none");
    cardMain.current.classList.remove("d-block");
  }
  function valueInput(e) {
    if (numberInp.current.value === "") {
      e.preventDefault();
      toast.warn("Fill the field please 😊");
    } else {
      e.preventDefault();
      cardMain.current.classList.add("d-none");
      cardMain.current.classList.remove("d-block");
    }
  }
  // <!-- Display Phone Card end -->
  // <!-- Value Adding Function start -->
  const [IsChanged, setIsChanged] = useState({ phone: "" });

  const handleInp = (e) => {
    setIsChanged((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // <!-- Value Adding Function end -->

  return (
    <>
      <ToastContainer position="top-right" />
      <div>
        <div className="heading-form">
          <h3 className="fw-bold mb-5">Extra Details</h3>
        </div>
        <div className="d-lg-flex gap-2">
          <div className="third-form_group w-100 my-3">
            <div className="label mb-1">
              <label htmlFor="Location">Location</label>
            </div>
            <div className="select location-input w-100">
              <select
                name="Location"
                id="Location"
                className="form-select px-3 py-2"
                required
              >
                <option value="" disabled selected>
                  Select Location
                </option>
                <option value="" disabled className="disabled-heading">
                  Choose Region
                </option>
                <option value="1">Azad Kashmir, Pakistan</option>
                <option value="2">Balochistan, Pakistan</option>
                <option value="3">Islamabad, Pakistan</option>
                <option value="4">Kyber Pakhtunkhwa, Pakistan</option>
                <option value="5">Punjab, Pakistan</option>
                <option value="6">Sindh, Pakistan</option>
              </select>
            </div>
          </div>
          <div className="fourth-form_group w-100 my-3">
            <div className="label mb-1">
              <label htmlFor="Price">Price</label>
            </div>
            <div className="input price-input w-100 d-flex rounded-2">
              <span className="price-currency">PKR</span>
              <hr className="input-divider" />
              <input
                type="number"
                min={0}
                id="Price"
                placeholder="Enter Price"
                className="px-3"
                required
                step={+100}
              />
            </div>
          </div>
        </div>
        <div className="d-lg-flex gap-2">
          <div className="fifth-form_group w-100 my-3">
            <div className="label">
              <label htmlFor="name">Name</label>
            </div>
            <div className="w-100 form-floating">
              <input
                type="text"
                className="px-3 py-2 rounded-2 w-100 input-number mt-1"
                placeholder="Enter Name"
                required
              />
            </div>
          </div>
          <div className="fourth-form_group w-100 my-3">
            <div className="label mb-1">
              <label htmlFor="Mobile Number">Mobile Number</label>
            </div>
            <div className="input number-input w-100">
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="px-3 py-2 rounded-2 w-100 input-number"
                required
                readOnly
                value={IsChanged.phone}
                ref={firstInp}
                onClick={dBlockNumber}
                name="Original Contact Number"
              />
            </div>
          </div>
        </div>
        {/* <!-- D-None-Card start --> */}
        <div className="card-message d-none" ref={cardMain}>
          <div className="number-card p-2 rounded-1">
            <div className="cross-icon text-end">
              <RxCross2 onClick={dNoneNumber} className="cross-icon-main" />
            </div>
            <div className="logo text-md-center">
              <img
                src="/assets/icons/Footer-logo.png"
                alt=""
                className="mx-md-auto"
              />
            </div>
            <div className="content_ text-md-center mt-3">
              <h5 className="fw-bold text-black">
                Enter your phone to verify your account
              </h5>
              <small>We will send a confirmation code to your number</small>
              <br />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-md-75 py-2 px-3 input-text rounded-2 my-2"
                ref={numberInp}
                value={IsChanged.phone}
                name="phone"
                onChange={handleInp}
              />
              <br />
              <p className="mx-md-auto description-para">
                The phone number you provide here is only used to verify your
                account. It will not be made public.
              </p>
              <button type="submit" className="submit-btn" onClick={valueInput}>
                Next
              </button>
            </div>
          </div>
        </div>
        {/* <!-- D-None-Card end --> */}
      </div>
    </>
  );
}
