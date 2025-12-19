"use client";

import { useEffect, useRef } from "react";
import "./css/add-listing.css"; // Import the custom CSS
import Mobiles from "./addListingCards/Mobiles";
import { use } from "react";
import Motors from "./addListingCards/Motors";
import PropertyRent from "./addListingCards/PropertyRent";
import PropertySale from "./addListingCards/PropertySale";
import Jobs from "./addListingCards/Job";
import Electronics from "./addListingCards/electronics";
import Bikes from "./addListingCards/Bikes";
import Fashion from "./addListingCards/Fashion";
import Books from "./addListingCards/Books_";
import Kids from "./addListingCards/Kids_";
import Furniture from "./addListingCards/Furniture";
import Animals from "./addListingCards/Animals";
  const uid = localStorage.getItem("uid");


export default function AddListstingContent() {
  const mainCategory = useRef();
  const forms = {
    mobiles: useRef(),
    motors: useRef(),
    property: useRef(),
    propertySell: useRef(),
    jobs: useRef(),
    electronics: useRef(),
    bikes: useRef(),
    fashion: useRef(),
    books: useRef(),
    furniture: useRef(),
    kids: useRef(),
    animals: useRef(),
  };

  function handleCategory() {
    const defaultValueCategory = mainCategory.current?.value;

    // Hide all forms initially
    Object.values(forms).forEach((formRef) => {
      if (formRef.current) {
        formRef.current.classList.add("d-none");
      }
    });

    // Show 'mobiles' form only if 'mobiles' is selected
    if (defaultValueCategory === "mobiles") {
      if (forms.mobiles?.current) {
        forms.mobiles.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "motors") {
      if (forms.motors?.current) {
        forms.motors.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "property-rent") {
      if (forms.property?.current) {
        forms.property.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "property-sale") {
      if (forms.propertySell?.current) {
        forms.propertySell.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "electronics") {
      if (forms.electronics?.current) {
        forms.electronics.current.classList.remove("d-none");
      }
    }
    
    if (defaultValueCategory === "bikes") {
      if (forms.bikes?.current) {
        forms.bikes.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "fashion") {
      if (forms.fashion?.current) {
        forms.fashion.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "books") {
      if (forms.books?.current) {
        forms.books.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "kids") {
      if (forms.kids?.current) {
        forms.kids.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "furniture") {
      if (forms.furniture?.current) {
        forms.furniture.current.classList.remove("d-none");
      }
    }

    if (defaultValueCategory === "animals") {
      if (forms.animals?.current) {
        forms.animals.current.classList.remove("d-none");
      }
    }
  }


  useEffect(() => {
    if (!uid) {
      // Redirect to login if uid is not present
      window.location.href = "/login";
      
    }
  }, [])
  

  return (
    <div className="py-3">
      <div className="container">
        {/* Form Heading */}
        <div className="listing-heading">
          <h1 className="fw-semibold">Post New Ads</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        {/* Main Form Structure */}
        <div>
          <div className="forms-group main-form">
            <div className="form-category">
              <div className="heading-form">
                <h3 className="fw-bold mb-5">General Details</h3>
              </div>
              <div className="main w-100">
                <select
                  ref={mainCategory}
                  onChange={handleCategory}
                  className="form-select px-3 py-2"
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  <option value="mobiles">Mobiles</option>
                  {/* Other options are kept but will not trigger any specific form display */}
                  <option value="motors">Motors</option>
                  <option value="property-sale">Property for Sale</option>
                  <option value="property-rent">Property for Rent</option>
                  <option value="electronics">
                    Electronics & Home Appliances
                  </option>
                  <option value="bikes">Bikes</option>
                  <option value="animals">Animals</option>
                  <option value="furniture">Furniture & Home Decor</option>
                  <option value="fashion">Fashion & Beauty</option>
                  <option value="books">Books, Sports & Hobbies</option>
                  <option value="kids">Kids</option>
                </select>
              </div>
              {/* <MainCategory />{" "} */}
              {/* This will always show general instructions */}
              <div ref={forms.mobiles} className="w-100 d-none">
                <Mobiles />
              </div>

              <div ref={forms.motors} className="w-100 d-none">
                <Motors />
              </div>

              <div ref={forms.property} className="w-100 d-none">
                <PropertyRent />
              </div>

              <div ref={forms.propertySell} className="w-100 d-none">
                <PropertySale />
              </div>

              <div ref={forms.jobs} className="w-100 d-none">
                <Jobs />
              </div>

              <div ref={forms.electronics} className="w-100 d-none">
                <Electronics />
              </div>

              <div ref={forms.bikes} className="w-100 d-none">
                <Bikes />
              </div>

              <div ref={forms.fashion} className="w-100 d-none">
                <Fashion />
              </div>

              <div ref={forms.books} className="w-100 d-none">
                <Books />
              </div>

              <div ref={forms.kids} className="w-100 d-none">
                <Kids />
              </div>

              <div ref={forms.furniture} className="w-100 d-none">
                <Furniture />
              </div>

              <div ref={forms.animals} className="w-100 d-none">
                <Animals />
              </div>
            </div>
          </div>

          {/* Only Mobiles form is rendered, initially hidden */}
        </div>
      </div>
      {/* Form end */}
    </div>
  );
}
